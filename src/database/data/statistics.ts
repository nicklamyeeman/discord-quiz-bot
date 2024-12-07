import {
  BalanceStatistics,
  CasinoStatistics,
  InteractionStatistics,
  QuizStatistics,
} from "../../types/statistics";
import { getDatabaseValue, setDatabaseValue } from "../utils";

/** Getters */

export async function getUserInteractionStatistics(userId: string) {
  return getDatabaseValue<InteractionStatistics>(
    `users/${userId}/statistics/interaction`
  );
}

export async function getUserQuizStatistics(userId: string) {
  return getDatabaseValue<QuizStatistics>(`users/${userId}/statistics/quiz`);
}

export async function getUserBalanceStatistics(userId: string) {
  return getDatabaseValue<BalanceStatistics>(
    `users/${userId}/statistics/balance`
  );
}

export async function getUserCasinoStatistics(userId: string) {
  return getDatabaseValue<CasinoStatistics>(
    `users/${userId}/statistics/casino`
  );
}

/** Setters */

export async function setUserInteractionStatistic(
  userId: string,
  key: keyof InteractionStatistics,
  value: number
) {
  return setDatabaseValue<InteractionStatistics[typeof key]>(
    `statistics/interaction/${userId}/${key}`,
    value
  );
}

export async function setUserQuizStatistic(
  userId: string,
  key: keyof QuizStatistics,
  value: number
) {
  return setDatabaseValue<QuizStatistics[typeof key]>(
    `statistics/quiz/${userId}/${key}`,
    value
  );
}
export async function setUserBalanceStatistic(
  userId: string,
  key: keyof BalanceStatistics,
  value: number
) {
  return setDatabaseValue<BalanceStatistics[typeof key]>(
    `statistics/balance/${userId}/${key}`,
    value
  );
}
export async function setUserCasinoStatistic(
  userId: string,
  key: keyof CasinoStatistics,
  value: number
) {
  return setDatabaseValue<CasinoStatistics[typeof key]>(
    `statistics/casino/${userId}/${key}`,
    value
  );
}

export async function setUserInteractionStatistics(
  userId: string,
  value: InteractionStatistics & { id: string }
) {
  return setDatabaseValue<InteractionStatistics & { id: string }>(
    `statistics/interaction/${userId}`,
    value
  );
}
export async function setUserQuizStatistics(
  userId: string,
  value: QuizStatistics & { id: string }
) {
  return setDatabaseValue<QuizStatistics & { id: string }>(
    `statistics/quiz/${userId}`,
    value
  );
}
export async function setUserBalanceStatistics(
  userId: string,
  value: BalanceStatistics & { id: string }
) {
  return setDatabaseValue<BalanceStatistics & { id: string }>(
    `statistics/balance/${userId}`,
    value
  );
}
export async function setUserCasinoStatistics(
  userId: string,
  value: CasinoStatistics & { id: string }
) {
  return setDatabaseValue<CasinoStatistics & { id: string }>(
    `statistics/casino/${userId}`,
    value
  );
}

/** Adders */

export async function addUserBalanceStatistics(userId: string, diff: number) {
  const userBalanceStatistics = await getUserBalanceStatistics(userId);
  const totalWon = userBalanceStatistics?.won ?? 0;
  const totalSpent = userBalanceStatistics?.spent ?? 0;

  return setUserBalanceStatistic(
    userId,
    diff < 0 ? "spent" : "won",
    diff < 0 ? totalSpent + Math.abs(diff) : totalWon + diff
  );
}

export async function addUserCasinoStatistics(
  userId: string,
  bet: number,
  diff: number
) {
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
}
