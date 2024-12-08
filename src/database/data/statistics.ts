import {
  BalanceStatistics,
  CasinoStatistics,
  InteractionStatistics,
  QuizStatistics,
} from "../../types/statistics";
import { getDatabaseValue, setDatabaseValue } from "../utils";

/** Getters */

export const getUserInteractionStatistics = (userId: string) => {
  return getDatabaseValue<InteractionStatistics>(
    `/statistics/interaction/${userId}`
  );
};

export const getUserQuizStatistics = (userId: string) => {
  return getDatabaseValue<QuizStatistics>(`statistics/quiz/${userId}`);
};

export const getUserBalanceStatistics = (userId: string) => {
  return getDatabaseValue<BalanceStatistics>(`statistics/balance/${userId}`);
};

export const getUserCasinoStatistics = (userId: string) => {
  return getDatabaseValue<CasinoStatistics>(`statistics/casino/${userId}`);
};

/** Setters */

export const setUserInteractionStatistic = (
  userId: string,
  key: keyof InteractionStatistics,
  value: number
) => {
  return setDatabaseValue<InteractionStatistics[typeof key]>(
    `statistics/interaction/${userId}/${key}`,
    value
  );
};

export const setUserQuizStatistic = (
  userId: string,
  key: keyof QuizStatistics,
  value: number
) => {
  return setDatabaseValue<QuizStatistics[typeof key]>(
    `statistics/quiz/${userId}/${key}`,
    value
  );
};
export const setUserBalanceStatistic = (
  userId: string,
  key: keyof BalanceStatistics,
  value: number
) => {
  return setDatabaseValue<BalanceStatistics[typeof key]>(
    `statistics/balance/${userId}/${key}`,
    value
  );
};
export const setUserCasinoStatistic = (
  userId: string,
  key: keyof CasinoStatistics,
  value: number
) => {
  return setDatabaseValue<CasinoStatistics[typeof key]>(
    `statistics/casino/${userId}/${key}`,
    value
  );
};

export const setUserInteractionStatistics = (
  userId: string,
  value: InteractionStatistics & { id: string }
) => {
  return setDatabaseValue<InteractionStatistics & { id: string }>(
    `statistics/interaction/${userId}`,
    value
  );
};
export const setUserQuizStatistics = (
  userId: string,
  value: QuizStatistics & { id: string }
) => {
  return setDatabaseValue<QuizStatistics & { id: string }>(
    `statistics/quiz/${userId}`,
    value
  );
};
export const setUserBalanceStatistics = (
  userId: string,
  value: BalanceStatistics & { id: string }
) => {
  return setDatabaseValue<BalanceStatistics & { id: string }>(
    `statistics/balance/${userId}`,
    value
  );
};
export const setUserCasinoStatistics = (
  userId: string,
  value: CasinoStatistics & { id: string }
) => {
  return setDatabaseValue<CasinoStatistics & { id: string }>(
    `statistics/casino/${userId}`,
    value
  );
};

/** Adders */

export const addUserBalanceStatistics = async (
  userId: string,
  diff: number
) => {
  const userBalanceStatistics = await getUserBalanceStatistics(userId);
  const totalWon = userBalanceStatistics?.won ?? 0;
  const totalSpent = userBalanceStatistics?.spent ?? 0;

  return setUserBalanceStatistic(
    userId,
    diff < 0 ? "spent" : "won",
    diff < 0 ? totalSpent + Math.abs(diff) : totalWon + diff
  );
};

export const addUserCasinoStatistics = async (
  userId: string,
  bet: number,
  diff: number
) => {
  const userCasinoStatistics = await getUserCasinoStatistics(userId);
  const totalPlayed = userCasinoStatistics?.played ?? 0;
  const totalWon = userCasinoStatistics?.won ?? 0;
  const totalLost = userCasinoStatistics?.lost ?? 0;
  const totalBet = userCasinoStatistics?.bet ?? 0;

  return Promise.all([
    setUserCasinoStatistic(userId, "played", totalPlayed + 1),
    setUserCasinoStatistic(
      userId,
      diff < 0 ? "lost" : "won",
      diff < 0 ? totalLost + 1 : totalWon + 1
    ),
    setUserCasinoStatistic(userId, "bet", totalBet + bet),
  ]);
};

export const addUserInteractionStatistics = async (
  userId: string,
  type: keyof InteractionStatistics
) => {
  const userInteractionStatistics = await getUserInteractionStatistics(userId);
  const totalMessage = userInteractionStatistics?.messages ?? 0;
  const totalCommands = userInteractionStatistics?.commands ?? 0;

  return setUserInteractionStatistic(
    userId,
    type,
    type === "messages" ? totalMessage + 1 : totalCommands + 1
  );
};

export const addUserQuizStatistics = async (
  userId: string,
  type: keyof QuizStatistics
) => {
  const userQuizStatistics = await getUserQuizStatistics(userId);
  const totalWon = userQuizStatistics?.won ?? 0;

  return setUserQuizStatistic(userId, type, totalWon + 1);
};
