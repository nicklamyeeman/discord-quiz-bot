import { createCanvas, loadImage } from "@napi-rs/canvas";
import { normalizeAnswer, whosThatPokemonBackgroundImage } from "../../utils";
import { Pokemon, pokemons, pokemonTypes, PokemonTypesKeys } from "./data";

export const POKEMON_IMAGE_PATH_BASE = "assets/images/pokemon/pokemons";

export const dualTypePokemons = Object.entries(pokemons)
  .filter(([, pokemon]) => pokemon.types.length === 2)
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof pokemons
  );

export const pokemonsWithPrevolution = Object.entries(pokemons)
  .filter(([, pokemon]) =>
    pokemon.evolutions?.some((evolution) => evolution.type === "prevolution")
  )
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof pokemons
  );

export const pokemonsWithEvolution = Object.entries(pokemons)
  .filter(([, pokemon]) =>
    pokemon.evolutions?.some((evolution) => evolution.type === "evolution")
  )
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof pokemons
  );

export const pokemonsWithLevelUpEvolution = Object.entries(pokemons)
  .filter(([, pokemon]) =>
    pokemon.evolutions?.some(
      (evolution) => evolution.type === "evolution" && !!evolution.level
    )
  )
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof pokemons
  );

export const getRandomPokemonFrom = (pokemons: { [id: string]: Pokemon }) => {
  const pokemonIndex = Math.floor(
    Math.random() * Object.entries(pokemons).length
  );
  return Object.entries(pokemons)[pokemonIndex][1];
};

export const generateTypesAnwer = (
  types: Array<(typeof pokemonTypes)[PokemonTypesKeys]>
) => {
  const typesAnswer = [
    `${types.map((type) => normalizeAnswer(type.name)).join("\\W*")}`,
    `${types
      .reverse()
      .map((type) => normalizeAnswer(type.name))
      .join("\\W*")}`,
  ];
  if (types[0] && !!types[0].alias) {
    const firstTypeAlias = [types[0].alias, types[1]?.name].filter(Boolean);
    typesAnswer.push(
      firstTypeAlias.map((type) => normalizeAnswer(type)).join("\\W*")
    );
    typesAnswer.push(
      firstTypeAlias
        .reverse()
        .map((type) => normalizeAnswer(type))
        .join("\\W*")
    );
  }
  if (types[1] && !!types[1].alias) {
    const secondTypeAlias = [types[0].name, types[1].alias].filter(Boolean);
    typesAnswer.push(
      secondTypeAlias.map((type) => normalizeAnswer(type)).join("\\W*")
    );
    typesAnswer.push(
      secondTypeAlias
        .reverse()
        .map((type) => normalizeAnswer(type))
        .join("\\W*")
    );
  }
  if (types[0] && !!types[0].alias && types[1] && !!types[1].alias) {
    const bothTypesAlias = [types[0].alias, types[1].alias];
    typesAnswer.push(
      bothTypesAlias.map((type) => normalizeAnswer(type)).join("\\W*")
    );
    typesAnswer.push(
      bothTypesAlias
        .reverse()
        .map((type) => normalizeAnswer(type))
        .join("\\W*")
    );
  }
  return typesAnswer.join("|");
};

export const getWhosThatPokemonImage = async (
  pokemon: Pokemon | null,
  useFemale: boolean = false,
  isFinal?: boolean
) => {
  const imageCanvas = createCanvas(
    whosThatPokemonBackgroundImage.width,
    whosThatPokemonBackgroundImage.height
  );
  const imageContext = imageCanvas.getContext("2d");
  imageContext.drawImage(
    whosThatPokemonBackgroundImage,
    0,
    0,
    whosThatPokemonBackgroundImage.width,
    whosThatPokemonBackgroundImage.height
  );

  const pokemonImage = await loadImage(
    `./${POKEMON_IMAGE_PATH_BASE}/${pokemon?.id ?? pokemons["0"].id}${
      useFemale ? "-f" : ""
    }.png`
  );
  if (!isFinal) {
    const pokemonCanvas = createCanvas(pokemonImage.width, pokemonImage.height);
    const pokemonContext = pokemonCanvas.getContext("2d");
    pokemonContext.fillStyle = "#222";
    pokemonContext.fillRect(0, 0, pokemonImage.width, pokemonImage.height);
    pokemonContext.globalCompositeOperation = "destination-in";
    pokemonContext.drawImage(
      pokemonImage,
      0,
      0,
      pokemonImage.width,
      pokemonImage.height
    );
    imageContext.drawImage(pokemonCanvas, 12, 0);
  } else {
    imageContext.drawImage(
      pokemonImage,
      12,
      0,
      pokemonImage.width,
      pokemonImage.height
    );
  }
  return imageCanvas.encode("png");
};
