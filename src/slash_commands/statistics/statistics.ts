import {
  ApplicationCommandOptionType,
  Colors,
  CommandInteraction,
  EmbedBuilder,
} from "discord.js";
import {
  getUserBalanceStatistics,
  getUserCasinoStatistics,
  getUserInteractionStatistics,
  getUserQuizStatistics,
} from "../../database/data/statistics";
import { CommandConfig } from "../../types/commands";

export const statistics: CommandConfig = {
  name: "statistics",
  description: "Obtenez une vue d'ensemble de vos statistiques pour ce serveur",
  args: [
    {
      name: "user",
      type: ApplicationCommandOptionType.User,
      description: "Obtenir les statistiques d'un autre utilisateur",
      required: false,
    },
  ],
  execute: async (interaction: CommandInteraction) => {
    const optionUser = interaction.options.get("user")?.user;
    const user = optionUser
      ? await interaction.guild?.members.fetch(optionUser)
      : interaction.user;

    if (!user) {
      const embed = new EmbedBuilder()
        .setColor(Colors.Red)
        .setDescription(`${interaction.user}\nUtilisateur introuvable`);
      return interaction.reply({ embeds: [embed] });
    }

    const [interactionStats, quizStats, balanceStats, casinoStats] =
      await Promise.all([
        getUserInteractionStatistics(user.id),
        getUserQuizStatistics(user.id),
        getUserBalanceStatistics(user.id),
        getUserCasinoStatistics(user.id),
      ]);

    const embed = new EmbedBuilder()
      .setTitle("Statistiques")
      .setDescription(user.toString())
      .setColor(Colors.Blue)
      .addFields({
        name: "__***Général***__",
        value: [
          `**❯ Messages:** ${(interactionStats?.messages ?? 0).toLocaleString(
            "fr-FR"
          )}`,
          `**❯ Commandes:** ${(interactionStats?.commands ?? 0).toLocaleString(
            "fr-FR"
          )}`,
        ].join("\n"),
      })
      .addFields({
        name: "__***Quiz***__",
        value: [
          `**❯ Réponses correctes:** ${(quizStats?.won ?? 0).toLocaleString(
            "fr-FR"
          )}`,
        ].join("\n"),
      })
      .addFields({
        name: "__***Balance***__",
        value: [
          `**❯ Pièces gagnées:** ${(balanceStats?.won ?? 0).toLocaleString(
            "fr-FR"
          )}`,
          `**❯ Pièces dépensées:** ${(balanceStats?.spent ?? 0).toLocaleString(
            "fr-FR"
          )}`,
        ].join("\n"),
      })
      .addFields({
        name: "__***Casino***__",
        value: [
          `**❯ Jeux joués:** ${(casinoStats?.played ?? 0).toLocaleString(
            "fr-FR"
          )}`,
          `**❯ Jeux gagnés:** ${(casinoStats?.won ?? 0).toLocaleString(
            "fr-FR"
          )}`,
          `**❯ Jeux perdus:** ${(casinoStats?.lost ?? 0).toLocaleString(
            "fr-FR"
          )}`,
          `**❯ Pièces misées:** ${(casinoStats?.bet ?? 0).toLocaleString(
            "fr-FR"
          )}`,
        ].join("\n"),
      });

    return interaction.reply({ embeds: [embed] });
  },
};
