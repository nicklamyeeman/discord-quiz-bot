import { AttachmentBuilder, Colors, EmbedBuilder, Message } from "discord.js";
import { GlobalEmotes } from "../../../types/constants";
import { QuizNextQuestion } from "../../../types/quiz";
import { getRewardAmount, normalizeAnswer } from "../../utils";
import { lolChampions, lolChampionsClasses } from "./data";
import {
  dualClassLoLChampions,
  getRandomLoLChampionFrom,
  getRandomLoLChampionSkin,
  getRandomLoLChampionSpell,
  getWhosThatLoLChampionImage,
  getWhosThatLoLChampionSkinImage,
  LOL_CHAMPION_IMAGE_PATH_BASE,
  LOL_CHAMPION_SKIN_IMAGE_PATH_BASE,
  LOL_CHAMPION_SPELL_IMAGE_PATH_BASE,
  lolChampionsWithSkin,
} from "./utils";

const nameDualClassLoLChampion = (): QuizNextQuestion => {
  const selectedChampion = getRandomLoLChampionFrom(dualClassLoLChampions);
  const classes = selectedChampion.classes.map(
    (championClass) => lolChampionsClasses[championClass]
  );
  const eligibleChampions = Object.values(dualClassLoLChampions).filter(
    (champion) =>
      champion.classes.every((championClass) =>
        selectedChampion.classes.includes(championClass)
      ) && champion.classes.length === 2
  );
  const answer = new RegExp(
    `^\\W*${eligibleChampions
      .map((champion) => {
        if (!!champion.alias) {
          return `${normalizeAnswer(champion.alias)}\\b|${normalizeAnswer(
            champion.name
          )}`;
        }
        return normalizeAnswer(champion.name);
      })
      .join("\\b|")}\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [
    `Citez un Champion de League of Legends à la fois ${classes[0].emoji} ${classes[0].name} & ${classes[1].emoji} ${classes[1].name}.`,
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const file = new AttachmentBuilder(
    `${LOL_CHAMPION_IMAGE_PATH_BASE}/${selectedChampion.id}.png`,
    { name: "champion.png" }
  );
  const embed = new EmbedBuilder()
    .setTitle("Citez un Champion LoL Double-Classe !")
    .setDescription(description.join("\n"))
    .setColor(Colors.DarkPurple);

  return {
    embed,
    answer,
    reward,
    onEnd: (message: Message) => {
      const newEmbed = new EmbedBuilder()
        .setTitle("Les Champions LoL possibles sont :")
        .setDescription(
          `${eligibleChampions
            .map((champion) => champion.name)
            .splice(0, 10)
            .join("\n")}${eligibleChampions.length > 10 ? "\net plus..." : ""}`
        )
        .setThumbnail(`attachment://champion.png`)
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [file] });
    },
  };
};

const whatsTheLoLChampionClass = (): QuizNextQuestion => {
  const selectedChampion = getRandomLoLChampionFrom(lolChampions);
  const classes = selectedChampion.classes.map(
    (championClass) => lolChampionsClasses[championClass]
  );

  const answer = new RegExp(
    `^\\W*${classes
      .map((classe) => {
        if (!!classe.alias) {
          return `${normalizeAnswer(classe.alias)}\\b|${normalizeAnswer(
            classe.name
          )}`;
        }
        return normalizeAnswer(classe.name);
      })
      .join("\\b|")}\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [
    `Citez au moins une classe de ce Champion de League of Legends : ${selectedChampion.name} !`,
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const file = new AttachmentBuilder(
    `${LOL_CHAMPION_IMAGE_PATH_BASE}/${selectedChampion.id}.png`,
    { name: "champion.png" }
  );
  const embed = new EmbedBuilder()
    .setTitle("Trouvez une Classe de Champion LoL !")
    .setDescription(description.join("\n"))
    .setThumbnail(`attachment://champion.png`)
    .setColor(Colors.DarkPurple);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: (message: Message) => {
      const newEmbed = new EmbedBuilder()
        .setTitle("Ce Champion LoL possède les classes :")
        .setDescription(
          `${classes
            .map((classe) => `${classe.emoji} ${classe.name}`)
            .join("\n")}`
        )
        .setThumbnail(`attachment://champion.png`)
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [file] });
    },
  };
};

const whosThatLoLChampion = async (): Promise<QuizNextQuestion> => {
  const selectedChampion = getRandomLoLChampionFrom(lolChampions);
  const answer = new RegExp(
    `^\\W*${
      !!selectedChampion.alias
        ? `${normalizeAnswer(selectedChampion.alias)}\\b|${normalizeAnswer(
            selectedChampion.name
          )}`
        : normalizeAnswer(selectedChampion.name)
    }\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [`Qui est ce Champion de League of Legends ?`];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const base64Image = await getWhosThatLoLChampionImage(selectedChampion);
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le Champion LoL !")
    .setDescription(description.join("\n"))
    .setThumbnail(`attachment://who.png`)
    .setColor(Colors.DarkPurple);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: (message: Message) => {
      const finalFile = new AttachmentBuilder(
        `${LOL_CHAMPION_IMAGE_PATH_BASE}/${selectedChampion.id}.png`,
        { name: "champion.png" }
      );
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est ${selectedChampion.name}`)
        .setImage(`attachment://champion.png`)
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whosTheLoLChampionSpell = (): QuizNextQuestion => {
  const selectedChampion = getRandomLoLChampionFrom(lolChampions);
  const selectedSpell = getRandomLoLChampionSpell(selectedChampion);

  const answer = new RegExp(
    `^\\W*${
      !!selectedChampion.alias
        ? `${normalizeAnswer(selectedChampion.alias)}\\b|${normalizeAnswer(
            selectedChampion.name
          )}`
        : normalizeAnswer(selectedChampion.name)
    }\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [
    `Quel Champion de League of Legends possède ce ${
      selectedSpell.type === "passive" ? "passif" : "sort"
    } ?`,
    `||${selectedSpell.name}||`,
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const file = new AttachmentBuilder(
    `${LOL_CHAMPION_SPELL_IMAGE_PATH_BASE}/${selectedChampion.id}_${selectedSpell.id}.png`,
    { name: "spell.png" }
  );
  const embed = new EmbedBuilder()
    .setTitle(
      `Trouvez le Champion LoL avec son ${
        selectedSpell.type === "passive" ? "passif" : "sort"
      } !`
    )
    .setDescription(description.join("\n"))
    .setThumbnail(`attachment://spell.png`)
    .setColor(Colors.DarkPurple);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: (message: Message) => {
      const finalFile = new AttachmentBuilder(
        `${LOL_CHAMPION_IMAGE_PATH_BASE}/${selectedChampion.id}.png`,
        { name: "champion.png" }
      );
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est ${selectedChampion.name}`)
        .setImage(`attachment://champion.png`)
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whosTheLoLChampionSkin = async (): Promise<QuizNextQuestion> => {
  const selectedChampion = getRandomLoLChampionFrom(lolChampionsWithSkin);
  const selectedSkin = getRandomLoLChampionSkin(selectedChampion);
  const selectedSkinId = selectedSkin?.id
    ? `${selectedChampion.id}_${selectedSkin.id}`
    : null;
  const answer = new RegExp(
    `^\\W*${
      !!selectedChampion.alias
        ? `${normalizeAnswer(selectedChampion.alias)}\\b|${normalizeAnswer(
            selectedChampion.name
          )}`
        : normalizeAnswer(selectedChampion.name)
    }\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = [`Quel Champion de League of Legends possède ce skin ?`];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const base64Image = await getWhosThatLoLChampionSkinImage(selectedSkinId);
  const file = new AttachmentBuilder(
    base64Image ?? `${LOL_CHAMPION_IMAGE_PATH_BASE}/${selectedChampion.id}.png`,
    { name: "skin.png" }
  );
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le Champion LoL derrière ce skin !")
    .setDescription(description.join("\n"))
    .setImage(`attachment://skin.png`)
    .setColor(Colors.DarkPurple);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: (message: Message) => {
      const finalFile = new AttachmentBuilder(
        selectedSkinId
          ? `${LOL_CHAMPION_SKIN_IMAGE_PATH_BASE}/${selectedSkinId}.jpg`
          : `${LOL_CHAMPION_IMAGE_PATH_BASE}/${selectedChampion.id}.png`,
        { name: "champion.png" }
      );
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est ${selectedChampion.name}`)
        .setDescription(selectedSkin?.name ? `||${selectedSkin?.name}||` : null)
        .setImage(`attachment://champion.png`)
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

export const lolQuizQuestions = [
  nameDualClassLoLChampion,
  whatsTheLoLChampionClass,
  whosThatLoLChampion,
  whosTheLoLChampionSpell,
  whosTheLoLChampionSkin,
];
