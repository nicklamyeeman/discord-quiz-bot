export type PokemonTypesKeys =
  | "steel"
  | "fighting"
  | "dragon"
  | "water"
  | "electric"
  | "fairy"
  | "fire"
  | "ice"
  | "insect"
  | "normal"
  | "grass"
  | "poison"
  | "psychic"
  | "rock"
  | "ground"
  | "ghost"
  | "dark"
  | "flying";

export const pokemonTypes: {
  [key in PokemonTypesKeys]: { name: string; alias?: string; emoji: string };
} = {
  steel: {
    name: "Acier",
    emoji: "<:type_acier:1315246300278554665>",
  },
  fighting: {
    name: "Combat",
    emoji: "<:type_combat:1315246319539064853>",
  },
  dragon: {
    name: "Dragon",
    emoji: "<:type_dragon:1315246334495948830>",
  },
  water: {
    name: "Eau",
    emoji: "<:type_eau:1315246351935602788>",
  },
  electric: {
    name: "Électrik",
    alias: "Élec",
    emoji: "<:type_electrik:1315246367383224352>",
  },
  fairy: {
    name: "Fée",
    emoji: "<:type_fee:1315246384890384466>",
  },
  fire: {
    name: "Feu",
    emoji: "<:type_feu:1315246399583162419>",
  },
  ice: {
    name: "Glace",
    emoji: "<:type_glace:1315246416834203738>",
  },
  insect: {
    name: "Insecte",
    emoji: "<:type_insecte:1315246439479250984>",
  },
  normal: {
    name: "Normal",
    emoji: "<:type_normal:1315246454339666000>",
  },
  grass: {
    name: "Plante",
    emoji: "<:type_plante:1315246467635613697>",
  },
  poison: {
    name: "Poison",
    emoji: "<:type_poison:1315246481036546069>",
  },
  psychic: {
    name: "Psy",
    emoji: "<:type_psy:1315246494466445372>",
  },
  rock: {
    name: "Roche",
    emoji: "<:type_roche:1315246516402913341>",
  },
  ground: {
    name: "Sol",
    emoji: "<:type_sol:1315246537269317692>",
  },
  ghost: {
    name: "Spectre",
    emoji: "<:type_spectre:1315246551525756989>",
  },
  dark: {
    name: "Ténèbres",
    emoji: "<:type_tenebres:1315246564947525663>",
  },
  flying: {
    name: "Vol",
    emoji: "<:type_vol:1315246581062303794",
  },
};

export const pokemons: {
  [id: string]: {
    id: string;
    name: string;
    type: Array<PokemonTypesKeys>;
    femaleVariation?: boolean;
    evolutions?: Array<{
      type: "evolution" | "prevolution";
      id: string;
      name: string;
      level?: number;
    }>;
  };
} = {
  "0": {
    id: "0",
    name: "MissingNo",
    type: ["normal"],
  },
  "1": {
    id: "1",
    name: "Bulbizarre",
    type: ["grass", "poison"],
    evolutions: [
      {
        type: "evolution",
        id: "2",
        name: "Herbizarre",
        level: 16,
      },
    ],
  },
  "2": {
    id: "2",
    name: "Herbizarre",
    type: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "1",
        name: "Bulbizarre",
      },
      {
        type: "evolution",
        id: "3",
        name: "Florizarre",
        level: 32,
      },
    ],
  },
  "3": {
    id: "3",
    name: "Florizarre",
    type: ["grass", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "2",
        name: "Herbizarre",
      },
      {
        type: "evolution",
        id: "3.01",
        name: "Méga-Florizarre",
      },
      {
        type: "evolution",
        id: "3.02",
        name: "Florizarre Gigamax",
      },
    ],
  },
  "3.01": {
    id: "3.01",
    name: "Méga-Florizarre",
    type: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "3",
        name: "Florizarre",
      },
    ],
  },
  "3.02": {
    id: "3.02",
    name: "Florizarre Gigamax",
    type: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "3",
        name: "Florizarre",
      },
    ],
  },
};
