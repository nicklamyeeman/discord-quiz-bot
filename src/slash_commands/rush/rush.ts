import {
  ApplicationCommandOptionType,
  Colors,
  CommandInteraction,
  EmbedBuilder,
} from "discord.js";
import { getQuizRushTime, setQuizRushTime } from "../../database/data/quiz";
import { CommandConfig } from "../../types/commands";
import { Quiz } from "../../types/quiz";

export const rush: CommandConfig = {
  name: "rush",
  description: "Description de la commande",
  args: [
    {
      name: "game",
      type: ApplicationCommandOptionType.String,
      description: "Sur quel jeu voulez-vous lancer le rush ?",
      required: false,
      choices: [
        {
          name: "Tous (défaut)",
          value: "all",
        },
        {
          name: "Pokémon",
          value: "pokemon",
        },
        {
          name: "League of Legends",
          value: "lol",
        },
      ],
    },
  ],
  execute: async (interaction: CommandInteraction) => {
    const game = (interaction.options.get("game")?.value ||
      "all") as Quiz["rushTime"];

    const rushTime = await getQuizRushTime();
    if (!rushTime) {
      await setQuizRushTime(game);
    }

    const embed = new EmbedBuilder()
      .setTitle(
        !rushTime ? "Lancement du rush..." : "Un rush est déjà en cours"
      )
      .setColor(!rushTime ? Colors.Blue : Colors.Red);
    return interaction.reply({ embeds: [embed] });
  },
};
