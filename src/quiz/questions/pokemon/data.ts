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

export type Pokemon = {
  id: string;
  name: string;
  types: Array<PokemonTypesKeys>;
  femaleVariation?: boolean;
  evolutions?: Array<{
    type: "evolution" | "prevolution";
    id: string;
    name: string;
    level?: number;
  }>;
};

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
    emoji: "<:type_vol:1315246581062303794>",
  },
};

export const pokemons: {
  [id: string]: Pokemon;
} = {
  "0": {
    id: "0",
    name: "MissingNo.",
    types: ["normal"],
  },
  "1": {
    id: "1",
    name: "Bulbizarre",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Herbizarre",
        id: "2",
        level: 16,
      },
    ],
  },
  "2": {
    id: "2",
    name: "Herbizarre",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "1",
        name: "Bulbizarre",
      },
      {
        type: "evolution",
        name: "Florizarre",
        id: "3",
        level: 32,
      },
    ],
  },
  "3": {
    id: "3",
    name: "Florizarre",
    types: ["grass", "poison"],
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
    types: ["grass", "poison"],
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
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "3",
        name: "Florizarre",
      },
    ],
  },
  "4": {
    id: "4",
    name: "Salamèche",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Reptincel",
        id: "5",
        level: 16,
      },
    ],
  },
  "5": {
    id: "5",
    name: "Reptincel",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "4",
        name: "Salamèche",
      },
      {
        type: "evolution",
        name: "Dracaufeu",
        id: "6",
        level: 36,
      },
    ],
  },
  "6": {
    id: "6",
    name: "Dracaufeu",
    types: ["fire", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "5",
        name: "Reptincel",
      },
      {
        type: "evolution",
        id: "6.01",
        name: "Méga-Dracaufeu X",
      },
      {
        type: "evolution",
        id: "6.02",
        name: "Méga-Dracaufeu Y",
      },
      {
        type: "evolution",
        id: "6.03",
        name: "Dracaufeu Gigamax",
      },
    ],
  },
  "6.01": {
    id: "6.01",
    name: "Méga-Dracaufeu X",
    types: ["fire", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "6",
        name: "Dracaufeu",
      },
    ],
  },
  "6.02": {
    id: "6.02",
    name: "Méga-Dracaufeu Y",
    types: ["fire", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "6",
        name: "Dracaufeu",
      },
    ],
  },
  "6.03": {
    id: "6.03",
    name: "Dracaufeu Gigamax",
    types: ["fire", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "6",
        name: "Dracaufeu",
      },
    ],
  },
  "7": {
    id: "7",
    name: "Carapuce",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Carabaffe",
        id: "8",
        level: 16,
      },
    ],
  },
  "8": {
    id: "8",
    name: "Carabaffe",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "7",
        name: "Carapuce",
      },
      {
        type: "evolution",
        name: "Tortank",
        id: "9",
        level: 36,
      },
    ],
  },
  "9": {
    id: "9",
    name: "Tortank",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "8",
        name: "Carabaffe",
      },
      {
        type: "evolution",
        id: "9.01",
        name: "Méga-Tortank",
      },
      {
        type: "evolution",
        id: "9.02",
        name: "Tortank Gigamax",
      },
    ],
  },
  "9.01": {
    id: "9.01",
    name: "Méga-Tortank",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "9",
        name: "Tortank",
      },
    ],
  },
  "9.02": {
    id: "9.02",
    name: "Tortank Gigamax",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "9",
        name: "Tortank",
      },
    ],
  },
  "10": {
    id: "10",
    name: "Chenipan",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Chrysacier",
        id: "11",
        level: 7,
      },
    ],
  },
  "11": {
    id: "11",
    name: "Chrysacier",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "10",
        name: "Chenipan",
      },
      {
        type: "evolution",
        name: "Papilusion",
        id: "12",
        level: 10,
      },
    ],
  },
  "12": {
    id: "12",
    name: "Papilusion",
    types: ["insect", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "11",
        name: "Chrysacier",
      },
      {
        type: "evolution",
        id: "12.01",
        name: "Papilusion Gigamax",
      },
    ],
  },
  "12.01": {
    id: "12.01",
    name: "Papilusion Gigamax",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "12",
        name: "Papilusion",
      },
    ],
  },
  "13": {
    id: "13",
    name: "Aspicot",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Coconfort",
        id: "14",
        level: 7,
      },
    ],
  },
  "14": {
    id: "14",
    name: "Coconfort",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "13",
        name: "Aspicot",
      },
      {
        type: "evolution",
        name: "Dardargnan",
        id: "15",
        level: 10,
      },
    ],
  },
  "15": {
    id: "15",
    name: "Dardargnan",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "14",
        name: "Coconfort",
      },
      {
        type: "evolution",
        id: "15.01",
        name: "Méga-Dardargnan",
      },
    ],
  },
  "15.01": {
    id: "15.01",
    name: "Méga-Dardargnan",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "15",
        name: "Dardargnan",
      },
    ],
  },
  "16": {
    id: "16",
    name: "Roucool",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Roucoups",
        id: "17",
        level: 18,
      },
    ],
  },
  "17": {
    id: "17",
    name: "Roucoups",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "16",
        name: "Roucool",
      },
      {
        type: "evolution",
        name: "Roucarnage",
        id: "18",
        level: 36,
      },
    ],
  },
  "18": {
    id: "18",
    name: "Roucarnage",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "17",
        name: "Roucoups",
      },
      {
        type: "evolution",
        id: "18.01",
        name: "Méga-Roucarnage",
      },
    ],
  },
  "18.01": {
    id: "18.01",
    name: "Méga-Roucarnage",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "18",
        name: "Roucarnage",
      },
    ],
  },
  "19": {
    id: "19",
    name: "Rattata",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Rattatac",
        id: "20",
        level: 20,
      },
    ],
  },
  "19.01": {
    id: "19.01",
    name: "Rattata d'Alola",
    types: ["dark", "normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Rattatac d'Alola",
        id: "20.01",
        level: 20,
      },
    ],
  },
  "20": {
    id: "20",
    name: "Rattatac",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "19",
        name: "Rattata",
      },
    ],
  },
  "20.01": {
    id: "20.01",
    name: "Rattatac d'Alola",
    types: ["dark", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "19.01",
        name: "Rattata d'Alola",
      },
    ],
  },
  "21": {
    id: "21",
    name: "Piafabec",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Rapasdepic",
        id: "22",
        level: 20,
      },
    ],
  },
  "22": {
    id: "22",
    name: "Rapasdepic",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "21",
        name: "Piafabec",
      },
    ],
  },
  "23": {
    id: "23",
    name: "Abo",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Arbok",
        id: "24",
        level: 22,
      },
    ],
  },
  "24": {
    id: "24",
    name: "Arbok",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "23",
        name: "Abo",
      },
    ],
  },
  "25": {
    id: "25",
    name: "Pikachu",
    types: ["electric"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "25.01",
        name: "Pikachu Gigamax",
      },
      {
        type: "evolution",
        id: "26",
        name: "Raichu",
      },
      {
        type: "evolution",
        id: "26.01",
        name: "Raichu d'Alola",
      },
      {
        type: "prevolution",
        id: "172",
        name: "Pichu",
      },
    ],
  },
  "25.01": {
    id: "25.01",
    name: "Pikachu Gigamax",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "25",
        name: "Pikachu",
      },
    ],
  },
  "26": {
    id: "26",
    name: "Raichu",
    types: ["electric"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "25",
        name: "Pikachu",
      },
    ],
  },
  "26.01": {
    id: "26.01",
    name: "Raichu d'Alola",
    types: ["electric", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "25",
        name: "Pikachu",
      },
    ],
  },
  "27": {
    id: "27",
    name: "Sabelette",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Sablaireau",
        id: "28",
        level: 22,
      },
    ],
  },
  "27.01": {
    id: "27.01",
    name: "Sabelette d'Alola",
    types: ["ice", "steel"],
    evolutions: [
      {
        type: "evolution",
        id: "28.01",
        name: "Sablaireau d'Alola",
      },
    ],
  },
  "28": {
    id: "28",
    name: "Sablaireau",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "27",
        name: "Sabelette",
      },
    ],
  },
  "28.01": {
    id: "28.01",
    name: "Sablaireau d'Alola",
    types: ["ice", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "27.01",
        name: "Sabelette d'Alola",
      },
    ],
  },
  "29": {
    id: "29",
    name: "Nidoran(F)",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Nidorina",
        id: "30",
        level: 16,
      },
    ],
  },
  "30": {
    id: "30",
    name: "Nidorina",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "29",
        name: "Nidoran(F)",
      },
      {
        type: "evolution",
        id: "31",
        name: "Nidoqueen",
      },
    ],
  },
  "31": {
    id: "31",
    name: "Nidoqueen",
    types: ["poison", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "30",
        name: "Nidorina",
      },
    ],
  },
  "32": {
    id: "32",
    name: "Nidoran(M)",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Nidorino",
        id: "33",
        level: 16,
      },
    ],
  },
  "33": {
    id: "33",
    name: "Nidorino",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "32",
        name: "Nidoran(M)",
      },
      {
        type: "evolution",
        id: "34",
        name: "Nidoking",
      },
    ],
  },
  "34": {
    id: "34",
    name: "Nidoking",
    types: ["poison", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "33",
        name: "Nidorino",
      },
    ],
  },
  "35": {
    id: "35",
    name: "Mélofée",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "36",
        name: "Mélodelfe",
      },
      {
        type: "prevolution",
        id: "173",
        name: "Mélo",
      },
    ],
  },
  "36": {
    id: "36",
    name: "Mélodelfe",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "35",
        name: "Mélofée",
      },
    ],
  },
  "37": {
    id: "37",
    name: "Goupix",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        id: "38",
        name: "Feunard",
      },
    ],
  },
  "37.01": {
    id: "37.01",
    name: "Goupix d'Alola",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        id: "38.01",
        name: "Feunard d'Alola",
      },
    ],
  },
  "38": {
    id: "38",
    name: "Feunard",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "37",
        name: "Goupix",
      },
    ],
  },
  "38.01": {
    id: "38.01",
    name: "Feunard d'Alola",
    types: ["ice", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "37.01",
        name: "Goupix d'Alola",
      },
    ],
  },
  "39": {
    id: "39",
    name: "Rondoudou",
    types: ["normal", "fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "40",
        name: "Grodoudou",
      },
      {
        type: "prevolution",
        id: "174",
        name: "Toudoudou",
      },
    ],
  },
  "40": {
    id: "40",
    name: "Grodoudou",
    types: ["normal", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "39",
        name: "Rondoudou",
      },
    ],
  },
  "41": {
    id: "41",
    name: "Nosferapti",
    types: ["poison", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Nosferalto",
        id: "42",
        level: 22,
      },
    ],
  },
  "42": {
    id: "42",
    name: "Nosferalto",
    types: ["poison", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "41",
        name: "Nosferapti",
      },
      {
        type: "evolution",
        id: "169",
        name: "Nostenfer",
      },
    ],
  },
  "43": {
    id: "43",
    name: "Mystherbe",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Ortide",
        id: "44",
        level: 21,
      },
    ],
  },
  "44": {
    id: "44",
    name: "Ortide",
    types: ["grass", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "43",
        name: "Mystherbe",
      },
      {
        type: "evolution",
        id: "45",
        name: "Rafflesia",
      },
      {
        type: "evolution",
        id: "182",
        name: "Joliflor",
      },
    ],
  },
  "45": {
    id: "45",
    name: "Rafflesia",
    types: ["grass", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "44",
        name: "Ortide",
      },
    ],
  },
  "46": {
    id: "46",
    name: "Paras",
    types: ["insect", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Parasect",
        id: "47",
        level: 24,
      },
    ],
  },
  "47": {
    id: "47",
    name: "Parasect",
    types: ["insect", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "46",
        name: "Paras",
      },
    ],
  },
  "48": {
    id: "48",
    name: "Mimitoss",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Aéromite",
        id: "49",
        level: 31,
      },
    ],
  },
  "49": {
    id: "49",
    name: "Aéromite",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "48",
        name: "Mimitoss",
      },
    ],
  },
  "50": {
    id: "50",
    name: "Taupiqueur",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Triopikeur",
        id: "51",
        level: 26,
      },
    ],
  },
  "50.01": {
    id: "50.01",
    name: "Taupiqueur d'Alola",
    types: ["ground", "steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Triopikeur d'Alola",
        id: "51.01",
        level: 26,
      },
    ],
  },
  "51": {
    id: "51",
    name: "Triopikeur",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "50",
        name: "Taupiqueur",
      },
    ],
  },
  "51.01": {
    id: "51.01",
    name: "Triopikeur d'Alola",
    types: ["ground", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "50.01",
        name: "Taupiqueur d'Alola",
      },
    ],
  },
  "52": {
    id: "52",
    name: "Miaouss",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "52.01",
        name: "Miaouss Gigamax",
      },
      {
        type: "evolution",
        name: "Persian",
        id: "53",
        level: 28,
      },
    ],
  },
  "52.01": {
    id: "52.01",
    name: "Miaouss Gigamax",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "52",
        name: "Miaouss",
      },
    ],
  },
  "52.02": {
    id: "52.02",
    name: "Miaouss d'Alola",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        id: "53.01",
        name: "Persian d'Alola",
      },
    ],
  },
  "52.03": {
    id: "52.03",
    name: "Miaouss de Galar",
    types: ["steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Berserkatt",
        id: "863",
        level: 28,
      },
    ],
  },
  "53": {
    id: "53",
    name: "Persian",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "52",
        name: "Miaouss",
      },
    ],
  },
  "53.01": {
    id: "53.01",
    name: "Persian d'Alola",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "52.02",
        name: "Miaouss d'Alola",
      },
    ],
  },
  "54": {
    id: "54",
    name: "Psykokwak",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Akwakwak",
        id: "55",
        level: 33,
      },
    ],
  },
  "55": {
    id: "55",
    name: "Akwakwak",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "54",
        name: "Psykokwak",
      },
    ],
  },
  "56": {
    id: "56",
    name: "Férosinge",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Colossinge",
        id: "57",
        level: 28,
      },
    ],
  },
  "57": {
    id: "57",
    name: "Colossinge",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "56",
        name: "Férosinge",
      },
      {
        type: "evolution",
        name: "Courrousinge",
        id: "979",
        level: 35,
      },
    ],
  },
  "58": {
    id: "58",
    name: "Caninos",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        id: "59",
        name: "Arcanin",
      },
    ],
  },
  "58.01": {
    id: "58.01",
    name: "Caninos de Hisui",
    types: ["fire", "rock"],
    evolutions: [
      {
        type: "evolution",
        id: "59.01",
        name: "Arcanin de Hisui",
      },
    ],
  },
  "59": {
    id: "59",
    name: "Arcanin",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "58",
        name: "Caninos",
      },
    ],
  },
  "59.01": {
    id: "59.01",
    name: "Arcanin de Hisui",
    types: ["fire", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "58.01",
        name: "Caninos de Hisui",
      },
    ],
  },
  "60": {
    id: "60",
    name: "Ptitard",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Têtarte",
        id: "61",
        level: 25,
      },
    ],
  },
  "61": {
    id: "61",
    name: "Têtarte",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "60",
        name: "Ptitard",
      },
      {
        type: "evolution",
        id: "62",
        name: "Tartard",
      },
      {
        type: "evolution",
        id: "186",
        name: "Tarpaud",
      },
    ],
  },
  "62": {
    id: "62",
    name: "Tartard",
    types: ["water", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "61",
        name: "Têtarte",
      },
    ],
  },
  "63": {
    id: "63",
    name: "Abra",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Kadabra",
        id: "64",
        level: 16,
      },
    ],
  },
  "64": {
    id: "64",
    name: "Kadabra",
    types: ["psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "63",
        name: "Abra",
      },
      {
        type: "evolution",
        id: "65",
        name: "Alakazam",
      },
    ],
  },
  "65": {
    id: "65",
    name: "Alakazam",
    types: ["psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "65.01",
        name: "Méga-Alakazam",
      },
      {
        type: "prevolution",
        id: "64",
        name: "Kadabra",
      },
    ],
  },
  "65.01": {
    id: "65.01",
    name: "Méga-Alakazam",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "65",
        name: "Alakazam",
      },
    ],
  },
  "66": {
    id: "66",
    name: "Machoc",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Machopeur",
        id: "67",
        level: 28,
      },
    ],
  },
  "67": {
    id: "67",
    name: "Machopeur",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "66",
        name: "Machoc",
      },
      {
        type: "evolution",
        id: "68",
        name: "Mackogneur",
      },
    ],
  },
  "68": {
    id: "68",
    name: "Mackogneur",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        id: "68.01",
        name: "Mackogneur Gigamax",
      },
      {
        type: "prevolution",
        id: "67",
        name: "Machopeur",
      },
    ],
  },
  "68.01": {
    id: "68.01",
    name: "Mackogneur Gigamax",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "68",
        name: "Mackogneur",
      },
    ],
  },
  "69": {
    id: "69",
    name: "Chétiflor",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Boustiflor",
        id: "70",
        level: 21,
      },
    ],
  },
  "70": {
    id: "70",
    name: "Boustiflor",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "69",
        name: "Chétiflor",
      },
      {
        type: "evolution",
        id: "71",
        name: "Empiflor",
      },
    ],
  },
  "71": {
    id: "71",
    name: "Empiflor",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "70",
        name: "Boustiflor",
      },
    ],
  },
  "72": {
    id: "72",
    name: "Tentacool",
    types: ["water", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Tentacruel",
        id: "73",
        level: 30,
      },
    ],
  },
  "73": {
    id: "73",
    name: "Tentacruel",
    types: ["water", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "72",
        name: "Tentacool",
      },
    ],
  },
  "74": {
    id: "74",
    name: "Racaillou",
    types: ["rock", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Gravalanch",
        id: "75",
        level: 25,
      },
    ],
  },
  "74.01": {
    id: "74.01",
    name: "Racaillou d'Alola",
    types: ["rock", "electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Gravalanch d'Alola",
        id: "75.01",
        level: 25,
      },
    ],
  },
  "75": {
    id: "75",
    name: "Gravalanch",
    types: ["rock", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "74",
        name: "Racaillou",
      },
      {
        type: "evolution",
        id: "76",
        name: "Grolem",
      },
    ],
  },
  "75.01": {
    id: "75.01",
    name: "Gravalanch d'Alola",
    types: ["rock", "electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "74.01",
        name: "Racaillou d'Alola",
      },
      {
        type: "evolution",
        id: "76.01",
        name: "Grolem d'Alola",
      },
    ],
  },
  "76": {
    id: "76",
    name: "Grolem",
    types: ["rock", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "75",
        name: "Gravalanch",
      },
    ],
  },
  "76.01": {
    id: "76.01",
    name: "Grolem d'Alola",
    types: ["rock", "electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "75.01",
        name: "Gravalanch d'Alola",
      },
    ],
  },
  "77": {
    id: "77",
    name: "Ponyta",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Galopa",
        id: "78",
        level: 40,
      },
    ],
  },
  "77.01": {
    id: "77.01",
    name: "Ponyta de Galar",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Galopa de Galar",
        id: "78.01",
        level: 40,
      },
    ],
  },
  "78": {
    id: "78",
    name: "Galopa",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "77",
        name: "Ponyta",
      },
    ],
  },
  "78.01": {
    id: "78.01",
    name: "Galopa de Galar",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "77.01",
        name: "Ponyta de Galar",
      },
    ],
  },
  "79": {
    id: "79",
    name: "Ramoloss",
    types: ["water", "psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Flagadoss",
        id: "80",
        level: 37,
      },
      {
        type: "evolution",
        id: "199",
        name: "Roigada",
      },
    ],
  },
  "79.01": {
    id: "79.01",
    name: "Ramoloss de Galar",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "80.02",
        name: "Flagadoss de Galar",
      },
      {
        type: "evolution",
        id: "199.01",
        name: "Roigada de Galar",
      },
    ],
  },
  "80": {
    id: "80",
    name: "Flagadoss",
    types: ["water", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "79",
        name: "Ramoloss",
      },
      {
        type: "evolution",
        id: "80.01",
        name: "Méga-Flagadoss",
      },
    ],
  },
  "80.01": {
    id: "80.01",
    name: "Méga-Flagadoss",
    types: ["water", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "80",
        name: "Flagadoss",
      },
    ],
  },
  "80.02": {
    id: "80.02",
    name: "Flagadoss de Galar",
    types: ["poison", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "79.01",
        name: "Ramoloss de Galar",
      },
    ],
  },
  "81": {
    id: "81",
    name: "Magnéti",
    types: ["electric", "steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Magnéton",
        id: "82",
        level: 30,
      },
    ],
  },
  "82": {
    id: "82",
    name: "Magnéton",
    types: ["electric", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "81",
        name: "Magnéti",
      },
      {
        type: "evolution",
        name: "Magnézone",
        id: "462",
      },
    ],
  },
  "83": {
    id: "83",
    name: "Canarticho",
    types: ["normal", "flying"],
  },
  "83.01": {
    id: "83.01",
    name: "Canarticho de Galar",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Palarticho",
        id: "865",
        level: 20,
      },
    ],
  },
  "84": {
    id: "84",
    name: "Doduo",
    types: ["normal", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Dodrio",
        id: "85",
        level: 31,
      },
    ],
  },
  "85": {
    id: "85",
    name: "Dodrio",
    types: ["normal", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "84",
        name: "Doduo",
      },
    ],
  },
  "86": {
    id: "86",
    name: "Otaria",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Lamantine",
        id: "87",
        level: 34,
      },
    ],
  },
  "87": {
    id: "87",
    name: "Lamantine",
    types: ["water", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "86",
        name: "Otaria",
      },
    ],
  },
  "88": {
    id: "88",
    name: "Tadmorv",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Grotadmorv",
        id: "89",
        level: 38,
      },
    ],
  },
  "88.01": {
    id: "88.01",
    name: "Tadmorv d'Alola",
    types: ["poison", "dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Grotadmorv d'Alola",
        id: "89.01",
        level: 38,
      },
    ],
  },
  "89": {
    id: "89",
    name: "Grotadmorv",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "88",
        name: "Tadmorv",
      },
    ],
  },
  "89.01": {
    id: "89.01",
    name: "Grotadmorv d'Alola",
    types: ["poison", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "88.01",
        name: "Tadmorv d'Alola",
      },
    ],
  },
  "90": {
    id: "90",
    name: "Kokiyas",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        id: "91",
        name: "Crustabri",
      },
    ],
  },
  "91": {
    id: "91",
    name: "Crustabri",
    types: ["water", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "90",
        name: "Kokiyas",
      },
    ],
  },
  "92": {
    id: "92",
    name: "Fantominus",
    types: ["ghost", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Spectrum",
        id: "93",
        level: 25,
      },
    ],
  },
  "93": {
    id: "93",
    name: "Spectrum",
    types: ["ghost", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "92",
        name: "Fantominus",
      },
      {
        type: "evolution",
        id: "94",
        name: "Ectoplasma",
      },
    ],
  },
  "94": {
    id: "94",
    name: "Ectoplasma",
    types: ["ghost", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "93",
        name: "Spectrum",
      },
      {
        type: "evolution",
        id: "94.01",
        name: "Méga-Ectoplasma",
      },
      {
        type: "evolution",
        id: "94.02",
        name: "Ectoplasma Gigamax",
      },
    ],
  },
  "94.01": {
    id: "94.01",
    name: "Méga-Ectoplasma",
    types: ["ghost", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "94",
        name: "Ectoplasma",
      },
    ],
  },
  "94.02": {
    id: "94.02",
    name: "Ectoplasma Gigamax",
    types: ["ghost", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "94",
        name: "Ectoplasma",
      },
    ],
  },
  "95": {
    id: "95",
    name: "Onix",
    types: ["rock", "ground"],
    evolutions: [
      {
        type: "evolution",
        id: "208",
        name: "Steelix",
      },
    ],
  },
  "96": {
    id: "96",
    name: "Soporifik",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Hypnomade",
        id: "97",
        level: 26,
      },
    ],
  },
  "97": {
    id: "97",
    name: "Hypnomade",
    types: ["psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "96",
        name: "Soporifik",
      },
    ],
  },
  "98": {
    id: "98",
    name: "Krabby",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Krabboss",
        id: "99",
        level: 28,
      },
    ],
  },
  "99": {
    id: "99",
    name: "Krabboss",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "98",
        name: "Krabby",
      },
      {
        type: "evolution",
        id: "99.01",
        name: "Krabboss Gigamax",
      },
    ],
  },
  "99.01": {
    id: "99.01",
    name: "Krabboss Gigamax",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "99",
        name: "Krabboss",
      },
    ],
  },
  "100": {
    id: "100",
    name: "Voltorbe",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Électrode",
        id: "101",
        level: 30,
      },
    ],
  },
  "100.01": {
    id: "100.01",
    name: "Voltorbe de Hisui",
    types: ["electric", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "101.01",
        name: "Électrode de Hisui",
      },
    ],
  },
  "101": {
    id: "101",
    name: "Électrode",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "100",
        name: "Voltorbe",
      },
    ],
  },
  "101.01": {
    id: "101.01",
    name: "Électrode de Hisui",
    types: ["electric", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "100.01",
        name: "Voltorbe de Hisui",
      },
    ],
  },
  "102": {
    id: "102",
    name: "Noeunoeuf",
    types: ["grass", "psychic"],
    evolutions: [
      { type: "evolution", id: "103", name: "Noadkoko" },
      {
        type: "evolution",
        id: "103.01",
        name: "Noadkoko d'Alola",
      },
    ],
  },
  "103": {
    id: "103",
    name: "Noadkoko",
    types: ["grass", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "102",
        name: "Noeunoeuf",
      },
    ],
  },
  "103.01": {
    id: "103.01",
    name: "Noadkoko d'Alola",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "102",
        name: "Noeunoeuf",
      },
    ],
  },
  "104": {
    id: "104",
    name: "Osselait",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Ossatueur",
        id: "105",
        level: 28,
      },
      {
        type: "evolution",
        name: "Ossatueur d'Alola",
        id: "105.01",
        level: 28,
      },
    ],
  },
  "105": {
    id: "105",
    name: "Ossatueur",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "104",
        name: "Osselait",
      },
    ],
  },
  "105.01": {
    id: "105.01",
    name: "Ossatueur d'Alola",
    types: ["fire", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "104",
        name: "Osselait",
      },
    ],
  },
  "106": {
    id: "106",
    name: "Kicklee",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "236",
        name: "Debugant",
      },
    ],
  },
  "107": {
    id: "107",
    name: "Tygnon",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "236",
        name: "Debugant",
      },
    ],
  },
  "108": {
    id: "108",
    name: "Excelangue",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Coudlangue",
        id: "463",
        level: 33,
      },
    ],
  },
  "109": {
    id: "109",
    name: "Smogo",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Smogogo",
        id: "110",
        level: 35,
      },
      {
        type: "evolution",
        name: "Smogogo de Galar",
        id: "110.01",
        level: 35,
      },
    ],
  },
  "110": {
    id: "110",
    name: "Smogogo",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "109",
        name: "Smogo",
      },
    ],
  },
  "110.01": {
    id: "110.01",
    name: "Smogogo de Galar",
    types: ["poison", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "109",
        name: "Smogo",
      },
    ],
  },
  "111": {
    id: "111",
    name: "Rhinocorne",
    types: ["ground", "rock"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Rhinoféros",
        id: "112",
        level: 42,
      },
    ],
  },
  "112": {
    id: "112",
    name: "Rhinoféros",
    types: ["ground", "rock"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "111",
        name: "Rhinocorne",
      },
      {
        type: "evolution",
        id: "464",
        name: "Rhinastoc",
      },
    ],
  },
  "113": {
    id: "113",
    name: "Leveinard",
    types: ["normal"],
    evolutions: [
      { type: "prevolution", id: "440", name: "Ptiravi" },
      {
        type: "evolution",
        id: "242",
        name: "Leuphorie",
      },
    ],
  },
  "114": {
    id: "114",
    name: "Saquedeneu",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Bouldeneu",
        id: "465",
        level: 33,
      },
    ],
  },
  "115": {
    id: "115",
    name: "Kangourex",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "115.01",
        name: "Méga-Kangourex",
      },
    ],
  },
  "115.01": {
    id: "115.01",
    name: "Méga-Kangourex",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "115",
        name: "Kangourex",
      },
    ],
  },
  "116": {
    id: "116",
    name: "Hypotrempe",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Hypocean",
        id: "117",
        level: 32,
      },
    ],
  },
  "117": {
    id: "117",
    name: "Hypocean",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "116",
        name: "Hypotrempe",
      },
      {
        type: "evolution",
        id: "230",
        name: "Hyporoi",
      },
    ],
  },
  "118": {
    id: "118",
    name: "Poissirène",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Poissoroy",
        id: "119",
        level: 33,
      },
    ],
  },
  "119": {
    id: "119",
    name: "Poissoroy",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "118",
        name: "Poissirène",
      },
    ],
  },
  "120": {
    id: "120",
    name: "Stari",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        id: "121",
        name: "Staross",
      },
    ],
  },
  "121": {
    id: "121",
    name: "Staross",
    types: ["water", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "120",
        name: "Stari",
      },
    ],
  },
  "122": {
    id: "122",
    name: "M. Mime",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "439",
        name: "Mime Jr.",
      },
    ],
  },
  "122.01": {
    id: "122.01",
    name: "M. Mime de Galar",
    types: ["ice", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "439",
        name: "Mime Jr.",
      },
      {
        type: "evolution",
        name: "M. Glaquette",
        id: "866",
        level: 42,
      },
    ],
  },
  "123": {
    id: "123",
    name: "Insécateur",
    types: ["insect", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "212",
        name: "Cizayox",
      },
      {
        type: "evolution",
        id: "900",
        name: "Hachécateur",
      },
    ],
  },
  "124": {
    id: "124",
    name: "Lippoutou",
    types: ["ice", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "238",
        name: "Lippouti",
      },
    ],
  },
  "125": {
    id: "125",
    name: "Élektek",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "239",
        name: "Elekid",
      },
      {
        type: "evolution",
        id: "466",
        name: "Élekable",
      },
    ],
  },
  "126": {
    id: "126",
    name: "Magmar",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "240",
        name: "Magby",
      },
      {
        type: "evolution",
        id: "467",
        name: "Maganon",
      },
    ],
  },
  "127": {
    id: "127",
    name: "Scarabrute",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        id: "127.01",
        name: "Méga-Scarabrute",
      },
    ],
  },
  "127.01": {
    id: "127.01",
    name: "Méga-Scarabrute",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "127",
        name: "Scarabrute",
      },
    ],
  },
  "128": {
    id: "128",
    name: "Tauros",
    types: ["normal"],
  },
  "128.01": {
    id: "128.01",
    name: "Tauros de Pladea (Combative)",
    types: ["fighting"],
  },
  "128.02": {
    id: "128.02",
    name: "Tauros de Pladea (Flamboyante)",
    types: ["fighting", "fire"],
  },
  "128.03": {
    id: "128.03",
    name: "Tauros de Pladea (Aquatique)",
    types: ["fighting", "water"],
  },
  "129": {
    id: "129",
    name: "Magicarpe",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Léviator",
        id: "130",
        level: 20,
      },
    ],
  },
  "130": {
    id: "130",
    name: "Léviator",
    types: ["water", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "129",
        name: "Magicarpe",
      },
      {
        type: "evolution",
        id: "130.01",
        name: "Méga-Léviator",
      },
    ],
  },
  "130.01": {
    id: "130.01",
    name: "Méga-Léviator",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "130",
        name: "Léviator",
      },
    ],
  },
  "131": {
    id: "131",
    name: "Lokhlass",
    types: ["water", "ice"],
    evolutions: [
      {
        type: "evolution",
        id: "131.01",
        name: "Lokhlass Gigamax",
      },
    ],
  },
  "131.01": {
    id: "131.01",
    name: "Lokhlass Gigamax",
    types: ["water", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "131",
        name: "Lokhlass",
      },
    ],
  },
  "132": {
    id: "132",
    name: "Métamorph",
    types: ["normal"],
  },
  "133": {
    id: "133",
    name: "Évoli",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "133.01",
        name: "Évoli Gigamax",
      },
      {
        type: "evolution",
        name: "Phyllali",
        id: "470",
      },
      {
        type: "evolution",
        name: "Givrali",
        id: "471",
      },
      {
        type: "evolution",
        name: "Nymphali",
        id: "700",
      },
      {
        type: "evolution",
        id: "134",
        name: "Aquali",
      },
      {
        type: "evolution",
        id: "135",
        name: "Voltali",
      },
      {
        type: "evolution",
        id: "136",
        name: "Pyroli",
      },
      {
        type: "evolution",
        id: "196",
        name: "Mentali",
      },
      {
        type: "evolution",
        id: "197",
        name: "Noctali",
      },
    ],
  },
  "133.01": {
    id: "133.01",
    name: "Évoli Gigamax",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "134": {
    id: "134",
    name: "Aquali",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "135": {
    id: "135",
    name: "Voltali",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "136": {
    id: "136",
    name: "Pyroli",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "137": {
    id: "137",
    name: "Porygon",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "233",
        name: "Porygon2",
      },
    ],
  },
  "138": {
    id: "138",
    name: "Amonita",
    types: ["rock", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Amonistar",
        id: "139",
        level: 40,
      },
    ],
  },
  "139": {
    id: "139",
    name: "Amonistar",
    types: ["rock", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "138",
        name: "Amonita",
      },
    ],
  },
  "140": {
    id: "140",
    name: "Kabuto",
    types: ["rock", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Kabutops",
        id: "141",
        level: 40,
      },
    ],
  },
  "141": {
    id: "141",
    name: "Kabutops",
    types: ["rock", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "140",
        name: "Kabuto",
      },
    ],
  },
  "142": {
    id: "142",
    name: "Ptéra",
    types: ["rock", "flying"],
    evolutions: [
      {
        type: "evolution",
        id: "142.01",
        name: "Méga-Ptéra",
      },
    ],
  },
  "142.01": {
    id: "142.01",
    name: "Méga-Ptéra",
    types: ["rock", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "142",
        name: "Ptéra",
      },
    ],
  },
  "143": {
    id: "143",
    name: "Ronflex",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "143.01",
        name: "Ronflex Gigamax",
      },
      {
        type: "prevolution",
        id: "446",
        name: "Goinfrex",
      },
    ],
  },
  "143.01": {
    id: "143.01",
    name: "Ronflex Gigamax",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "143",
        name: "Ronflex",
      },
    ],
  },
  "144": {
    id: "144",
    name: "Artikodin",
    types: ["ice", "flying"],
  },
  "144.01": {
    id: "144.01",
    name: "Artikodin de Galar",
    types: ["psychic", "flying"],
  },
  "145": {
    id: "145",
    name: "Électhor",
    types: ["electric", "flying"],
  },
  "145.01": {
    id: "145.01",
    name: "Électhor de Galar",
    types: ["fighting", "flying"],
  },
  "146": {
    id: "146",
    name: "Sulfura",
    types: ["fire", "flying"],
  },
  "146.01": {
    id: "146.01",
    name: "Sulfura de Galar",
    types: ["dark", "flying"],
  },
  "147": {
    id: "147",
    name: "Minidraco",
    types: ["dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Draco",
        id: "148",
        level: 30,
      },
    ],
  },
  "148": {
    id: "148",
    name: "Draco",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "147",
        name: "Minidraco",
      },
      {
        type: "evolution",
        name: "Dracolosse",
        id: "149",
        level: 55,
      },
    ],
  },
  "149": {
    id: "149",
    name: "Dracolosse",
    types: ["dragon", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "148",
        name: "Draco",
      },
    ],
  },
  "150": {
    id: "150",
    name: "Mewtwo",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "150.01",
        name: "Méga-Mewtwo X",
      },
      {
        type: "evolution",
        id: "150.02",
        name: "Méga-Mewtwo Y",
      },
    ],
  },
  "150.01": {
    id: "150.01",
    name: "Méga-Mewtwo X",
    types: ["psychic", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "150",
        name: "Mewtwo",
      },
    ],
  },
  "150.02": {
    id: "150.02",
    name: "Méga-Mewtwo Y",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "150",
        name: "Mewtwo",
      },
    ],
  },
  "151": {
    id: "151",
    name: "Mew",
    types: ["psychic"],
  },
  "152": {
    id: "152",
    name: "Germignon",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Macronium",
        id: "153",
        level: 16,
      },
    ],
  },
  "153": {
    id: "153",
    name: "Macronium",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "152",
        name: "Germignon",
      },
      {
        type: "evolution",
        name: "Méganium",
        id: "154",
        level: 32,
      },
    ],
  },
  "154": {
    id: "154",
    name: "Méganium",
    types: ["grass"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "153",
        name: "Macronium",
      },
    ],
  },
  "155": {
    id: "155",
    name: "Héricendre",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Feurisson",
        id: "156",
        level: 14,
      },
    ],
  },
  "156": {
    id: "156",
    name: "Feurisson",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "155",
        name: "Héricendre",
      },
      {
        type: "evolution",
        name: "Typhlosion",
        id: "157",
        level: 36,
      },
      {
        type: "evolution",
        name: "Typhlosion de Hisui",
        id: "157.01",
        level: 36,
      },
    ],
  },
  "157": {
    id: "157",
    name: "Typhlosion",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "156",
        name: "Feurisson",
      },
    ],
  },
  "157.01": {
    id: "157.01",
    name: "Typhlosion de Hisui",
    types: ["fire", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "156",
        name: "Feurisson",
      },
    ],
  },
  "158": {
    id: "158",
    name: "Kaiminus",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Crocrodil",
        id: "159",
        level: 18,
      },
    ],
  },
  "159": {
    id: "159",
    name: "Crocrodil",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "158",
        name: "Kaiminus",
      },
      {
        type: "evolution",
        name: "Aligatueur",
        id: "160",
        level: 30,
      },
    ],
  },
  "160": {
    id: "160",
    name: "Aligatueur",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "159",
        name: "Crocrodil",
      },
    ],
  },
  "161": {
    id: "161",
    name: "Fouinette",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Fouinar",
        id: "162",
        level: 15,
      },
    ],
  },
  "162": {
    id: "162",
    name: "Fouinar",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "161",
        name: "Fouinette",
      },
    ],
  },
  "163": {
    id: "163",
    name: "Hoothoot",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Noarfang",
        id: "164",
        level: 20,
      },
    ],
  },
  "164": {
    id: "164",
    name: "Noarfang",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "163",
        name: "Hoothoot",
      },
    ],
  },
  "165": {
    id: "165",
    name: "Coxy",
    types: ["insect", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Coxyclaque",
        id: "166",
        level: 18,
      },
    ],
  },
  "166": {
    id: "166",
    name: "Coxyclaque",
    types: ["insect", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "165",
        name: "Coxy",
      },
    ],
  },
  "167": {
    id: "167",
    name: "Mimigal",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Migalos",
        id: "168",
        level: 22,
      },
    ],
  },
  "168": {
    id: "168",
    name: "Migalos",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "167",
        name: "Mimigal",
      },
    ],
  },
  "169": {
    id: "169",
    name: "Nostenfer",
    types: ["poison", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "42",
        name: "Nosferalto",
      },
    ],
  },
  "170": {
    id: "170",
    name: "Loupio",
    types: ["water", "electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Lanturn",
        id: "171",
        level: 27,
      },
    ],
  },
  "171": {
    id: "171",
    name: "Lanturn",
    types: ["water", "electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "170",
        name: "Loupio",
      },
    ],
  },
  "172": {
    id: "172",
    name: "Pichu",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        id: "25",
        name: "Pikachu",
      },
    ],
  },
  "173": {
    id: "173",
    name: "Mélo",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "35",
        name: "Mélofée",
      },
    ],
  },
  "174": {
    id: "174",
    name: "Toudoudou",
    types: ["normal", "fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "39",
        name: "Rondoudou",
      },
    ],
  },
  "175": {
    id: "175",
    name: "Togepi",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "176",
        name: "Togetic",
      },
    ],
  },
  "176": {
    id: "176",
    name: "Togetic",
    types: ["fairy", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "175",
        name: "Togepi",
      },
      {
        type: "evolution",
        id: "468",
        name: "Togekiss",
      },
    ],
  },
  "177": {
    id: "177",
    name: "Natu",
    types: ["psychic", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Xatu",
        id: "178",
        level: 25,
      },
    ],
  },
  "178": {
    id: "178",
    name: "Xatu",
    types: ["psychic", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "177",
        name: "Natu",
      },
    ],
  },
  "179": {
    id: "179",
    name: "Wattouat",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Lainergie",
        id: "180",
        level: 15,
      },
    ],
  },
  "180": {
    id: "180",
    name: "Lainergie",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "179",
        name: "Wattouat",
      },
      {
        type: "evolution",
        name: "Pharamp",
        id: "181",
        level: 30,
      },
    ],
  },
  "181": {
    id: "181",
    name: "Pharamp",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "180",
        name: "Lainergie",
      },
      {
        type: "evolution",
        id: "181.01",
        name: "Méga-Pharamp",
      },
    ],
  },
  "181.01": {
    id: "181.01",
    name: "Méga-Pharamp",
    types: ["electric", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "181",
        name: "Pharamp",
      },
    ],
  },
  "182": {
    id: "182",
    name: "Joliflor",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "44",
        name: "Ortide",
      },
    ],
  },
  "183": {
    id: "183",
    name: "Marill",
    types: ["water", "fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Azumarill",
        id: "184",
        level: 18,
      },
      {
        type: "prevolution",
        id: "298",
        name: "Azurill",
      },
    ],
  },
  "184": {
    id: "184",
    name: "Azumarill",
    types: ["water", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "183",
        name: "Marill",
      },
    ],
  },
  "185": {
    id: "185",
    name: "Simularbre",
    types: ["rock"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "438",
        name: "Manzaï",
      },
    ],
  },
  "186": {
    id: "186",
    name: "Tarpaud",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "61",
        name: "Têtarte",
      },
    ],
  },
  "187": {
    id: "187",
    name: "Granivol",
    types: ["grass", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Floravol",
        id: "188",
        level: 18,
      },
    ],
  },
  "188": {
    id: "188",
    name: "Floravol",
    types: ["grass", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "187",
        name: "Granivol",
      },
      {
        type: "evolution",
        name: "Cotovol",
        id: "189",
        level: 27,
      },
    ],
  },
  "189": {
    id: "189",
    name: "Cotovol",
    types: ["grass", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "188",
        name: "Floravol",
      },
    ],
  },
  "190": {
    id: "190",
    name: "Capumain",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Capidextre",
        id: "424",
        level: 32,
      },
    ],
  },
  "191": {
    id: "191",
    name: "Tournegrin",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        id: "192",
        name: "Heliatronc",
      },
    ],
  },
  "192": {
    id: "192",
    name: "Heliatronc",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "191",
        name: "Tournegrin",
      },
    ],
  },
  "193": {
    id: "193",
    name: "Yanma",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Yanmega",
        id: "469",
        level: 33,
      },
    ],
  },
  "194": {
    id: "194",
    name: "Axoloto",
    types: ["water", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Maraiste",
        id: "195",
        level: 20,
      },
    ],
  },
  "194.01": {
    id: "194.01",
    name: "Axoloto de Paldea",
    types: ["poison", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Terraiste",
        id: "980",
        level: 20,
      },
    ],
  },
  "195": {
    id: "195",
    name: "Maraiste",
    types: ["water", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "194",
        name: "Axoloto",
      },
    ],
  },
  "196": {
    id: "196",
    name: "Mentali",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "197": {
    id: "197",
    name: "Noctali",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "198": {
    id: "198",
    name: "Cornèbre",
    types: ["dark", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "430",
        name: "Corboss",
      },
    ],
  },
  "199": {
    id: "199",
    name: "Roigada",
    types: ["water", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "79",
        name: "Ramoloss",
      },
    ],
  },
  "199.01": {
    id: "199.01",
    name: "Roigada de Galar",
    types: ["poison", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "79.01",
        name: "Ramoloss de Galar",
      },
    ],
  },
  "200": {
    id: "200",
    name: "Feuforêve",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "429",
        name: "Magirêve",
      },
    ],
  },
  "201": {
    id: "201",
    name: "Zarbi (A)",
    types: ["psychic"],
  },
  "201.01": {
    id: "201.01",
    name: "Zarbi (B)",
    types: ["psychic"],
  },
  "201.02": {
    id: "201.02",
    name: "Zarbi (C)",
    types: ["psychic"],
  },
  "201.03": {
    id: "201.03",
    name: "Zarbi (D)",
    types: ["psychic"],
  },
  "201.04": {
    id: "201.04",
    name: "Zarbi (E)",
    types: ["psychic"],
  },
  "201.05": {
    id: "201.05",
    name: "Zarbi (F)",
    types: ["psychic"],
  },
  "201.06": {
    id: "201.06",
    name: "Zarbi (G)",
    types: ["psychic"],
  },
  "201.07": {
    id: "201.07",
    name: "Zarbi (H)",
    types: ["psychic"],
  },
  "201.08": {
    id: "201.08",
    name: "Zarbi (I)",
    types: ["psychic"],
  },
  "201.09": {
    id: "201.09",
    name: "Zarbi (J)",
    types: ["psychic"],
  },
  "201.1": {
    id: "201.1",
    name: "Zarbi (K)",
    types: ["psychic"],
  },
  "201.11": {
    id: "201.11",
    name: "Zarbi (L)",
    types: ["psychic"],
  },
  "201.12": {
    id: "201.12",
    name: "Zarbi (M)",
    types: ["psychic"],
  },
  "201.13": {
    id: "201.13",
    name: "Zarbi (N)",
    types: ["psychic"],
  },
  "201.14": {
    id: "201.14",
    name: "Zarbi (O)",
    types: ["psychic"],
  },
  "201.15": {
    id: "201.15",
    name: "Zarbi (P)",
    types: ["psychic"],
  },
  "201.16": {
    id: "201.16",
    name: "Zarbi (Q)",
    types: ["psychic"],
  },
  "201.17": {
    id: "201.17",
    name: "Zarbi (R)",
    types: ["psychic"],
  },
  "201.18": {
    id: "201.18",
    name: "Zarbi (S)",
    types: ["psychic"],
  },
  "201.19": {
    id: "201.19",
    name: "Zarbi (T)",
    types: ["psychic"],
  },
  "201.2": {
    id: "201.2",
    name: "Zarbi (U)",
    types: ["psychic"],
  },
  "201.21": {
    id: "201.21",
    name: "Zarbi (V)",
    types: ["psychic"],
  },
  "201.22": {
    id: "201.22",
    name: "Zarbi (W)",
    types: ["psychic"],
  },
  "201.23": {
    id: "201.23",
    name: "Zarbi (X)",
    types: ["psychic"],
  },
  "201.24": {
    id: "201.24",
    name: "Zarbi (Y)",
    types: ["psychic"],
  },
  "201.25": {
    id: "201.25",
    name: "Zarbi (Z)",
    types: ["psychic"],
  },
  "201.26": {
    id: "201.26",
    name: "Zarbi (!)",
    types: ["psychic"],
  },
  "201.27": {
    id: "201.27",
    name: "Zarbi (?)",
    types: ["psychic"],
  },
  "202": {
    id: "202",
    name: "Qulbutoké",
    types: ["psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "360",
        name: "Okéoké",
      },
    ],
  },
  "203": {
    id: "203",
    name: "Girafarig",
    types: ["normal", "psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Farigiraf",
        id: "981",
        level: 32,
      },
    ],
  },
  "204": {
    id: "204",
    name: "Pomdepik",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Foretress",
        id: "205",
        level: 31,
      },
    ],
  },
  "205": {
    id: "205",
    name: "Foretress",
    types: ["insect", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "204",
        name: "Pomdepik",
      },
    ],
  },
  "206": {
    id: "206",
    name: "Insolourdo",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Deusolourdo (Double)",
        id: "982",
        level: 32,
      },
      {
        type: "evolution",
        name: "Deusolourdo (Triple)",
        id: "982.01",
        level: 32,
      },
    ],
  },
  "207": {
    id: "207",
    name: "Scorplane",
    types: ["ground", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "472",
        name: "Scorvol",
      },
    ],
  },
  "208": {
    id: "208",
    name: "Steelix",
    types: ["steel", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "95",
        name: "Onix",
      },
      {
        type: "evolution",
        id: "208.01",
        name: "Méga-Steelix",
      },
    ],
  },
  "208.01": {
    id: "208.01",
    name: "Méga-Steelix",
    types: ["steel", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "208",
        name: "Steelix",
      },
    ],
  },
  "209": {
    id: "209",
    name: "Snubbull",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Granbull",
        id: "210",
        level: 23,
      },
    ],
  },
  "210": {
    id: "210",
    name: "Granbull",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "209",
        name: "Snubbull",
      },
    ],
  },
  "211": {
    id: "211",
    name: "Qwilfish",
    types: ["water", "poison"],
  },
  "211.01": {
    id: "211.01",
    name: "Qwilfish de Hisui",
    types: ["dark", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Qwilpik",
        id: "904",
        level: 25,
      },
    ],
  },
  "212": {
    id: "212",
    name: "Cizayox",
    types: ["insect", "steel"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "212.01",
        name: "Méga-Cizayox",
      },
      {
        type: "prevolution",
        id: "123",
        name: "Insécateur",
      },
    ],
  },
  "212.01": {
    id: "212.01",
    name: "Méga-Cizayox",
    types: ["insect", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "212",
        name: "Cizayox",
      },
    ],
  },
  "213": {
    id: "213",
    name: "Caratroc",
    types: ["insect", "rock"],
  },
  "214": {
    id: "214",
    name: "Scarhino",
    types: ["insect", "fighting"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "214.01",
        name: "Méga-Scarhino",
      },
    ],
  },
  "214.01": {
    id: "214.01",
    name: "Méga-Scarhino",
    types: ["insect", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "214",
        name: "Scarhino",
      },
    ],
  },
  "215": {
    id: "215",
    name: "Farfuret",
    types: ["dark", "ice"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "461",
        name: "Dimoret",
      },
    ],
  },
  "215.01": {
    id: "215.01",
    name: "Farfuret de Hisui",
    types: ["fighting", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "903",
        name: "Farfurex",
      },
    ],
  },
  "216": {
    id: "216",
    name: "Teddiursa",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Ursaring",
        id: "217",
        level: 30,
      },
    ],
  },
  "217": {
    id: "217",
    name: "Ursaring",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "216",
        name: "Teddiursa",
      },
      {
        type: "evolution",
        id: "901",
        name: "Ursaking",
      },
    ],
  },
  "218": {
    id: "218",
    name: "Limagma",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Volcaropod",
        id: "219",
        level: 38,
      },
    ],
  },
  "219": {
    id: "219",
    name: "Volcaropod",
    types: ["fire", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "218",
        name: "Limagma",
      },
    ],
  },
  "220": {
    id: "220",
    name: "Marcacrin",
    types: ["ice", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Cochignon",
        id: "221",
        level: 33,
      },
    ],
  },
  "221": {
    id: "221",
    name: "Cochignon",
    types: ["ice", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "220",
        name: "Marcacrin",
      },
      {
        type: "evolution",
        name: "Mammochon",
        id: "473",
        level: 53,
      },
    ],
  },
  "222": {
    id: "222",
    name: "Corayon",
    types: ["water", "rock"],
  },
  "222.01": {
    id: "222.01",
    name: "Corayon de Galar",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Corayôme",
        id: "864",
        level: 38,
      },
    ],
  },
  "223": {
    id: "223",
    name: "Rémoraid",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Octillery",
        id: "224",
        level: 25,
      },
    ],
  },
  "224": {
    id: "224",
    name: "Octillery",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "223",
        name: "Rémoraid",
      },
    ],
  },
  "225": {
    id: "225",
    name: "Cadoizo",
    types: ["ice", "flying"],
  },
  "226": {
    id: "226",
    name: "Demanta",
    types: ["water", "flying"],
    evolutions: [
      {
        type: "prevolution",
        name: "Babimanta",
        id: "458",
      },
    ],
  },
  "227": {
    id: "227",
    name: "Airmure",
    types: ["steel", "flying"],
  },
  "228": {
    id: "228",
    name: "Malosse",
    types: ["dark", "fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Démolosse",
        id: "229",
        level: 24,
      },
    ],
  },
  "229": {
    id: "229",
    name: "Démolosse",
    types: ["dark", "fire"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "228",
        name: "Malosse",
      },
      {
        type: "evolution",
        id: "229.01",
        name: "Méga-Démolosse",
      },
    ],
  },
  "229.01": {
    id: "229.01",
    name: "Méga-Démolosse",
    types: ["dark", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "229",
        name: "Démolosse",
      },
    ],
  },
  "230": {
    id: "230",
    name: "Hyporoi",
    types: ["water", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "117",
        name: "Hypocean",
      },
    ],
  },
  "231": {
    id: "231",
    name: "Phanpy",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Donphan",
        id: "232",
        level: 25,
      },
    ],
  },
  "232": {
    id: "232",
    name: "Donphan",
    types: ["ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "231",
        name: "Phanpy",
      },
    ],
  },
  "233": {
    id: "233",
    name: "Porygon2",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "474",
        name: "Porygon-Z",
      },
      {
        type: "prevolution",
        id: "137",
        name: "Porygon",
      },
    ],
  },
  "234": {
    id: "234",
    name: "Cerfrousse",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Cerbyllin",
        id: "899",
        level: 31,
      },
    ],
  },
  "235": {
    id: "235",
    name: "Queulorior",
    types: ["normal"],
  },
  "236": {
    id: "236",
    name: "Debugant",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Kicklee",
        id: "106",
        level: 20,
      },
      {
        type: "evolution",
        name: "Tygnon",
        id: "107",
        level: 20,
      },
      {
        type: "evolution",
        name: "Kapoera",
        id: "237",
        level: 20,
      },
    ],
  },
  "237": {
    id: "237",
    name: "Kapoera",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "236",
        name: "Debugant",
      },
    ],
  },
  "238": {
    id: "238",
    name: "Lippouti",
    types: ["ice", "psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Lippoutou",
        id: "124",
        level: 30,
      },
    ],
  },
  "239": {
    id: "239",
    name: "Elekid",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Élektek",
        id: "125",
        level: 30,
      },
    ],
  },
  "240": {
    id: "240",
    name: "Magby",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Magmar",
        id: "126",
        level: 30,
      },
    ],
  },
  "241": {
    id: "241",
    name: "Écrémeuh",
    types: ["normal"],
  },
  "242": {
    id: "242",
    name: "Leuphorie",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "113",
        name: "Leveinard",
      },
    ],
  },
  "243": {
    id: "243",
    name: "Raikou",
    types: ["electric"],
  },
  "244": {
    id: "244",
    name: "Entei",
    types: ["fire"],
  },
  "245": {
    id: "245",
    name: "Suicune",
    types: ["water"],
  },
  "246": {
    id: "246",
    name: "Embrylex",
    types: ["rock", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Ymphect",
        id: "247",
        level: 30,
      },
    ],
  },
  "247": {
    id: "247",
    name: "Ymphect",
    types: ["rock", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "246",
        name: "Embrylex",
      },
      {
        type: "evolution",
        name: "Tyranocif",
        id: "248",
        level: 55,
      },
    ],
  },
  "248": {
    id: "248",
    name: "Tyranocif",
    types: ["rock", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "247",
        name: "Ymphect",
      },
      {
        type: "evolution",
        id: "248.01",
        name: "Méga-Tyranocif",
      },
    ],
  },
  "248.01": {
    id: "248.01",
    name: "Méga-Tyranocif",
    types: ["rock", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "248",
        name: "Tyranocif",
      },
    ],
  },
  "249": {
    id: "249",
    name: "Lugia",
    types: ["psychic", "flying"],
  },
  "250": {
    id: "250",
    name: "Ho-Oh",
    types: ["fire", "flying"],
  },
  "251": {
    id: "251",
    name: "Celebi",
    types: ["psychic", "grass"],
  },
  "252": {
    id: "252",
    name: "Arcko",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Massko",
        id: "253",
        level: 16,
      },
    ],
  },
  "253": {
    id: "253",
    name: "Massko",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "252",
        name: "Arcko",
      },
      {
        type: "evolution",
        name: "Jungko",
        id: "254",
        level: 36,
      },
    ],
  },
  "254": {
    id: "254",
    name: "Jungko",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "253",
        name: "Massko",
      },
      {
        type: "evolution",
        id: "254.01",
        name: "Méga-Jungko",
      },
    ],
  },
  "254.01": {
    id: "254.01",
    name: "Méga-Jungko",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "254",
        name: "Jungko",
      },
    ],
  },
  "255": {
    id: "255",
    name: "Poussifeu",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Galifeu",
        id: "256",
        level: 16,
      },
    ],
  },
  "256": {
    id: "256",
    name: "Galifeu",
    types: ["fire", "fighting"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "255",
        name: "Poussifeu",
      },
      {
        type: "evolution",
        name: "Braségali",
        id: "257",
        level: 36,
      },
    ],
  },
  "257": {
    id: "257",
    name: "Braségali",
    types: ["fire", "fighting"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "256",
        name: "Galifeu",
      },
      {
        type: "evolution",
        id: "257.01",
        name: "Méga-Braségali",
      },
    ],
  },
  "257.01": {
    id: "257.01",
    name: "Méga-Braségali",
    types: ["fire", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "257",
        name: "Braségali",
      },
    ],
  },
  "258": {
    id: "258",
    name: "Gobou",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Flobio",
        id: "259",
        level: 16,
      },
    ],
  },
  "259": {
    id: "259",
    name: "Flobio",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "258",
        name: "Gobou",
      },
      {
        type: "evolution",
        name: "Laggron",
        id: "260",
        level: 36,
      },
    ],
  },
  "260": {
    id: "260",
    name: "Laggron",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "259",
        name: "Flobio",
      },
      {
        type: "evolution",
        id: "260.01",
        name: "Méga-Laggron",
      },
    ],
  },
  "260.01": {
    id: "260.01",
    name: "Méga-Laggron",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "260",
        name: "Laggron",
      },
    ],
  },
  "261": {
    id: "261",
    name: "Medhyèna",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Grahyèna",
        id: "262",
        level: 18,
      },
    ],
  },
  "262": {
    id: "262",
    name: "Grahyèna",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "261",
        name: "Medhyèna",
      },
    ],
  },
  "263": {
    id: "263",
    name: "Zigzaton",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Linéon",
        id: "264",
        level: 20,
      },
    ],
  },
  "263.01": {
    id: "263.01",
    name: "Zigzaton de Galar",
    types: ["dark", "normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Linéon de Galar",
        id: "264.01",
        level: 20,
      },
    ],
  },
  "264": {
    id: "264",
    name: "Linéon",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "263",
        name: "Zigzaton",
      },
    ],
  },
  "264.01": {
    id: "264.01",
    name: "Linéon de Galar",
    types: ["dark", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "263.01",
        name: "Zigzaton de Galar",
      },
      {
        type: "evolution",
        name: "Ixon",
        id: "862",
        level: 35,
      },
    ],
  },
  "265": {
    id: "265",
    name: "Chenipotte",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Armulys",
        id: "266",
        level: 7,
      },
      {
        type: "evolution",
        name: "Blindalys",
        id: "268",
        level: 7,
      },
    ],
  },
  "266": {
    id: "266",
    name: "Armulys",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "265",
        name: "Chenipotte",
      },
      {
        type: "evolution",
        name: "Charmillon",
        id: "267",
        level: 10,
      },
    ],
  },
  "267": {
    id: "267",
    name: "Charmillon",
    types: ["insect", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "266",
        name: "Armulys",
      },
    ],
  },
  "268": {
    id: "268",
    name: "Blindalys",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "265",
        name: "Chenipotte",
      },
      {
        type: "evolution",
        name: "Papinox",
        id: "269",
        level: 10,
      },
    ],
  },
  "269": {
    id: "269",
    name: "Papinox",
    types: ["insect", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "268",
        name: "Blindalys",
      },
    ],
  },
  "270": {
    id: "270",
    name: "Nénupiot",
    types: ["water", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Lombre",
        id: "271",
        level: 14,
      },
    ],
  },
  "271": {
    id: "271",
    name: "Lombre",
    types: ["water", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "270",
        name: "Nénupiot",
      },
      {
        type: "evolution",
        id: "272",
        name: "Ludicolo",
      },
    ],
  },
  "272": {
    id: "272",
    name: "Ludicolo",
    types: ["water", "grass"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "271",
        name: "Lombre",
      },
    ],
  },
  "273": {
    id: "273",
    name: "Grainipiot",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Pifeuil",
        id: "274",
        level: 14,
      },
    ],
  },
  "274": {
    id: "274",
    name: "Pifeuil",
    types: ["grass", "dark"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "273",
        name: "Grainipiot",
      },
      {
        type: "evolution",
        id: "275",
        name: "Tengalice",
      },
    ],
  },
  "275": {
    id: "275",
    name: "Tengalice",
    types: ["grass", "dark"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "274",
        name: "Pifeuil",
      },
    ],
  },
  "276": {
    id: "276",
    name: "Nirondelle",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Hélédelle",
        id: "277",
        level: 22,
      },
    ],
  },
  "277": {
    id: "277",
    name: "Hélédelle",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "276",
        name: "Nirondelle",
      },
    ],
  },
  "278": {
    id: "278",
    name: "Goélise",
    types: ["water", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Bekipan",
        id: "279",
        level: 25,
      },
    ],
  },
  "279": {
    id: "279",
    name: "Bekipan",
    types: ["water", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "278",
        name: "Goélise",
      },
    ],
  },
  "280": {
    id: "280",
    name: "Tarsal",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Kirlia",
        id: "281",
        level: 20,
      },
    ],
  },
  "281": {
    id: "281",
    name: "Kirlia",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "280",
        name: "Tarsal",
      },
      {
        type: "evolution",
        name: "Gardevoir",
        id: "282",
        level: 30,
      },
      {
        type: "evolution",
        id: "475",
        name: "Gallame",
      },
    ],
  },
  "282": {
    id: "282",
    name: "Gardevoir",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "281",
        name: "Kirlia",
      },
      {
        type: "evolution",
        id: "282.01",
        name: "Méga-Gardevoir",
      },
    ],
  },
  "282.01": {
    id: "282.01",
    name: "Méga-Gardevoir",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "282",
        name: "Gardevoir",
      },
    ],
  },
  "283": {
    id: "283",
    name: "Arakdo",
    types: ["insect", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Maskadra",
        id: "284",
        level: 22,
      },
    ],
  },
  "284": {
    id: "284",
    name: "Maskadra",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "283",
        name: "Arakdo",
      },
    ],
  },
  "285": {
    id: "285",
    name: "Balignon",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Chapignon",
        id: "286",
        level: 23,
      },
    ],
  },
  "286": {
    id: "286",
    name: "Chapignon",
    types: ["grass", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "285",
        name: "Balignon",
      },
    ],
  },
  "287": {
    id: "287",
    name: "Parecool",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Vigoroth",
        id: "288",
        level: 18,
      },
    ],
  },
  "288": {
    id: "288",
    name: "Vigoroth",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "287",
        name: "Parecool",
      },
      {
        type: "evolution",
        name: "Monaflèmit",
        id: "289",
        level: 36,
      },
    ],
  },
  "289": {
    id: "289",
    name: "Monaflèmit",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "288",
        name: "Vigoroth",
      },
    ],
  },
  "290": {
    id: "290",
    name: "Ningale",
    types: ["insect", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Ninjask",
        id: "291",
        level: 20,
      },
      {
        type: "evolution",
        name: "Munja",
        id: "292",
        level: 20,
      },
    ],
  },
  "291": {
    id: "291",
    name: "Ninjask",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "290",
        name: "Ningale",
      },
    ],
  },
  "292": {
    id: "292",
    name: "Munja",
    types: ["insect", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "290",
        name: "Ningale",
      },
    ],
  },
  "293": {
    id: "293",
    name: "Chuchmur",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Ramboum",
        id: "294",
        level: 20,
      },
    ],
  },
  "294": {
    id: "294",
    name: "Ramboum",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "293",
        name: "Chuchmur",
      },
      {
        type: "evolution",
        name: "Brouhabam",
        id: "295",
        level: 40,
      },
    ],
  },
  "295": {
    id: "295",
    name: "Brouhabam",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "294",
        name: "Ramboum",
      },
    ],
  },
  "296": {
    id: "296",
    name: "Makuhita",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Hariyama",
        id: "297",
        level: 24,
      },
    ],
  },
  "297": {
    id: "297",
    name: "Hariyama",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "296",
        name: "Makuhita",
      },
    ],
  },
  "298": {
    id: "298",
    name: "Azurill",
    types: ["normal", "fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "183",
        name: "Marill",
      },
    ],
  },
  "299": {
    id: "299",
    name: "Tarinor",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Tarinorme",
        id: "476",
        level: 20,
      },
    ],
  },
  "300": {
    id: "300",
    name: "Skitty",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "301",
        name: "Delcatty",
      },
    ],
  },
  "301": {
    id: "301",
    name: "Delcatty",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "300",
        name: "Skitty",
      },
    ],
  },
  "302": {
    id: "302",
    name: "Ténéfix",
    types: ["dark", "ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "302.01",
        name: "Méga-Ténéfix",
      },
    ],
  },
  "302.01": {
    id: "302.01",
    name: "Méga-Ténéfix",
    types: ["dark", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "302",
        name: "Ténéfix",
      },
    ],
  },
  "303": {
    id: "303",
    name: "Mysdibule",
    types: ["steel", "fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "303.01",
        name: "Méga-Mysdibule",
      },
    ],
  },
  "303.01": {
    id: "303.01",
    name: "Méga-Mysdibule",
    types: ["steel", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "303",
        name: "Mysdibule",
      },
    ],
  },
  "304": {
    id: "304",
    name: "Galekid",
    types: ["steel", "rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Galegon",
        id: "305",
        level: 32,
      },
    ],
  },
  "305": {
    id: "305",
    name: "Galegon",
    types: ["steel", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "304",
        name: "Galekid",
      },
      {
        type: "evolution",
        name: "Galeking",
        id: "306",
        level: 42,
      },
    ],
  },
  "306": {
    id: "306",
    name: "Galeking",
    types: ["steel", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "305",
        name: "Galegon",
      },
      {
        type: "evolution",
        id: "306.01",
        name: "Méga-Galeking",
      },
    ],
  },
  "306.01": {
    id: "306.01",
    name: "Méga-Galeking",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "306",
        name: "Galeking",
      },
    ],
  },
  "307": {
    id: "307",
    name: "Méditikka",
    types: ["fighting", "psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Charmina",
        id: "308",
        level: 37,
      },
    ],
  },
  "308": {
    id: "308",
    name: "Charmina",
    types: ["fighting", "psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "307",
        name: "Méditikka",
      },
      {
        type: "evolution",
        id: "308.01",
        name: "Méga-Charmina",
      },
    ],
  },
  "308.01": {
    id: "308.01",
    name: "Méga-Charmina",
    types: ["fighting", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "308",
        name: "Charmina",
      },
    ],
  },
  "309": {
    id: "309",
    name: "Dynavolt",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Élecsprint",
        id: "310",
        level: 26,
      },
    ],
  },
  "310": {
    id: "310",
    name: "Élecsprint",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "309",
        name: "Dynavolt",
      },
      {
        type: "evolution",
        id: "310.01",
        name: "Méga-Élecsprint",
      },
    ],
  },
  "310.01": {
    id: "310.01",
    name: "Méga-Élecsprint",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "310",
        name: "Élecsprint",
      },
    ],
  },
  "311": {
    id: "311",
    name: "Posipi",
    types: ["electric"],
  },
  "312": {
    id: "312",
    name: "Négapi",
    types: ["electric"],
  },
  "313": {
    id: "313",
    name: "Muciole",
    types: ["insect"],
  },
  "314": {
    id: "314",
    name: "Lumivole",
    types: ["insect"],
  },
  "315": {
    id: "315",
    name: "Rosélia",
    types: ["grass", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        id: "407",
        name: "Roserade",
      },
      {
        type: "prevolution",
        id: "406",
        name: "Rozbouton",
      },
    ],
  },
  "316": {
    id: "316",
    name: "Gloupti",
    types: ["poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Avaltout",
        id: "317",
        level: 26,
      },
    ],
  },
  "317": {
    id: "317",
    name: "Avaltout",
    types: ["poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "316",
        name: "Gloupti",
      },
    ],
  },
  "318": {
    id: "318",
    name: "Carvanha",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Sharpedo",
        id: "319",
        level: 30,
      },
    ],
  },
  "319": {
    id: "319",
    name: "Sharpedo",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "318",
        name: "Carvanha",
      },
      {
        type: "evolution",
        id: "319.01",
        name: "Méga-Sharpedo",
      },
    ],
  },
  "319.01": {
    id: "319.01",
    name: "Méga-Sharpedo",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "319",
        name: "Sharpedo",
      },
    ],
  },
  "320": {
    id: "320",
    name: "Wailmer",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Wailord",
        id: "321",
        level: 40,
      },
    ],
  },
  "321": {
    id: "321",
    name: "Wailord",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "320",
        name: "Wailmer",
      },
    ],
  },
  "322": {
    id: "322",
    name: "Chamallot",
    types: ["fire", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Camérupt",
        id: "323",
        level: 33,
      },
    ],
  },
  "323": {
    id: "323",
    name: "Camérupt",
    types: ["fire", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "322",
        name: "Chamallot",
      },
      {
        type: "evolution",
        id: "323.01",
        name: "Méga-Camérupt",
      },
    ],
  },
  "323.01": {
    id: "323.01",
    name: "Méga-Camérupt",
    types: ["fire", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "323",
        name: "Camérupt",
      },
    ],
  },
  "324": {
    id: "324",
    name: "Chartor",
    types: ["fire"],
  },
  "325": {
    id: "325",
    name: "Spoink",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Groret",
        id: "326",
        level: 32,
      },
    ],
  },
  "326": {
    id: "326",
    name: "Groret",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "325",
        name: "Spoink",
      },
    ],
  },
  "327": {
    id: "327",
    name: "Spinda",
    types: ["normal"],
  },
  "328": {
    id: "328",
    name: "Kraknoix",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Vibraninf",
        id: "329",
        level: 35,
      },
    ],
  },
  "329": {
    id: "329",
    name: "Vibraninf",
    types: ["ground", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "328",
        name: "Kraknoix",
      },
      {
        type: "evolution",
        name: "Libégon",
        id: "330",
        level: 45,
      },
    ],
  },
  "330": {
    id: "330",
    name: "Libégon",
    types: ["ground", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "329",
        name: "Vibraninf",
      },
    ],
  },
  "331": {
    id: "331",
    name: "Cacnea",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Cacturne",
        id: "332",
        level: 32,
      },
    ],
  },
  "332": {
    id: "332",
    name: "Cacturne",
    types: ["grass", "dark"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "331",
        name: "Cacnea",
      },
    ],
  },
  "333": {
    id: "333",
    name: "Tylton",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Altaria",
        id: "334",
        level: 35,
      },
    ],
  },
  "334": {
    id: "334",
    name: "Altaria",
    types: ["dragon", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "333",
        name: "Tylton",
      },
      {
        type: "evolution",
        id: "334.01",
        name: "Méga-Altaria",
      },
    ],
  },
  "334.01": {
    id: "334.01",
    name: "Méga-Altaria",
    types: ["dragon", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "334",
        name: "Altaria",
      },
    ],
  },
  "335": {
    id: "335",
    name: "Mangriff",
    types: ["normal"],
  },
  "336": {
    id: "336",
    name: "Séviper",
    types: ["poison"],
  },
  "337": {
    id: "337",
    name: "Séléroc",
    types: ["rock", "psychic"],
  },
  "338": {
    id: "338",
    name: "Solaroc",
    types: ["rock", "psychic"],
  },
  "339": {
    id: "339",
    name: "Barloche",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Barbicha",
        id: "340",
        level: 30,
      },
    ],
  },
  "340": {
    id: "340",
    name: "Barbicha",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "339",
        name: "Barloche",
      },
    ],
  },
  "341": {
    id: "341",
    name: "Écrapince",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Colhomard",
        id: "342",
        level: 30,
      },
    ],
  },
  "342": {
    id: "342",
    name: "Colhomard",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "341",
        name: "Écrapince",
      },
    ],
  },
  "343": {
    id: "343",
    name: "Balbuto",
    types: ["ground", "psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Kaorine",
        id: "344",
        level: 36,
      },
    ],
  },
  "344": {
    id: "344",
    name: "Kaorine",
    types: ["ground", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "343",
        name: "Balbuto",
      },
    ],
  },
  "345": {
    id: "345",
    name: "Lilia",
    types: ["rock", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Vacilys",
        id: "346",
        level: 40,
      },
    ],
  },
  "346": {
    id: "346",
    name: "Vacilys",
    types: ["rock", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "345",
        name: "Lilia",
      },
    ],
  },
  "347": {
    id: "347",
    name: "Anorith",
    types: ["rock", "insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Armaldo",
        id: "348",
        level: 40,
      },
    ],
  },
  "348": {
    id: "348",
    name: "Armaldo",
    types: ["rock", "insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "347",
        name: "Anorith",
      },
    ],
  },
  "349": {
    id: "349",
    name: "Barpau",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        id: "350",
        name: "Milobellus",
      },
    ],
  },
  "350": {
    id: "350",
    name: "Milobellus",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "349",
        name: "Barpau",
      },
    ],
  },
  "351": {
    id: "351",
    name: "Morphéo",
    types: ["normal"],
  },
  "351.01": {
    id: "351.01",
    name: "Morphéo (Solaire)",
    types: ["fire"],
  },
  "351.02": {
    id: "351.02",
    name: "Morphéo (Eau de Pluie)",
    types: ["water"],
  },
  "351.03": {
    id: "351.03",
    name: "Morphéo (Blizzard)",
    types: ["ice"],
  },
  "352": {
    id: "352",
    name: "Kecleon",
    types: ["normal"],
  },
  "353": {
    id: "353",
    name: "Polichombr",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Branette",
        id: "354",
        level: 37,
      },
    ],
  },
  "354": {
    id: "354",
    name: "Branette",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "353",
        name: "Polichombr",
      },
      {
        type: "evolution",
        id: "354.01",
        name: "Méga-Branette",
      },
    ],
  },
  "354.01": {
    id: "354.01",
    name: "Méga-Branette",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "354",
        name: "Branette",
      },
    ],
  },
  "355": {
    id: "355",
    name: "Skelénox",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Teraclope",
        id: "356",
        level: 37,
      },
    ],
  },
  "356": {
    id: "356",
    name: "Teraclope",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "355",
        name: "Skelénox",
      },
      {
        type: "evolution",
        id: "477",
        name: "Noctunoir",
      },
    ],
  },
  "357": {
    id: "357",
    name: "Tropius",
    types: ["grass", "flying"],
  },
  "358": {
    id: "358",
    name: "Éoko",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "433",
        name: "Korillon",
      },
    ],
  },
  "359": {
    id: "359",
    name: "Absol",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        id: "359.01",
        name: "Méga-Absol",
      },
    ],
  },
  "359.01": {
    id: "359.01",
    name: "Méga-Absol",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "359",
        name: "Absol",
      },
    ],
  },
  "360": {
    id: "360",
    name: "Okéoké",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Qulbutoké",
        id: "202",
        level: 15,
      },
    ],
  },
  "361": {
    id: "361",
    name: "Stalgamin",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        name: "Oniglali",
        id: "362",
        level: 42,
      },
      {
        type: "evolution",
        id: "478",
        name: "Momartik",
      },
    ],
  },
  "362": {
    id: "362",
    name: "Oniglali",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "361",
        name: "Stalgamin",
      },
      {
        type: "evolution",
        id: "362.01",
        name: "Méga-Oniglali",
      },
    ],
  },
  "362.01": {
    id: "362.01",
    name: "Méga-Oniglali",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "362",
        name: "Oniglali",
      },
    ],
  },
  "363": {
    id: "363",
    name: "Obalie",
    types: ["ice", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Phogleur",
        id: "364",
        level: 32,
      },
    ],
  },
  "364": {
    id: "364",
    name: "Phogleur",
    types: ["ice", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "363",
        name: "Obalie",
      },
      {
        type: "evolution",
        name: "Kaimorse",
        id: "365",
        level: 44,
      },
    ],
  },
  "365": {
    id: "365",
    name: "Kaimorse",
    types: ["ice", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "364",
        name: "Phogleur",
      },
    ],
  },
  "366": {
    id: "366",
    name: "Coquiperl",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        id: "367",
        name: "Serpang",
      },
      {
        type: "evolution",
        id: "368",
        name: "Rosabyss",
      },
    ],
  },
  "367": {
    id: "367",
    name: "Serpang",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "366",
        name: "Coquiperl",
      },
    ],
  },
  "368": {
    id: "368",
    name: "Rosabyss",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "366",
        name: "Coquiperl",
      },
    ],
  },
  "369": {
    id: "369",
    name: "Relicanth",
    types: ["water", "rock"],
    femaleVariation: true,
  },
  "370": {
    id: "370",
    name: "Lovdisc",
    types: ["water"],
  },
  "371": {
    id: "371",
    name: "Draby",
    types: ["dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Drackhaus",
        id: "372",
        level: 30,
      },
    ],
  },
  "372": {
    id: "372",
    name: "Drackhaus",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "371",
        name: "Draby",
      },
      {
        type: "evolution",
        name: "Drattak",
        id: "373",
        level: 50,
      },
    ],
  },
  "373": {
    id: "373",
    name: "Drattak",
    types: ["dragon", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "372",
        name: "Drackhaus",
      },
      {
        type: "evolution",
        id: "373.01",
        name: "Méga-Drattak",
      },
    ],
  },
  "373.01": {
    id: "373.01",
    name: "Méga-Drattak",
    types: ["dragon", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "373",
        name: "Drattak",
      },
    ],
  },
  "374": {
    id: "374",
    name: "Terhal",
    types: ["steel", "psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Métang",
        id: "375",
        level: 20,
      },
    ],
  },
  "375": {
    id: "375",
    name: "Métang",
    types: ["steel", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "374",
        name: "Terhal",
      },
      {
        type: "evolution",
        name: "Métalosse",
        id: "376",
        level: 45,
      },
    ],
  },
  "376": {
    id: "376",
    name: "Métalosse",
    types: ["steel", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "375",
        name: "Métang",
      },
      {
        type: "evolution",
        id: "376.01",
        name: "Méga-Métalosse",
      },
    ],
  },
  "376.01": {
    id: "376.01",
    name: "Méga-Métalosse",
    types: ["steel", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "376",
        name: "Métalosse",
      },
    ],
  },
  "377": {
    id: "377",
    name: "Regirock",
    types: ["rock"],
  },
  "378": {
    id: "378",
    name: "Regice",
    types: ["ice"],
  },
  "379": {
    id: "379",
    name: "Registeel",
    types: ["steel"],
  },
  "380": {
    id: "380",
    name: "Latias",
    types: ["dragon", "psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "380.01",
        name: "Méga-Latias",
      },
    ],
  },
  "380.01": {
    id: "380.01",
    name: "Méga-Latias",
    types: ["dragon", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "380",
        name: "Latias",
      },
    ],
  },
  "381": {
    id: "381",
    name: "Latios",
    types: ["dragon", "psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "381.01",
        name: "Méga-Latios",
      },
    ],
  },
  "381.01": {
    id: "381.01",
    name: "Méga-Latios",
    types: ["dragon", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "381",
        name: "Latios",
      },
    ],
  },
  "382": {
    id: "382",
    name: "Kyogre",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        id: "382.01",
        name: "Primo Kyogre",
      },
    ],
  },
  "382.01": {
    id: "382.01",
    name: "Primo Kyogre",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "382",
        name: "Kyogre",
      },
    ],
  },
  "383": {
    id: "383",
    name: "Groudon",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        id: "383.01",
        name: "Primo Groudon",
      },
    ],
  },
  "383.01": {
    id: "383.01",
    name: "Primo Groudon",
    types: ["ground", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "383",
        name: "Groudon",
      },
    ],
  },
  "384": {
    id: "384",
    name: "Rayquaza",
    types: ["dragon", "flying"],
    evolutions: [
      {
        type: "evolution",
        id: "384.01",
        name: "Méga-Rayquaza",
      },
    ],
  },
  "384.01": {
    id: "384.01",
    name: "Méga-Rayquaza",
    types: ["dragon", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "384",
        name: "Rayquaza",
      },
    ],
  },
  "385": {
    id: "385",
    name: "Jirachi",
    types: ["steel", "psychic"],
  },
  "386": {
    id: "386",
    name: "Deoxys",
    types: ["psychic"],
  },
  "386.01": {
    id: "386.01",
    name: "Deoxys (Attaque)",
    types: ["psychic"],
  },
  "386.02": {
    id: "386.02",
    name: "Deoxys (Defense)",
    types: ["psychic"],
  },
  "386.03": {
    id: "386.03",
    name: "Deoxys (Vitesse)",
    types: ["psychic"],
  },
  "387": {
    id: "387",
    name: "Tortipouss",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Boskara",
        id: "388",
        level: 18,
      },
    ],
  },
  "388": {
    id: "388",
    name: "Boskara",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "387",
        name: "Tortipouss",
      },
      {
        type: "evolution",
        name: "Torterra",
        id: "389",
        level: 32,
      },
    ],
  },
  "389": {
    id: "389",
    name: "Torterra",
    types: ["grass", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "388",
        name: "Boskara",
      },
    ],
  },
  "390": {
    id: "390",
    name: "Ouisticram",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Chimpenfeu",
        id: "391",
        level: 14,
      },
    ],
  },
  "391": {
    id: "391",
    name: "Chimpenfeu",
    types: ["fire", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "390",
        name: "Ouisticram",
      },
      {
        type: "evolution",
        name: "Simiabraz",
        id: "392",
        level: 36,
      },
    ],
  },
  "392": {
    id: "392",
    name: "Simiabraz",
    types: ["fire", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "391",
        name: "Chimpenfeu",
      },
    ],
  },
  "393": {
    id: "393",
    name: "Tiplouf",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Prinplouf",
        id: "394",
        level: 16,
      },
    ],
  },
  "394": {
    id: "394",
    name: "Prinplouf",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "393",
        name: "Tiplouf",
      },
      {
        type: "evolution",
        name: "Pingoleon",
        id: "395",
        level: 36,
      },
    ],
  },
  "395": {
    id: "395",
    name: "Pingoleon",
    types: ["water", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "394",
        name: "Prinplouf",
      },
    ],
  },
  "396": {
    id: "396",
    name: "Étourmi",
    types: ["normal", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Étourvol",
        id: "397",
        level: 14,
      },
    ],
  },
  "397": {
    id: "397",
    name: "Étourvol",
    types: ["normal", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "396",
        name: "Étourmi",
      },
      {
        type: "evolution",
        name: "Étouraptor",
        id: "398",
        level: 34,
      },
    ],
  },
  "398": {
    id: "398",
    name: "Étouraptor",
    types: ["normal", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "397",
        name: "Étourvol",
      },
    ],
  },
  "399": {
    id: "399",
    name: "Keunotor",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Castorno",
        id: "400",
        level: 15,
      },
    ],
  },
  "400": {
    id: "400",
    name: "Castorno",
    types: ["normal", "water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "399",
        name: "Keunotor",
      },
    ],
  },
  "401": {
    id: "401",
    name: "Crikzik",
    types: ["insect"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Mélokrik",
        id: "402",
        level: 10,
      },
    ],
  },
  "402": {
    id: "402",
    name: "Mélokrik",
    types: ["insect"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "401",
        name: "Crikzik",
      },
    ],
  },
  "403": {
    id: "403",
    name: "Lixy",
    types: ["electric"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Luxio",
        id: "404",
        level: 15,
      },
    ],
  },
  "404": {
    id: "404",
    name: "Luxio",
    types: ["electric"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "403",
        name: "Lixy",
      },
      {
        type: "evolution",
        name: "Luxray",
        id: "405",
        level: 30,
      },
    ],
  },
  "405": {
    id: "405",
    name: "Luxray",
    types: ["electric"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "404",
        name: "Luxio",
      },
    ],
  },
  "406": {
    id: "406",
    name: "Rozbouton",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "evolution",
        id: "315",
        name: "Rosélia",
      },
    ],
  },
  "407": {
    id: "407",
    name: "Roserade",
    types: ["grass", "poison"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "315",
        name: "Rosélia",
      },
    ],
  },
  "408": {
    id: "408",
    name: "Kranidos",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Charkos",
        id: "409",
        level: 30,
      },
    ],
  },
  "409": {
    id: "409",
    name: "Charkos",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "408",
        name: "Kranidos",
      },
    ],
  },
  "410": {
    id: "410",
    name: "Dinoclier",
    types: ["rock", "steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Bastiodon",
        id: "411",
        level: 30,
      },
    ],
  },
  "411": {
    id: "411",
    name: "Bastiodon",
    types: ["rock", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "410",
        name: "Dinoclier",
      },
    ],
  },
  "412": {
    id: "412",
    name: "Cheniti (Plante)",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Cheniselle (Plante)",
        id: "413",
        level: 20,
      },
      {
        type: "evolution",
        name: "Papilord",
        id: "414",
        level: 20,
      },
    ],
  },

  "412.01": {
    id: "412.01",
    name: "Cheniti (Sable)",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Cheniselle (Sable)",
        id: "413.01",
        level: 20,
      },
      {
        type: "evolution",
        name: "Papilord",
        id: "414",
        level: 20,
      },
    ],
  },
  "412.02": {
    id: "412.02",
    name: "Cheniti (Dechet)",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Cheniselle (Dechet)",
        id: "413.02",
        level: 20,
      },
      {
        type: "evolution",
        name: "Papilord",
        id: "414",
        level: 20,
      },
    ],
  },
  "413": {
    id: "413",
    name: "Cheniselle (Plante)",
    types: ["insect", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "412",
        name: "Cheniti (Plante)",
      },
    ],
  },
  "413.01": {
    id: "413.01",
    name: "Cheniselle (Sable)",
    types: ["insect", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "412.01",
        name: "Cheniti (Sable)",
      },
    ],
  },
  "413.02": {
    id: "413.02",
    name: "Cheniselle (Dechet)",
    types: ["insect", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "412.02",
        name: "Cheniti (Dechet)",
      },
    ],
  },
  "414": {
    id: "414",
    name: "Papilord",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "412",
        name: "Cheniti (Plante)",
      },
      {
        type: "prevolution",
        id: "412.01",
        name: "Cheniti (Sable)",
      },
      {
        type: "prevolution",
        id: "412.02",
        name: "Cheniti (Dechet)",
      },
    ],
  },
  "415": {
    id: "415",
    name: "Apitrini",
    types: ["insect", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Apireine",
        id: "416",
        level: 21,
      },
    ],
  },
  "416": {
    id: "416",
    name: "Apireine",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "415",
        name: "Apitrini",
      },
    ],
  },
  "417": {
    id: "417",
    name: "Pachirisu",
    types: ["electric"],
    femaleVariation: true,
  },
  "418": {
    id: "418",
    name: "Mustébouée",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Mustéflott",
        id: "419",
        level: 26,
      },
    ],
  },
  "419": {
    id: "419",
    name: "Mustéflott",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "418",
        name: "Mustébouée",
      },
    ],
  },
  "420": {
    id: "420",
    name: "Ceribou",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Ceriflor (Couvert)",
        id: "421",
        level: 25,
      },
      {
        type: "evolution",
        name: "Ceriflor (Ensoleille)",
        id: "421.01",
        level: 25,
      },
    ],
  },
  "421": {
    id: "421",
    name: "Ceriflor (Couvert)",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "420",
        name: "Ceribou",
      },
    ],
  },
  "421.01": {
    id: "421.01",
    name: "Ceriflor (Ensoleille)",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "420",
        name: "Ceribou",
      },
    ],
  },
  "422": {
    id: "422",
    name: "Sancoki (Occident)",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Tritosor (Occident)",
        id: "423",
        level: 30,
      },
    ],
  },
  "422.01": {
    id: "422.01",
    name: "Sancoki (Orient)",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Tritosor (Orient)",
        id: "423.01",
        level: 30,
      },
    ],
  },
  "423": {
    id: "423",
    name: "Tritosor (Occident)",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "422",
        name: "Sancoki (Occident)",
      },
    ],
  },
  "423.01": {
    id: "423.01",
    name: "Tritosor (Orient)",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "422.01",
        name: "Sancoki (Orient)",
      },
    ],
  },
  "424": {
    id: "424",
    name: "Capidextre",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "190",
        name: "Capumain",
      },
    ],
  },
  "425": {
    id: "425",
    name: "Baudrive",
    types: ["ghost", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Grodrive",
        id: "426",
        level: 28,
      },
    ],
  },
  "426": {
    id: "426",
    name: "Grodrive",
    types: ["ghost", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "425",
        name: "Baudrive",
      },
    ],
  },
  "427": {
    id: "427",
    name: "Laporeille",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "428",
        name: "Lockpin",
      },
    ],
  },
  "428": {
    id: "428",
    name: "Lockpin",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "428.01",
        name: "Méga-Lockpin",
      },
      {
        type: "prevolution",
        id: "427",
        name: "Laporeille",
      },
    ],
  },
  "428.01": {
    id: "428.01",
    name: "Méga-Lockpin",
    types: ["normal", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "428",
        name: "Lockpin",
      },
    ],
  },
  "429": {
    id: "429",
    name: "Magirêve",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "200",
        name: "Feuforêve",
      },
    ],
  },
  "430": {
    id: "430",
    name: "Corboss",
    types: ["dark", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "198",
        name: "Cornèbre",
      },
    ],
  },
  "431": {
    id: "431",
    name: "Chaglam",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Chaffreux",
        id: "432",
        level: 38,
      },
    ],
  },
  "432": {
    id: "432",
    name: "Chaffreux",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "431",
        name: "Chaglam",
      },
    ],
  },
  "433": {
    id: "433",
    name: "Korillon",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "358",
        name: "Éoko",
      },
    ],
  },
  "434": {
    id: "434",
    name: "Moufouette",
    types: ["poison", "dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Moufflair",
        id: "435",
        level: 34,
      },
    ],
  },
  "435": {
    id: "435",
    name: "Moufflair",
    types: ["poison", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "434",
        name: "Moufouette",
      },
    ],
  },
  "436": {
    id: "436",
    name: "Archéomire",
    types: ["steel", "psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Archéodong",
        id: "437",
        level: 33,
      },
    ],
  },
  "437": {
    id: "437",
    name: "Archéodong",
    types: ["steel", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "436",
        name: "Archéomire",
      },
    ],
  },
  "438": {
    id: "438",
    name: "Manzaï",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Simularbre",
        id: "185",
        level: 32,
      },
    ],
  },
  "439": {
    id: "439",
    name: "Mime Jr.",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "M. Mime",
        id: "122",
        level: 32,
      },
      {
        type: "evolution",
        name: "M. Mime de Galar",
        id: "122.01",
        level: 32,
      },
    ],
  },
  "440": {
    id: "440",
    name: "Ptiravi",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Leveinard",
        id: "113",
      },
    ],
  },
  "441": {
    id: "441",
    name: "Pijako",
    types: ["normal", "flying"],
  },
  "442": {
    id: "442",
    name: "Spiritomb",
    types: ["ghost", "dark"],
  },
  "443": {
    id: "443",
    name: "Griknot",
    types: ["dragon", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Carmache",
        id: "444",
        level: 24,
      },
    ],
  },
  "444": {
    id: "444",
    name: "Carmache",
    types: ["dragon", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "443",
        name: "Griknot",
      },
      {
        type: "evolution",
        name: "Carchakrok",
        id: "445",
        level: 48,
      },
    ],
  },
  "445": {
    id: "445",
    name: "Carchakrok",
    types: ["dragon", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "444",
        name: "Carmache",
      },
      {
        type: "evolution",
        id: "445.01",
        name: "Méga-Carchakrok",
      },
    ],
  },
  "445.01": {
    id: "445.01",
    name: "Méga-Carchakrok",
    types: ["dragon", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "445",
        name: "Carchakrok",
      },
    ],
  },
  "446": {
    id: "446",
    name: "Goinfrex",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "143",
        name: "Ronflex",
      },
    ],
  },
  "447": {
    id: "447",
    name: "Riolu",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        id: "448",
        name: "Lucario",
      },
    ],
  },
  "448": {
    id: "448",
    name: "Lucario",
    types: ["fighting", "steel"],
    evolutions: [
      {
        type: "evolution",
        id: "448.01",
        name: "Méga-Lucario",
      },
      {
        type: "prevolution",
        id: "447",
        name: "Riolu",
      },
    ],
  },
  "448.01": {
    id: "448.01",
    name: "Méga-Lucario",
    types: ["fighting", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "448",
        name: "Lucario",
      },
    ],
  },
  "449": {
    id: "449",
    name: "Hippopotas",
    types: ["ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Hippodocus",
        id: "450",
        level: 34,
      },
    ],
  },
  "450": {
    id: "450",
    name: "Hippodocus",
    types: ["ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "449",
        name: "Hippopotas",
      },
    ],
  },
  "451": {
    id: "451",
    name: "Rapion",
    types: ["poison", "insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Drascore",
        id: "452",
        level: 40,
      },
    ],
  },
  "452": {
    id: "452",
    name: "Drascore",
    types: ["poison", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "451",
        name: "Rapion",
      },
    ],
  },
  "453": {
    id: "453",
    name: "Cradopaud",
    types: ["poison", "fighting"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Coatox",
        id: "454",
        level: 37,
      },
    ],
  },
  "454": {
    id: "454",
    name: "Coatox",
    types: ["poison", "fighting"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "453",
        name: "Cradopaud",
      },
    ],
  },
  "455": {
    id: "455",
    name: "Vortente",
    types: ["grass"],
  },
  "456": {
    id: "456",
    name: "Écayon",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Luminéon",
        id: "457",
        level: 31,
      },
    ],
  },
  "457": {
    id: "457",
    name: "Luminéon",
    types: ["water"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "456",
        name: "Écayon",
      },
    ],
  },
  "458": {
    id: "458",
    name: "Babimanta",
    types: ["water", "flying"],
    evolutions: [
      {
        type: "evolution",
        id: "226",
        name: "Démanta",
      },
    ],
  },
  "459": {
    id: "459",
    name: "Blizzi",
    types: ["grass", "ice"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Blizzaroi",
        id: "460",
        level: 40,
      },
    ],
  },
  "460": {
    id: "460",
    name: "Blizzaroi",
    types: ["grass", "ice"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "459",
        name: "Blizzi",
      },
      {
        type: "evolution",
        id: "460.01",
        name: "Méga-Blizzaroi",
      },
    ],
  },
  "460.01": {
    id: "460.01",
    name: "Méga-Blizzaroi",
    types: ["grass", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "460",
        name: "Blizzaroi",
      },
    ],
  },
  "461": {
    id: "461",
    name: "Dimoret",
    types: ["dark", "ice"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "215",
        name: "Farfuret",
      },
    ],
  },
  "462": {
    id: "462",
    name: "Magnézone",
    types: ["electric", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "82",
        name: "Magnéton",
      },
    ],
  },
  "463": {
    id: "463",
    name: "Coudlangue",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "108",
        name: "Excelangue",
      },
    ],
  },
  "464": {
    id: "464",
    name: "Rhinastoc",
    types: ["ground", "rock"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "112",
        name: "Rhinoféros",
      },
    ],
  },
  "465": {
    id: "465",
    name: "Bouldeneu",
    types: ["grass"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "114",
        name: "Saquedeneu",
      },
    ],
  },
  "466": {
    id: "466",
    name: "Élekable",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "125",
        name: "Élektek",
      },
    ],
  },
  "467": {
    id: "467",
    name: "Maganon",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "126",
        name: "Magmar",
      },
    ],
  },
  "468": {
    id: "468",
    name: "Togekiss",
    types: ["fairy", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "176",
        name: "Togetic",
      },
    ],
  },
  "469": {
    id: "469",
    name: "Yanmega",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "193",
        name: "Yanma",
      },
    ],
  },
  "470": {
    id: "470",
    name: "Phyllali",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "471": {
    id: "471",
    name: "Givrali",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "472": {
    id: "472",
    name: "Scorvol",
    types: ["ground", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "207",
        name: "Scorplane",
      },
    ],
  },
  "473": {
    id: "473",
    name: "Mammochon",
    types: ["ice", "ground"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "221",
        name: "Cochignon",
      },
    ],
  },
  "474": {
    id: "474",
    name: "Porygon-Z",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "233",
        name: "Porygon2",
      },
    ],
  },
  "475": {
    id: "475",
    name: "Gallame",
    types: ["psychic", "fighting"],
    evolutions: [
      {
        type: "evolution",
        id: "475.01",
        name: "Méga-Gallame",
      },
      {
        type: "prevolution",
        id: "281",
        name: "Kirlia",
      },
    ],
  },
  "475.01": {
    id: "475.01",
    name: "Méga-Gallame",
    types: ["psychic", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "475",
        name: "Gallame",
      },
    ],
  },
  "476": {
    id: "476",
    name: "Tarinorme",
    types: ["rock", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "299",
        name: "Tarinor",
      },
    ],
  },
  "477": {
    id: "477",
    name: "Noctunoir",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "356",
        name: "Teraclope",
      },
    ],
  },
  "478": {
    id: "478",
    name: "Momartik",
    types: ["ice", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "361",
        name: "Stalgamin",
      },
    ],
  },
  "479": {
    id: "479",
    name: "Motisma",
    types: ["electric", "ghost"],
  },
  "479.01": {
    id: "479.01",
    name: "Motisma (Chaleur)",
    types: ["electric", "fire"],
  },
  "479.02": {
    id: "479.02",
    name: "Motisma (Lavage)",
    types: ["electric", "water"],
  },
  "479.03": {
    id: "479.03",
    name: "Motisma (Froid)",
    types: ["electric", "ice"],
  },
  "479.04": {
    id: "479.04",
    name: "Motisma (Hélice)",
    types: ["electric", "flying"],
  },
  "479.05": {
    id: "479.05",
    name: "Motisma (Tonte)",
    types: ["electric", "grass"],
  },
  "480": {
    id: "480",
    name: "Créhelf",
    types: ["psychic"],
  },
  "481": {
    id: "481",
    name: "Créfollet",
    types: ["psychic"],
  },
  "482": {
    id: "482",
    name: "Créfadet",
    types: ["psychic"],
  },
  "483": {
    id: "483",
    name: "Dialga",
    types: ["steel", "dragon"],
  },
  "483.01": {
    id: "483.01",
    name: "Dialga (Originel)",
    types: ["steel", "dragon"],
  },
  "484": {
    id: "484",
    name: "Palkia",
    types: ["water", "dragon"],
  },
  "484.01": {
    id: "484.01",
    name: "Palkia (Originel)",
    types: ["water", "dragon"],
  },
  "485": {
    id: "485",
    name: "Heatran",
    types: ["fire", "steel"],
  },
  "486": {
    id: "486",
    name: "Regigigas",
    types: ["normal"],
  },
  "487": {
    id: "487",
    name: "Giratina (Alternative)",
    types: ["ghost", "dragon"],
  },
  "487.01": {
    id: "487.01",
    name: "Giratina (Originel)",
    types: ["ghost", "dragon"],
  },
  "488": {
    id: "488",
    name: "Cresselia",
    types: ["psychic"],
  },
  "489": {
    id: "489",
    name: "Phione",
    types: ["water"],
  },
  "490": {
    id: "490",
    name: "Manaphy",
    types: ["water"],
  },
  "491": {
    id: "491",
    name: "Darkrai",
    types: ["dark"],
  },
  "492": {
    id: "492",
    name: "Shaymin (Terrestre)",
    types: ["grass"],
  },
  "492.01": {
    id: "492.01",
    name: "Shaymin (Céleste)",
    types: ["grass", "flying"],
  },
  "493": {
    id: "493",
    name: "Arceus (Normal)",
    types: ["normal"],
  },
  "493.01": {
    id: "493.01",
    name: "Arceus (Feu)",
    types: ["fire"],
  },
  "493.02": {
    id: "493.02",
    name: "Arceus (Eau)",
    types: ["water"],
  },
  "493.03": {
    id: "493.03",
    name: "Arceus (Électrik)",
    types: ["electric"],
  },
  "493.04": {
    id: "493.04",
    name: "Arceus (Plante)",
    types: ["grass"],
  },
  "493.05": {
    id: "493.05",
    name: "Arceus (Glace)",
    types: ["ice"],
  },
  "493.06": {
    id: "493.06",
    name: "Arceus (Combat)",
    types: ["fighting"],
  },
  "493.07": {
    id: "493.07",
    name: "Arceus (Poison)",
    types: ["poison"],
  },
  "493.08": {
    id: "493.08",
    name: "Arceus (Sol)",
    types: ["ground"],
  },
  "493.09": {
    id: "493.09",
    name: "Arceus (Vol)",
    types: ["flying"],
  },
  "493.1": {
    id: "493.1",
    name: "Arceus (Psy)",
    types: ["psychic"],
  },
  "493.11": {
    id: "493.11",
    name: "Arceus (Insecte)",
    types: ["insect"],
  },
  "493.12": {
    id: "493.12",
    name: "Arceus (Roche)",
    types: ["rock"],
  },
  "493.13": {
    id: "493.13",
    name: "Arceus (Spectre)",
    types: ["ghost"],
  },
  "493.14": {
    id: "493.14",
    name: "Arceus (Dragon)",
    types: ["dragon"],
  },
  "493.15": {
    id: "493.15",
    name: "Arceus (Ténèbres)",
    types: ["dark"],
  },
  "493.16": {
    id: "493.16",
    name: "Arceus (Acier)",
    types: ["steel"],
  },
  "493.17": {
    id: "493.17",
    name: "Arceus (Fée)",
    types: ["fairy"],
  },
  "494": {
    id: "494",
    name: "Victini",
    types: ["psychic", "fire"],
  },
  "495": {
    id: "495",
    name: "Vipélierre",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Lianaja",
        id: "496",
        level: 17,
      },
    ],
  },
  "496": {
    id: "496",
    name: "Lianaja",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "495",
        name: "Vipélierre",
      },
      {
        type: "evolution",
        name: "Majaspic",
        id: "497",
        level: 36,
      },
    ],
  },
  "497": {
    id: "497",
    name: "Majaspic",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "496",
        name: "Lianaja",
      },
    ],
  },
  "498": {
    id: "498",
    name: "Gruikui",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Grotichon",
        id: "499",
        level: 17,
      },
    ],
  },
  "499": {
    id: "499",
    name: "Grotichon",
    types: ["fire", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "498",
        name: "Gruikui",
      },
      {
        type: "evolution",
        name: "Roitiflam",
        id: "500",
        level: 36,
      },
    ],
  },
  "500": {
    id: "500",
    name: "Roitiflam",
    types: ["fire", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "499",
        name: "Grotichon",
      },
    ],
  },
  "501": {
    id: "501",
    name: "Moustillon",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Mateloutre",
        id: "502",
        level: 17,
      },
    ],
  },
  "502": {
    id: "502",
    name: "Mateloutre",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "501",
        name: "Moustillon",
      },
      {
        type: "evolution",
        name: "Clamiral",
        id: "503",
        level: 36,
      },
      {
        type: "evolution",
        name: "Clamiral de Hisui",
        id: "503.01",
        level: 36,
      },
    ],
  },
  "503": {
    id: "503",
    name: "Clamiral",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "502",
        name: "Mateloutre",
      },
    ],
  },
  "503.01": {
    id: "503.01",
    name: "Clamiral de Hisui",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "502",
        name: "Mateloutre",
      },
    ],
  },
  "504": {
    id: "504",
    name: "Ratentif",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Miradar",
        id: "505",
        level: 20,
      },
    ],
  },
  "505": {
    id: "505",
    name: "Miradar",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "504",
        name: "Ratentif",
      },
    ],
  },
  "506": {
    id: "506",
    name: "Ponchiot",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Ponchien",
        id: "507",
        level: 16,
      },
    ],
  },
  "507": {
    id: "507",
    name: "Ponchien",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "506",
        name: "Ponchiot",
      },
      {
        type: "evolution",
        name: "Mastouffe",
        id: "508",
        level: 32,
      },
    ],
  },
  "508": {
    id: "508",
    name: "Mastouffe",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "507",
        name: "Ponchien",
      },
    ],
  },
  "509": {
    id: "509",
    name: "Chacripan",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Léopardus",
        id: "510",
        level: 20,
      },
    ],
  },
  "510": {
    id: "510",
    name: "Léopardus",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "509",
        name: "Chacripan",
      },
    ],
  },
  "511": {
    id: "511",
    name: "Feuillajou",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        id: "512",
        name: "Feuiloutan",
      },
    ],
  },
  "512": {
    id: "512",
    name: "Feuiloutan",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "511",
        name: "Feuillajou",
      },
    ],
  },
  "513": {
    id: "513",
    name: "Flamajou",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        id: "514",
        name: "Flamoutan",
      },
    ],
  },
  "514": {
    id: "514",
    name: "Flamoutan",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "513",
        name: "Flamajou",
      },
    ],
  },
  "515": {
    id: "515",
    name: "Flotajou",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        id: "516",
        name: "Flotoutan",
      },
    ],
  },
  "516": {
    id: "516",
    name: "Flotoutan",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "515",
        name: "Flotajou",
      },
    ],
  },
  "517": {
    id: "517",
    name: "Munna",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "518",
        name: "Mushana",
      },
    ],
  },
  "518": {
    id: "518",
    name: "Mushana",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "517",
        name: "Munna",
      },
    ],
  },
  "519": {
    id: "519",
    name: "Poichigeon",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Colombeau",
        id: "520",
        level: 21,
      },
    ],
  },
  "520": {
    id: "520",
    name: "Colombeau",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "519",
        name: "Poichigeon",
      },
      {
        type: "evolution",
        name: "Déflaisan",
        id: "521",
        level: 32,
      },
    ],
  },
  "521": {
    id: "521",
    name: "Déflaisan",
    types: ["normal", "flying"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "520",
        name: "Colombeau",
      },
    ],
  },
  "522": {
    id: "522",
    name: "Zébibron",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Zéblitz",
        id: "523",
        level: 27,
      },
    ],
  },
  "523": {
    id: "523",
    name: "Zéblitz",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "522",
        name: "Zébibron",
      },
    ],
  },
  "524": {
    id: "524",
    name: "Nodulithe",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Géolithe",
        id: "525",
        level: 25,
      },
    ],
  },
  "525": {
    id: "525",
    name: "Géolithe",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "524",
        name: "Nodulithe",
      },
      {
        type: "evolution",
        id: "526",
        name: "Gigalithe",
      },
    ],
  },
  "526": {
    id: "526",
    name: "Gigalithe",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "525",
        name: "Géolithe",
      },
    ],
  },
  "527": {
    id: "527",
    name: "Chovsourir",
    types: ["psychic", "flying"],
    evolutions: [
      {
        type: "evolution",
        id: "528",
        name: "Rhinolove",
      },
    ],
  },
  "528": {
    id: "528",
    name: "Rhinolove",
    types: ["psychic", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "527",
        name: "Chovsourir",
      },
    ],
  },
  "529": {
    id: "529",
    name: "Rototaupe",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Minotaupe",
        id: "530",
        level: 31,
      },
    ],
  },
  "530": {
    id: "530",
    name: "Minotaupe",
    types: ["ground", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "529",
        name: "Rototaupe",
      },
    ],
  },
  "531": {
    id: "531",
    name: "Nanméouïe",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "531.01",
        name: "Méga-Nanméouïe",
      },
    ],
  },
  "531.01": {
    id: "531.01",
    name: "Méga-Nanméouïe",
    types: ["normal", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "531",
        name: "Nanméouïe",
      },
    ],
  },
  "532": {
    id: "532",
    name: "Charpenti",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Ouvrifier",
        id: "533",
        level: 25,
      },
    ],
  },
  "533": {
    id: "533",
    name: "Ouvrifier",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "532",
        name: "Charpenti",
      },
      {
        type: "evolution",
        id: "534",
        name: "Bétochef",
      },
    ],
  },
  "534": {
    id: "534",
    name: "Bétochef",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "533",
        name: "Ouvrifier",
      },
    ],
  },
  "535": {
    id: "535",
    name: "Tritonde",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Batracné",
        id: "536",
        level: 25,
      },
    ],
  },
  "536": {
    id: "536",
    name: "Batracné",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "535",
        name: "Tritonde",
      },
      {
        type: "evolution",
        name: "Crapustule",
        id: "537",
        level: 36,
      },
    ],
  },
  "537": {
    id: "537",
    name: "Crapustule",
    types: ["water", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "536",
        name: "Batracné",
      },
    ],
  },
  "538": {
    id: "538",
    name: "Judokrak",
    types: ["fighting"],
  },
  "539": {
    id: "539",
    name: "Karaclée",
    types: ["fighting"],
  },
  "540": {
    id: "540",
    name: "Larveyette",
    types: ["insect", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Couverdure",
        id: "541",
        level: 20,
      },
    ],
  },
  "541": {
    id: "541",
    name: "Couverdure",
    types: ["insect", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "540",
        name: "Larveyette",
      },
      {
        type: "evolution",
        id: "542",
        name: "Manternel",
      },
    ],
  },
  "542": {
    id: "542",
    name: "Manternel",
    types: ["insect", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "541",
        name: "Couverdure",
      },
    ],
  },
  "543": {
    id: "543",
    name: "Venipatte",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Scobolide",
        id: "544",
        level: 22,
      },
    ],
  },
  "544": {
    id: "544",
    name: "Scobolide",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "543",
        name: "Venipatte",
      },
      {
        type: "evolution",
        name: "Brutapode",
        id: "545",
        level: 30,
      },
    ],
  },
  "545": {
    id: "545",
    name: "Brutapode",
    types: ["insect", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "544",
        name: "Scobolide",
      },
    ],
  },
  "546": {
    id: "546",
    name: "Doudouvet",
    types: ["grass", "fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "547",
        name: "Farfaduvet",
      },
    ],
  },
  "547": {
    id: "547",
    name: "Farfaduvet",
    types: ["grass", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "546",
        name: "Doudouvet",
      },
    ],
  },
  "548": {
    id: "548",
    name: "Chlorobule",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        id: "549",
        name: "Fragilady",
      },
      {
        type: "evolution",
        id: "549.01",
        name: "Fragilady de Hisui",
      },
    ],
  },
  "549": {
    id: "549",
    name: "Fragilady",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "548",
        name: "Chlorobule",
      },
    ],
  },
  "549.01": {
    id: "549.01",
    name: "Fragilady de Hisui",
    types: ["grass", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "548",
        name: "Chlorobule",
      },
    ],
  },
  "550": {
    id: "550",
    name: "Bargantua (Rouge)",
    types: ["water"],
  },
  "550.01": {
    id: "550.01",
    name: "Bargantua (Bleu)",
    types: ["water"],
  },
  "550.02": {
    id: "550.02",
    name: "Bargantua (Blanc)",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Paragruel",
        id: "902",
        level: 45,
      },
    ],
  },
  "551": {
    id: "551",
    name: "Mascaïman",
    types: ["ground", "dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Escroco",
        id: "552",
        level: 29,
      },
    ],
  },
  "552": {
    id: "552",
    name: "Escroco",
    types: ["ground", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "551",
        name: "Mascaïman",
      },
      {
        type: "evolution",
        name: "Crocorible",
        id: "553",
        level: 40,
      },
    ],
  },
  "553": {
    id: "553",
    name: "Crocorible",
    types: ["ground", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "552",
        name: "Escroco",
      },
    ],
  },
  "554": {
    id: "554",
    name: "Darumarond",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Darumacho",
        id: "555",
        level: 35,
      },
    ],
  },
  "554.01": {
    id: "554.01",
    name: "Darumarond de Galar",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        id: "555.02",
        name: "Darumacho de Galar",
      },
    ],
  },
  "555": {
    id: "555",
    name: "Darumacho",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "554",
        name: "Darumarond",
      },
    ],
  },
  "555.01": {
    id: "555.01",
    name: "Darumacho (Transe)",
    types: ["fire", "psychic"],
  },
  "555.02": {
    id: "555.02",
    name: "Darumacho de Galar",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "554.01",
        name: "Darumarond de Galar",
      },
    ],
  },
  "555.03": {
    id: "555.03",
    name: "Darumacho de Galar (Transe)",
    types: ["ice", "fire"],
  },
  "556": {
    id: "556",
    name: "Maracachi",
    types: ["grass"],
  },
  "557": {
    id: "557",
    name: "Crabicoque",
    types: ["insect", "rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Crabaraque",
        id: "558",
        level: 34,
      },
    ],
  },
  "558": {
    id: "558",
    name: "Crabaraque",
    types: ["insect", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "557",
        name: "Crabicoque",
      },
    ],
  },
  "559": {
    id: "559",
    name: "Baggiguane",
    types: ["dark", "fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Baggaïd",
        id: "560",
        level: 39,
      },
    ],
  },
  "560": {
    id: "560",
    name: "Baggaïd",
    types: ["dark", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "559",
        name: "Baggiguane",
      },
    ],
  },
  "561": {
    id: "561",
    name: "Cryptéro",
    types: ["psychic", "flying"],
  },
  "562": {
    id: "562",
    name: "Tutafeh",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Tutankafer",
        id: "563",
        level: 34,
      },
    ],
  },
  "562.01": {
    id: "562.01",
    name: "Tutafeh de Galar",
    types: ["ground", "ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Tutétékri",
        id: "867",
        level: 34,
      },
    ],
  },
  "563": {
    id: "563",
    name: "Tutankafer",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "562",
        name: "Tutafeh",
      },
    ],
  },
  "564": {
    id: "564",
    name: "Carapagos",
    types: ["water", "rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Mégapagos",
        id: "565",
        level: 37,
      },
    ],
  },
  "565": {
    id: "565",
    name: "Mégapagos",
    types: ["water", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "564",
        name: "Carapagos",
      },
    ],
  },
  "566": {
    id: "566",
    name: "Arkéapti",
    types: ["rock", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Aéroptéryx",
        id: "567",
        level: 37,
      },
    ],
  },
  "567": {
    id: "567",
    name: "Aéroptéryx",
    types: ["rock", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "566",
        name: "Arkéapti",
      },
    ],
  },
  "568": {
    id: "568",
    name: "Miamiasme",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Miasmax",
        id: "569",
        level: 36,
      },
    ],
  },
  "569": {
    id: "569",
    name: "Miasmax",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "568",
        name: "Miamiasme",
      },
      {
        type: "evolution",
        id: "569.01",
        name: "Miasmax Gigamax",
      },
    ],
  },
  "569.01": {
    id: "569.01",
    name: "Miasmax Gigamax",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "569",
        name: "Miasmax",
      },
    ],
  },
  "570": {
    id: "570",
    name: "Zorua",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Zoroark",
        id: "571",
        level: 30,
      },
    ],
  },
  "570.01": {
    id: "570.01",
    name: "Zorua de Hisui",
    types: ["normal", "ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Zoroark de Hisui",
        id: "571.01",
        level: 30,
      },
    ],
  },
  "571": {
    id: "571",
    name: "Zoroark",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "570",
        name: "Zorua",
      },
    ],
  },
  "571.01": {
    id: "571.01",
    name: "Zoroark de Hisui",
    types: ["normal", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "570.01",
        name: "Zorua de Hisui",
      },
    ],
  },
  "572": {
    id: "572",
    name: "Chinchidou",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "573",
        name: "Pashmilla",
      },
    ],
  },
  "573": {
    id: "573",
    name: "Pashmilla",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "572",
        name: "Chinchidou",
      },
    ],
  },
  "574": {
    id: "574",
    name: "Scrutella",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Mesmérella",
        id: "575",
        level: 32,
      },
    ],
  },
  "575": {
    id: "575",
    name: "Mesmérella",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "574",
        name: "Scrutella",
      },
      {
        type: "evolution",
        name: "Sidérella",
        id: "576",
        level: 41,
      },
    ],
  },
  "576": {
    id: "576",
    name: "Sidérella",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "575",
        name: "Mesmérella",
      },
    ],
  },
  "577": {
    id: "577",
    name: "Nucléos",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Méios",
        id: "578",
        level: 32,
      },
    ],
  },
  "578": {
    id: "578",
    name: "Méios",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "577",
        name: "Nucléos",
      },
      {
        type: "evolution",
        name: "Symbios",
        id: "579",
        level: 41,
      },
    ],
  },
  "579": {
    id: "579",
    name: "Symbios",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "578",
        name: "Méios",
      },
    ],
  },
  "580": {
    id: "580",
    name: "Couaneton",
    types: ["water", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Lakmécygne",
        id: "581",
        level: 35,
      },
    ],
  },
  "581": {
    id: "581",
    name: "Lakmécygne",
    types: ["water", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "580",
        name: "Couaneton",
      },
    ],
  },
  "582": {
    id: "582",
    name: "Sorbébé",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        name: "Sorboul",
        id: "583",
        level: 35,
      },
    ],
  },
  "583": {
    id: "583",
    name: "Sorboul",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "582",
        name: "Sorbébé",
      },
      {
        type: "evolution",
        name: "Sourbouboul",
        id: "584",
        level: 47,
      },
    ],
  },
  "584": {
    id: "584",
    name: "Sourbouboul",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "583",
        name: "Sorboul",
      },
    ],
  },
  "585": {
    id: "585",
    name: "Vivaldaim (Printemps)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Haydaim (Printemps)",
        id: "586",
        level: 34,
      },
    ],
  },
  "585.01": {
    id: "585.01",
    name: "Vivaldaim (Été)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Haydaim (Été)",
        id: "586.01",
        level: 34,
      },
    ],
  },
  "585.02": {
    id: "585.02",
    name: "Vivaldaim (Automne)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Haydaim (Automne)",
        id: "586.02",
        level: 34,
      },
    ],
  },
  "585.03": {
    id: "585.03",
    name: "Vivaldaim (Hiver)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Haydaim (Hiver)",
        id: "586.03",
        level: 34,
      },
    ],
  },
  "586": {
    id: "586",
    name: "Haydaim (Printemps)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "585",
        name: "Vivaldaim (Printemps)",
      },
    ],
  },
  "586.01": {
    id: "586.01",
    name: "Haydaim (Été)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "585.01",
        name: "Vivaldaim (Été)",
      },
    ],
  },
  "586.02": {
    id: "586.02",
    name: "Haydaim (Automne)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "585.02",
        name: "Vivaldaim (Automne)",
      },
    ],
  },
  "586.03": {
    id: "586.03",
    name: "Haydaim (Hiver)",
    types: ["normal", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "585.03",
        name: "Vivaldaim (Hiver)",
      },
    ],
  },
  "587": {
    id: "587",
    name: "Emolga",
    types: ["electric", "flying"],
  },
  "588": {
    id: "588",
    name: "Carabing",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        id: "589",
        name: "Lançargot",
      },
    ],
  },
  "589": {
    id: "589",
    name: "Lançargot",
    types: ["insect", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "588",
        name: "Carabing",
      },
    ],
  },
  "590": {
    id: "590",
    name: "Trompignon",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Gaulet",
        id: "591",
        level: 39,
      },
    ],
  },
  "591": {
    id: "591",
    name: "Gaulet",
    types: ["grass", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "590",
        name: "Trompignon",
      },
    ],
  },
  "592": {
    id: "592",
    name: "Viskuse",
    types: ["water", "ghost"],
    femaleVariation: true,
    evolutions: [
      {
        type: "evolution",
        name: "Moyade",
        id: "593",
        level: 40,
      },
    ],
  },
  "593": {
    id: "593",
    name: "Moyade",
    types: ["water", "ghost"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "592",
        name: "Viskuse",
      },
    ],
  },
  "594": {
    id: "594",
    name: "Mamanbo",
    types: ["water"],
  },
  "595": {
    id: "595",
    name: "Statitik",
    types: ["insect", "electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Mygavolt",
        id: "596",
        level: 36,
      },
    ],
  },
  "596": {
    id: "596",
    name: "Mygavolt",
    types: ["insect", "electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "595",
        name: "Statitik",
      },
    ],
  },
  "597": {
    id: "597",
    name: "Grindur",
    types: ["grass", "steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Noacier",
        id: "598",
        level: 40,
      },
    ],
  },
  "598": {
    id: "598",
    name: "Noacier",
    types: ["grass", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "597",
        name: "Grindur",
      },
    ],
  },
  "599": {
    id: "599",
    name: "Tic",
    types: ["steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Clic",
        id: "600",
        level: 38,
      },
    ],
  },
  "600": {
    id: "600",
    name: "Clic",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "599",
        name: "Tic",
      },
      {
        type: "evolution",
        name: "Cliticlic",
        id: "601",
        level: 49,
      },
    ],
  },
  "601": {
    id: "601",
    name: "Cliticlic",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "600",
        name: "Clic",
      },
    ],
  },
  "602": {
    id: "602",
    name: "Anchwatt",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Lampéroie",
        id: "603",
        level: 39,
      },
    ],
  },
  "603": {
    id: "603",
    name: "Lampéroie",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "602",
        name: "Anchwatt",
      },
      {
        type: "evolution",
        id: "604",
        name: "Ohmassacre",
      },
    ],
  },
  "604": {
    id: "604",
    name: "Ohmassacre",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "603",
        name: "Lampéroie",
      },
    ],
  },
  "605": {
    id: "605",
    name: "Lewsor",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Neitram",
        id: "606",
        level: 42,
      },
    ],
  },
  "606": {
    id: "606",
    name: "Neitram",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "605",
        name: "Lewsor",
      },
    ],
  },
  "607": {
    id: "607",
    name: "Funécire",
    types: ["ghost", "fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Mélancolux",
        id: "608",
        level: 41,
      },
    ],
  },
  "608": {
    id: "608",
    name: "Mélancolux",
    types: ["ghost", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "607",
        name: "Funécire",
      },
      {
        type: "evolution",
        id: "609",
        name: "Lugulabre",
      },
    ],
  },
  "609": {
    id: "609",
    name: "Lugulabre",
    types: ["ghost", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "608",
        name: "Mélancolux",
      },
    ],
  },
  "610": {
    id: "610",
    name: "Coupenotte",
    types: ["dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Incisache",
        id: "611",
        level: 38,
      },
    ],
  },
  "611": {
    id: "611",
    name: "Incisache",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "610",
        name: "Coupenotte",
      },
      {
        type: "evolution",
        name: "Tranchodon",
        id: "612",
        level: 48,
      },
    ],
  },
  "612": {
    id: "612",
    name: "Tranchodon",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "611",
        name: "Incisache",
      },
    ],
  },
  "613": {
    id: "613",
    name: "Polarhume",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        name: "Polagriffe",
        id: "614",
        level: 37,
      },
    ],
  },
  "614": {
    id: "614",
    name: "Polagriffe",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "613",
        name: "Polarhume",
      },
    ],
  },
  "615": {
    id: "615",
    name: "Hexagel",
    types: ["ice"],
  },
  "616": {
    id: "616",
    name: "Escargaume",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        id: "617",
        name: "Limaspeed",
      },
    ],
  },
  "617": {
    id: "617",
    name: "Limaspeed",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "616",
        name: "Escargaume",
      },
    ],
  },
  "618": {
    id: "618",
    name: "Limonde",
    types: ["ground", "electric"],
  },
  "618.01": {
    id: "618.01",
    name: "Limonde de Galar",
    types: ["ground", "steel"],
  },
  "619": {
    id: "619",
    name: "Kungfouine",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Shaofouine",
        id: "620",
        level: 50,
      },
    ],
  },
  "620": {
    id: "620",
    name: "Shaofouine",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "619",
        name: "Kungfouine",
      },
    ],
  },
  "621": {
    id: "621",
    name: "Drakkarmin",
    types: ["dragon"],
  },
  "622": {
    id: "622",
    name: "Gringolem",
    types: ["ground", "ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Golemastoc",
        id: "623",
        level: 43,
      },
    ],
  },
  "623": {
    id: "623",
    name: "Golemastoc",
    types: ["ground", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "622",
        name: "Gringolem",
      },
    ],
  },
  "624": {
    id: "624",
    name: "Scalpion",
    types: ["dark", "steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Scalproie",
        id: "625",
        level: 52,
      },
    ],
  },
  "625": {
    id: "625",
    name: "Scalproie",
    types: ["dark", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "624",
        name: "Scalpion",
      },
      {
        type: "evolution",
        id: "983",
        name: "Scalpereur",
      },
    ],
  },
  "626": {
    id: "626",
    name: "Frison",
    types: ["normal"],
  },
  "627": {
    id: "627",
    name: "Furaiglon",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Gueriaigle",
        id: "628",
        level: 54,
      },
      {
        type: "evolution",
        name: "Gueriaigle de Hisui",
        id: "628.01",
        level: 54,
      },
    ],
  },
  "628": {
    id: "628",
    name: "Gueriaigle",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "627",
        name: "Furaiglon",
      },
    ],
  },
  "628.01": {
    id: "628.01",
    name: "Gueriaigle de Hisui",
    types: ["psychic", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "627",
        name: "Furaiglon",
      },
    ],
  },
  "629": {
    id: "629",
    name: "Vostourno",
    types: ["dark", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Vaututrice",
        id: "630",
        level: 54,
      },
    ],
  },
  "630": {
    id: "630",
    name: "Vaututrice",
    types: ["dark", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "629",
        name: "Vostourno",
      },
    ],
  },
  "631": {
    id: "631",
    name: "Aflamanoir",
    types: ["fire"],
  },
  "632": {
    id: "632",
    name: "Fermite",
    types: ["insect", "steel"],
  },
  "633": {
    id: "633",
    name: "Solochi",
    types: ["dark", "dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Diamat",
        id: "634",
        level: 50,
      },
    ],
  },
  "634": {
    id: "634",
    name: "Diamat",
    types: ["dark", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "633",
        name: "Solochi",
      },
      {
        type: "evolution",
        name: "Trioxhydre",
        id: "635",
        level: 64,
      },
    ],
  },
  "635": {
    id: "635",
    name: "Trioxhydre",
    types: ["dark", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "634",
        name: "Diamat",
      },
    ],
  },
  "636": {
    id: "636",
    name: "Pyronille",
    types: ["insect", "fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Pyrax",
        id: "637",
        level: 59,
      },
    ],
  },
  "637": {
    id: "637",
    name: "Pyrax",
    types: ["insect", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "636",
        name: "Pyronille",
      },
    ],
  },
  "638": {
    id: "638",
    name: "Cobaltium",
    types: ["steel", "fighting"],
  },
  "639": {
    id: "639",
    name: "Terrakium",
    types: ["rock", "fighting"],
  },
  "640": {
    id: "640",
    name: "Viridium",
    types: ["grass", "fighting"],
  },
  "641": {
    id: "641",
    name: "Boréas",
    types: ["flying"],
  },
  "641.01": {
    id: "641.01",
    name: "Boréas (Totemique)",
    types: ["flying"],
  },
  "642": {
    id: "642",
    name: "Fulguris",
    types: ["electric", "flying"],
  },
  "642.01": {
    id: "642.01",
    name: "Fulguris (Totemique)",
    types: ["electric", "flying"],
  },
  "643": {
    id: "643",
    name: "Reshiram",
    types: ["dragon", "fire"],
  },
  "644": {
    id: "644",
    name: "Zekrom",
    types: ["dragon", "electric"],
  },
  "645": {
    id: "645",
    name: "Démétéros",
    types: ["ground", "flying"],
  },
  "645.01": {
    id: "645.01",
    name: "Démétéros (Totemique)",
    types: ["ground", "flying"],
  },
  "646": {
    id: "646",
    name: "Kyurem",
    types: ["dragon", "ice"],
  },
  "646.01": {
    id: "646.01",
    name: "Kyurem (Blanc)",
    types: ["dragon", "ice"],
  },
  "646.02": {
    id: "646.02",
    name: "Kyurem (Noir)",
    types: ["dragon", "ice"],
  },
  "647": {
    id: "647",
    name: "Keldeo",
    types: ["water", "fighting"],
  },
  "647.01": {
    id: "647.01",
    name: "Keldeo (Décidé)",
    types: ["water", "fighting"],
  },
  "648": {
    id: "648",
    name: "Meloetta (Chant)",
    types: ["normal", "psychic"],
  },
  "648.01": {
    id: "648.01",
    name: "Meloetta (Danse)",
    types: ["normal", "fighting"],
  },
  "649": {
    id: "649",
    name: "Genesect",
    types: ["insect", "steel"],
  },
  "650": {
    id: "650",
    name: "Marisson",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Boguérisse",
        id: "651",
        level: 16,
      },
    ],
  },
  "651": {
    id: "651",
    name: "Boguérisse",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "650",
        name: "Marisson",
      },
      {
        type: "evolution",
        name: "Blindépique",
        id: "652",
        level: 36,
      },
    ],
  },
  "652": {
    id: "652",
    name: "Blindépique",
    types: ["grass", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "651",
        name: "Boguérisse",
      },
    ],
  },
  "653": {
    id: "653",
    name: "Feunnec",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Roussil",
        id: "654",
        level: 16,
      },
    ],
  },
  "654": {
    id: "654",
    name: "Roussil",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "653",
        name: "Feunnec",
      },
      {
        type: "evolution",
        name: "Goupelin",
        id: "655",
        level: 36,
      },
    ],
  },
  "655": {
    id: "655",
    name: "Goupelin",
    types: ["fire", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "654",
        name: "Roussil",
      },
    ],
  },
  "656": {
    id: "656",
    name: "Grenousse",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Croâporal",
        id: "657",
        level: 16,
      },
    ],
  },
  "657": {
    id: "657",
    name: "Croâporal",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "656",
        name: "Grenousse",
      },
      {
        type: "evolution",
        name: "Amphinobi",
        id: "658",
        level: 36,
      },
    ],
  },
  "658": {
    id: "658",
    name: "Amphinobi",
    types: ["water", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "657",
        name: "Croâporal",
      },
    ],
  },
  "659": {
    id: "659",
    name: "Sapereau",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Excavarenne",
        id: "660",
        level: 20,
      },
    ],
  },
  "660": {
    id: "660",
    name: "Excavarenne",
    types: ["normal", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "659",
        name: "Sapereau",
      },
    ],
  },
  "661": {
    id: "661",
    name: "Passerouge",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Braisillon",
        id: "662",
        level: 17,
      },
    ],
  },
  "662": {
    id: "662",
    name: "Braisillon",
    types: ["fire", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "661",
        name: "Passerouge",
      },
      {
        type: "evolution",
        name: "Flambusard",
        id: "663",
        level: 35,
      },
    ],
  },
  "663": {
    id: "663",
    name: "Flambusard",
    types: ["fire", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "662",
        name: "Braisillon",
      },
    ],
  },
  "664": {
    id: "664",
    name: "Lépidonille",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Pérégrain",
        id: "665",
        level: 9,
      },
    ],
  },
  "665": {
    id: "665",
    name: "Pérégrain",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "664",
        name: "Lépidonille",
      },
      {
        type: "evolution",
        name: "Prismillon (Floraison)",
        id: "666",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Blizzard)",
        id: "666.01",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Banquise)",
        id: "666.02",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Glace)",
        id: "666.03",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Continent)",
        id: "666.04",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Verdure)",
        id: "666.05",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Monarchie)",
        id: "666.06",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Métropole)",
        id: "666.07",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Rivage)",
        id: "666.08",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Archipel)",
        id: "666.09",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Sécheresse)",
        id: "666.1",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Sable)",
        id: "666.11",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Delta)",
        id: "666.12",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Cyclone)",
        id: "666.13",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Mangrove)",
        id: "666.14",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Zénith)",
        id: "666.15",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Soleil Levant)",
        id: "666.16",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Jungle)",
        id: "666.17",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Poké Ball)",
        id: "666.18",
        level: 12,
      },
      {
        type: "evolution",
        name: "Prismillon (Fantaisie)",
        id: "666.19",
        level: 12,
      },
    ],
  },
  "666": {
    id: "666",
    name: "Prismillon (Floraison)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.01": {
    id: "666.01",
    name: "Prismillon (Blizzard)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.02": {
    id: "666.02",
    name: "Prismillon (Banquise)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.03": {
    id: "666.03",
    name: "Prismillon (Glace)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.04": {
    id: "666.04",
    name: "Prismillon (Continent)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.05": {
    id: "666.05",
    name: "Prismillon (Verdure)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.06": {
    id: "666.06",
    name: "Prismillon (Monarchie)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.07": {
    id: "666.07",
    name: "Prismillon (Métropole)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.08": {
    id: "666.08",
    name: "Prismillon (Rivage)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.09": {
    id: "666.09",
    name: "Prismillon (Archipel)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.1": {
    id: "666.1",
    name: "Prismillon (Sécheresse)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.11": {
    id: "666.11",
    name: "Prismillon (Sable)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.12": {
    id: "666.12",
    name: "Prismillon (Delta)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.13": {
    id: "666.13",
    name: "Prismillon (Cyclone)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.14": {
    id: "666.14",
    name: "Prismillon (Mangrove)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.15": {
    id: "666.15",
    name: "Prismillon (Zénith)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.16": {
    id: "666.16",
    name: "Prismillon (Soleil Levant)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.17": {
    id: "666.17",
    name: "Prismillon (Jungle)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.18": {
    id: "666.18",
    name: "Prismillon (Poké Ball)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "666.19": {
    id: "666.19",
    name: "Prismillon (Fantaisie)",
    types: ["insect", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "665",
        name: "Pérégrain",
      },
    ],
  },
  "667": {
    id: "667",
    name: "Hélionceau",
    types: ["fire", "normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Némélios",
        id: "668",
        level: 35,
      },
    ],
  },
  "668": {
    id: "668",
    name: "Némélios",
    types: ["fire", "normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "667",
        name: "Hélionceau",
      },
    ],
  },
  "669": {
    id: "669",
    name: "Flabébé (Rouge)",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Floette (Rouge)",
        id: "670",
        level: 19,
      },
    ],
  },
  "669.01": {
    id: "669.01",
    name: "Flabébé (Jaune)",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Floette (Jaune)",
        id: "670.01",
        level: 19,
      },
    ],
  },
  "669.02": {
    id: "669.02",
    name: "Flabébé (Orange)",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Floette (Orange)",
        id: "670.02",
        level: 19,
      },
    ],
  },
  "669.03": {
    id: "669.03",
    name: "Flabébé (Bleu)",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Floette (Bleu)",
        id: "670.03",
        level: 19,
      },
    ],
  },
  "669.04": {
    id: "669.04",
    name: "Flabébé (Blanc)",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Floette (Blanc)",
        id: "670.04",
        level: 19,
      },
    ],
  },
  "670": {
    id: "670",
    name: "Floette (Rouge)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "669",
        name: "Flabébé (Rouge)",
      },
      {
        type: "evolution",
        id: "671",
        name: "Florges (Rouge)",
      },
    ],
  },
  "670.01": {
    id: "670.01",
    name: "Floette (Jaune)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "669.01",
        name: "Flabébé (Jaune)",
      },
      {
        type: "evolution",
        id: "671.01",
        name: "Florges (Jaune)",
      },
    ],
  },
  "670.02": {
    id: "670.02",
    name: "Floette (Orange)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "669.02",
        name: "Flabébé (Orange)",
      },
      {
        type: "evolution",
        id: "671.02",
        name: "Florges (Orange)",
      },
    ],
  },
  "670.03": {
    id: "670.03",
    name: "Floette (Bleu)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "669.03",
        name: "Flabébé (Bleu)",
      },
      {
        type: "evolution",
        id: "671.03",
        name: "Florges (Bleu)",
      },
    ],
  },
  "670.04": {
    id: "670.04",
    name: "Floette (Blanc)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "669.04",
        name: "Flabébé (Blanc)",
      },
      {
        type: "evolution",
        id: "671.04",
        name: "Florges (Blanc)",
      },
    ],
  },
  "671": {
    id: "671",
    name: "Florges (Rouge)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "670",
        name: "Floette (Rouge)",
      },
    ],
  },
  "671.01": {
    id: "671.01",
    name: "Florges (Jaune)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "670.01",
        name: "Floette (Jaune)",
      },
    ],
  },
  "671.02": {
    id: "671.02",
    name: "Florges (Orange)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "670.02",
        name: "Floette (Orange)",
      },
    ],
  },
  "671.03": {
    id: "671.03",
    name: "Florges (Bleu)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "670.03",
        name: "Floette (Bleu)",
      },
    ],
  },
  "671.04": {
    id: "671.04",
    name: "Florges (Blanc)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "670.04",
        name: "Floette (Blanc)",
      },
    ],
  },
  "672": {
    id: "672",
    name: "Cabriolaine",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Chevroum",
        id: "673",
        level: 32,
      },
    ],
  },
  "673": {
    id: "673",
    name: "Chevroum",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "672",
        name: "Cabriolaine",
      },
    ],
  },
  "674": {
    id: "674",
    name: "Pandespiègle",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Pandarbare",
        id: "675",
        level: 32,
      },
    ],
  },
  "675": {
    id: "675",
    name: "Pandarbare",
    types: ["fighting", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "674",
        name: "Pandespiègle",
      },
    ],
  },
  "676": {
    id: "676",
    name: "Couafarel",
    types: ["normal"],
  },
  "676.01": {
    id: "676.01",
    name: "Couafarel (Coeur)",
    types: ["normal"],
  },
  "676.02": {
    id: "676.02",
    name: "Couafarel (Étoile)",
    types: ["normal"],
  },
  "676.03": {
    id: "676.03",
    name: "Couafarel (Diamant)",
    types: ["normal"],
  },
  "676.04": {
    id: "676.04",
    name: "Couafarel (Demoiselle)",
    types: ["normal"],
  },
  "676.05": {
    id: "676.05",
    name: "Couafarel (Madame)",
    types: ["normal"],
  },
  "676.06": {
    id: "676.06",
    name: "Couafarel (Monsieur)",
    types: ["normal"],
  },
  "676.07": {
    id: "676.07",
    name: "Couafarel (Reine)",
    types: ["normal"],
  },
  "676.08": {
    id: "676.08",
    name: "Couafarel (Kabuki)",
    types: ["normal"],
  },
  "676.09": {
    id: "676.09",
    name: "Couafarel (Pharaon)",
    types: ["normal"],
  },
  "677": {
    id: "677",
    name: "Psystigri",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Mistigrix",
        id: "678",
        level: 25,
      },
    ],
  },
  "678": {
    id: "678",
    name: "Mistigrix",
    types: ["psychic"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "677",
        name: "Psystigri",
      },
    ],
  },
  "679": {
    id: "679",
    name: "Monorpale",
    types: ["steel", "ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Dimoclès",
        id: "680",
        level: 35,
      },
    ],
  },
  "680": {
    id: "680",
    name: "Dimoclès",
    types: ["steel", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "679",
        name: "Monorpale",
      },
      {
        type: "evolution",
        id: "681",
        name: "Exagide (Parade)",
      },
      {
        type: "evolution",
        id: "681.01",
        name: "Exagide (Assaut)",
      },
    ],
  },
  "681": {
    id: "681",
    name: "Exagide (Parade)",
    types: ["steel", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "680",
        name: "Dimoclès",
      },
    ],
  },
  "681.01": {
    id: "681.01",
    name: "Exagide (Assaut)",
    types: ["steel", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "680",
        name: "Dimoclès",
      },
    ],
  },
  "682": {
    id: "682",
    name: "Fluvetin",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "683",
        name: "Cocotine",
      },
    ],
  },
  "683": {
    id: "683",
    name: "Cocotine",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "682",
        name: "Fluvetin",
      },
    ],
  },
  "684": {
    id: "684",
    name: "Sucroquin",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "685",
        name: "Cupcanaille",
      },
    ],
  },
  "685": {
    id: "685",
    name: "Cupcanaille",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "684",
        name: "Sucroquin",
      },
    ],
  },
  "686": {
    id: "686",
    name: "Sepiatop",
    types: ["dark", "psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Sepiatroce",
        id: "687",
        level: 30,
      },
    ],
  },
  "687": {
    id: "687",
    name: "Sepiatroce",
    types: ["dark", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "686",
        name: "Sepiatop",
      },
    ],
  },
  "688": {
    id: "688",
    name: "Opermine",
    types: ["rock", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Golgopathe",
        id: "689",
        level: 39,
      },
    ],
  },
  "689": {
    id: "689",
    name: "Golgopathe",
    types: ["rock", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "688",
        name: "Opermine",
      },
    ],
  },
  "690": {
    id: "690",
    name: "Venalgue",
    types: ["poison", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Kravarech",
        id: "691",
        level: 48,
      },
    ],
  },
  "691": {
    id: "691",
    name: "Kravarech",
    types: ["poison", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "690",
        name: "Venalgue",
      },
    ],
  },
  "692": {
    id: "692",
    name: "Flingouste",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Gamblast",
        id: "693",
        level: 37,
      },
    ],
  },
  "693": {
    id: "693",
    name: "Gamblast",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "692",
        name: "Flingouste",
      },
    ],
  },
  "694": {
    id: "694",
    name: "Galvaran",
    types: ["electric", "normal"],
    evolutions: [
      {
        type: "evolution",
        id: "695",
        name: "Iguolta",
      },
    ],
  },
  "695": {
    id: "695",
    name: "Iguolta",
    types: ["electric", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "694",
        name: "Galvaran",
      },
    ],
  },
  "696": {
    id: "696",
    name: "Ptyranidur",
    types: ["rock", "dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Rexilius",
        id: "697",
        level: 39,
      },
    ],
  },
  "697": {
    id: "697",
    name: "Rexilius",
    types: ["rock", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "696",
        name: "Ptyranidur",
      },
    ],
  },
  "698": {
    id: "698",
    name: "Amagara",
    types: ["rock", "ice"],
    evolutions: [
      {
        type: "evolution",
        name: "Dragmara",
        id: "699",
        level: 39,
      },
    ],
  },
  "699": {
    id: "699",
    name: "Dragmara",
    types: ["rock", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "698",
        name: "Amagara",
      },
    ],
  },
  "700": {
    id: "700",
    name: "Nymphali",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "133",
        name: "Évoli",
      },
    ],
  },
  "701": {
    id: "701",
    name: "Brutalibré",
    types: ["fighting", "flying"],
  },
  "702": {
    id: "702",
    name: "Dedenne",
    types: ["electric", "fairy"],
  },
  "703": {
    id: "703",
    name: "Strassie",
    types: ["rock", "fairy"],
  },
  "704": {
    id: "704",
    name: "Mucuscule",
    types: ["dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Colimucus",
        id: "705",
        level: 40,
      },
      {
        type: "evolution",
        name: "Colimucus de Hisui",
        id: "705.01",
        level: 40,
      },
    ],
  },
  "705": {
    id: "705",
    name: "Colimucus",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "704",
        name: "Mucuscule",
      },
      {
        type: "evolution",
        name: "Muplodocus",
        id: "706",
        level: 50,
      },
    ],
  },
  "705.01": {
    id: "705.01",
    name: "Colimucus de Hisui",
    types: ["steel", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "704",
        name: "Mucuscule",
      },
      {
        type: "evolution",
        name: "Muplodocus de Hisui",
        id: "706.01",
        level: 50,
      },
    ],
  },
  "706": {
    id: "706",
    name: "Muplodocus",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "705",
        name: "Colimucus",
      },
    ],
  },
  "706.01": {
    id: "706.01",
    name: "Muplodocus de Hisui",
    types: ["steel", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "705.01",
        name: "Colimucus de Hisui",
      },
    ],
  },
  "707": {
    id: "707",
    name: "Trousselin",
    types: ["steel", "fairy"],
  },
  "708": {
    id: "708",
    name: "Brocélôme",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "709",
        name: "Desséliandre",
      },
    ],
  },
  "709": {
    id: "709",
    name: "Desséliandre",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "708",
        name: "Brocélôme",
      },
    ],
  },
  "710": {
    id: "710",
    name: "Pitrouille (Normal)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "711",
        name: "Banshitrouye (Normal)",
      },
    ],
  },
  "710.01": {
    id: "710.01",
    name: "Pitrouille (Mini)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "711.01",
        name: "Banshitrouye (Mini)",
      },
    ],
  },
  "710.02": {
    id: "710.02",
    name: "Pitrouille (Maxi)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "711.02",
        name: "Banshitrouye (Maxi)",
      },
    ],
  },
  "710.03": {
    id: "710.03",
    name: "Pitrouille (Ultra)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "711.03",
        name: "Banshitrouye (Ultra)",
      },
    ],
  },
  "711": {
    id: "711",
    name: "Banshitrouye (Normal)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "710",
        name: "Pitrouille (Normal)",
      },
    ],
  },
  "711.01": {
    id: "711.01",
    name: "Banshitrouye (Mini)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "710.01",
        name: "Pitrouille (Mini)",
      },
    ],
  },
  "711.02": {
    id: "711.02",
    name: "Banshitrouye (Maxi)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "710.02",
        name: "Pitrouille (Maxi)",
      },
    ],
  },
  "711.03": {
    id: "711.03",
    name: "Banshitrouye (Ultra)",
    types: ["ghost", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "710.03",
        name: "Pitrouille (Ultra)",
      },
    ],
  },
  "712": {
    id: "712",
    name: "Grelaçon",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        name: "Séracrawl",
        id: "713",
        level: 37,
      },
      {
        type: "evolution",
        name: "Séracrawl de Hisui",
        id: "713.01",
        level: 37,
      },
    ],
  },
  "713": {
    id: "713",
    name: "Séracrawl",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "712",
        name: "Grelaçon",
      },
    ],
  },
  "713.01": {
    id: "713.01",
    name: "Séracrawl de Hisui",
    types: ["ice", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "712",
        name: "Grelaçon",
      },
    ],
  },
  "714": {
    id: "714",
    name: "Sonistrelle",
    types: ["flying", "dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Bruyverne",
        id: "715",
        level: 48,
      },
    ],
  },
  "715": {
    id: "715",
    name: "Bruyverne",
    types: ["flying", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "714",
        name: "Sonistrelle",
      },
    ],
  },
  "716": {
    id: "716",
    name: "Xerneas",
    types: ["fairy"],
  },
  "717": {
    id: "717",
    name: "Yveltal",
    types: ["dark", "flying"],
  },
  "718": {
    id: "718",
    name: "Zygarde",
    types: ["dragon", "ground"],
  },
  "719": {
    id: "719",
    name: "Diancie",
    types: ["rock", "fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "719.01",
        name: "Méga-Diancie",
      },
    ],
  },
  "719.01": {
    id: "719.01",
    name: "Méga-Diancie",
    types: ["rock", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "719",
        name: "Diancie",
      },
    ],
  },
  "720": {
    id: "720",
    name: "Hoopa",
    types: ["psychic", "ghost"],
  },
  "720.01": {
    id: "720.01",
    name: "Hoopa (Dechaine)",
    types: ["psychic", "dark"],
  },
  "721": {
    id: "721",
    name: "Volcanion",
    types: ["fire", "water"],
  },
  "722": {
    id: "722",
    name: "Brindibou",
    types: ["grass", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Efflèche",
        id: "723",
        level: 17,
      },
    ],
  },
  "723": {
    id: "723",
    name: "Efflèche",
    types: ["grass", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "722",
        name: "Brindibou",
      },
      {
        type: "evolution",
        name: "Archéduc",
        id: "724",
        level: 34,
      },
      {
        type: "evolution",
        name: "Archéduc de Hisui",
        id: "724.01",
        level: 36,
      },
    ],
  },
  "724": {
    id: "724",
    name: "Archéduc",
    types: ["grass", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "723",
        name: "Efflèche",
      },
    ],
  },
  "724.01": {
    id: "724.01",
    name: "Archéduc de Hisui",
    types: ["grass", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "723",
        name: "Efflèche",
      },
    ],
  },
  "725": {
    id: "725",
    name: "Flamiaou",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Matoufeu",
        id: "726",
        level: 17,
      },
    ],
  },
  "726": {
    id: "726",
    name: "Matoufeu",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "725",
        name: "Flamiaou",
      },
      {
        type: "evolution",
        name: "Félinferno",
        id: "727",
        level: 34,
      },
    ],
  },
  "727": {
    id: "727",
    name: "Félinferno",
    types: ["fire", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "726",
        name: "Matoufeu",
      },
    ],
  },
  "728": {
    id: "728",
    name: "Otaquin",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Otarlette",
        id: "729",
        level: 17,
      },
    ],
  },
  "729": {
    id: "729",
    name: "Otarlette",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "728",
        name: "Otaquin",
      },
      {
        type: "evolution",
        name: "Oratoria",
        id: "730",
        level: 34,
      },
    ],
  },
  "730": {
    id: "730",
    name: "Oratoria",
    types: ["water", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "729",
        name: "Otarlette",
      },
    ],
  },
  "731": {
    id: "731",
    name: "Picassaut",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Piclairon",
        id: "732",
        level: 14,
      },
    ],
  },
  "732": {
    id: "732",
    name: "Piclairon",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "731",
        name: "Picassaut",
      },
      {
        type: "evolution",
        name: "Bazoucan",
        id: "733",
        level: 28,
      },
    ],
  },
  "733": {
    id: "733",
    name: "Bazoucan",
    types: ["normal", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "732",
        name: "Piclairon",
      },
    ],
  },
  "734": {
    id: "734",
    name: "Manglouton",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Argouste",
        id: "735",
        level: 20,
      },
    ],
  },
  "735": {
    id: "735",
    name: "Argouste",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "734",
        name: "Manglouton",
      },
    ],
  },
  "736": {
    id: "736",
    name: "Larvibule",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Chrysapile",
        id: "737",
        level: 20,
      },
    ],
  },
  "737": {
    id: "737",
    name: "Chrysapile",
    types: ["insect", "electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "736",
        name: "Larvibule",
      },
      {
        type: "evolution",
        name: "Lucanon",
        id: "738",
      },
    ],
  },
  "738": {
    id: "738",
    name: "Lucanon",
    types: ["insect", "electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "737",
        name: "Chrysapile",
      },
    ],
  },
  "739": {
    id: "739",
    name: "Crabagarre",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Crabominable",
        id: "740",
        level: 20,
      },
    ],
  },
  "740": {
    id: "740",
    name: "Crabominable",
    types: ["fighting", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "739",
        name: "Crabagarre",
      },
    ],
  },
  "741": {
    id: "741",
    name: "Plumeline (Flamenco)",
    types: ["fire", "flying"],
  },
  "741.01": {
    id: "741.01",
    name: "Plumeline (Pom-Pom)",
    types: ["electric", "flying"],
  },
  "741.02": {
    id: "741.02",
    name: "Plumeline (Hula)",
    types: ["psychic", "flying"],
  },
  "741.03": {
    id: "741.03",
    name: "Plumeline (Buyo)",
    types: ["ghost", "flying"],
  },
  "742": {
    id: "742",
    name: "Bombydou",
    types: ["insect", "fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Rubombelle",
        id: "743",
        level: 25,
      },
    ],
  },
  "743": {
    id: "743",
    name: "Rubombelle",
    types: ["insect", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "742",
        name: "Bombydou",
      },
    ],
  },
  "744": {
    id: "744",
    name: "Rocabot",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Lougaroc (Diurne)",
        id: "745",
        level: 25,
      },
      {
        type: "evolution",
        name: "Lougaroc (Nocturne)",
        id: "745.01",
        level: 25,
      },
      {
        type: "evolution",
        name: "Lougaroc (Crépusculaire)",
        id: "745.02",
        level: 25,
      },
    ],
  },
  "745": {
    id: "745",
    name: "Lougaroc (Diurne)",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "744",
        name: "Rocabot",
      },
    ],
  },
  "745.01": {
    id: "745.01",
    name: "Lougaroc (Nocturne)",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "744",
        name: "Rocabot",
      },
    ],
  },
  "745.02": {
    id: "745.02",
    name: "Lougaroc (Crépusculaire)",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "744",
        name: "Rocabot",
      },
    ],
  },
  "746": {
    id: "746",
    name: "Froussardine (Solitaire)",
    types: ["water"],
  },
  "746.01": {
    id: "746.01",
    name: "Froussardine (Banc)",
    types: ["water"],
  },
  "747": {
    id: "747",
    name: "Vorastérie",
    types: ["poison", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Prédastérie",
        id: "748",
        level: 38,
      },
    ],
  },
  "748": {
    id: "748",
    name: "Prédastérie",
    types: ["poison", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "747",
        name: "Vorastérie",
      },
    ],
  },
  "749": {
    id: "749",
    name: "Tiboudet",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Bourrinos",
        id: "750",
        level: 30,
      },
    ],
  },
  "750": {
    id: "750",
    name: "Bourrinos",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "749",
        name: "Tiboudet",
      },
    ],
  },
  "751": {
    id: "751",
    name: "Araqua",
    types: ["water", "insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Tarenbulle",
        id: "752",
        level: 22,
      },
    ],
  },
  "752": {
    id: "752",
    name: "Tarenbulle",
    types: ["water", "insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "751",
        name: "Araqua",
      },
    ],
  },
  "753": {
    id: "753",
    name: "Mimantis",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Floramantis",
        id: "754",
        level: 34,
      },
    ],
  },
  "754": {
    id: "754",
    name: "Floramantis",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "753",
        name: "Mimantis",
      },
    ],
  },
  "755": {
    id: "755",
    name: "Spododo",
    types: ["grass", "fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Lampignon",
        id: "756",
        level: 24,
      },
    ],
  },
  "756": {
    id: "756",
    name: "Lampignon",
    types: ["grass", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "755",
        name: "Spododo",
      },
    ],
  },
  "757": {
    id: "757",
    name: "Tritox",
    types: ["poison", "fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Malamandre",
        id: "758",
        level: 33,
      },
    ],
  },
  "758": {
    id: "758",
    name: "Malamandre",
    types: ["poison", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "757",
        name: "Tritox",
      },
    ],
  },
  "759": {
    id: "759",
    name: "Nounourson",
    types: ["normal", "fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Chelours",
        id: "760",
        level: 27,
      },
    ],
  },
  "760": {
    id: "760",
    name: "Chelours",
    types: ["normal", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "759",
        name: "Nounourson",
      },
    ],
  },
  "761": {
    id: "761",
    name: "Croquine",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Candine",
        id: "762",
        level: 18,
      },
    ],
  },
  "762": {
    id: "762",
    name: "Candine",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "761",
        name: "Croquine",
      },
      {
        type: "evolution",
        name: "Sucreine",
        id: "763",
        level: 29,
      },
    ],
  },
  "763": {
    id: "763",
    name: "Sucreine",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "762",
        name: "Candine",
      },
    ],
  },
  "764": {
    id: "764",
    name: "Guérilande",
    types: ["fairy"],
  },
  "765": {
    id: "765",
    name: "Gouroutan",
    types: ["normal", "psychic"],
  },
  "766": {
    id: "766",
    name: "Quatermac",
    types: ["fighting"],
  },
  "767": {
    id: "767",
    name: "Sovkipou",
    types: ["insect", "water"],
    evolutions: [
      {
        type: "evolution",
        name: "Sarmuraï",
        id: "768",
        level: 30,
      },
    ],
  },
  "768": {
    id: "768",
    name: "Sarmuraï",
    types: ["insect", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "767",
        name: "Sovkipou",
      },
    ],
  },
  "769": {
    id: "769",
    name: "Bacabouh",
    types: ["ghost", "ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Trépassable",
        id: "770",
        level: 42,
      },
    ],
  },
  "770": {
    id: "770",
    name: "Trépassable",
    types: ["ghost", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "769",
        name: "Bacabouh",
      },
    ],
  },
  "771": {
    id: "771",
    name: "Concombaffe",
    types: ["water"],
  },
  "772": {
    id: "772",
    name: "Type: 0",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        id: "773",
        name: "Silvallié (Normal)",
      },
      {
        type: "evolution",
        id: "773.01",
        name: "Silvallié (Feu)",
      },
      {
        type: "evolution",
        id: "773.02",
        name: "Silvallié (Eau)",
      },
      {
        type: "evolution",
        id: "773.03",
        name: "Silvallié (Électrik)",
      },
      {
        type: "evolution",
        id: "773.04",
        name: "Silvallié (Plante)",
      },
      {
        type: "evolution",
        id: "773.05",
        name: "Silvallié (Glace)",
      },
      {
        type: "evolution",
        id: "773.06",
        name: "Silvallié (Combat)",
      },
      {
        type: "evolution",
        id: "773.07",
        name: "Silvallié (Poison)",
      },
      {
        type: "evolution",
        id: "773.08",
        name: "Silvallié (Sol)",
      },
      {
        type: "evolution",
        id: "773.09",
        name: "Silvallié (Vol)",
      },
      {
        type: "evolution",
        id: "773.1",
        name: "Silvallié (Psy)",
      },
      {
        type: "evolution",
        id: "773.11",
        name: "Silvallié (Insecte)",
      },
      {
        type: "evolution",
        id: "773.12",
        name: "Silvallié (Roche)",
      },
      {
        type: "evolution",
        id: "773.13",
        name: "Silvallié (Spectre)",
      },
      {
        type: "evolution",
        id: "773.14",
        name: "Silvallié (Dragon)",
      },
      {
        type: "evolution",
        id: "773.15",
        name: "Silvallié (Ténèbres)",
      },
      {
        type: "evolution",
        id: "773.16",
        name: "Silvallié (Acier)",
      },
      {
        type: "evolution",
        id: "773.17",
        name: "Silvallié (Fée)",
      },
    ],
  },
  "773": {
    id: "773",
    name: "Silvallié (Normal)",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.01": {
    id: "773.01",
    name: "Silvallié (Feu)",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.02": {
    id: "773.02",
    name: "Silvallié (Eau)",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.03": {
    id: "773.03",
    name: "Silvallié (Électrik)",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.04": {
    id: "773.04",
    name: "Silvallié (Plante)",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.05": {
    id: "773.05",
    name: "Silvallié (Glace)",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.06": {
    id: "773.06",
    name: "Silvallié (Combat)",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.07": {
    id: "773.07",
    name: "Silvallié (Poison)",
    types: ["poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.08": {
    id: "773.08",
    name: "Silvallié (Sol)",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.09": {
    id: "773.09",
    name: "Silvallié (Vol)",
    types: ["flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.1": {
    id: "773.1",
    name: "Silvallié (Psy)",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.11": {
    id: "773.11",
    name: "Silvallié (Insecte)",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.12": {
    id: "773.12",
    name: "Silvallié (Roche)",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.13": {
    id: "773.13",
    name: "Silvallié (Spectre)",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.14": {
    id: "773.14",
    name: "Silvallié (Dragon)",
    types: ["dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.15": {
    id: "773.15",
    name: "Silvallié (Ténèbres)",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.16": {
    id: "773.16",
    name: "Silvallié (Acier)",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "773.17": {
    id: "773.17",
    name: "Silvallié (Fée)",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "772",
        name: "Type: 0",
      },
    ],
  },
  "774": {
    id: "774",
    name: "Météno (Météore)",
    types: ["rock", "flying"],
  },
  "774.01": {
    id: "774.01",
    name: "Météno (Rouge)",
    types: ["rock", "flying"],
  },
  "774.02": {
    id: "774.02",
    name: "Météno (Orange)",
    types: ["rock", "flying"],
  },
  "774.03": {
    id: "774.03",
    name: "Météno (Jaune)",
    types: ["rock", "flying"],
  },
  "774.04": {
    id: "774.04",
    name: "Météno (Vert)",
    types: ["rock", "flying"],
  },
  "774.05": {
    id: "774.05",
    name: "Météno (Bleu)",
    types: ["rock", "flying"],
  },
  "774.06": {
    id: "774.06",
    name: "Météno (Indigo)",
    types: ["rock", "flying"],
  },
  "774.07": {
    id: "774.07",
    name: "Météno (Violet)",
    types: ["rock", "flying"],
  },
  "775": {
    id: "775",
    name: "Dodoala",
    types: ["normal"],
  },
  "776": {
    id: "776",
    name: "Boumata",
    types: ["fire", "dragon"],
  },
  "777": {
    id: "777",
    name: "Togedemaru",
    types: ["electric", "steel"],
  },
  "778": {
    id: "778",
    name: "Mimiqui",
    types: ["ghost", "fairy"],
  },
  "779": {
    id: "779",
    name: "Denticrisse",
    types: ["water", "psychic"],
  },
  "780": {
    id: "780",
    name: "Draïeul",
    types: ["normal", "dragon"],
  },
  "781": {
    id: "781",
    name: "Sinistrail",
    types: ["ghost", "grass"],
  },
  "782": {
    id: "782",
    name: "Bébécaille",
    types: ["dragon"],
    evolutions: [
      {
        type: "evolution",
        name: "Écaïd",
        id: "783",
        level: 35,
      },
    ],
  },
  "783": {
    id: "783",
    name: "Écaïd",
    types: ["dragon", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "782",
        name: "Bébécaille",
      },
      {
        type: "evolution",
        name: "Ékaïser",
        id: "784",
        level: 45,
      },
    ],
  },
  "784": {
    id: "784",
    name: "Ékaïser",
    types: ["dragon", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "783",
        name: "Écaïd",
      },
    ],
  },
  "785": {
    id: "785",
    name: "Tokorico",
    types: ["electric", "fairy"],
  },
  "786": {
    id: "786",
    name: "Tokopiyon",
    types: ["psychic", "fairy"],
  },
  "787": {
    id: "787",
    name: "Tokotoro",
    types: ["grass", "fairy"],
  },
  "788": {
    id: "788",
    name: "Tokopisco",
    types: ["water", "fairy"],
  },
  "789": {
    id: "789",
    name: "Cosmog",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Cosmovum",
        id: "790",
        level: 43,
      },
    ],
  },
  "790": {
    id: "790",
    name: "Cosmovum",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "789",
        name: "Cosmog",
      },
      {
        type: "evolution",
        name: "Solgaleo",
        id: "791",
        level: 53,
      },
      {
        type: "evolution",
        name: "Lunala",
        id: "792",
        level: 53,
      },
    ],
  },
  "791": {
    id: "791",
    name: "Solgaleo",
    types: ["psychic", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "790",
        name: "Cosmovum",
      },
    ],
  },
  "792": {
    id: "792",
    name: "Lunala",
    types: ["psychic", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "790",
        name: "Cosmovum",
      },
    ],
  },
  "793": {
    id: "793",
    name: "Zéroïd",
    types: ["rock", "poison"],
  },
  "794": {
    id: "794",
    name: "Mouscoto",
    types: ["insect", "fighting"],
  },
  "795": {
    id: "795",
    name: "Cancrelove",
    types: ["insect", "fighting"],
  },
  "796": {
    id: "796",
    name: "Câblifère",
    types: ["electric"],
  },
  "797": {
    id: "797",
    name: "Bamboiselle",
    types: ["steel", "flying"],
  },
  "798": {
    id: "798",
    name: "Katagami",
    types: ["grass", "steel"],
  },
  "799": {
    id: "799",
    name: "Engloutyran",
    types: ["dark", "dragon"],
  },
  "800": {
    id: "800",
    name: "Necrozma",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        id: "800.01",
        name: "Necrozma (Crinière du Couchant)",
      },
      {
        type: "evolution",
        id: "800.02",
        name: "Necrozma (Ailes de l'Aurore)",
      },
    ],
  },
  "800.01": {
    id: "800.01",
    name: "Necrozma (Crinière du Couchant)",
    types: ["psychic", "steel"],
    evolutions: [
      {
        type: "evolution",
        id: "800.03",
        name: "Ultra Necrozma",
      },
      {
        type: "prevolution",
        id: "800",
        name: "Necrozma",
      },
    ],
  },
  "800.02": {
    id: "800.02",
    name: "Necrozma (Ailes de l'Aurore)",
    types: ["psychic", "ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "800.03",
        name: "Ultra Necrozma",
      },
      {
        type: "prevolution",
        id: "800",
        name: "Necrozma",
      },
    ],
  },
  "800.03": {
    id: "800.03",
    name: "Ultra Necrozma",
    types: ["psychic", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "800.01",
        name: "Necrozma (Crinière du Couchant)",
      },
      {
        type: "prevolution",
        id: "800.02",
        name: "Necrozma (Ailes de l'Aurore)",
      },
    ],
  },
  "801": {
    id: "801",
    name: "Magearna",
    types: ["steel", "fairy"],
  },
  "802": {
    id: "802",
    name: "Marshadow",
    types: ["fighting", "ghost"],
  },
  "803": {
    id: "803",
    name: "Vémini",
    types: ["poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Mandrillon",
        id: "804",
        level: 41,
      },
    ],
  },
  "804": {
    id: "804",
    name: "Mandrillon",
    types: ["poison", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "803",
        name: "Vémini",
      },
    ],
  },
  "805": {
    id: "805",
    name: "Ama-Ama",
    types: ["rock", "steel"],
  },
  "806": {
    id: "806",
    name: "Pierroteknik",
    types: ["fire", "ghost"],
  },
  "807": {
    id: "807",
    name: "Zeraora",
    types: ["electric"],
  },
  "808": {
    id: "808",
    name: "Meltan",
    types: ["steel"],
    evolutions: [
      {
        type: "evolution",
        id: "809",
        name: "Melmetal",
      },
    ],
  },
  "809": {
    id: "809",
    name: "Melmetal",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "808",
        name: "Meltan",
      },
      {
        type: "evolution",
        id: "809.01",
        name: "Melmetal Gigamax",
      },
    ],
  },
  "809.01": {
    id: "809.01",
    name: "Melmetal Gigamax",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "809",
        name: "Melmetal",
      },
    ],
  },
  "810": {
    id: "810",
    name: "Ouistempo",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Badabouin",
        id: "811",
        level: 16,
      },
    ],
  },
  "811": {
    id: "811",
    name: "Badabouin",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "810",
        name: "Ouistempo",
      },
      {
        type: "evolution",
        name: "Gorythmic",
        id: "812",
        level: 35,
      },
    ],
  },
  "812": {
    id: "812",
    name: "Gorythmic",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "811",
        name: "Badabouin",
      },
      {
        type: "evolution",
        id: "812.01",
        name: "Gorythmic Gigamax",
      },
    ],
  },
  "812.01": {
    id: "812.01",
    name: "Gorythmic Gigamax",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "812",
        name: "Gorythmic",
      },
    ],
  },
  "813": {
    id: "813",
    name: "Flambino",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Lapyro",
        id: "814",
        level: 16,
      },
    ],
  },
  "814": {
    id: "814",
    name: "Lapyro",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "813",
        name: "Flambino",
      },
      {
        type: "evolution",
        name: "Pyrobut",
        id: "815",
        level: 35,
      },
    ],
  },
  "815": {
    id: "815",
    name: "Pyrobut",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "814",
        name: "Lapyro",
      },
      {
        type: "evolution",
        id: "815.01",
        name: "Pyrobut Gigamax",
      },
    ],
  },
  "815.01": {
    id: "815.01",
    name: "Pyrobut Gigamax",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "815",
        name: "Pyrobut",
      },
    ],
  },
  "816": {
    id: "816",
    name: "Larméléon",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Arrozard",
        id: "817",
        level: 16,
      },
    ],
  },
  "817": {
    id: "817",
    name: "Arrozard",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "816",
        name: "Larméléon",
      },
      {
        type: "evolution",
        name: "Lézargus",
        id: "818",
        level: 35,
      },
    ],
  },
  "818": {
    id: "818",
    name: "Lézargus",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "817",
        name: "Arrozard",
      },
      {
        type: "evolution",
        id: "818.01",
        name: "Lézargus Gigamax",
      },
    ],
  },
  "818.01": {
    id: "818.01",
    name: "Lézargus Gigamax",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "818",
        name: "Lézargus",
      },
    ],
  },
  "819": {
    id: "819",
    name: "Rongourmand",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Rongrigou",
        id: "820",
        level: 24,
      },
    ],
  },
  "820": {
    id: "820",
    name: "Rongrigou",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "819",
        name: "Rongourmand",
      },
    ],
  },
  "821": {
    id: "821",
    name: "Minisange",
    types: ["flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Bleuseille",
        id: "822",
        level: 18,
      },
    ],
  },
  "822": {
    id: "822",
    name: "Bleuseille",
    types: ["flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "821",
        name: "Minisange",
      },
      {
        type: "evolution",
        name: "Corvaillus",
        id: "823",
        level: 38,
      },
    ],
  },
  "823": {
    id: "823",
    name: "Corvaillus",
    types: ["flying", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "822",
        name: "Bleuseille",
      },
      {
        type: "evolution",
        id: "823.01",
        name: "Corvaillus Gigamax",
      },
    ],
  },
  "823.01": {
    id: "823.01",
    name: "Corvaillus Gigamax",
    types: ["flying", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "823",
        name: "Corvaillus",
      },
    ],
  },
  "824": {
    id: "824",
    name: "Larvadar",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Coléodôme",
        id: "825",
        level: 10,
      },
    ],
  },
  "825": {
    id: "825",
    name: "Coléodôme",
    types: ["insect", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "824",
        name: "Larvadar",
      },
      {
        type: "evolution",
        name: "Astronelle",
        id: "826",
        level: 30,
      },
    ],
  },
  "826": {
    id: "826",
    name: "Astronelle",
    types: ["insect", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "825",
        name: "Coléodôme",
      },
      {
        type: "evolution",
        id: "826.01",
        name: "Astronelle Gigamax",
      },
    ],
  },
  "826.01": {
    id: "826.01",
    name: "Astronelle Gigamax",
    types: ["insect", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "826",
        name: "Astronelle",
      },
    ],
  },
  "827": {
    id: "827",
    name: "Goupilou",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Roublenard",
        id: "828",
        level: 18,
      },
    ],
  },
  "828": {
    id: "828",
    name: "Roublenard",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "827",
        name: "Goupilou",
      },
    ],
  },
  "829": {
    id: "829",
    name: "Tournicoton",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Blancoton",
        id: "830",
        level: 20,
      },
    ],
  },
  "830": {
    id: "830",
    name: "Blancoton",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "829",
        name: "Tournicoton",
      },
    ],
  },
  "831": {
    id: "831",
    name: "Moumouton",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Moumouflon",
        id: "832",
        level: 24,
      },
    ],
  },
  "832": {
    id: "832",
    name: "Moumouflon",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "831",
        name: "Moumouton",
      },
    ],
  },
  "833": {
    id: "833",
    name: "Khélocrok",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Torgarmord",
        id: "834",
        level: 22,
      },
    ],
  },
  "834": {
    id: "834",
    name: "Torgarmord",
    types: ["water", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "833",
        name: "Khélocrok",
      },
      {
        type: "evolution",
        id: "834.01",
        name: "Torgarmord Gigamax",
      },
    ],
  },
  "834.01": {
    id: "834.01",
    name: "Torgarmord Gigamax",
    types: ["water", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "834",
        name: "Torgarmord",
      },
    ],
  },
  "835": {
    id: "835",
    name: "Voltoutou",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Flugudog",
        id: "836",
        level: 25,
      },
    ],
  },
  "836": {
    id: "836",
    name: "Flugudog",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "835",
        name: "Voltoutou",
      },
    ],
  },
  "837": {
    id: "837",
    name: "Charbi",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Wagomine",
        id: "838",
        level: 18,
      },
    ],
  },
  "838": {
    id: "838",
    name: "Wagomine",
    types: ["rock", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "837",
        name: "Charbi",
      },
      {
        type: "evolution",
        name: "Monthracite",
        id: "839",
        level: 34,
      },
    ],
  },
  "839": {
    id: "839",
    name: "Monthracite",
    types: ["rock", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "838",
        name: "Wagomine",
      },
      {
        type: "evolution",
        id: "839.01",
        name: "Monthracite Gigamax",
      },
    ],
  },
  "839.01": {
    id: "839.01",
    name: "Monthracite Gigamax",
    types: ["rock", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "839",
        name: "Monthracite",
      },
    ],
  },
  "840": {
    id: "840",
    name: "Verpom",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "evolution",
        id: "841",
        name: "Pomdrapi",
      },
      {
        type: "evolution",
        id: "842",
        name: "Dratatin",
      },
      {
        type: "evolution",
        id: "1011",
        name: "Pomdramour",
      },
    ],
  },
  "841": {
    id: "841",
    name: "Pomdrapi",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "evolution",
        id: "841.01",
        name: "Pomdrapi Gigamax",
      },
      {
        type: "prevolution",
        id: "840",
        name: "Verpom",
      },
    ],
  },
  "841.01": {
    id: "841.01",
    name: "Pomdrapi Gigamax",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "841",
        name: "Pomdrapi",
      },
    ],
  },
  "842": {
    id: "842",
    name: "Dratatin",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "evolution",
        id: "842.01",
        name: "Dratatin Gigamax",
      },
      {
        type: "prevolution",
        id: "840",
        name: "Verpom",
      },
    ],
  },
  "842.01": {
    id: "842.01",
    name: "Dratatin Gigamax",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "842",
        name: "Dratatin",
      },
    ],
  },
  "843": {
    id: "843",
    name: "Dunaja",
    types: ["ground"],
    evolutions: [
      {
        type: "evolution",
        name: "Dunaconda",
        id: "844",
        level: 36,
      },
    ],
  },
  "844": {
    id: "844",
    name: "Dunaconda",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "843",
        name: "Dunaja",
      },
      {
        type: "evolution",
        id: "844.01",
        name: "Dunaconda Gigamax",
      },
    ],
  },
  "844.01": {
    id: "844.01",
    name: "Dunaconda Gigamax",
    types: ["ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "844",
        name: "Dunaconda",
      },
    ],
  },
  "845": {
    id: "845",
    name: "Nigosier",
    types: ["flying", "water"],
  },
  "845.01": {
    id: "845.01",
    name: "Nigosier (Gobe-Tout)",
    types: ["flying", "water"],
  },
  "845.02": {
    id: "845.02",
    name: "Nigosier (Gobe-chu)",
    types: ["flying", "water"],
  },
  "846": {
    id: "846",
    name: "Embrochet",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Hastacuda",
        id: "847",
        level: 26,
      },
    ],
  },
  "847": {
    id: "847",
    name: "Hastacuda",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "846",
        name: "Embrochet",
      },
    ],
  },
  "848": {
    id: "848",
    name: "Toxizap",
    types: ["electric", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Salarsen (Aigu)",
        id: "849",
        level: 30,
      },
      {
        type: "evolution",
        name: "Salarsen (Grave)",
        id: "849.01",
        level: 30,
      },
    ],
  },
  "849": {
    id: "849",
    name: "Salarsen (Aigu)",
    types: ["electric", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "848",
        name: "Toxizap",
      },
      {
        type: "evolution",
        id: "849.02",
        name: "Salarsen Gigamax",
      },
    ],
  },
  "849.01": {
    id: "849.01",
    name: "Salarsen (Grave)",
    types: ["electric", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "848",
        name: "Toxizap",
      },
      {
        type: "evolution",
        id: "849.02",
        name: "Salarsen Gigamax",
      },
    ],
  },
  "849.02": {
    id: "849.02",
    name: "Salarsen Gigamax",
    types: ["electric", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "849",
        name: "Salarsen (Aigu)",
      },
    ],
  },
  "850": {
    id: "850",
    name: "Grillepattes",
    types: ["fire", "insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Scolocendre",
        id: "851",
        level: 28,
      },
    ],
  },
  "851": {
    id: "851",
    name: "Scolocendre",
    types: ["fire", "insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "850",
        name: "Grillepattes",
      },
      {
        type: "evolution",
        id: "851.01",
        name: "Scolocendre Gigamax",
      },
    ],
  },
  "851.01": {
    id: "851.01",
    name: "Scolocendre Gigamax",
    types: ["fire", "insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "851",
        name: "Scolocendre",
      },
    ],
  },
  "852": {
    id: "852",
    name: "Poulpaf",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        name: "Krakos",
        id: "853",
        level: 35,
      },
    ],
  },
  "853": {
    id: "853",
    name: "Krakos",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "852",
        name: "Poulpaf",
      },
    ],
  },
  "854": {
    id: "854",
    name: "Théffroi",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "855",
        name: "Polthegeist",
      },
    ],
  },
  "855": {
    id: "855",
    name: "Polthegeist",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "854",
        name: "Théffroi",
      },
    ],
  },
  "856": {
    id: "856",
    name: "Bibichut",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Chapotus",
        id: "857",
        level: 32,
      },
    ],
  },
  "857": {
    id: "857",
    name: "Chapotus",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "856",
        name: "Bibichut",
      },
      {
        type: "evolution",
        name: "Sorcilence",
        id: "858",
        level: 42,
      },
    ],
  },
  "858": {
    id: "858",
    name: "Sorcilence",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "857",
        name: "Chapotus",
      },
      {
        type: "evolution",
        id: "858.01",
        name: "Sorcilence Gigamax",
      },
    ],
  },
  "858.01": {
    id: "858.01",
    name: "Sorcilence Gigamax",
    types: ["psychic", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "858",
        name: "Sorcilence",
      },
    ],
  },
  "859": {
    id: "859",
    name: "Grimalin",
    types: ["dark", "fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Fourbelin",
        id: "860",
        level: 32,
      },
    ],
  },
  "860": {
    id: "860",
    name: "Fourbelin",
    types: ["dark", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "859",
        name: "Grimalin",
      },
      {
        type: "evolution",
        name: "Angoliath",
        id: "861",
        level: 42,
      },
    ],
  },
  "861": {
    id: "861",
    name: "Angoliath",
    types: ["dark", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "860",
        name: "Fourbelin",
      },
      {
        type: "evolution",
        id: "861.01",
        name: "Angoliath Gigamax",
      },
    ],
  },
  "861.01": {
    id: "861.01",
    name: "Angoliath Gigamax",
    types: ["dark", "fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "861",
        name: "Angoliath",
      },
    ],
  },
  "862": {
    id: "862",
    name: "Ixon",
    types: ["dark", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "264.01",
        name: "Linéon de Galar",
      },
    ],
  },
  "863": {
    id: "863",
    name: "Berserkatt",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "52.03",
        name: "Miaouss de Galar",
      },
    ],
  },
  "864": {
    id: "864",
    name: "Corayôme",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "222.01",
        name: "Corayon de Galar",
      },
    ],
  },
  "865": {
    id: "865",
    name: "Palarticho",
    types: ["fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "83.01",
        name: "Canarticho de Galar",
      },
    ],
  },
  "866": {
    id: "866",
    name: "M. Glaquette",
    types: ["ice", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "122.01",
        name: "M. Mime de Galar",
      },
    ],
  },
  "867": {
    id: "867",
    name: "Tutétékri",
    types: ["ground", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "562.01",
        name: "Tutafeh de Galar",
      },
    ],
  },
  "868": {
    id: "868",
    name: "Crèmy",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        id: "869",
        name: "Charmilly",
      },
    ],
  },
  "869": {
    id: "869",
    name: "Charmilly",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "868",
        name: "Crèmy",
      },
      {
        type: "evolution",
        id: "869.01",
        name: "Charmilly Gigamax",
      },
    ],
  },
  "869.01": {
    id: "869.01",
    name: "Charmilly Gigamax",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "869",
        name: "Charmilly",
      },
    ],
  },
  "870": {
    id: "870",
    name: "Hexadron",
    types: ["fighting"],
  },
  "871": {
    id: "871",
    name: "Wattapik",
    types: ["electric"],
  },
  "872": {
    id: "872",
    name: "Frissonille",
    types: ["ice", "insect"],
    evolutions: [
      {
        type: "evolution",
        id: "873",
        name: "Beldeneige",
      },
    ],
  },
  "873": {
    id: "873",
    name: "Beldeneige",
    types: ["ice", "insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "872",
        name: "Frissonille",
      },
    ],
  },
  "874": {
    id: "874",
    name: "Dolman",
    types: ["rock"],
  },
  "875": {
    id: "875",
    name: "Bekaglaçon (Tête de Gel)",
    types: ["ice"],
  },
  "875.01": {
    id: "875.01",
    name: "Bekaglaçon (Tête Dégel)",
    types: ["ice"],
  },
  "876": {
    id: "876",
    name: "Wimessir (Male)",
    types: ["psychic", "normal"],
    femaleVariation: true,
  },
  "877": {
    id: "877",
    name: "Morpeko",
    types: ["electric", "dark"],
  },
  "877.01": {
    id: "877.01",
    name: "Morpeko (Affamé)",
    types: ["electric", "dark"],
  },
  "878": {
    id: "878",
    name: "Charibari",
    types: ["steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Pachyradjah",
        id: "879",
        level: 34,
      },
    ],
  },
  "879": {
    id: "879",
    name: "Pachyradjah",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "878",
        name: "Charibari",
      },
      {
        type: "evolution",
        id: "879.01",
        name: "Pachyradjah Gigamax",
      },
    ],
  },
  "879.01": {
    id: "879.01",
    name: "Pachyradjah Gigamax",
    types: ["steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "879",
        name: "Pachyradjah",
      },
    ],
  },
  "880": {
    id: "880",
    name: "Galvagon",
    types: ["electric", "dragon"],
  },
  "881": {
    id: "881",
    name: "Galvagla",
    types: ["electric", "ice"],
  },
  "882": {
    id: "882",
    name: "Hydragon",
    types: ["water", "dragon"],
  },
  "883": {
    id: "883",
    name: "Hydragla",
    types: ["water", "ice"],
  },
  "884": {
    id: "884",
    name: "Duralugon",
    types: ["steel", "dragon"],
    evolutions: [
      {
        type: "evolution",
        id: "884.01",
        name: "Duralugon Gigamax",
      },
      {
        type: "evolution",
        id: "1018",
        name: "Pondralugon",
      },
    ],
  },
  "884.01": {
    id: "884.01",
    name: "Duralugon Gigamax",
    types: ["steel", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "884",
        name: "Duralugon",
      },
    ],
  },
  "885": {
    id: "885",
    name: "Fantyrm",
    types: ["dragon", "ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Dispareptil",
        id: "886",
        level: 50,
      },
    ],
  },
  "886": {
    id: "886",
    name: "Dispareptil",
    types: ["dragon", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "885",
        name: "Fantyrm",
      },
      {
        type: "evolution",
        name: "Lanssorien",
        id: "887",
        level: 60,
      },
    ],
  },
  "887": {
    id: "887",
    name: "Lanssorien",
    types: ["dragon", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "886",
        name: "Dispareptil",
      },
    ],
  },
  "888": {
    id: "888",
    name: "Zacian (Hero Aguerri)",
    types: ["fairy"],
  },
  "888.01": {
    id: "888.01",
    name: "Zacian (Epee Supreme)",
    types: ["fairy", "steel"],
  },
  "889": {
    id: "889",
    name: "Zamazenta (Hero Aguerri)",
    types: ["fighting"],
  },
  "889.01": {
    id: "889.01",
    name: "Zamazenta (Bouclier Supreme)",
    types: ["fighting", "steel"],
  },
  "890": {
    id: "890",
    name: "Éthernatos",
    types: ["poison", "dragon"],
  },
  "890.01": {
    id: "890.01",
    name: "Éthernatos Infinimax",
    types: ["poison", "dragon"],
  },
  "891": {
    id: "891",
    name: "Wushours",
    types: ["fighting"],
    evolutions: [
      {
        type: "evolution",
        id: "892",
        name: "Shifours (Poing Final)",
      },
      {
        type: "evolution",
        id: "892.01",
        name: "Shifours (Mille Poings)",
      },
    ],
  },
  "892": {
    id: "892",
    name: "Shifours (Poing Final)",
    types: ["fighting", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "891",
        name: "Wushours",
      },
      {
        type: "evolution",
        id: "892.02",
        name: "Shifours Gigamax (Poing Final)",
      },
    ],
  },
  "892.01": {
    id: "892.01",
    name: "Shifours (Mille Poings)",
    types: ["fighting", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "891",
        name: "Wushours",
      },
      {
        type: "evolution",
        id: "892.03",
        name: "Shifours Gigamax (Mille Poings)",
      },
    ],
  },
  "892.02": {
    id: "892.02",
    name: "Shifours Gigamax (Poing Final)",
    types: ["fighting", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "892",
        name: "Shifours (Poing Final)",
      },
    ],
  },
  "892.03": {
    id: "892.03",
    name: "Shifours Gigamax (Mille Poings)",
    types: ["fighting", "water"],
    evolutions: [
      {
        type: "prevolution",
        id: "892.01",
        name: "Shifours (Mille Poings)",
      },
    ],
  },
  "893": {
    id: "893",
    name: "Zarude",
    types: ["dark", "grass"],
  },
  "893.01": {
    id: "893.01",
    name: "Zarude (Papa)",
    types: ["dark", "grass"],
  },
  "894": {
    id: "894",
    name: "Regieleki",
    types: ["electric"],
  },
  "895": {
    id: "895",
    name: "Regidrago",
    types: ["dragon"],
  },
  "896": {
    id: "896",
    name: "Blizzeval",
    types: ["ice"],
  },
  "897": {
    id: "897",
    name: "Spectreval",
    types: ["ghost"],
  },
  "898": {
    id: "898",
    name: "Sylveroy",
    types: ["psychic", "grass"],
    evolutions: [
      {
        type: "evolution",
        id: "898.02",
        name: "Sylveroy (Cavalier de l'Effroi)",
      },
      {
        type: "evolution",
        id: "898.01",
        name: "Sylveroy (Cavalier du Froid)",
      },
    ],
  },
  "898.01": {
    id: "898.01",
    name: "Sylveroy (Cavalier du Froid)",
    types: ["psychic", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "898",
        name: "Sylveroy",
      },
    ],
  },
  "898.02": {
    id: "898.02",
    name: "Sylveroy (Cavalier de l'Effroi)",
    types: ["psychic", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "898",
        name: "Sylveroy",
      },
    ],
  },
  "899": {
    id: "899",
    name: "Cerbyllin",
    types: ["normal", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "234",
        name: "Cerfrousse",
      },
    ],
  },
  "900": {
    id: "900",
    name: "Hachécateur",
    types: ["insect", "rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "123",
        name: "Insécateur",
      },
    ],
  },
  "901": {
    id: "901",
    name: "Ursaking",
    types: ["ground", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "217",
        name: "Ursaring",
      },
    ],
  },
  "901.01": {
    id: "901.01",
    name: "Ursaking (Lune Vermeille)",
    types: ["ground", "normal"],
  },
  "902": {
    id: "902",
    name: "Paragruel",
    types: ["water", "ghost"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "550.02",
        name: "Bargantua (Blanc)",
      },
    ],
  },
  "903": {
    id: "903",
    name: "Farfurex",
    types: ["fighting", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "215.01",
        name: "Farfuret de Hisui",
      },
    ],
  },
  "904": {
    id: "904",
    name: "Qwilpik",
    types: ["dark", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "211.01",
        name: "Qwilfish de Hisui",
      },
    ],
  },
  "905": {
    id: "905",
    name: "Amovénus",
    types: ["fairy", "flying"],
  },
  "905.01": {
    id: "905.01",
    name: "Amovénus (Totemique)",
    types: ["fairy", "flying"],
  },
  "906": {
    id: "906",
    name: "Poussacha",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Matourgeon",
        id: "907",
        level: 16,
      },
    ],
  },
  "907": {
    id: "907",
    name: "Matourgeon",
    types: ["grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "906",
        name: "Poussacha",
      },
      {
        type: "evolution",
        name: "Miascarade",
        id: "908",
        level: 36,
      },
    ],
  },
  "908": {
    id: "908",
    name: "Miascarade",
    types: ["grass", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "907",
        name: "Matourgeon",
      },
    ],
  },
  "909": {
    id: "909",
    name: "Chochodile",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        name: "Crocogril",
        id: "910",
        level: 16,
      },
    ],
  },
  "910": {
    id: "910",
    name: "Crocogril",
    types: ["fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "909",
        name: "Chochodile",
      },
      {
        type: "evolution",
        name: "Flâmigator",
        id: "911",
        level: 36,
      },
    ],
  },
  "911": {
    id: "911",
    name: "Flâmigator",
    types: ["fire", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "910",
        name: "Crocogril",
      },
    ],
  },
  "912": {
    id: "912",
    name: "Coiffeton",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Canarbello",
        id: "913",
        level: 16,
      },
    ],
  },
  "913": {
    id: "913",
    name: "Canarbello",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "912",
        name: "Coiffeton",
      },
      {
        type: "evolution",
        name: "Palmaval",
        id: "914",
        level: 36,
      },
    ],
  },
  "914": {
    id: "914",
    name: "Palmaval",
    types: ["water", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "913",
        name: "Canarbello",
      },
    ],
  },
  "915": {
    id: "915",
    name: "Gourmelet",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Fragouin",
        id: "916",
        level: 18,
      },
    ],
  },
  "916": {
    id: "916",
    name: "Fragouin",
    types: ["normal"],
    femaleVariation: true,
    evolutions: [
      {
        type: "prevolution",
        id: "915",
        name: "Gourmelet",
      },
    ],
  },
  "917": {
    id: "917",
    name: "Tissenboule",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Filentrappe",
        id: "918",
        level: 15,
      },
    ],
  },
  "918": {
    id: "918",
    name: "Filentrappe",
    types: ["insect"],
    evolutions: [
      {
        type: "prevolution",
        id: "917",
        name: "Tissenboule",
      },
    ],
  },
  "919": {
    id: "919",
    name: "Lilliterelle",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        name: "Gambex",
        id: "920",
        level: 24,
      },
    ],
  },
  "920": {
    id: "920",
    name: "Gambex",
    types: ["insect", "dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "919",
        name: "Lilliterelle",
      },
    ],
  },
  "921": {
    id: "921",
    name: "Pohm",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        name: "Pohmotte",
        id: "922",
        level: 18,
      },
    ],
  },
  "922": {
    id: "922",
    name: "Pohmotte",
    types: ["electric", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "921",
        name: "Pohm",
      },
      {
        type: "evolution",
        id: "923",
        name: "Pohmarmotte",
      },
    ],
  },
  "923": {
    id: "923",
    name: "Pohmarmotte",
    types: ["electric", "fighting"],
    evolutions: [
      {
        type: "prevolution",
        id: "922",
        name: "Pohmotte",
      },
    ],
  },
  "924": {
    id: "924",
    name: "Compagnol",
    types: ["normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Famignol (Famille de Quatre)",
        id: "925",
        level: 25,
      },
      {
        type: "evolution",
        name: "Famignol (Famille de Trois)",
        id: "925.01",
        level: 25,
      },
    ],
  },
  "925": {
    id: "925",
    name: "Famignol (Famille de Quatre)",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "924",
        name: "Compagnol",
      },
    ],
  },
  "925.01": {
    id: "925.01",
    name: "Famignol (Famille de Trois)",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "924",
        name: "Compagnol",
      },
    ],
  },
  "926": {
    id: "926",
    name: "Pâtachiot",
    types: ["fairy"],
    evolutions: [
      {
        type: "evolution",
        name: "Briochien",
        id: "927",
        level: 26,
      },
    ],
  },
  "927": {
    id: "927",
    name: "Briochien",
    types: ["fairy"],
    evolutions: [
      {
        type: "prevolution",
        id: "926",
        name: "Pâtachiot",
      },
    ],
  },
  "928": {
    id: "928",
    name: "Olivini",
    types: ["grass", "normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Olivado",
        id: "929",
        level: 25,
      },
    ],
  },
  "929": {
    id: "929",
    name: "Olivado",
    types: ["grass", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "928",
        name: "Olivini",
      },
      {
        type: "evolution",
        name: "Arboliva",
        id: "930",
        level: 35,
      },
    ],
  },
  "930": {
    id: "930",
    name: "Arboliva",
    types: ["grass", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "929",
        name: "Olivado",
      },
    ],
  },
  "931": {
    id: "931",
    name: "Tapatoès (Vert)",
    types: ["normal", "flying"],
  },
  "931.01": {
    id: "931.01",
    name: "Tapatoès (Bleu)",
    types: ["normal", "flying"],
  },
  "931.02": {
    id: "931.02",
    name: "Tapatoès (Jaune)",
    types: ["normal", "flying"],
  },
  "931.03": {
    id: "931.03",
    name: "Tapatoès (Blanc)",
    types: ["normal", "flying"],
  },
  "932": {
    id: "932",
    name: "Selutin",
    types: ["rock"],
    evolutions: [
      {
        type: "evolution",
        name: "Amassel",
        id: "933",
        level: 24,
      },
    ],
  },
  "933": {
    id: "933",
    name: "Amassel",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "932",
        name: "Selutin",
      },
      {
        type: "evolution",
        name: "Gigansel",
        id: "934",
        level: 38,
      },
    ],
  },
  "934": {
    id: "934",
    name: "Gigansel",
    types: ["rock"],
    evolutions: [
      {
        type: "prevolution",
        id: "933",
        name: "Amassel",
      },
    ],
  },
  "935": {
    id: "935",
    name: "Charbambin",
    types: ["fire"],
    evolutions: [
      {
        type: "evolution",
        id: "936",
        name: "Carmadura",
      },
      {
        type: "evolution",
        id: "937",
        name: "Malvalame",
      },
    ],
  },
  "936": {
    id: "936",
    name: "Carmadura",
    types: ["fire", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "935",
        name: "Charbambin",
      },
    ],
  },
  "937": {
    id: "937",
    name: "Malvalame",
    types: ["fire", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "935",
        name: "Charbambin",
      },
    ],
  },
  "938": {
    id: "938",
    name: "Têtampoule",
    types: ["electric"],
    evolutions: [
      {
        type: "evolution",
        id: "939",
        name: "Ampibidou",
      },
    ],
  },
  "939": {
    id: "939",
    name: "Ampibidou",
    types: ["electric"],
    evolutions: [
      {
        type: "prevolution",
        id: "938",
        name: "Têtampoule",
      },
    ],
  },
  "940": {
    id: "940",
    name: "Zapétrel",
    types: ["electric", "flying"],
    evolutions: [
      {
        type: "evolution",
        name: "Fulgulairo",
        id: "941",
        level: 25,
      },
    ],
  },
  "941": {
    id: "941",
    name: "Fulgulairo",
    types: ["electric", "flying"],
    evolutions: [
      {
        type: "prevolution",
        id: "940",
        name: "Zapétrel",
      },
    ],
  },
  "942": {
    id: "942",
    name: "Grondogue",
    types: ["dark"],
    evolutions: [
      {
        type: "evolution",
        name: "Dogrino",
        id: "943",
        level: 30,
      },
    ],
  },
  "943": {
    id: "943",
    name: "Dogrino",
    types: ["dark"],
    evolutions: [
      {
        type: "prevolution",
        id: "942",
        name: "Grondogue",
      },
    ],
  },
  "944": {
    id: "944",
    name: "Gribougraine",
    types: ["poison", "normal"],
    evolutions: [
      {
        type: "evolution",
        name: "Tag-Tag",
        id: "945",
        level: 28,
      },
    ],
  },
  "945": {
    id: "945",
    name: "Tag-Tag",
    types: ["poison", "normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "944",
        name: "Gribougraine",
      },
    ],
  },
  "946": {
    id: "946",
    name: "Virovent",
    types: ["grass", "ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "947",
        name: "Virevorreur",
      },
    ],
  },
  "947": {
    id: "947",
    name: "Virevorreur",
    types: ["grass", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "946",
        name: "Virovent",
      },
    ],
  },
  "948": {
    id: "948",
    name: "Terracool",
    types: ["ground", "grass"],
    evolutions: [
      {
        type: "evolution",
        name: "Terracruel",
        id: "949",
        level: 30,
      },
    ],
  },
  "949": {
    id: "949",
    name: "Terracruel",
    types: ["ground", "grass"],
    evolutions: [
      {
        type: "prevolution",
        id: "948",
        name: "Terracool",
      },
    ],
  },
  "950": {
    id: "950",
    name: "Craparoi",
    types: ["rock"],
  },
  "951": {
    id: "951",
    name: "Pimito",
    types: ["grass"],
    evolutions: [
      {
        type: "evolution",
        id: "952",
        name: "Scovilain",
      },
    ],
  },
  "952": {
    id: "952",
    name: "Scovilain",
    types: ["grass", "fire"],
    evolutions: [
      {
        type: "prevolution",
        id: "951",
        name: "Pimito",
      },
    ],
  },
  "953": {
    id: "953",
    name: "Léboulérou",
    types: ["insect"],
    evolutions: [
      {
        type: "evolution",
        id: "954",
        name: "Bérasca",
      },
    ],
  },
  "954": {
    id: "954",
    name: "Bérasca",
    types: ["insect", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "953",
        name: "Léboulérou",
      },
    ],
  },
  "955": {
    id: "955",
    name: "Flotillon",
    types: ["psychic"],
    evolutions: [
      {
        type: "evolution",
        name: "Cléopsytra",
        id: "956",
        level: 35,
      },
    ],
  },
  "956": {
    id: "956",
    name: "Cléopsytra",
    types: ["psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "955",
        name: "Flotillon",
      },
    ],
  },
  "957": {
    id: "957",
    name: "Forgerette",
    types: ["fairy", "steel"],
    evolutions: [
      {
        type: "evolution",
        name: "Forgella",
        id: "958",
        level: 38,
      },
    ],
  },
  "958": {
    id: "958",
    name: "Forgella",
    types: ["fairy", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "957",
        name: "Forgerette",
      },
      {
        type: "evolution",
        name: "Forgelina",
        id: "959",
        level: 38,
      },
    ],
  },
  "959": {
    id: "959",
    name: "Forgelina",
    types: ["fairy", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "958",
        name: "Forgella",
      },
    ],
  },
  "960": {
    id: "960",
    name: "Taupikeau",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Triopikeau",
        id: "961",
        level: 26,
      },
    ],
  },
  "961": {
    id: "961",
    name: "Triopikeau",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "960",
        name: "Taupikeau",
      },
    ],
  },
  "962": {
    id: "962",
    name: "Lestombaile",
    types: ["flying", "dark"],
  },
  "963": {
    id: "963",
    name: "Dofin",
    types: ["water"],
    evolutions: [
      {
        type: "evolution",
        name: "Superdofin (Ordinaire)",
        id: "964",
        level: 38,
      },
      {
        type: "evolution",
        name: "Superdofin (Super)",
        id: "964.01",
        level: 38,
      },
    ],
  },
  "964": {
    id: "964",
    name: "Superdofin (Ordinaire)",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "963",
        name: "Dofin",
      },
    ],
  },
  "964.01": {
    id: "964.01",
    name: "Superdofin (Super)",
    types: ["water"],
    evolutions: [
      {
        type: "prevolution",
        id: "963",
        name: "Dofin",
      },
    ],
  },
  "965": {
    id: "965",
    name: "Vrombi",
    types: ["steel", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Vrombotor",
        id: "966",
        level: 40,
      },
    ],
  },
  "966": {
    id: "966",
    name: "Vrombotor",
    types: ["steel", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "965",
        name: "Vrombi",
      },
    ],
  },
  "967": {
    id: "967",
    name: "Motorizard",
    types: ["dragon", "normal"],
  },
  "968": {
    id: "968",
    name: "Ferdeter",
    types: ["steel"],
  },
  "969": {
    id: "969",
    name: "Germéclat",
    types: ["rock", "poison"],
    evolutions: [
      {
        type: "evolution",
        name: "Floréclat",
        id: "970",
        level: 35,
      },
    ],
  },
  "970": {
    id: "970",
    name: "Floréclat",
    types: ["rock", "poison"],
    evolutions: [
      {
        type: "prevolution",
        id: "969",
        name: "Germéclat",
      },
    ],
  },
  "971": {
    id: "971",
    name: "Toutombe",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        name: "Tomberro",
        id: "972",
        level: 30,
      },
    ],
  },
  "972": {
    id: "972",
    name: "Tomberro",
    types: ["ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "971",
        name: "Toutombe",
      },
    ],
  },
  "973": {
    id: "973",
    name: "Flamenroule",
    types: ["flying", "fighting"],
  },
  "974": {
    id: "974",
    name: "Piétacé",
    types: ["ice"],
    evolutions: [
      {
        type: "evolution",
        id: "975",
        name: "Balbalèze",
      },
    ],
  },
  "975": {
    id: "975",
    name: "Balbalèze",
    types: ["ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "974",
        name: "Piétacé",
      },
    ],
  },
  "976": {
    id: "976",
    name: "Délestin",
    types: ["water", "psychic"],
  },
  "977": {
    id: "977",
    name: "Oyacata",
    types: ["water"],
  },
  "978": {
    id: "978",
    name: "Nigirigon (Courbé)",
    types: ["dragon", "water"],
  },
  "978.01": {
    id: "978.01",
    name: "Nigirigon (Affalé)",
    types: ["dragon", "water"],
  },
  "978.02": {
    id: "978.02",
    name: "Nigirigon (Raide)",
    types: ["dragon", "water"],
  },
  "979": {
    id: "979",
    name: "Courrousinge",
    types: ["fighting", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "57",
        name: "Colossinge",
      },
    ],
  },
  "980": {
    id: "980",
    name: "Terraiste",
    types: ["poison", "ground"],
    evolutions: [
      {
        type: "prevolution",
        id: "194.01",
        name: "Axoloto de Paldea",
      },
    ],
  },
  "981": {
    id: "981",
    name: "Farigiraf",
    types: ["normal", "psychic"],
    evolutions: [
      {
        type: "prevolution",
        id: "203",
        name: "Girafarig",
      },
    ],
  },
  "982": {
    id: "982",
    name: "Deusolourdo (Double)",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "206",
        name: "Insolourdo",
      },
    ],
  },
  "982.01": {
    id: "982.01",
    name: "Deusolourdo (Triple)",
    types: ["normal"],
    evolutions: [
      {
        type: "prevolution",
        id: "206",
        name: "Insolourdo",
      },
    ],
  },
  "983": {
    id: "983",
    name: "Scalpereur",
    types: ["dark", "steel"],
    evolutions: [
      {
        type: "prevolution",
        id: "625",
        name: "Scalproie",
      },
    ],
  },
  "984": {
    id: "984",
    name: "Fort-Ivoire",
    types: ["ground", "fighting"],
  },
  "985": {
    id: "985",
    name: "Hurle-Queue",
    types: ["fairy", "psychic"],
  },
  "986": {
    id: "986",
    name: "Fongus-Furie",
    types: ["grass", "dark"],
  },
  "987": {
    id: "987",
    name: "Flotte-Mèche",
    types: ["ghost", "fairy"],
  },
  "988": {
    id: "988",
    name: "Rampe-Ailes",
    types: ["insect", "fighting"],
  },
  "989": {
    id: "989",
    name: "Pelage-Sablé",
    types: ["electric", "ground"],
  },
  "990": {
    id: "990",
    name: "Roue-de-fer",
    types: ["ground", "steel"],
  },
  "991": {
    id: "991",
    name: "Hotte-de-fer",
    types: ["ice", "water"],
  },
  "992": {
    id: "992",
    name: "Paume-de-fer",
    types: ["fighting", "electric"],
  },
  "993": {
    id: "993",
    name: "Têtes-de-fer",
    types: ["dark", "flying"],
  },
  "994": {
    id: "994",
    name: "Mite-de-fer",
    types: ["fire", "poison"],
  },
  "995": {
    id: "995",
    name: "Épine-de-fer",
    types: ["rock", "electric"],
  },
  "996": {
    id: "996",
    name: "Frigodo",
    types: ["dragon", "ice"],
    evolutions: [
      {
        type: "evolution",
        name: "Cryodo",
        id: "997",
        level: 35,
      },
    ],
  },
  "997": {
    id: "997",
    name: "Cryodo",
    types: ["dragon", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "996",
        name: "Frigodo",
      },
      {
        type: "evolution",
        name: "Glaivodo",
        id: "998",
        level: 54,
      },
    ],
  },
  "998": {
    id: "998",
    name: "Glaivodo",
    types: ["dragon", "ice"],
    evolutions: [
      {
        type: "prevolution",
        id: "997",
        name: "Cryodo",
      },
    ],
  },
  "999": {
    id: "999",
    name: "Mordudor (Coffre)",
    types: ["ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "1000",
        name: "Gromago",
      },
    ],
  },
  "999.01": {
    id: "999.01",
    name: "Mordudor (Marche)",
    types: ["ghost"],
  },
  "1000": {
    id: "1000",
    name: "Gromago",
    types: ["steel", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "999",
        name: "Mordudor (Coffre)",
      },
    ],
  },
  "1001": {
    id: "1001",
    name: "Chongjian",
    types: ["dark", "grass"],
  },
  "1002": {
    id: "1002",
    name: "Baojian",
    types: ["dark", "ice"],
  },
  "1003": {
    id: "1003",
    name: "Dinglu",
    types: ["dark", "ground"],
  },
  "1004": {
    id: "1004",
    name: "Yuyu",
    types: ["dark", "fire"],
  },
  "1005": {
    id: "1005",
    name: "Rugit-Lune",
    types: ["dragon", "dark"],
  },
  "1006": {
    id: "1006",
    name: "Garde-de-fer",
    types: ["fairy", "fighting"],
  },
  "1007": {
    id: "1007",
    name: "Koraidon",
    types: ["fighting", "dragon"],
  },
  "1008": {
    id: "1008",
    name: "Miraidon",
    types: ["electric", "dragon"],
  },
  "1009": {
    id: "1009",
    name: "Serpente-Eau",
    types: ["water", "dragon"],
  },
  "1010": {
    id: "1010",
    name: "Vert-de-fer",
    types: ["grass", "psychic"],
  },
  "1011": {
    id: "1011",
    name: "Pomdramour",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "840",
        name: "Verpom",
      },
      {
        type: "evolution",
        id: "1019",
        name: "Pomdorochi",
      },
    ],
  },
  "1012": {
    id: "1012",
    name: "Poltchageist",
    types: ["grass", "ghost"],
    evolutions: [
      {
        type: "evolution",
        id: "1013",
        name: "Théffroyable",
      },
    ],
  },
  "1013": {
    id: "1013",
    name: "Théffroyable",
    types: ["grass", "ghost"],
    evolutions: [
      {
        type: "prevolution",
        id: "1012",
        name: "Poltchageist",
      },
    ],
  },
  "1014": {
    id: "1014",
    name: "Félicanis",
    types: ["poison", "fighting"],
  },
  "1015": {
    id: "1015",
    name: "Fortusimia",
    types: ["poison", "psychic"],
  },
  "1016": {
    id: "1016",
    name: "Favianos",
    types: ["poison", "fairy"],
  },
  "1017": {
    id: "1017",
    name: "Ogerpon (Masque Turquoise)",
    types: ["grass"],
  },
  "1017.01": {
    id: "1017.01",
    name: "Ogerpon (Masque du Puits)",
    types: ["grass", "water"],
  },
  "1017.02": {
    id: "1017.02",
    name: "Ogerpon (Masque du Fourneau)",
    types: ["grass", "fire"],
  },
  "1017.03": {
    id: "1017.03",
    name: "Ogerpon (Masque de la Pierre)",
    types: ["grass", "rock"],
  },
  "1018": {
    id: "1018",
    name: "Pondralugon",
    types: ["steel", "dragon"],
  },
  "1019": {
    id: "1019",
    name: "Pomdorochi",
    types: ["grass", "dragon"],
    evolutions: [
      {
        type: "prevolution",
        id: "1011",
        name: "Pomdramour",
      },
    ],
  },
  "1020": {
    id: "1020",
    name: "Feu-Perçant",
    types: ["fire", "dragon"],
  },
  "1021": {
    id: "1021",
    name: "Ire-Foudre",
    types: ["electric", "dragon"],
  },
  "1022": {
    id: "1022",
    name: "Roc-de-fer",
    types: ["rock", "psychic"],
  },
  "1023": {
    id: "1023",
    name: "Chef-de-fer",
    types: ["steel", "psychic"],
  },
  "1024": {
    id: "1024",
    name: "Terapagos",
    types: ["normal"],
  },
  "1024.01": {
    id: "1024.01",
    name: "Terapagos (Teracristal)",
    types: ["normal"],
  },
  "1024.02": {
    id: "1024.02",
    name: "Terapagos (Stellaire)",
    types: ["normal"],
  },
  "1025": {
    id: "1025",
    name: "Pêchaminus",
    types: ["poison", "ghost"],
  },
};
