import { Colors, EmbedBuilder, Message } from "discord.js";
import { setQuizIsLive } from "../../database/data/quiz";

export const pause = {
  name: "pause",
  execute: async (message: Message) => {
    await setQuizIsLive(false);

    const embed = new EmbedBuilder()
      .setTitle("Arrêt du quiz...")
      .setColor(Colors.Orange);
    return message.reply({ embeds: [embed] });
  },
};
