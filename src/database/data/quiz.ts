import { DataSnapshot } from "acebase";
import { Quiz } from "../../types/quiz";
import { database } from "../database";
import { getDatabaseValue, setDatabaseValue } from "../utils";

/** Getters */

export const getQuizIsLive = () => {
  return getDatabaseValue<boolean>("quiz/isLive");
};

export const getQuizRushTime = () => {
  return getDatabaseValue<Quiz["rushTime"]>("quiz/rushTime");
};

/** Setters */

export const setQuizIsLive = (value: boolean) => {
  return setDatabaseValue<boolean>("quiz/isLive", value);
};

export const setQuizRushTime = (value: Quiz["rushTime"]) => {
  return setDatabaseValue<Quiz["rushTime"]>("quiz/rushTime", value);
};

/** Listeners */

export const listenQuiz = (
  callback: (snapshot: DataSnapshot<Quiz>) => void
) => {
  return database.ref<Quiz["rushTime"]>("quiz").on("value", callback);
};
