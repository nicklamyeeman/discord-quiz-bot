import { pokemons } from "./data";

export const POKEMON_IMAGE_PATH_BASE = "assets/images/pokemon";

export const normalizeAnswer = (answer: string) =>
  answer
    .replaceAll(/(â|à|ä)/gi, "a")
    .replaceAll(/(é|ê|è|ë)/gi, "e")
    .replaceAll(/(î|ï)/gi, "i")
    .replaceAll(/(ô|ö)/gi, "o")
    .replaceAll(/(ç)/gi, "c")
    .replaceAll(/\W|_/gi, ".?");

export const dualTypePokemons = Object.entries(pokemons)
  .filter(([, pokemon]) => pokemon.type.length === 2)
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof pokemons
  );
