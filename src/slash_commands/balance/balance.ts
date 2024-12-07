import { Colors, CommandInteraction, EmbedBuilder } from "discord.js";
import { getUserBalance } from "../../database/data/user";
import { CommandConfig } from "../../types/commands";
import { GlobalEmotes } from "../../types/constants";

export const balance: CommandConfig = {
  name: "balance",
  description: "Affiche votre solde de pièces",
  execute: async (interaction: CommandInteraction) => {
    const userBalance = await getUserBalance(interaction.user.id);

    const output = [
      interaction.user,
      `**Solde: ${userBalance?.toLocaleString("fr-FR")} ${
        GlobalEmotes.money
      }**`,
    ].join("\n");
    const embed = new EmbedBuilder()
      .setColor(Colors.Gold)
      .setDescription(output);
    return interaction.reply({ embeds: [embed] });
  },
};
