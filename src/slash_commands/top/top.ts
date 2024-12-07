import {
  ApplicationCommandOptionType,
  Colors,
  CommandInteraction,
  EmbedBuilder,
} from "discord.js";
import {
  getTopUsersBalances,
  getTopUsersBalanceStatistics,
  getTopUsersCasinoStatistics,
  getTopUsersInteractionStatistics,
  getTopUsersQuizStatistics,
} from "../../database/data/top";
import { CommandConfig } from "../../types/commands";
import { GlobalEmotes } from "../../types/constants";

export const top: CommandConfig = {
  name: "top",
  description: "Obtenir le top des utilisateurs dans différentes catégories",
  args: [
    {
      name: "type",
      type: ApplicationCommandOptionType.String,
      description: "Quelle catégorie à afficher ?",
      required: false,
      choices: [
        {
          name: "Solde (défaut)",
          value: "balance",
        },
        {
          name: "Messages",
          value: "messages",
        },
        {
          name: "Commandes",
          value: "commands",
        },
        {
          name: "Victoires au Quiz",
          value: "quiz-won",
        },
        {
          name: "Pièces gagnées",
          value: "coins-won",
        },
        {
          name: "Pièces dépensées",
          value: "coins-spent",
        },
        {
          name: "Jeux de casino joués",
          value: "casino-played",
        },
        {
          name: "Jeux de casino gagnés",
          value: "casino-won",
        },
        {
          name: "Jeux de casino perdus",
          value: "casino-lost",
        },
        {
          name: "Pièces misées au casino",
          value: "casino-bet",
        },
      ],
    },
  ],
  execute: async (interaction: CommandInteraction) => {
    const type = interaction.options.get("type")?.value || "balance";

    let results = [];
    let topTitle = "Solde";

    switch (type) {
      case "balance":
        topTitle = "Solde";
        const topBalances = await getTopUsersBalances();
        results = topBalances.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.balance} ${
            GlobalEmotes.money
          }`;
        });
        break;
      case "messages":
        topTitle = "Messages";
        const topMessages = await getTopUsersInteractionStatistics("messages");
        results = topMessages.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.messages}`;
        });
        break;
      case "commands":
        topTitle = "Commandes";
        const topCommands = await getTopUsersInteractionStatistics("commands");
        results = topCommands.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.commands}`;
        });
        break;
      case "quiz-won":
        topTitle = "Victoires au Quiz";
        const topQuizWon = await getTopUsersQuizStatistics("won");
        results = topQuizWon.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.won}`;
        });
        break;
      case "coins-won":
        topTitle = "Pièces gagnées";
        const topBalanceWon = await getTopUsersBalanceStatistics("won");
        results = topBalanceWon.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.won} ${
            GlobalEmotes.money
          }`;
        });
        break;
      case "coins-spent":
        topTitle = "Pièces dépensées";
        const topBalanceSpent = await getTopUsersBalanceStatistics("spent");
        results = topBalanceSpent.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.spent} ${
            GlobalEmotes.money
          }`;
        });
        break;
      case "casino-played":
        topTitle = "Jeux de casino joués";
        const topCasinoPlayed = await getTopUsersCasinoStatistics("played");
        results = topCasinoPlayed.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.played}`;
        });
        break;
      case "casino-won":
        topTitle = "Jeux de casino gagnés";
        const topCasinoWon = await getTopUsersCasinoStatistics("won");
        results = topCasinoWon.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.won}`;
        });
        break;
      case "casino-lost":
        topTitle = "Jeux de casino perdus";
        const topCasinoLost = await getTopUsersCasinoStatistics("lost");
        results = topCasinoLost.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.lost}`;
        });
        break;
      case "casino-bet":
        topTitle = "Pièces misées au casino";
        const topCasinoBet = await getTopUsersCasinoStatistics("bet");
        results = topCasinoBet.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.bet} ${
            GlobalEmotes.money
          }`;
        });
        break;
      default:
        topTitle = "Solde";
        const topDefault = await getTopUsersBalances();
        results = topDefault.map((top, index) => {
          return `**#${index + 1}** <@!${top.id}>: ${top.balance} ${
            GlobalEmotes.money
          }`;
        });
        break;
    }

    const embed = new EmbedBuilder()
      .setTitle(`Statistiques - Top ${topTitle}`)
      .setDescription(results.join("\n"))
      .setColor(Colors.Blue);

    return interaction.reply({ embeds: [embed] });
  },
};
