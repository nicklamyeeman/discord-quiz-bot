export type LoLChampionsClassesKeys =
  | "assassin"
  | "fighter"
  | "mage"
  | "marksman"
  | "support"
  | "tank";

export type LoLChampion = {
  id: string;
  name: string;
  alias?: string;
  classes: Array<LoLChampionsClassesKeys>;
  skins?: Array<{
    id: string;
    name: string;
  }>;
  spells?: Array<{
    type: "spell" | "passive";
    id: string;
    name: string;
  }>;
};

export const lolChampionsClasses: {
  [key in LoLChampionsClassesKeys]: {
    name: string;
    alias?: string;
    emoji: string;
  };
} = {
  assassin: {
    name: "Assassin",
    emoji: "<:lol_assassin:1316310210574422076>",
  },
  fighter: {
    name: "Combattant",
    alias: "Bruiser",
    emoji: "<:lol_combattant:1316310227771068497>",
  },
  mage: {
    name: "Mage",
    emoji: "<:lol_mage:1316310244238037044>",
  },
  marksman: {
    name: "Tireur",
    alias: "ADC",
    emoji: "<:lol_tireur:1316310296196939797>",
  },
  support: {
    name: "Support",
    emoji: "<:lol_support:1316310259165302864>",
  },
  tank: {
    name: "Tank",
    emoji: "<:lol_tank:1316310282108407819>",
  },
};
