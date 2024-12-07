import { User } from "../../types/user";
import { getDatabaseValue, setDatabaseValue } from "../utils";

/** Getters */

export const getUserId = (userId: string) => {
  return getDatabaseValue<string>(`users/${userId}/id`);
};

export const getUserLastActivity = (userId: string) => {
  return getDatabaseValue<number>(`users/${userId}/lastActivity`);
};

export const getUserBalance = (userId: string) => {
  return getDatabaseValue<number>(`users/${userId}/balance`);
};

/** Setters */

export const setUser = (user: User) => {
  return setDatabaseValue<User>(`users/${user.id}`, user);
};

export const setUserLastActivity = (userId: string, lastActivity: number) => {
  return setDatabaseValue<number>(`users/${userId}/lastActivity`, lastActivity);
};

export const setUserBalance = (userId: string, balance: number) => {
  return setDatabaseValue<number>(`users/${userId}/balance`, balance);
};

/** Adders */

export const addUserBalance = async (userId: string, amount: number) => {
  const userBalance = await getUserBalance(userId);
  return setUserBalance(userId, (userBalance ?? 0) + amount);
};
