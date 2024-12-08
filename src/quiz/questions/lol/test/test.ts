import { AttachmentBuilder, Colors, EmbedBuilder, Message } from "discord.js";
import { coinImage } from "../../../../slash_commands/flip/utils";
import { QuizNextQuestion } from "../../../../types/quiz";
import { getRewardAmount } from "../../../utils";

export const test = (): QuizNextQuestion => {
  const answer = new RegExp(`${Math.floor(Math.random() * 4 + 4)}`);
  const reward = getRewardAmount();

  const file = new AttachmentBuilder(coinImage.tails, {
    name: "coin.png",
    description: "coin image",
  });
  const embed = new EmbedBuilder()
    .setColor(Colors.Green)
    .setThumbnail("attachment://coin.png")
    .setDescription("THIS IS A TEST");

  return {
    embed,
    file,
    answer,
    reward,
    incorrectReaction: (message: string) => {
      if (message.toLowerCase().includes("test")) {
        return "👍";
      }
      return null;
    },
    onEnd: (message: Message) => {
      const newEmbed = new EmbedBuilder()
        .setTitle("Réponse")
        .setDescription(`La réponse était ${answer}`);
      message.reply({ embeds: [newEmbed] });
    },
  };
};
