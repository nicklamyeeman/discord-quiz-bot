import { Quiz } from "./quiz";
import { UserStatistics } from "./statistics";
import { User } from "./user";

export type Database = {
  quiz: Quiz;
  statistics: UserStatistics;
  users: {
    [key: string]: User;
  };
  activity: {
    lastUpdate: number;
  };
};
