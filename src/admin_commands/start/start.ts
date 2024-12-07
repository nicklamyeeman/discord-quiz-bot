import { Colors, EmbedBuilder, Message } from "discord.js";
import { setQuizIsLive } from "../../database/data/quiz";

export const start = {
  name: "start",
  execute: async (message: Message) => {
    await setQuizIsLive(true);

    const embed = new EmbedBuilder()
      .setTitle("Démarrage du quiz...")
      .setColor(Colors.Orange);
    return message.reply({ embeds: [embed] });
  },
};
