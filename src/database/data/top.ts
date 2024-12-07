import {
  BalanceStatistics,
  CasinoStatistics,
  InteractionStatistics,
  QuizStatistics,
} from "../../types/statistics";
import { User } from "../../types/user";
import { getSortedDatabaseValue } from "../utils";

export const getTopUsersBalances = (options?: { limitTo?: number }) => {
  return getSortedDatabaseValue<User>(`users`, {
    sortBy: "balance",
    asc: false,
    limitTo: options?.limitTo ?? 20,
  });
};

export const getTopUsersInteractionStatistics = (
  key: keyof InteractionStatistics,
  options?: { limitTo?: number }
) => {
  return getSortedDatabaseValue<{
    [userId: string]: InteractionStatistics & { id: string };
  }>(`statistics/interaction`, {
    sortBy: key,
    asc: false,
    limitTo: options?.limitTo ?? 20,
  });
};

export const getTopUsersQuizStatistics = (
  key: keyof QuizStatistics,
  options?: { limitTo?: number }
) => {
  return getSortedDatabaseValue<{
    [userId: string]: QuizStatistics & { id: string };
  }>(`statistics/quiz`, {
    sortBy: key,
    asc: false,
    limitTo: options?.limitTo ?? 20,
  });
};

export const getTopUsersBalanceStatistics = (
  key: keyof BalanceStatistics,
  options?: { limitTo?: number }
) => {
  return getSortedDatabaseValue<{
    [userId: string]: BalanceStatistics & { id: string };
  }>(`statistics/balance`, {
    sortBy: key,
    asc: false,
    limitTo: options?.limitTo ?? 20,
  });
};

export const getTopUsersCasinoStatistics = (
  key: keyof CasinoStatistics,
  options?: { limitTo?: number }
) => {
  return getSortedDatabaseValue<{
    [userId: string]: CasinoStatistics & { id: string };
  }>(`statistics/casino`, {
    sortBy: key,
    asc: false,
    limitTo: options?.limitTo ?? 20,
  });
};
