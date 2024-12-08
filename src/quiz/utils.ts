import { Colors, EmbedBuilder } from "discord.js";
import { setQuizIsLive } from "../database/data/quiz";
import { MINUTE, SECOND } from "../types/constants";

export const NEXT_QUESTION_RUSH_INTERVAL = MINUTE * 1;

export const NEXT_QUESTION_INTERVAL = MINUTE * 5;

export const NEXT_QUESTION_NIGHT_INTERVAL = MINUTE * 10;

export const ANSWER_TIME_LIMIT = SECOND * 6;

export const RUSH_TIME_DURATION = SECOND * 20;

export const getRewardAmount = () => Math.floor(Math.random() * 7) * 5 + 30;

export const reloadQuiz = async () => {
  await setQuizIsLive(false);
  return setQuizIsLive(true);
};

export const startRushMessageContent = (
  rushTime: "all" | "pokemon" | "lol"
) => {
  let gameName = "";

  switch (rushTime) {
    case "pokemon":
      gameName = "Pokémon";
      break;
    case "lol":
      gameName = "League of Legends";
      break;
  }

  const embed = new EmbedBuilder()
    .setTitle(`C'est le début du Rush ${gameName}!`)
    .setDescription(
      [
        "Le Rush dure 20 minutes !",
        `Les questions sont posées toutes les minutes et les récompenses sont doublés`,
        gameName
          ? `Les questions seront portées exclusivement sur le thème ${gameName}`
          : "",
        "Bonne chance !",
      ].join("\n")
    )
    .setColor(rushTime === "all" ? Colors.Blue : Colors.Purple);
  return { embeds: [embed] };
};

export const endRushMessageContent = () => {
  const embed = new EmbedBuilder()
    .setTitle("Le Rush est terminé !")
    .setColor(Colors.Red);
  return { embeds: [embed] };
};
