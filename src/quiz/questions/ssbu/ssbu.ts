import { AttachmentBuilder, Colors, EmbedBuilder, Message } from "discord.js";
import { GlobalEmotes } from "../../../types/constants";
import { QuizNextQuestion } from "../../../types/quiz";
import {
  getRewardAmount,
  normalizeAnswer,
  WeightedQuizQuestion,
} from "../../utils";
import { ssbuFighters, ssbuFightersSeries } from "./data";
import {
  getANewFoeHasApproachedImage,
  getRandomFighterFrom,
  SSBU_FIGHTER_IMAGE_PATH_BASE,
  SSBU_FIGHTER_SERIE_IMAGE_PATH_BASE,
} from "./utils";

const whosThatFighter = async (): Promise<QuizNextQuestion> => {
  const selectedFighter = getRandomFighterFrom(ssbuFighters);

  const answer = new RegExp(
    `^\\W*${
      !!selectedFighter.alias
        ? `${normalizeAnswer(selectedFighter.alias)}\\b|${normalizeAnswer(
            selectedFighter.name
          )}`
        : normalizeAnswer(selectedFighter.name)
    }\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = ["Quel est ce personnage de Super Smash Bros Ultimate ?"];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const base64Image = await getANewFoeHasApproachedImage(selectedFighter);
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le combattant SSBU !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkVividPink);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const base64FinalImage = await getANewFoeHasApproachedImage(
        selectedFighter,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "ssbu.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est ${selectedFighter.name} !`)
        .setImage("attachment://ssbu.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whatsTheFighterSerie = async (): Promise<QuizNextQuestion> => {
  const selectedFighter = getRandomFighterFrom(ssbuFighters);
  const selectedSerie = ssbuFightersSeries[selectedFighter.serie];

  const answer = new RegExp(
    `^\\W*${
      !!selectedSerie.alias
        ? `${normalizeAnswer(selectedSerie.alias)}\\b|${normalizeAnswer(
            selectedSerie.name
          )}`
        : normalizeAnswer(selectedSerie.name)
    }\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [
    "De quelle série provient ce personnage de Super Smash Bros Ultimate ?",
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const base64Image = await getANewFoeHasApproachedImage(selectedFighter);
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez la série de ce combattant SSBU !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkVividPink);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const base64FinalImage = await getANewFoeHasApproachedImage(
        selectedFighter,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "ssbu.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est ${selectedSerie.name} !`)
        .setImage("attachment://ssbu.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const nameFighterFromSerie = async (): Promise<QuizNextQuestion> => {
  const selectedFighter = getRandomFighterFrom(ssbuFighters);
  const selectedSerie = ssbuFightersSeries[selectedFighter.serie];
  const eligibleFighters = Object.values(ssbuFighters).filter(
    (fighter) => fighter.serie === selectedFighter.serie
  );

  const answer = new RegExp(
    `^\\W*${eligibleFighters
      .map((fighter) =>
        !!fighter.alias
          ? `${normalizeAnswer(fighter.alias)}\\b|${normalizeAnswer(
              fighter.name
            )}`
          : normalizeAnswer(fighter.name)
      )
      .join("\\b|")}\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [
    `Citez un personnage de Super Smash Bros Ultimate provenant de cete série : ||${selectedSerie.name}||`,
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const file = new AttachmentBuilder(
    `${SSBU_FIGHTER_SERIE_IMAGE_PATH_BASE}/${selectedFighter.serie}.png`,
    { name: "serie.png" }
  );
  const embed = new EmbedBuilder()
    .setTitle("Citez un combattant SSBU de la série !")
    .setDescription(description.join("\n"))
    .setThumbnail("attachment://serie.png")
    .setColor(Colors.DarkVividPink);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const file = new AttachmentBuilder(
        `${SSBU_FIGHTER_IMAGE_PATH_BASE}/${selectedFighter.id}.png`,
        {
          name: "ssbu.png",
        }
      );
      const newEmbed = new EmbedBuilder()
        .setTitle(`Les combattants possibles sont :`)
        .setDescription(
          `${eligibleFighters
            .map((fighter) => fighter.name)
            .splice(0, 10)
            .join("\n")}${eligibleFighters.length > 10 ? "\net plus..." : ""}`
        )
        .setThumbnail("attachment://ssbu.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [file] });
    },
  };
};

export const ssbuQuizQuestions = [
  new WeightedQuizQuestion(nameFighterFromSerie, 10),
  new WeightedQuizQuestion(whatsTheFighterSerie, 10),
  new WeightedQuizQuestion(whosThatFighter, 30),
];
