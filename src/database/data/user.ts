import { User } from "../../types/user";
import { getDatabaseValue, setDatabaseValue } from "../utils";

/** Getters */

export async function getUserId(userId: string) {
  return getDatabaseValue<string>(`users/${userId}/id`);
}

export async function getUserBalance(userId: string) {
  return getDatabaseValue<number>(`users/${userId}/balance`);
}

/** Setters */

export async function setUser(user: User) {
  return setDatabaseValue<User>(`users/${user.id}`, user);
}

export async function setUserBalance(userId: string, balance: number) {
  return setDatabaseValue<number>(`users/${userId}/balance`, balance);
}
