import { Image, loadImage } from "@napi-rs/canvas";
import { Colors, EmbedBuilder } from "discord.js";
import { setQuizIsLive } from "../database/data/quiz";
import { MINUTE, SECOND } from "../types/constants";
import { Quiz, QuizNextQuestion } from "../types/quiz";

export class WeightedQuizQuestion {
  option: (() => QuizNextQuestion) | (() => Promise<QuizNextQuestion>);
  weight: number;

  constructor(
    option: (() => QuizNextQuestion) | (() => Promise<QuizNextQuestion>),
    weight: number
  ) {
    this.option = option;
    this.weight = weight;
  }
}

export const NEXT_QUESTION_RUSH_INTERVAL = SECOND * 30;

export const NEXT_QUESTION_INTERVAL = MINUTE * 5;

export const NEXT_QUESTION_NIGHT_INTERVAL = MINUTE * 10;

export const ANSWER_TIME_LIMIT = SECOND * 6;

export const RUSH_TIME_DURATION = MINUTE * 20;

export const WHOS_THAT_POKEMON_IMAGE_PATH =
  "assets/images/backdrop/whos_that_pokemon.png";
export const A_NEW_FOE_HAS_APPEARED_IMAGE_PATH =
  "assets/images/backdrop/a_new_foe_has_appeared.png";

export let whosThatPokemonBackgroundImage: Image;
export let aNewFoeHasAppearedBackgroundImage: Image;
export const loadImages = async () => {
  whosThatPokemonBackgroundImage = await loadImage(
    WHOS_THAT_POKEMON_IMAGE_PATH
  );
  aNewFoeHasAppearedBackgroundImage = await loadImage(
    A_NEW_FOE_HAS_APPEARED_IMAGE_PATH
  );
};

export const getRewardAmount = () => Math.floor(Math.random() * 7) * 5 + 30;

export const normalizeAnswer = (answer: string) =>
  answer
    .replaceAll(/(â|à|ä)/gi, "a")
    .replaceAll(/(é|ê|è|ë)/gi, "e")
    .replaceAll(/(î|ï)/gi, "i")
    .replaceAll(/(ô|ö)/gi, "o")
    .replaceAll(/(ç)/gi, "c")
    .replaceAll(/\(.+\)/gi, "")
    .replaceAll(/\W|_/gi, ".?");

export const reloadQuiz = async () => {
  await setQuizIsLive(false);
  return setQuizIsLive(true);
};

export const startRushMessageContent = (
  rushTime: Exclude<Quiz["rushTime"], null>
) => {
  let gameName = "";

  switch (rushTime) {
    case "pokemon":
      gameName = "Pokémon";
      break;
    case "lol":
      gameName = "League of Legends";
      break;
    case "ssbu":
      gameName = "Super Smash Bros Ultimate";
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
