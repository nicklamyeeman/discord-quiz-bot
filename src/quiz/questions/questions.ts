import { Quiz, QuizNextQuestion } from "../../types/quiz";
import { WeightedQuizQuestion } from "../utils";
import { lolQuizQuestions } from "./lol/lol";
import { pokemonQuizQuestions } from "./pokemon/pokemon";
import { ssbuQuizQuestions } from "./ssbu/ssbu";

export const getQuizNextQuestion = async (
  rushTime: Quiz["rushTime"]
): Promise<QuizNextQuestion> => {
  let questionsPool = [];
  switch (rushTime) {
    case "pokemon":
      questionsPool = pokemonQuizQuestions;
      break;
    case "lol":
      questionsPool = lolQuizQuestions;
      break;
    case "ssbu":
      questionsPool = ssbuQuizQuestions;
    default:
      questionsPool = [
        ...pokemonQuizQuestions,
        ...lolQuizQuestions,
        ...ssbuQuizQuestions,
      ];
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
