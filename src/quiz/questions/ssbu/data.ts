export type SSBUFighterSeriesKeys =
  | "mario"
  | "donkey_kong"
  | "zelda"
  | "metroid"
  | "yoshi"
  | "kirby"
  | "star_fox"
  | "pokemon"
  | "earthbound"
  | "f_zero"
  | "ice_climber"
  | "fire_emblem"
  | "game_and_watch"
  | "kid_icarus"
  | "wario"
  | "metal_gear"
  | "sonic"
  | "pikmin"
  | "rob"
  | "animal_crossing"
  | "mega_man"
  | "wii_fit"
  | "punch_out"
  | "smash_bros"
  | "pac_man"
  | "xenoblade"
  | "duck_hunt"
  | "street_fighter"
  | "final_fantasy"
  | "bayonetta"
  | "splatoon"
  | "castlevania"
  | "persona"
  | "dragon_quest"
  | "banjo_kazooie"
  | "fatal_fury"
  | "arms"
  | "minecraft"
  | "tekken"
  | "kingdom_hearts";

export type SSBUFighter = {
  id: string;
  name: string;
  alias?: string;
  serie: SSBUFighterSeriesKeys;
};

export const ssbuFightersSeries: {
  [key in SSBUFighterSeriesKeys]: {
    name: string;
    alias?: string;
  };
} = {
  animal_crossing: {
    name: "Animal Crossing",
  },
  arms: {
    name: "ARMS",
  },
  banjo_kazooie: {
    name: "Banjo-Kazooie",
  },
  bayonetta: {
    name: "Bayonetta",
  },
  castlevania: {
    name: "Castlevania",
  },
  donkey_kong: {
    name: "Donkey Kong",
    alias: "DK",
  },
  dragon_quest: {
    name: "Dragon Quest",
  },
  duck_hunt: {
    name: "Duck Hunt",
  },
  earthbound: {
    name: "Earthbound",
  },
  f_zero: {
    name: "F-Zero",
  },
  final_fantasy: {
    name: "Final Fantasy",
  },
  fire_emblem: {
    name: "Fire Emblem",
  },
  game_and_watch: {
    name: "Game & Watch",
    alias: "Game and Watch",
  },
  fatal_fury: {
    name: "Fatal Fury",
  },
  ice_climber: {
    name: "Ice Climber",
  },
  kirby: {
    name: "Kirby",
  },
  kingdom_hearts: {
    name: "Kingdom Hearts",
  },
  mario: {
    name: "Mario",
  },
  kid_icarus: {
    name: "Kid Icarus",
  },
  mega_man: {
    name: "Mega Man",
  },
  metal_gear: {
    name: "Metal Gear",
  },
  metroid: {
    name: "Metroid",
  },
  minecraft: {
    name: "Minecraft",
  },
  pac_man: {
    name: "PAC-MAN",
  },
  persona: {
    name: "Persona",
  },
  pikmin: {
    name: "Pikmin",
  },
  pokemon: {
    name: "Pokémon",
  },
  punch_out: {
    name: "Punch-Out!!",
    alias: "Punch-Out",
  },
  rob: {
    name: "R.O.B.",
    alias: "ROB",
  },
  sonic: {
    name: "Sonic",
  },
  splatoon: {
    name: "Splatoon",
  },
  star_fox: {
    name: "Star Fox",
  },
  street_fighter: {
    name: "Street Fighter",
  },
  smash_bros: {
    name: "Super Smash Bros.",
  },
  tekken: {
    name: "Tekken",
  },
  wario: {
    name: "Wario",
  },
  wii_fit: {
    name: "Wii Fit",
  },
  xenoblade: {
    name: "Xenoblade",
  },
  zelda: {
    name: "The Legend of Zelda",
    alias: "Zelda",
  },
  yoshi: {
    name: "Yoshi",
  },
};

export const ssbuFighters: { [id: string]: SSBUFighter } = {
  amphinobi: {
    id: "amphinobi",
    name: "Amphinobi",
    serie: "pokemon",
  },
  banjo_and_kazooie: {
    id: "banjo_and_kazooie",
    name: "Banjo & Kazooie",
    alias: "Banjo Kazooie",
    serie: "banjo_kazooie",
  },
  bayonetta: {
    id: "bayonetta",
    name: "Bayonetta",
    serie: "bayonetta",
  },
  bowser: {
    id: "bowser",
    name: "Bowser",
    serie: "mario",
  },
  bowser_jr: {
    id: "bowser_jr",
    name: "Bowser Jr.",
    serie: "mario",
  },
  byleth: {
    id: "byleth",
    name: "Byleth",
    serie: "fire_emblem",
  },
  captain_falcon: {
    id: "captain_falcon",
    name: "Captain Falcon",
    serie: "f_zero",
  },
  chrom: {
    id: "chrom",
    name: "Chrom",
    serie: "fire_emblem",
  },
  cloud: {
    id: "cloud",
    name: "Cloud",
    serie: "final_fantasy",
  },
  combattant_mii_boxeur: {
    id: "combattant_mii_boxeur",
    name: "Combattant Mii Boxeur",
    alias: "Mii Boxeur",
    serie: "smash_bros",
  },
  combattant_mii_epeiste: {
    id: "combattant_mii_epeiste",
    name: "Combattant Mii Épéiste",
    alias: "Mii Épéiste",
    serie: "smash_bros",
  },
  combattant_mii_tireur: {
    id: "combattant_mii_tireur",
    name: "Combattant Mii Tireur",
    alias: "Mii Tireur",
    serie: "smash_bros",
  },
  corrin: {
    id: "corrin",
    name: "Corrin",
    serie: "fire_emblem",
  },
  daisy: {
    id: "daisy",
    name: "Daisy",
    serie: "mario",
  },
  daraen: {
    id: "daraen",
    name: "Daraen",
    serie: "fire_emblem",
  },
  diddy_kong: {
    id: "diddy_kong",
    name: "Diddy Kong",
    serie: "donkey_kong",
  },
  donkey_kong: {
    id: "donkey_kong",
    name: "Donkey Kong",
    serie: "donkey_kong",
  },
  dresseur_de_pokemon: {
    id: "dresseur_de_pokemon",
    name: "Dresseur De Pokémon",
    alias: "Dresseur Pokémon",
    serie: "pokemon",
  },
  dr_mario: {
    id: "dr_mario",
    name: "Dr. Mario",
    serie: "mario",
  },
  duo_duck_hunt: {
    id: "duo_duck_hunt",
    name: "Duo Duck Hunt",
    alias: "Duck Hunt",
    serie: "duck_hunt",
  },
  entraineuse_wii_fit: {
    id: "entraineuse_wii_fit",
    name: "Entraîneuse Wii Fit",
    serie: "wii_fit",
  },
  falco: {
    id: "falco",
    name: "Falco",
    serie: "star_fox",
  },
  felinferno: {
    id: "felinferno",
    name: "Félinferno",
    serie: "pokemon",
  },
  fox: {
    id: "fox",
    name: "Fox",
    serie: "star_fox",
  },
  ganondorf: {
    id: "ganondorf",
    name: "Ganondorf",
    serie: "zelda",
  },
  harmonie_and_luma: {
    id: "harmonie_and_luma",
    name: "Harmonie & Luma",
    alias: "Harmonie Luma",
    serie: "mario",
  },
  heros: {
    id: "heros",
    name: "Héros",
    serie: "dragon_quest",
  },
  ice_climbers: {
    id: "ice_climbers",
    name: "Ice Climbers",
    serie: "ice_climber",
  },
  ike: {
    id: "ike",
    name: "Ike",
    serie: "fire_emblem",
  },
  inkling: {
    id: "inkling",
    name: "Inkling",
    serie: "splatoon",
  },
  joker: {
    id: "joker",
    name: "Joker",
    serie: "persona",
  },
  kazuya: {
    id: "kazuya",
    name: "Kazuya",
    serie: "tekken",
  },
  ken: {
    id: "ken",
    name: "Ken",
    serie: "street_fighter",
  },
  king_k_rool: {
    id: "king_k_rool",
    name: "King K. Rool",
    serie: "donkey_kong",
  },
  kirby: {
    id: "kirby",
    name: "Kirby",
    serie: "kirby",
  },
  link: {
    id: "link",
    name: "Link",
    serie: "zelda",
  },
  link_cartoon: {
    id: "link_cartoon",
    name: "Link Cartoon",
    serie: "zelda",
  },
  link_enfant: {
    id: "link_enfant",
    name: "Link Enfant",
    serie: "zelda",
  },
  little_mac: {
    id: "little_mac",
    name: "Little Mac",
    serie: "punch_out",
  },
  lucario: {
    id: "lucario",
    name: "Lucario",
    serie: "pokemon",
  },
  lucas: {
    id: "lucas",
    name: "Lucas",
    serie: "earthbound",
  },
  lucina: {
    id: "lucina",
    name: "Lucina",
    serie: "fire_emblem",
  },
  luigi: {
    id: "luigi",
    name: "Luigi",
    serie: "mario",
  },
  marie: {
    id: "marie",
    name: "Marie",
    serie: "animal_crossing",
  },
  mario: {
    id: "mario",
    name: "Mario",
    serie: "mario",
  },
  marth: {
    id: "marth",
    name: "Marth",
    serie: "fire_emblem",
  },
  mega_man: {
    id: "mega_man",
    name: "Mega Man",
    serie: "mega_man",
  },
  meta_knight: {
    id: "meta_knight",
    name: "Meta Knight",
    serie: "kirby",
  },
  mewtwo: {
    id: "mewtwo",
    name: "Mewtwo",
    serie: "pokemon",
  },
  min_min: {
    id: "min_min",
    name: "Min Min",
    serie: "arms",
  },
  mr_game_and_watch: {
    id: "mr_game_and_watch",
    name: "Mr. Game & Watch",
    alias: "Game Watch",
    serie: "game_and_watch",
  },
  ness: {
    id: "ness",
    name: "Ness",
    serie: "earthbound",
  },
  olimar: {
    id: "olimar",
    name: "Olimar",
    serie: "pikmin",
  },
  pac_man: {
    id: "pac_man",
    name: "Pac-Man",
    serie: "pac_man",
  },
  palutena: {
    id: "palutena",
    name: "Palutena",
    serie: "kid_icarus",
  },
  peach: {
    id: "peach",
    name: "Peach",
    serie: "mario",
  },
  pichu: {
    id: "pichu",
    name: "Pichu",
    serie: "pokemon",
  },
  pikachu: {
    id: "pikachu",
    name: "Pikachu",
    serie: "pokemon",
  },
  pit: {
    id: "pit",
    name: "Pit",
    serie: "kid_icarus",
  },
  pit_malefique: {
    id: "pit_malefique",
    name: "Pit Maléfique",
    serie: "kid_icarus",
  },
  plante_piranha: {
    id: "plante_piranha",
    name: "Plante Piranha",
    serie: "mario",
  },
  pyra_mythra: {
    id: "pyra_mythra",
    name: "Pyra / Mythra",
    serie: "xenoblade",
  },
  richter: {
    id: "richter",
    name: "Richter",
    serie: "castlevania",
  },
  ridley: {
    id: "ridley",
    name: "Ridley",
    serie: "metroid",
  },
  rob: {
    id: "rob",
    name: "R.O.B.",
    serie: "rob",
  },
  roi_dadidou: {
    id: "roi_dadidou",
    name: "Roi Dadidou",
    serie: "kirby",
  },
  rondoudou: {
    id: "rondoudou",
    name: "Rondoudou",
    serie: "pokemon",
  },
  roy: {
    id: "roy",
    name: "Roy",
    serie: "fire_emblem",
  },
  ryu: {
    id: "ryu",
    name: "Ryu",
    serie: "street_fighter",
  },
  samus: {
    id: "samus",
    name: "Samus",
    serie: "metroid",
  },
  samus_sans_armure: {
    id: "samus_sans_armure",
    name: "Samus Sans Armure",
    serie: "metroid",
  },
  samus_sombre: {
    id: "samus_sombre",
    name: "Samus Sombre",
    serie: "metroid",
  },
  sephiroth: {
    id: "sephiroth",
    name: "Séphiroth",
    serie: "final_fantasy",
  },
  sheik: {
    id: "sheik",
    name: "Sheik",
    serie: "zelda",
  },
  shulk: {
    id: "shulk",
    name: "Shulk",
    serie: "xenoblade",
  },
  simon: {
    id: "simon",
    name: "Simon",
    serie: "castlevania",
  },
  snake: {
    id: "snake",
    name: "Snake",
    serie: "metal_gear",
  },
  sonic: {
    id: "sonic",
    name: "Sonic",
    serie: "sonic",
  },
  sora: {
    id: "sora",
    name: "Sora",
    serie: "kingdom_hearts",
  },
  steve: {
    id: "steve",
    name: "Steve",
    serie: "minecraft",
  },
  terry: {
    id: "terry",
    name: "Terry",
    serie: "fatal_fury",
  },
  villageois: {
    id: "villageois",
    name: "Villageois",
    serie: "animal_crossing",
  },
  wario: {
    id: "wario",
    name: "Wario",
    serie: "wario",
  },
  wolf: {
    id: "wolf",
    name: "Wolf",
    serie: "star_fox",
  },
  yoshi: {
    id: "yoshi",
    name: "Yoshi",
    serie: "yoshi",
  },
  zelda: {
    id: "zelda",
    name: "Zelda",
    serie: "zelda",
  },
};
