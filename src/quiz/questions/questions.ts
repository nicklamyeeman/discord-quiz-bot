import { QuizNextQuestion } from "../../types/quiz";
import { WeightedQuizQuestion } from "../utils";
import { lolQuizQuestions } from "./lol/lol";
import { pokemonQuizQuestions } from "./pokemon/pokemon";

export const getQuizNextQuestion = async (
  rushTime: "all" | "pokemon" | "lol" | null
): Promise<QuizNextQuestion> => {
  let questionsPool = [];
  switch (rushTime) {
    case "pokemon":
      questionsPool = pokemonQuizQuestions;
      break;
    case "lol":
      questionsPool = lolQuizQuestions;
      break;
    default:
      questionsPool = [...pokemonQuizQuestions, ...lolQuizQuestions];
      break;
  }
  let randomRange = 0;
  const questions: WeightedQuizQuestion[] = questionsPool.map((question) => {
    randomRange += question.weight;
    return {
      option: question.option,
      weight: randomRange,
    };
  });
  const random = Math.floor(Math.random() * randomRange);
  const question =
    questions.find((question) => question.weight > random) ??
    questions.splice(-1)[0];
  return question.option();
};
