import { QuizNextQuestion } from "../../types/quiz";
import { lolQuizQuestions } from "./lol";
import { pokemonQuizQuestions } from "./pokemon/pokemon";

export const getQuizNextQuestion = async (
  rushTime: "all" | "pokemon" | "lol" | null
): Promise<QuizNextQuestion> => {
  let question: (() => QuizNextQuestion) | (() => Promise<QuizNextQuestion>);
  let random = 0;
  switch (rushTime) {
    case "pokemon":
      random = Math.floor(Math.random() * pokemonQuizQuestions.length);
      question = pokemonQuizQuestions[random];
      break;
    case "lol":
      random = Math.floor(Math.random() * lolQuizQuestions.length);
      question = lolQuizQuestions[random];
      break;
    default:
      random = Math.floor(
        Math.random() * [...pokemonQuizQuestions, ...lolQuizQuestions].length
      );
      question = [...pokemonQuizQuestions, ...lolQuizQuestions][random];
  }
  return question();
};
