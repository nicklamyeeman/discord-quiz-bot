import {
  BalanceStatistics,
  CasinoStatistics,
  InteractionStatistics,
  QuizStatistics,
} from "./statistics";
import { ProfileCard } from "./user";

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

export const DEFAULT_INTERACTION_STATISTICS: InteractionStatistics = {
  messages: 0,
  commands: 0,
};

export const DEFAULT_QUIZ_STATISTICS: QuizStatistics = {
  won: 0,
};

export const DEFAULT_BALANCE_STATISTICS: BalanceStatistics = {
  won: 2000,
  spent: 0,
};

export const DEFAULT_CASINO_STATISTICS: CasinoStatistics = {
  played: 0,
  won: 0,
  lost: 0,
  bet: 0,
};

export const DEFAULT_PROFILE_CARD: ProfileCard = {
  backgroundId: "default",
  avatarId: "default",
  rankId: "default",
  badgesIds: [],
};

export const GameThemes = [
  "Pokémon",
  "League of Legends",
  "Super Smash Bros",
  "Path of Exile",
] as const;

export const GlobalEmotes = {
  money: "<:money:1309545038761689098>",
} as const;
