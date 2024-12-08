import {
  AttachmentBuilder,
  Colors,
  CommandInteraction,
  User as DiscordUser,
  EmbedBuilder,
  Guild,
  Interaction,
  Message,
} from "discord.js";

import { guildConfig } from "./config";
import {
  addUserBalanceStatistics,
  addUserInteractionStatistics,
  setUserBalanceStatistics,
  setUserCasinoStatistics,
  setUserInteractionStatistics,
  setUserQuizStatistics,
} from "./database/data/statistics";
import {
  addUserBalance,
  getUserBalance,
  getUserId,
  getUserLastActivity,
  setUser,
  setUserLastActivity,
} from "./database/data/user";
import { DATABASE_FULLPATH } from "./database/utils";
import {
  DEFAULT_BALANCE_STATISTICS,
  DEFAULT_CASINO_STATISTICS,
  DEFAULT_INTERACTION_STATISTICS,
  DEFAULT_PROFILE_CARD,
  DEFAULT_QUIZ_STATISTICS,
  GlobalEmotes,
} from "./types/constants";
import { InteractionStatistics } from "./types/statistics";

export const backupDatabase = (guild: Guild | null) => {
  const backupChannel = guild?.channels.cache.find(
    (channel) => channel.id === guildConfig.BACKUP_CHANNEL_ID
  );
  if (!backupChannel || !backupChannel.isSendable()) {
    return;
  }
  const attachment = new AttachmentBuilder(DATABASE_FULLPATH, {
    name: "data.db",
  });
  backupChannel.send({
    content: `__***Database Backup:***__\n_${new Date()
      .toJSON()
      .replace(/T/g, " ")
      .replace(/\.\w+$/, "")}_`,
    files: [attachment],
  });
};

export const runOnInterval = async (
  callback: (...args: any) => any,
  interval: number
) => {
  await callback();
  return setInterval(callback, interval);
};

export const initUser = async (
  user: DiscordUser,
  message?: Interaction | Message
) => {
  const userId = await getUserId(user.id);
  if (!userId) {
    await Promise.all([
      setUser({
        id: user.id,
        name: user.username,
        balance: DEFAULT_BALANCE_STATISTICS.won,
        lastActivity: Date.now(),
        profileCard: DEFAULT_PROFILE_CARD,
      }),
      setUserInteractionStatistics(user.id, {
        ...DEFAULT_INTERACTION_STATISTICS,
        id: user.id,
      }),
      setUserQuizStatistics(user.id, {
        ...DEFAULT_QUIZ_STATISTICS,
        id: user.id,
      }),
      setUserBalanceStatistics(user.id, {
        ...DEFAULT_BALANCE_STATISTICS,
        id: user.id,
      }),
      setUserCasinoStatistics(user.id, {
        ...DEFAULT_CASINO_STATISTICS,
        id: user.id,
      }),
    ]);
    if (message && message.channel?.isSendable()) {
      const embed = new EmbedBuilder()
        .setDescription(
          `Pour votre première interaction, voici vos pièces : +${DEFAULT_BALANCE_STATISTICS.won} ${GlobalEmotes.money}`
        )
        .setColor(Colors.Gold);
      return message.channel.send({
        content: `Bienvenue <@!${user.id}>`,
        embeds: [embed],
      });
    }
  }
};

export const logUser = async (
  user: DiscordUser,
  message: Interaction | Message,
  type: keyof InteractionStatistics
) => {
  const userLastActivity = await getUserLastActivity(user.id);
  const todayDate = new Date().getDate();
  const userLastDate = userLastActivity
    ? new Date(userLastActivity).getDate()
    : null;

  if (!userLastDate || userLastDate !== todayDate) {
    const userBalance = await getUserBalance(user.id);
    const dailyBonus =
      userBalance && Math.floor(userBalance / 10) > 100
        ? Math.floor(userBalance / 10)
        : 100;

    await Promise.all([
      addUserBalance(user.id, dailyBonus),
      addUserBalanceStatistics(user.id, dailyBonus),
      setUserLastActivity(user.id, Date.now()),
      addUserInteractionStatistics(user.id, type),
    ]);
    if (message.channel?.isSendable()) {
      const embed = new EmbedBuilder()
        .setDescription(
          `Pour votre première interaction du jour, voici un petit bonus de pièces : +${dailyBonus} ${GlobalEmotes.money}`
        )
        .setColor(Colors.Gold);
      return message.channel.send({
        content: `Bonjour <@!${user.id}>`,
        embeds: [embed],
      });
    }
  }
  return Promise.all([
    setUserLastActivity(user.id, Date.now()),
    addUserInteractionStatistics(user.id, type),
  ]);
};

export const commandNotAllowedInChannel = (
  interaction: CommandInteraction,
  commandChannel?: string
) => {
  if (
    !interaction.channelId ||
    !commandChannel ||
    commandChannel === interaction.channelId
  ) {
    return null;
  }
  const allowedGuildChannel = interaction.guild?.channels.cache?.find(
    (channel) => commandChannel === channel.id
  );
  const output = [
    `Vous ne pouvez pas exécuter la commande \`/${interaction.commandName}\` ici !`,
    allowedGuildChannel
      ? `Essayez dans le channel ${allowedGuildChannel}`
      : null,
  ].filter(Boolean);
  return { content: output.join("\n"), ephemeral: true };
};
