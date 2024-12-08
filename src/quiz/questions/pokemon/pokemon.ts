import { AttachmentBuilder, Colors, EmbedBuilder, Message } from "discord.js";
import { GlobalEmotes } from "../../../types/constants";
import { QuizNextQuestion } from "../../../types/quiz";
import { getRewardAmount } from "../../utils";
import { pokemonTypes } from "./data";
import {
  dualTypePokemons,
  normalizeAnswer,
  POKEMON_IMAGE_PATH_BASE,
} from "./utils";

const nameDualTypePokemon = (): QuizNextQuestion => {
  const pokemonIndex = Math.floor(
    Math.random() * Object.entries(dualTypePokemons).length
  );
  const [, selectedPokemon] = Object.entries(dualTypePokemons)[pokemonIndex];

  const types = [
    pokemonTypes[selectedPokemon.type[0]],
    pokemonTypes[selectedPokemon.type[1]],
  ];

  const eligiblePokemons = Object.values(dualTypePokemons).filter(
    (pokemon) =>
      pokemon.type.every((type) => selectedPokemon.type.includes(type)) &&
      pokemon.type.length === 2
  );
  const answer = new RegExp(
    `^\\W*${eligiblePokemons
      .map((pokemon) => normalizeAnswer(pokemon.name))
      .join("\\b|")}\\b`,
    "i"
  );
  const reward = getRewardAmount();

  const description = [
    `Citez un Pokémon à la fois de type ${types[0].emoji} ${types[0].name} & de type ${types[1].emoji} ${types[1].name}`,
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);

  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const file = new AttachmentBuilder(
    `${POKEMON_IMAGE_PATH_BASE}/${selectedPokemon.id}${
      femaleVariation ? "-f" : ""
    }.png`,
    { name: "pokemon.png" }
  );

  const embed = new EmbedBuilder()
    .setTitle("Citez un Pokémon Double-Type !")
    .setDescription(description.join("\n"))
    .setColor(Colors.DarkOrange);

  return {
    embed,
    answer,
    reward,
    onEnd: (message: Message) => {
      const newEmbed = new EmbedBuilder()
        .setTitle(`Les Pokémon possibles sont :`)
        .setDescription(
          `${eligiblePokemons
            .map((pokemon) => pokemon.name)
            .splice(0, 10)
            .join("\n")}${eligiblePokemons.length > 10 ? "\net plus..." : "!"}`
        )
        .setThumbnail("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [file] });
    },
  };
};

// whos that pokemon
// whos the evolution
// whos the prevolution

// pokemon level evolution
// what pokemon id

// whats the type

export const pokemonQuizQuestions = [nameDualTypePokemon];
