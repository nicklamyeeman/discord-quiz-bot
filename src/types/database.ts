import { User } from "./user";

export type Database = {
  users: {
    [key: string]: User;
  };
  activity: {
    lastUpdate: number;
    lastBackup: number;
  };
};
