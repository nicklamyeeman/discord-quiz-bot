import {
  ApplicationCommandOptionType,
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
import { getMatchingArrow, getRandomMultiplier, multipliers } from "./utils";

export const spin: CommandConfig = {
  name: "spin",
  description: "Tournez la roue et misez vos pièces",
  args: [
    {
      name: "bet-amount",
      type: ApplicationCommandOptionType.Integer,
      description: "Combien de pièces voulez-vous miser ?",
      required: true,
      min_value: 10,
    },
  ],
  channel: guildConfig.CASINO_CHANNEL_ID,
  execute: async (interaction: CommandInteraction) => {
    const bet = interaction.options.get("bet-amount")?.value as number;

    const userBalance = (await getUserBalance(interaction.user.id)) ?? 0;

    if (bet > userBalance || !userBalance || userBalance <= 0) {
      const embed = new EmbedBuilder()
        .setColor(Colors.Red)
        .setDescription(
          `${interaction.user}\nVous n'avez pas assez de pièces pour faire ça`
        );
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    const multiplier = getRandomMultiplier();
    const arrow = getMatchingArrow(multiplier);
    const winnings = Math.floor(bet * multiplier);

    await Promise.all([
      setUserBalance(interaction.user.id, userBalance + winnings - bet),
      addUserBalanceStatistics(interaction.user.id, winnings - bet),
      addUserCasinoStatistics(interaction.user.id, bet, winnings - bet),
    ]);

    const output = [
      interaction.user,
      `**Gains: ${winnings.toLocaleString("fr-FR")} ${GlobalEmotes.money}**`,
      "",
      `\`${multipliers
        .slice(0, 3)
        .map((i) => `[${i}]`)
        .join("")}\``,
      `\`[${multipliers[3]}]\`[ ${arrow} ]\`[${multipliers[4]}]\``,
      `\`${multipliers
        .slice(5, 8)
        .map((i) => `[${i}]`)
        .join("")}\``,
    ];
    const embed = new EmbedBuilder()
      .setColor(multiplier > 1 ? Colors.Green : Colors.Red)
      .setDescription(output.join("\n"))
      .setFooter({
        text: `Solde: ${(userBalance + winnings - bet).toLocaleString(
          "fr-FR"
        )}`,
      });
    return interaction.reply({ embeds: [embed] });
  },
};
