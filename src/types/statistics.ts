export type InteractionStatistics = {
  messages: number;
  commands: number;
};

export type QuizStatistics = {
  won: number;
};

export type BalanceStatistics = {
  won: number;
  spent: number;
};

export type CasinoStatistics = {
  played: number;
  won: number;
  lost: number;
  bet: number;
};

export type UserStatistics = {
  interaction: {
    [userId: string]: InteractionStatistics & { id: string };
  };
  quiz: {
    [userId: string]: QuizStatistics & { id: string };
  };
  balance: {
    [userId: string]: BalanceStatistics & { id: string };
  };
  casino: {
    [userId: string]: CasinoStatistics & { id: string };
  };
};
