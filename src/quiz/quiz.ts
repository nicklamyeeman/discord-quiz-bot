import { DataSnapshot } from "acebase";
import { User as DiscordUser, EmbedBuilder, Guild, Message } from "discord.js";
import { guildConfig } from "../config";
import {
  listenQuiz,
  setQuizIsLive,
  setQuizRushTime,
} from "../database/data/quiz";
import {
  addUserBalanceStatistics,
  addUserQuizStatistics,
} from "../database/data/statistics";
import { addUserBalance } from "../database/data/user";
import { GlobalEmotes, MINUTE } from "../types/constants";
import { Quiz } from "../types/quiz";
import { runOnInterval } from "../utils";
import { getQuizNextQuestion } from "./questions/questions";
import {
  ANSWER_TIME_LIMIT,
  endRushMessageContent,
  reloadQuiz,
  RUSH_TIME_DURATION,
  startRushMessageContent,
} from "./utils";

export const startQuiz = async (guild: Guild) => {
  const quizChannel = guildConfig.QUIZ_CHANNEL_ID
    ? guild.channels.cache.get(guildConfig.QUIZ_CHANNEL_ID)
    : null;
  if (!quizChannel || !quizChannel.isSendable()) {
    return;
  }

  await setQuizIsLive(true);

  let interval: NodeJS.Timeout | null = null;
  listenQuiz(async (snapshot: DataSnapshot<Quiz>) => {
    const quiz = snapshot.val();
    const rushTime = quiz?.rushTime ?? null;
    const isLive = quiz?.isLive ?? false;

    if (interval) {
      clearInterval(interval);
    }
    if (!isLive) {
      return;
    }
    if (rushTime) {
      quizChannel.send(startRushMessageContent(rushTime));
      setTimeout(async () => {
        quizChannel.send(endRushMessageContent());
        await setQuizRushTime(null);
      }, RUSH_TIME_DURATION);
    }

    const isNight = new Date().getHours() >= 22 || new Date().getHours() < 6;
    // const questionInterval = isNight
    //   ? NEXT_QUESTION_NIGHT_INTERVAL
    //   : !!rushTime
    //   ? NEXT_QUESTION_RUSH_INTERVAL
    //   : NEXT_QUESTION_INTERVAL;
    const questionInterval = MINUTE * 1;

    interval = await runOnInterval(async () => {
      const question = await getQuizNextQuestion(rushTime);

      const questionMessage = await quizChannel.send({
        embeds: rushTime
          ? [
              question.embed.setFooter({
                text: "Rush Time = 2× plus de récompenses",
              }),
            ]
          : [question.embed],
        files: question.file ? [question.file] : [],
      });

      if (!questionMessage) {
        await reloadQuiz();
        return quizChannel.send(
          "Une erreur s'est produite, le quiz a été relancé"
        );
      }

      const filter = (message: Message) =>
        question.answer.test(
          message.content
            .replaceAll(/(â|à|ä)/gi, "a")
            .replaceAll(/(é|ê|è|ë)/gi, "e")
            .replaceAll(/(î|ï)/gi, "i")
            .replaceAll(/(ô|ö)/gi, "o")
            .replaceAll(/(ç)/gi, "c")
        );

      let finished = 0;

      const winners = new Set();
      const winnersData: Array<{ user: DiscordUser; reward: number }> = [];

      const correctCollector = quizChannel.createMessageCollector({
        filter,
        time: questionInterval,
      });

      correctCollector.on("collect", async (message) => {
        const user = message.author;
        let reward = rushTime ? question.reward * 2 : question.reward;

        if (!finished) {
          finished = message.createdTimestamp;
        } else {
          if (winners.has(user.id)) {
            return;
          }
          reward = Math.ceil(reward * 0.66);
        }
        winners.add(user.id);
        message.react(GlobalEmotes.money);

        await Promise.all([
          addUserBalance(user.id, reward),
          addUserBalanceStatistics(user.id, reward),
          addUserQuizStatistics(user.id, "won"),
        ]);
        winnersData.push({ user, reward });
      });

      const incorrectCollector = quizChannel.createMessageCollector({
        filter: (m) => !filter(m),
        time: questionInterval,
      });

      incorrectCollector.on("collect", async (message) => {
        const reaction = question.incorrectReaction?.(message.content);
        if (reaction) {
          message.react(reaction);
        }
      });

      quizChannel
        .awaitMessages({
          filter,
          max: 1,
          time: questionInterval,
          errors: ["time"],
        })
        .then(() => {
          setTimeout(() => {
            correctCollector.stop();
            incorrectCollector.stop();

            if (winnersData.length) {
              const description = winnersData
                .sort((a, b) => b.reward - a.reward)
                .map(
                  (w) => `${w.user}: **+${w.reward} ${GlobalEmotes.money}**`
                );
              const embed = new EmbedBuilder()
                .setTitle("**Classement :**")
                .setDescription(description.join("\n"))
                .setColor("#2ecc71");

              questionMessage.channel.send({ embeds: [embed] });
            }
            question.onEnd(questionMessage);
          }, ANSWER_TIME_LIMIT);
        })
        .catch(() => {
          question.onEnd(questionMessage);
        });
    }, questionInterval + ANSWER_TIME_LIMIT);
  });
};
