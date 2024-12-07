import { Colors, EmbedBuilder, Message } from "discord.js";
import { addUserBalanceStatistics } from "../../database/data/statistics";
import { addUserBalance, getUserId } from "../../database/data/user";
import { GlobalEmotes } from "../../types/constants";
import { initUser } from "../../utils";

export const gift = {
  name: "gift",
  execute: async (message: Message) => {
    const amount = message.content.split(" ")[1];
    const giftAmount = isNaN(Number(amount)) ? 0 : Number(amount);
    const member = message.mentions.members?.first();

    if (!member) {
      return message.reply("Utilisateur introuvable.");
    }

    const userId = await getUserId(member.id);
    if (!userId) {
      await initUser(member.user);
    }

    await Promise.all([
      addUserBalance(member.id, giftAmount),
      addUserBalanceStatistics(member.id, giftAmount),
    ]);

    const embed = new EmbedBuilder()
      .setTitle("Cadeau !")
      .setDescription(
        `Vous avez offert ${amount} ${GlobalEmotes.money} à ${member.user}`
      )
      .setColor(Colors.Gold);
    return message.reply({ embeds: [embed] });
  },
};
