import {
  ApplicationCommandOptionType,
  AttachmentBuilder,
  Colors,
  CommandInteraction,
  EmbedBuilder,
} from "discord.js";
import { guildConfig } from "../../config";
import {
  addUserBalanceStatistics,
  addUserCasinoStatistics,
} from "../../database/data/statistics";
import { getUserBalance, setUserBalance } from "../../database/data/user";
import { CommandConfig } from "../../types/commands";
import { GlobalEmotes } from "../../types/constants";
import { coinImage, flipCoin } from "./utils";

export const flip: CommandConfig = {
  name: "flip",
  description: "Jouez à pile ou face et misez vos pièces",
  args: [
    {
      type: ApplicationCommandOptionType.Integer,
      name: "bet-amount",
      description: "Combien de pièces voulez-vous miser ?",
      required: true,
    },
    {
      type: ApplicationCommandOptionType.String,
      name: "coin-side",
      description: "Sur quel côté misez-vous ?",
      required: true,
      choices: [
        {
          name: "face",
          value: "heads",
        },
        {
          name: "pile",
          value: "tails",
        },
      ],
    },
  ],
  channel: guildConfig.CASINO_CHANNEL_ID,
  execute: async (interaction: CommandInteraction) => {
    const bet = interaction.options.get("bet-amount")?.value as number;
    const side = interaction.options.get("coin-side")?.value as
      | "heads"
      | "tails";

    const userBalance = (await getUserBalance(interaction.user.id)) ?? 0;

    if (bet > userBalance || !userBalance || userBalance <= 0) {
      const embed = new EmbedBuilder()
        .setColor(Colors.Red)
        .setDescription(
          `${interaction.user}\nVous n'avez pas assez de pièces pour faire ça`
        );
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    const coinSide = flipCoin();
    const win = coinSide === side;
    const winnings = win ? bet * 2 : 0;

    await Promise.all([
      setUserBalance(interaction.user.id, userBalance + winnings - bet),
      addUserBalanceStatistics(interaction.user.id, winnings - bet),
      addUserCasinoStatistics(interaction.user.id, bet, winnings - bet),
    ]);

    const output = [
      interaction.user,
      `**${win ? "GAGNÉ" : "PERDU"}** - ${coinSide ? "FACE" : "PILE"}`,
      `**Gains: ${winnings.toLocaleString("fr-FR")} ${GlobalEmotes.money}**`,
    ].join("\n");

    const file = new AttachmentBuilder(coinImage[coinSide], {
      name: "coin.png",
      description: "coin image",
    });

    const embed = new EmbedBuilder()
      .setColor(win ? Colors.Green : Colors.Red)
      .setThumbnail("attachment://coin.png")
      .setDescription(output)
      .setFooter({
        text: `Solde: ${(userBalance + winnings - bet).toLocaleString(
          "fr-FR"
        )}`,
      });

    return interaction.reply({ embeds: [embed], files: [file] });
  },
};
