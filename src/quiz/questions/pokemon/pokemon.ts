import { AttachmentBuilder, Colors, EmbedBuilder, Message } from "discord.js";
import { GlobalEmotes } from "../../../types/constants";
import { QuizNextQuestion } from "../../../types/quiz";
import { getRewardAmount } from "../../utils";
import { pokemons, pokemonTypes } from "./data";
import {
  dualTypePokemons,
  generateTypesAnwer,
  getRandomPokemonFrom,
  getWhosThatPokemonImage,
  normalizeAnswer,
  POKEMON_IMAGE_PATH_BASE,
  pokemonsWithEvolution,
  pokemonsWithLevelUpEvolution,
  pokemonsWithPrevolution,
} from "./utils";

const nameDualTypePokemon = (): QuizNextQuestion => {
  const selectedPokemon = getRandomPokemonFrom(dualTypePokemons);
  const types = selectedPokemon.types.map((type) => pokemonTypes[type]);
  const eligiblePokemons = Object.values(dualTypePokemons).filter(
    (pokemon) =>
      pokemon.types.every((type) => selectedPokemon.types.includes(type)) &&
      pokemon.types.length === 2
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

const whatsThePokemonType = async (): Promise<QuizNextQuestion> => {
  const selectedPokemon = getRandomPokemonFrom(pokemons);
  const types = selectedPokemon.types.map((type) => pokemonTypes[type]);
  const memeAnswer =
    selectedPokemon.types.includes("flying") &&
    selectedPokemon.types.includes("normal")
      ? "bir[bd]"
      : "";

  const answer = new RegExp(
    `^\\W*(${generateTypesAnwer(types)}${
      memeAnswer ? `|${memeAnswer}` : ""
    })\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = ["Citez le ou les type(s) de ce Pokémon ?"];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);
  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const base64Image = await getWhosThatPokemonImage(
    selectedPokemon,
    femaleVariation
  );
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le(s) type(s) !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkOrange);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const base64FinalImage = await getWhosThatPokemonImage(
        selectedPokemon,
        femaleVariation,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "pokemon.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`Ce Pokémon possède le(s) type(s) :`)
        .setDescription(
          `${types
            .reverse()
            .map((type) => `${type.emoji} ${type.name}`)
            .join("\n")}`
        )
        .setImage("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whatsThePokemonId = async (): Promise<QuizNextQuestion> => {
  const selectedPokemon = getRandomPokemonFrom(pokemons);
  const pokemonId = Math.trunc(Number(selectedPokemon.id));

  const answer = new RegExp(`^\\W*#?${pokemonId}\\b`, "i");

  const reward = getRewardAmount();
  const description = [
    "Quel est le numéro de ce Pokémon dans le Pokédex national ?",
  ];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);
  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const base64Image = await getWhosThatPokemonImage(
    selectedPokemon,
    femaleVariation
  );
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le numéro du Pokédex !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkOrange);

  return {
    embed,
    file,
    answer,
    reward,
    incorrectReaction: (message: string) => {
      const guessedID = parseFloat(message);
      if (Number.isNaN(guessedID)) {
        return null;
      }
      if (guessedID < pokemonId) {
        return "⬆️";
      }

      if (guessedID > pokemonId) {
        return "⬇️";
      }
      return null;
    },
    onEnd: async (message: Message) => {
      const base64FinalImage = await getWhosThatPokemonImage(
        selectedPokemon,
        femaleVariation,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "pokemon.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est le Pokémon #${pokemonId} !`)
        .setImage("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whatsThePokemonEvolutionLevel = async (): Promise<QuizNextQuestion> => {
  const selectedPokemon = getRandomPokemonFrom(pokemonsWithLevelUpEvolution);
  const selectedPokemonEvolution = selectedPokemon.evolutions
    ?.filter((evolution) => evolution.type === "evolution")
    .shift();
  const pokemonEvolutionLevel = Number(selectedPokemonEvolution?.level);

  const answer = new RegExp(`^\\W*${pokemonEvolutionLevel}\\b`, "i");

  const reward = getRewardAmount();
  const description = ["À quel niveau évolue ce Pokémon ?"];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);
  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const base64Image = await getWhosThatPokemonImage(
    selectedPokemon,
    femaleVariation
  );
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le niveau d'évolution !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkOrange);

  return {
    embed,
    file,
    answer,
    reward,
    incorrectReaction: (message: string) => {
      const guessedLevel = parseFloat(message);
      if (Number.isNaN(guessedLevel)) {
        return null;
      }
      if (guessedLevel < pokemonEvolutionLevel) {
        return "⬆️";
      }

      if (guessedLevel > pokemonEvolutionLevel) {
        return "⬇️";
      }
      return null;
    },
    onEnd: async (message: Message) => {
      const pokemonEvolution =
        pokemons[selectedPokemonEvolution?.id ?? selectedPokemon.id];
      const base64FinalImage = await getWhosThatPokemonImage(
        pokemonEvolution,
        false,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "pokemon.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`Il évolue au niveau ${pokemonEvolutionLevel} !`)
        .setImage("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whosThatPokemon = async (): Promise<QuizNextQuestion> => {
  const selectedPokemon = getRandomPokemonFrom(pokemons);

  const answer = new RegExp(
    `^\\W*${normalizeAnswer(selectedPokemon.name)}\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = ["Quel est ce Pokémon ?"];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);
  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const base64Image = await getWhosThatPokemonImage(
    selectedPokemon,
    femaleVariation
  );
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez le Pokémon !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkOrange);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const base64FinalImage = await getWhosThatPokemonImage(
        selectedPokemon,
        femaleVariation,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "pokemon.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`C'est ${selectedPokemon.name} !`)
        .setImage("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whosThePokemonEvolution = async (): Promise<QuizNextQuestion> => {
  const selectedPokemon = getRandomPokemonFrom(pokemonsWithEvolution);
  const selectedPokemonEvolutions = selectedPokemon.evolutions?.filter(
    (evolution) => evolution.type === "evolution"
  );

  const answer = new RegExp(
    `^\\W*(${selectedPokemonEvolutions
      ?.map((pokemon) => normalizeAnswer(pokemon.name))
      .join("|")})\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = ["Citez une évolution de ce Pokémon"];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);
  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const base64Image = await getWhosThatPokemonImage(
    selectedPokemon,
    femaleVariation
  );
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez l'évolution !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkOrange);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const evolvedPokemonId =
        selectedPokemonEvolutions?.[
          Math.floor(Math.random() * (selectedPokemonEvolutions?.length ?? 0))
        ]?.id;
      const evolvedPokemon = Object.values(pokemons).find(
        (pokemon) => pokemon.id === evolvedPokemonId
      );
      const base64FinalImage = await getWhosThatPokemonImage(
        evolvedPokemon ?? null,
        false,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "pokemon.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`Les évoluions de ce Pokémon sont :`)
        .setDescription(
          `${selectedPokemonEvolutions
            ?.map((pokemon) => pokemon.name)
            .splice(0, 10)
            .join("\n")}${
            (selectedPokemonEvolutions?.length ?? 0) > 10 ? "\net plus..." : "!"
          }`
        )
        .setImage("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

const whosThePokemonPrevolution = async (): Promise<QuizNextQuestion> => {
  const selectedPokemon = getRandomPokemonFrom(pokemonsWithPrevolution);
  const selectedPokemonPrevolutions = selectedPokemon.evolutions?.filter(
    (evolution) => evolution.type === "prevolution"
  );

  const answer = new RegExp(
    `^\\W*(${selectedPokemonPrevolutions
      ?.map((pokemon) => normalizeAnswer(pokemon.name))
      .join("|")})\\b`,
    "i"
  );

  const reward = getRewardAmount();
  const description = ["Citez une pré-évolution de ce Pokémon"];
  description.push(`**+${reward} ${GlobalEmotes.money}**`);
  const femaleVariation = selectedPokemon.femaleVariation
    ? Math.random() < 0.5
    : false;

  const base64Image = await getWhosThatPokemonImage(
    selectedPokemon,
    femaleVariation
  );
  const file = new AttachmentBuilder(base64Image, { name: "who.png" });
  const embed = new EmbedBuilder()
    .setTitle("Trouvez la pré-évolution !")
    .setDescription(description.join("\n"))
    .setImage("attachment://who.png")
    .setColor(Colors.DarkOrange);

  return {
    embed,
    file,
    answer,
    reward,
    onEnd: async (message: Message) => {
      const prevolvedPokemonId =
        selectedPokemonPrevolutions?.[
          Math.floor(Math.random() * (selectedPokemonPrevolutions?.length ?? 0))
        ]?.id;
      const prevolvedPokemon = Object.values(pokemons).find(
        (pokemon) => pokemon.id === prevolvedPokemonId
      );
      const base64FinalImage = await getWhosThatPokemonImage(
        prevolvedPokemon ?? null,
        false,
        true
      );
      const finalFile = new AttachmentBuilder(base64FinalImage, {
        name: "pokemon.png",
      });
      const newEmbed = new EmbedBuilder()
        .setTitle(`Les évoluions de ce Pokémon sont :`)
        .setDescription(
          `${selectedPokemonPrevolutions
            ?.map((pokemon) => pokemon.name)
            .splice(0, 10)
            .join("\n")}${
            (selectedPokemonPrevolutions?.length ?? 0) > 10
              ? "\net plus..."
              : "!"
          }`
        )
        .setImage("attachment://pokemon.png")
        .setColor(Colors.DarkGreen);

      message.reply({ embeds: [newEmbed], files: [finalFile] });
    },
  };
};

export const pokemonQuizQuestions = [
  nameDualTypePokemon,
  whatsThePokemonType,
  whatsThePokemonId,
  whatsThePokemonEvolutionLevel,
  whosThatPokemon,
  whosThePokemonEvolution,
  whosThePokemonPrevolution,
];
