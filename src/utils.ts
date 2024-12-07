import { CommandInteraction, User as DiscordUser } from "discord.js";

import {
  setUserBalanceStatistics,
  setUserCasinoStatistics,
  setUserInteractionStatistics,
  setUserQuizStatistics,
} from "./database/data/statistics";
import { getUserId, setUser } from "./database/data/user";
import {
  DEFAULT_BALANCE_STATISTICS,
  DEFAULT_CASINO_STATISTICS,
  DEFAULT_INTERACTION_STATISTICS,
  DEFAULT_PROFILE_CARD,
  DEFAULT_QUIZ_STATISTICS,
} from "./types/constants";

export const runOnInterval = (
  callback: (...args: any) => any,
  interval: number
) => {
  callback();
  setInterval(callback, interval);
};

export const initUser = async (user: DiscordUser) => {
  const userId = await getUserId(user.id);
  if (!userId) {
    await Promise.all([
      setUser({
        id: user.id,
        name: user.username,
        balance: DEFAULT_BALANCE_STATISTICS.won,
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
  }
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
