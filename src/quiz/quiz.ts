import { DataSnapshot } from "acebase";
import { Guild } from "discord.js";
import { guildConfig } from "../config";
import { listenQuiz, setQuizRushTime } from "../database/data/quiz";
import { Quiz } from "../types/quiz";
import { RUSH_TIME_DURATION } from "./utils";

export const startQuiz = async (guild: Guild) => {
  const quizChannel = guildConfig.QUIZ_CHANNEL_ID
    ? guild.channels.cache.get(guildConfig.QUIZ_CHANNEL_ID)
    : null;
  if (!quizChannel) {
    return;
  }

  listenQuiz((snapshot: DataSnapshot<Quiz>) => {
    const quiz = snapshot.val();
    const rushTime = quiz?.rushTime ?? null;
    const isLive = quiz?.isLive ?? false;

    if (!isLive) {
      return;
    }
    if (!!rushTime) {
      setInterval(async () => {
        await setQuizRushTime(null);
      }, RUSH_TIME_DURATION);
    }

    console.log({ isLive, rushTime });
  });
};
