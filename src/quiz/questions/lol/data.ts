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
  spells: Array<{
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

export const lolChampions: { [id: string]: LoLChampion } = {
  aatrox: {
    id: "aatrox",
    name: "Aatrox",
    classes: ["fighter"],
    skins: [
      {
        id: "1",
        name: "Aatrox justicier",
      },
      {
        id: "2",
        name: "Mecha Aatrox",
      },
      {
        id: "7",
        name: "Aatrox lune de sang",
      },
      {
        id: "9",
        name: "Aatrox héros de guerre",
      },
      {
        id: "11",
        name: "Aatrox de l'Odyssée",
      },
      {
        id: "31",
        name: "DRX Aatrox prestige",
      },
      {
        id: "33",
        name: "Aatrox primordien",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Posture du massacreur",
        type: "passive",
      },
      {
        id: "q",
        name: "Épée des Darkin",
        type: "spell",
      },
      {
        id: "w",
        name: "Chaînes infernales",
        type: "spell",
      },
      {
        id: "e",
        name: "Ruée obscure",
        type: "spell",
      },
      {
        id: "r",
        name: "Fossoyeur des mondes",
        type: "spell",
      },
    ],
  },
  ahri: {
    id: "ahri",
    name: "Ahri",
    classes: ["mage", "assassin"],
    skins: [
      {
        id: "1",
        name: "Ahri dynastique",
      },
      {
        id: "2",
        name: "Ahri de minuit",
      },
      {
        id: "3",
        name: "Ahri renard du feu",
      },
      {
        id: "4",
        name: "Ahri popstar",
      },
      {
        id: "5",
        name: "Ahri challenger",
      },
      {
        id: "7",
        name: "Ahri arcade",
      },
      {
        id: "14",
        name: "Ahri gardienne des étoiles",
      },
      {
        id: "15",
        name: "K/DA Ahri",
      },
      {
        id: "17",
        name: "Ahri sylvestre",
      },
      {
        id: "27",
        name: "Ahri fleur spirituelle",
      },
      {
        id: "28",
        name: "K/DA ALL OUT Ahri",
      },
      {
        id: "42",
        name: "Ahri de l'assemblée",
      },
      {
        id: "66",
        name: "Ahri des arcanes",
      },
      {
        id: "76",
        name: "Ahri lune de neige",
      },
      {
        id: "85",
        name: "Ahri légende transcendée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Vol essentiel",
        type: "passive",
      },
      {
        id: "q",
        name: "Orbe d'illusion",
        type: "spell",
      },
      {
        id: "w",
        name: "Lucioles",
        type: "spell",
      },
      {
        id: "e",
        name: "Charme",
        type: "spell",
      },
      {
        id: "r",
        name: "Assaut spirituel",
        type: "spell",
      },
    ],
  },
  akali: {
    id: "akali",
    name: "Akali",
    classes: ["assassin"],
    skins: [
      {
        id: "1",
        name: "Akali aiguillon",
      },
      {
        id: "2",
        name: "Akali infernale",
      },
      {
        id: "3",
        name: "Akali All-Star",
      },
      {
        id: "4",
        name: "Akali infirmière",
      },
      {
        id: "5",
        name: "Akali lune de sang",
      },
      {
        id: "6",
        name: "Akali crocs d'argent",
      },
      {
        id: "7",
        name: "Akali chasseuse de têtes",
      },
      {
        id: "9",
        name: "K/DA Akali",
      },
      {
        id: "14",
        name: "PROJET: Akali",
      },
      {
        id: "15",
        name: "True Damage Akali",
      },
      {
        id: "32",
        name: "K/DA ALL OUT Akali",
      },
      {
        id: "50",
        name: "Akali cauchemar criminel",
      },
      {
        id: "61",
        name: "Akali gardienne des étoiles",
      },
      {
        id: "70",
        name: "Akali de l'assemblée",
      },
      {
        id: "71",
        name: "Akali de l'assemblée prestige",
      },
      {
        id: "82",
        name: "Akali empyréenne",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Marque d'assassin",
        type: "passive",
      },
      {
        id: "q",
        name: "Vague de kunais",
        type: "spell",
      },
      {
        id: "w",
        name: "Linceul nébuleux",
        type: "spell",
      },
      {
        id: "e",
        name: "Lancer acrobatique",
        type: "spell",
      },
      {
        id: "r",
        name: "Maîtrise absolue",
        type: "spell",
      },
    ],
  },
  akshan: {
    id: "akshan",
    name: "Akshan",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "1",
        name: "Akshan cyberpop",
      },
      {
        id: "10",
        name: "Akshan rose de cristal",
      },
      {
        id: "20",
        name: "Akshan des Trois Honneurs",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Fourberie",
        type: "passive",
      },
      {
        id: "q",
        name: "Vengerang",
        type: "spell",
      },
      {
        id: "w",
        name: "Cavalier seul",
        type: "spell",
      },
      {
        id: "e",
        name: "Envolée héroïque",
        type: "spell",
      },
      {
        id: "r",
        name: "Bien mérité!",
        type: "spell",
      },
    ],
  },
  alistar: {
    id: "alistar",
    name: "Alistar",
    classes: ["tank", "support"],
    skins: [
      {
        id: "1",
        name: "Alistar noir",
      },
      {
        id: "2",
        name: "Alistar doré",
      },
      {
        id: "4",
        name: "Alistar longhorn",
      },
      {
        id: "5",
        name: "Alistar déchaîné",
      },
      {
        id: "6",
        name: "Alistar infernal",
      },
      {
        id: "19",
        name: "Alistar Hextech",
      },
      {
        id: "20",
        name: "Alistar conquérant",
      },
      {
        id: "29",
        name: "Alistar bête lunaire",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Cri triomphant",
        type: "passive",
      },
      {
        id: "q",
        name: "Atomisation",
        type: "spell",
      },
      {
        id: "w",
        name: "Coup de tête",
        type: "spell",
      },
      {
        id: "e",
        name: "Piétinement",
        type: "spell",
      },
      {
        id: "r",
        name: "Volonté de fer",
        type: "spell",
      },
    ],
  },
  ambessa: {
    id: "ambessa",
    name: "Ambessa",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "0",
        name: "default",
      },
      {
        id: "1",
        name: "Ambessa de la Chasse éternelle",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ruée des chiens-dragons",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe fourbe",
        type: "spell",
      },
      {
        id: "w",
        name: "Égide dévastatrice",
        type: "spell",
      },
      {
        id: "e",
        name: "Lacération",
        type: "spell",
      },
      {
        id: "r",
        name: "Exécution publique",
        type: "spell",
      },
    ],
  },
  amumu: {
    id: "amumu",
    name: "Amumu",
    classes: ["tank", "support"],
    skins: [
      {
        id: "1",
        name: "Amumu pharaon",
      },
      {
        id: "2",
        name: "Amumu de Vancouver",
      },
      {
        id: "4",
        name: "Amumu remballé",
      },
      {
        id: "6",
        name: "Petit chevalier Amumu",
      },
      {
        id: "17",
        name: "Amumu infernal",
      },
      {
        id: "23",
        name: "Amumu Hextech",
      },
      {
        id: "24",
        name: "Amumu prince des citrouilles",
      },
      {
        id: "34",
        name: "Amumu de porcelaine",
      },
      {
        id: "44",
        name: "Amumu cœur brisé",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Toucher maudit",
        type: "passive",
      },
      {
        id: "q",
        name: "Jet de bandelette",
        type: "spell",
      },
      {
        id: "w",
        name: "Désespoir",
        type: "spell",
      },
      {
        id: "e",
        name: "Colère",
        type: "spell",
      },
      {
        id: "r",
        name: "Malédiction d'Amumu",
        type: "spell",
      },
    ],
  },
  anivia: {
    id: "anivia",
    name: "Anivia",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Anivia Esprit d'équipe",
      },
      {
        id: "5",
        name: "Anivia des glaces noires",
      },
      {
        id: "7",
        name: "Anivia reine du carnaval",
      },
      {
        id: "8",
        name: "Anivia origami",
      },
      {
        id: "17",
        name: "Anivia oiseau cosmique",
      },
      {
        id: "27",
        name: "Anivia phénix divin",
      },
      {
        id: "46",
        name: "Anivia héroïne de guerre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Renaissance",
        type: "passive",
      },
      {
        id: "q",
        name: "Lance de glace",
        type: "spell",
      },
      {
        id: "w",
        name: "Cristallisation",
        type: "spell",
      },
      {
        id: "e",
        name: "Gelure",
        type: "spell",
      },
      {
        id: "r",
        name: "Tempête glaciale",
        type: "spell",
      },
    ],
  },
  annie: {
    id: "annie",
    name: "Annie",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Annie gothique",
      },
      {
        id: "3",
        name: "Annie au pays des merveilles",
      },
      {
        id: "4",
        name: "Annie reine du bal",
      },
      {
        id: "8",
        name: "Annie panda",
      },
      {
        id: "9",
        name: "Annie cœur tendre",
      },
      {
        id: "10",
        name: "Annie Hextech",
      },
      {
        id: "11",
        name: "Super Annie intergalactique",
      },
      {
        id: "12",
        name: "Annie-versaire",
      },
      {
        id: "13",
        name: "Annie bête lunaire",
      },
      {
        id: "22",
        name: "Annie Café Chouchous",
      },
      {
        id: "31",
        name: "Annie Nuit d'effroi",
      },
      {
        id: "40",
        name: "Annie élue de l'hiver",
      },
      {
        id: "50",
        name: "Annie princesse du combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pyromanie",
        type: "passive",
      },
      {
        id: "q",
        name: "Désintégration",
        type: "spell",
      },
      {
        id: "w",
        name: "Incinération",
        type: "spell",
      },
      {
        id: "e",
        name: "Bouclier en fusion",
        type: "spell",
      },
      {
        id: "r",
        name: "Invocation: Tibbers",
        type: "spell",
      },
    ],
  },
  aphelios: {
    id: "aphelios",
    name: "Aphelios",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Aphelios héraut de la nuit",
      },
      {
        id: "9",
        name: "Aphelios bête lunaire",
      },
      {
        id: "20",
        name: "Aphelios fleur spirituelle",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Le Tueur et l'Oracle",
        type: "passive",
      },
      {
        id: "q",
        name: "Compétences d'arme",
        type: "spell",
      },
      {
        id: "w",
        name: "Phase",
        type: "spell",
      },
      {
        id: "e",
        name: "Système de file d'armes",
        type: "spell",
      },
      {
        id: "r",
        name: "Veille au clair de lune",
        type: "spell",
      },
    ],
  },
  ashe: {
    id: "ashe",
    name: "Ashe",
    classes: ["marksman", "support"],
    skins: [
      {
        id: "2",
        name: "Ashe de Sherwood",
      },
      {
        id: "4",
        name: "Reine Ashe",
      },
      {
        id: "6",
        name: "Ashe cœur-de-cible",
      },
      {
        id: "8",
        name: "PROJET : Ashe",
      },
      {
        id: "9",
        name: "Ashe des Worlds2017",
      },
      {
        id: "11",
        name: "Ashe reine cosmique",
      },
      {
        id: "17",
        name: "Ashe de l'Ouest",
      },
      {
        id: "23",
        name: "Ashe dragon féérique",
      },
      {
        id: "32",
        name: "Ashe de l'assemblée",
      },
      {
        id: "52",
        name: "Ashe impératrice lunaire",
      },
      {
        id: "65",
        name: "Ashe Crystalis",
      },
      {
        id: "67",
        name: "Ashe infernale",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tir givrant",
        type: "passive",
      },
      {
        id: "q",
        name: "Concentration du ranger",
        type: "spell",
      },
      {
        id: "w",
        name: "Salve",
        type: "spell",
      },
      {
        id: "e",
        name: "Rapace",
        type: "spell",
      },
      {
        id: "r",
        name: "Flèche de cristal enchantée",
        type: "spell",
      },
    ],
  },
  aurelionsol: {
    id: "aurelionsol",
    name: "Aurelion Sol",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Aurelion Sol seigneur volcanique",
      },
      {
        id: "2",
        name: "Mecha Aurelion Sol",
      },
      {
        id: "11",
        name: "Aurelion Sol dragon des tempêtes",
      },
      {
        id: "21",
        name: "Aurelion Sol esprit d'encre",
      },
      {
        id: "31",
        name: "Aurelion Sol protecteur de porcelaine",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Créateur cosmique",
        type: "passive",
      },
      {
        id: "q",
        name: "Souffle de lumière",
        type: "spell",
      },
      {
        id: "w",
        name: "Vol astral",
        type: "spell",
      },
      {
        id: "e",
        name: "Trou noir",
        type: "spell",
      },
      {
        id: "r",
        name: "Étoile finale",
        type: "spell",
      },
    ],
  },
  aurora: {
    id: "aurora",
    name: "Aurora",
    classes: ["mage", "assassin"],
    skins: [
      {
        id: "1",
        name: "Aurora lapin de combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Abjuration spirituelle",
        type: "passive",
      },
      {
        id: "q",
        name: "Maléfice",
        type: "spell",
      },
      {
        id: "w",
        name: "Derrière le voile",
        type: "spell",
      },
      {
        id: "e",
        name: "Sortilège",
        type: "spell",
      },
      {
        id: "r",
        name: "Entre les mondes",
        type: "spell",
      },
    ],
  },
  azir: {
    id: "azir",
    name: "Azir",
    classes: ["mage", "marksman"],
    skins: [
      {
        id: "1",
        name: "Azir galactique",
      },
      {
        id: "2",
        name: "Azir nécromancien",
      },
      {
        id: "4",
        name: "Azir du royaume en guerre",
      },
      {
        id: "5",
        name: "Azir sylvestre",
      },
      {
        id: "14",
        name: "Azir des Worlds2022",
      },
      {
        id: "19",
        name: "Azir avocat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Héritage de Shurima",
        type: "passive",
      },
      {
        id: "q",
        name: "Sables conquérants",
        type: "spell",
      },
      {
        id: "w",
        name: "Dresse-toi!",
        type: "spell",
      },
      {
        id: "e",
        name: "Sables mouvants",
        type: "spell",
      },
      {
        id: "r",
        name: "Partition impériale",
        type: "spell",
      },
    ],
  },
  bard: {
    id: "bard",
    name: "Bard",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Bard sylvestre",
      },
      {
        id: "6",
        name: "Bard le barde",
      },
      {
        id: "8",
        name: "Bard astronaute",
      },
      {
        id: "17",
        name: "Bard Café Chouchous",
      },
      {
        id: "26",
        name: "Bard des rouleaux de ShanHai",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Instinct du voyageur",
        type: "passive",
      },
      {
        id: "q",
        name: "Lien cosmique",
        type: "spell",
      },
      {
        id: "w",
        name: "Don du gardien",
        type: "spell",
      },
      {
        id: "e",
        name: "Route magique",
        type: "spell",
      },
      {
        id: "r",
        name: "Destin tempéré",
        type: "spell",
      },
    ],
  },
  belveth: {
    id: "belveth",
    name: "Bel'Veth",
    classes: ["fighter"],
    skins: [
      {
        id: "1",
        name: "Bel'Veth boss de combat",
      },
      {
        id: "10",
        name: "Bel'Veth matriarche cosmique",
      },
      {
        id: "19",
        name: "Bel'Veth primordienne",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mer de lavande ",
        type: "passive",
      },
      {
        id: "q",
        name: "Charge du Néant",
        type: "spell",
      },
      {
        id: "w",
        name: "Projection cinglante",
        type: "spell",
      },
      {
        id: "e",
        name: "Maelström impérial",
        type: "spell",
      },
      {
        id: "r",
        name: "Banquet infini",
        type: "spell",
      },
    ],
  },
  blitzcrank: {
    id: "blitzcrank",
    name: "Blitzcrank",
    classes: ["tank", "support"],
    skins: [
      {
        id: "2",
        name: "Blitzcrank gardien de but",
      },
      {
        id: "5",
        name: "Blitzcrank incognito",
      },
      {
        id: "6",
        name: "iBlitzcrank",
      },
      {
        id: "7",
        name: "Blitzcrank anti-émeutes",
      },
      {
        id: "20",
        name: "Blitzcrank Lancier Renégat",
      },
      {
        id: "21",
        name: "Blitzcrank Lancier Parangon",
      },
      {
        id: "22",
        name: "Blitzcrank chaudron magique",
      },
      {
        id: "29",
        name: "Blitz et Crank astro-groove",
      },
      {
        id: "36",
        name: "Blitzcrank héros de guerre",
      },
      {
        id: "47",
        name: "Blitzcrank des Jeux du zénith",
      },
      {
        id: "56",
        name: "Blitzcrank abeille",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Barrière de mana",
        type: "passive",
      },
      {
        id: "q",
        name: "Grappin propulsé",
        type: "spell",
      },
      {
        id: "w",
        name: "Surcharge",
        type: "spell",
      },
      {
        id: "e",
        name: "Poing d'acier",
        type: "spell",
      },
      {
        id: "r",
        name: "Champ de stase",
        type: "spell",
      },
    ],
  },
  brand: {
    id: "brand",
    name: "Brand",
    classes: ["mage", "support"],
    skins: [
      {
        id: "2",
        name: "Brand Vandale",
      },
      {
        id: "4",
        name: "Brand zombie",
      },
      {
        id: "5",
        name: "Brand feu spirituel",
      },
      {
        id: "6",
        name: "Brand boss de combat",
      },
      {
        id: "7",
        name: "Brand aux flammes pures",
      },
      {
        id: "8",
        name: "Brand dragon éternel",
      },
      {
        id: "21",
        name: "Brand séducteur",
      },
      {
        id: "33",
        name: "Brand ville démoniaque",
      },
      {
        id: "42",
        name: "Brand empyréen",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Flammes",
        type: "passive",
      },
      {
        id: "q",
        name: "Brûlure",
        type: "spell",
      },
      {
        id: "w",
        name: "Colonne de flammes",
        type: "spell",
      },
      {
        id: "e",
        name: "Conflagration",
        type: "spell",
      },
      {
        id: "r",
        name: "Pyrolyse",
        type: "spell",
      },
    ],
  },
  braum: {
    id: "braum",
    name: "Braum",
    classes: ["tank", "support"],
    skins: [
      {
        id: "1",
        name: "Braum tueur de dragons",
      },
      {
        id: "2",
        name: "Braum El Tigre",
      },
      {
        id: "10",
        name: "Père Braum",
      },
      {
        id: "11",
        name: "Don Braum",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Coups étourdissants",
        type: "passive",
      },
      {
        id: "q",
        name: "Morsure de l'hiver",
        type: "spell",
      },
      {
        id: "w",
        name: "Bouclier humain",
        type: "spell",
      },
      {
        id: "e",
        name: "Incassable",
        type: "spell",
      },
      {
        id: "r",
        name: "Fissure glaciale",
        type: "spell",
      },
    ],
  },
  briar: {
    id: "briar",
    name: "Briar",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "0",
        name: "default",
      },
      {
        id: "1",
        name: "Briar ville démoniaque",
      },
      {
        id: "10",
        name: "Briar primordienne",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Malédiction écarlate",
        type: "passive",
      },
      {
        id: "q",
        name: "À table!",
        type: "spell",
      },
      {
        id: "w",
        name: "Folie sanguinaire",
        type: "spell",
      },
      {
        id: "e",
        name: "Cri sanglant",
        type: "spell",
      },
      {
        id: "r",
        name: "Vol mortel",
        type: "spell",
      },
    ],
  },
  caitlyn: {
    id: "caitlyn",
    name: "Caitlyn",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Caitlyn résistante",
      },
      {
        id: "2",
        name: "Shérif Caitlyn",
      },
      {
        id: "3",
        name: "Caitlyn safari",
      },
      {
        id: "4",
        name: "Caitlyn arctique",
      },
      {
        id: "5",
        name: "Agent Caitlyn",
      },
      {
        id: "6",
        name: "Caitlyn chasseuse de têtes",
      },
      {
        id: "11",
        name: "Caitlyn Pulsefire",
      },
      {
        id: "19",
        name: "Caitlyn arcade",
      },
      {
        id: "22",
        name: "Caitlyn de l'Académie du combat",
      },
      {
        id: "28",
        name: "Caitlyn d'Arcane",
      },
      {
        id: "29",
        name: "Caitlyn arcade prestige (2022)",
      },
      {
        id: "30",
        name: "Caitlyn lune de neige",
      },
      {
        id: "50",
        name: "Caitlyn commandante d'Arcane",
      },
      {
        id: "51",
        name: "Caitlyn commandante d'Arcane prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tir dans la tête",
        type: "passive",
      },
      {
        id: "q",
        name: "Pacificateur de Piltover",
        type: "spell",
      },
      {
        id: "w",
        name: "Piège-yordle",
        type: "spell",
      },
      {
        id: "e",
        name: "Filet de calibre 90",
        type: "spell",
      },
      {
        id: "r",
        name: "Tir chirurgical",
        type: "spell",
      },
    ],
  },
  camille: {
    id: "camille",
    name: "Camille",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Programme Camille",
      },
      {
        id: "2",
        name: "Camille de l'assemblée",
      },
      {
        id: "10",
        name: "iG Camille",
      },
      {
        id: "11",
        name: "Camille des arcanes",
      },
      {
        id: "21",
        name: "Camille commandante d'assaut",
      },
      {
        id: "31",
        name: "Camille élue de l'hiver",
      },
      {
        id: "32",
        name: "Camille élue de l'hiver prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Protection modulable",
        type: "passive",
      },
      {
        id: "q",
        name: "Protocole de précision",
        type: "spell",
      },
      {
        id: "w",
        name: "Balayage tactique",
        type: "spell",
      },
      {
        id: "e",
        name: "Grappin",
        type: "spell",
      },
      {
        id: "r",
        name: "Ultimatum Hextech",
        type: "spell",
      },
    ],
  },
  cassiopeia: {
    id: "cassiopeia",
    name: "Cassiopeia",
    classes: ["mage"],
    skins: [
      {
        id: "3",
        name: "Cassiopeia mythologique",
      },
      {
        id: "4",
        name: "Cassiopeia crochets de jade",
      },
      {
        id: "8",
        name: "Cassiopeia eternum",
      },
      {
        id: "9",
        name: "Cassiopeia fleur spirituelle",
      },
      {
        id: "18",
        name: "Cassiopeia de l'assemblée",
      },
      {
        id: "28",
        name: "Cassiopeia sorcière",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Grâce serpentine",
        type: "passive",
      },
      {
        id: "q",
        name: "Bombe nocive",
        type: "spell",
      },
      {
        id: "w",
        name: "Miasmes",
        type: "spell",
      },
      {
        id: "e",
        name: "Morsure fatale",
        type: "spell",
      },
      {
        id: "r",
        name: "Regard de la Méduse",
        type: "spell",
      },
    ],
  },
  chogath: {
    id: "chogath",
    name: "Cho'Gath",
    classes: ["tank", "mage"],
    skins: [
      {
        id: "2",
        name: "Cho'Gath gentleman",
      },
      {
        id: "4",
        name: "Cho'Gath jurassique",
      },
      {
        id: "5",
        name: "Proto Cho'Gath Prime",
      },
      {
        id: "7",
        name: "Cho'Gath du pulsar sombre",
      },
      {
        id: "14",
        name: "Cho'Gath des rouleaux de ShanHai",
      },
      {
        id: "23",
        name: "Cho'Gath de l'Alliance brisée",
      },
      {
        id: "32",
        name: "Cho'Gath jouet",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Carnivore",
        type: "passive",
      },
      {
        id: "q",
        name: "Rupture",
        type: "spell",
      },
      {
        id: "w",
        name: "Cri sauvage",
        type: "spell",
      },
      {
        id: "e",
        name: "Piques vorpales",
        type: "spell",
      },
      {
        id: "r",
        name: "Festin",
        type: "spell",
      },
    ],
  },
  corki: {
    id: "corki",
    name: "Corki",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Corki OVNI",
      },
      {
        id: "6",
        name: "Corki ailes du dragon",
      },
      {
        id: "8",
        name: "Corki arcade",
      },
      {
        id: "26",
        name: "Corki astronaute",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Munitions Hextech",
        type: "passive",
      },
      {
        id: "q",
        name: "Bombe au phosphore",
        type: "spell",
      },
      {
        id: "w",
        name: "Valkyrie",
        type: "spell",
      },
      {
        id: "e",
        name: "Gatling",
        type: "spell",
      },
      {
        id: "r",
        name: "Barrage de projectiles",
        type: "spell",
      },
    ],
  },
  darius: {
    id: "darius",
    name: "Darius",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Lord Darius",
      },
      {
        id: "3",
        name: "Darius roi du Nord",
      },
      {
        id: "4",
        name: "Darius roi du dunk",
      },
      {
        id: "14",
        name: "Darius nova d'effroi",
      },
      {
        id: "15",
        name: "Dieu-roi Darius",
      },
      {
        id: "16",
        name: "Darius de l'Ouest",
      },
      {
        id: "24",
        name: "Darius bête lunaire",
      },
      {
        id: "33",
        name: "Darius cauchemar criminel",
      },
      {
        id: "43",
        name: "Darius fleur spirituelle",
      },
      {
        id: "54",
        name: "Darius de porcelaine",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Plaie béante",
        type: "passive",
      },
      {
        id: "q",
        name: "Décimation",
        type: "spell",
      },
      {
        id: "w",
        name: "Estropiaison",
        type: "spell",
      },
      {
        id: "e",
        name: "Crampon",
        type: "spell",
      },
      {
        id: "r",
        name: "Guillotine noxienne",
        type: "spell",
      },
    ],
  },
  diana: {
    id: "diana",
    name: "Diana",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Diana valkyrie sombre",
      },
      {
        id: "2",
        name: "Diana déesse lunaire",
      },
      {
        id: "3",
        name: "Diana infernale",
      },
      {
        id: "11",
        name: "Diana lune de sang",
      },
      {
        id: "12",
        name: "Diana des eaux sombres",
      },
      {
        id: "25",
        name: "Diana reine du combat",
      },
      {
        id: "27",
        name: "Diana Sentinelle",
      },
      {
        id: "37",
        name: "Diana pyrotechnicienne",
      },
      {
        id: "47",
        name: "Diana élue de l'hiver",
      },
      {
        id: "54",
        name: "Diana écailles célestes",
      },
      {
        id: "64",
        name: "Diana démiurge cosmique",
      },
      {
        id: "65",
        name: "Diana démiurge cosmique prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Lame sélène",
        type: "passive",
      },
      {
        id: "q",
        name: "Croissant lunaire",
        type: "spell",
      },
      {
        id: "w",
        name: "Corps célestes",
        type: "spell",
      },
      {
        id: "e",
        name: "Rush lunaire",
        type: "spell",
      },
      {
        id: "r",
        name: "Attraction lunaire",
        type: "spell",
      },
    ],
  },
  draven: {
    id: "draven",
    name: "Draven",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Draven faucheur",
      },
      {
        id: "2",
        name: "Draven gladiateur",
      },
      {
        id: "3",
        name: "Draven prime time",
      },
      {
        id: "12",
        name: "Père Draven",
      },
      {
        id: "13",
        name: "Draven du royaume des mechas",
      },
      {
        id: "20",
        name: "Draven déchu",
      },
      {
        id: "29",
        name: "Draven séducteur",
      },
      {
        id: "39",
        name: "Draven Nuit d'effroi",
      },
      {
        id: "48",
        name: "Draven La Ilusión",
      },
    ],
    spells: [
      {
        id: "p",
        name: "League of Draven",
        type: "passive",
      },
      {
        id: "q",
        name: "Hache tournoyante",
        type: "spell",
      },
      {
        id: "w",
        name: "Pulsion sanguinaire",
        type: "spell",
      },
      {
        id: "e",
        name: "Division",
        type: "spell",
      },
      {
        id: "r",
        name: "Volée mortelle",
        type: "spell",
      },
    ],
  },
  drmundo: {
    id: "drmundo",
    name: "Dr. Mundo",
    alias: "Mundo",
    classes: ["tank", "fighter"],
    skins: [
      {
        id: "1",
        name: "Dr. Mundo toxique",
      },
      {
        id: "2",
        name: "M. Mundoverse",
      },
      {
        id: "3",
        name: "Mundo de la bourse",
      },
      {
        id: "4",
        name: "Mundo Mundo",
      },
      {
        id: "5",
        name: "Mundo bourreau",
      },
      {
        id: "6",
        name: "Mundo enragé",
      },
      {
        id: "10",
        name: "Mundo prince gelé",
      },
      {
        id: "21",
        name: "Dr. Mundo ville démoniaque",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Il va où il veut",
        type: "passive",
      },
      {
        id: "q",
        name: "Scie souillée",
        type: "spell",
      },
      {
        id: "w",
        name: "Défibrillateur",
        type: "spell",
      },
      {
        id: "e",
        name: "Contusion",
        type: "spell",
      },
      {
        id: "r",
        name: "Dosage maximal",
        type: "spell",
      },
    ],
  },
  ekko: {
    id: "ekko",
    name: "Ekko",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "1",
        name: "Ekko du désert",
      },
      {
        id: "3",
        name: "PROJET : Ekko",
      },
      {
        id: "12",
        name: "Ekkorrifiant",
      },
      {
        id: "19",
        name: "True Damage Ekko",
      },
      {
        id: "28",
        name: "Ekko Pulsefire",
      },
      {
        id: "36",
        name: "Ekko Feu volant",
      },
      {
        id: "45",
        name: "Ekko gardien des étoiles",
      },
      {
        id: "46",
        name: "Ekko gardien des étoiles prestige",
      },
      {
        id: "56",
        name: "Breakout True Damage Ekko",
      },
    ],
    spells: [
      {
        id: "p",
        name: "RéZonance",
        type: "passive",
      },
      {
        id: "q",
        name: "Rétrobang",
        type: "spell",
      },
      {
        id: "w",
        name: "Convergence parallèle",
        type: "spell",
      },
      {
        id: "e",
        name: "Rush déphasé",
        type: "spell",
      },
      {
        id: "r",
        name: "Chronofracture",
        type: "spell",
      },
    ],
  },
  elise: {
    id: "elise",
    name: "Elise",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "2",
        name: "Elise héroïne de guerre",
      },
      {
        id: "3",
        name: "Elise lune de sang",
      },
      {
        id: "5",
        name: "Super Elise intergalactique",
      },
      {
        id: "6",
        name: "Elise sorcière",
      },
      {
        id: "15",
        name: "Elise rose fanée",
      },
      {
        id: "24",
        name: "Elise de l'assemblée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Reine araignée",
        type: "passive",
      },
      {
        id: "q",
        name: "Neurotoxine",
        type: "spell",
      },
      {
        id: "w",
        name: "Araignée explosive",
        type: "spell",
      },
      {
        id: "e",
        name: "Cocon",
        type: "spell",
      },
      {
        id: "r",
        name: "Forme arachnéenne",
        type: "spell",
      },
    ],
  },
  evelynn: {
    id: "evelynn",
    name: "Evelynn",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "1",
        name: "Evelynn noire",
      },
      {
        id: "2",
        name: "Evelynn masquée",
      },
      {
        id: "5",
        name: "Evelynn lune de sang",
      },
      {
        id: "6",
        name: "K/DA Evelynn",
      },
      {
        id: "8",
        name: "Evelynn folie sucrée",
      },
      {
        id: "15",
        name: "K/DA ALL OUT Evelynn",
      },
      {
        id: "24",
        name: "Evelynn de l'assemblée",
      },
      {
        id: "32",
        name: "Evelynn fleur spirituelle",
      },
      {
        id: "42",
        name: "Evelynn combattante spirituelle",
      },
      {
        id: "52",
        name: "Evelynn de l'Ouest",
      },
      {
        id: "53",
        name: "Evelynn de l'Ouest prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ombre démoniaque",
        type: "passive",
      },
      {
        id: "q",
        name: "Piques de haine",
        type: "spell",
      },
      {
        id: "w",
        name: "Séduction",
        type: "spell",
      },
      {
        id: "e",
        name: "Coup de fouet",
        type: "spell",
      },
      {
        id: "r",
        name: "Faiseuse de veuves",
        type: "spell",
      },
    ],
  },
  ezreal: {
    id: "ezreal",
    name: "Ezreal",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Ezreal de Nottingham",
      },
      {
        id: "2",
        name: "Ezreal buteur",
      },
      {
        id: "3",
        name: "Ezreal de glace",
      },
      {
        id: "4",
        name: "Ezreal spéléologue",
      },
      {
        id: "5",
        name: "Ezreal Pulsefire",
      },
      {
        id: "7",
        name: "Ezreal séducteur",
      },
      {
        id: "9",
        name: "Ezreal arcade",
      },
      {
        id: "18",
        name: "Ezreal gardien des étoiles",
      },
      {
        id: "21",
        name: "Ezreal de l'Académie du combat",
      },
      {
        id: "22",
        name: "Ezreal psychoguerrier",
      },
      {
        id: "25",
        name: "Ezreal protecteur de porcelaine",
      },
      {
        id: "33",
        name: "Ezreal de la cour féérique",
      },
      {
        id: "44",
        name: "Ezreal écailles célestes",
      },
      {
        id: "54",
        name: "Ezreal écailles célestes prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Force grandissante",
        type: "passive",
      },
      {
        id: "q",
        name: "Tir mystique",
        type: "spell",
      },
      {
        id: "w",
        name: "Flux essentiel",
        type: "spell",
      },
      {
        id: "e",
        name: "Transfert arcanique",
        type: "spell",
      },
      {
        id: "r",
        name: "Arc térébrant",
        type: "spell",
      },
    ],
  },
  fiddlesticks: {
    id: "fiddlesticks",
    name: "Fiddlesticks",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Fiddlesticks spectral",
      },
      {
        id: "2",
        name: "Fiddlesticks Union Jack",
      },
      {
        id: "3",
        name: "Fiddlesticks le bandito",
      },
      {
        id: "4",
        name: "Fiddlesticks citrouille",
      },
      {
        id: "5",
        name: "Fiddlesticks pirate",
      },
      {
        id: "6",
        name: "Fiddlesticks clown maléfique",
      },
      {
        id: "7",
        name: "Fiddlesticks horreur sucrée",
      },
      {
        id: "8",
        name: "Fiddlesticks réanimé",
      },
      {
        id: "9",
        name: "Fiddlesticks prétorien",
      },
      {
        id: "27",
        name: "Fiddlesticks cauchemar des étoiles",
      },
      {
        id: "37",
        name: "Fiddlesticks lune de sang",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Épouvantable épouvantail",
        type: "passive",
      },
      {
        id: "q",
        name: "Terreur",
        type: "spell",
      },
      {
        id: "w",
        name: "Moisson fructueuse",
        type: "spell",
      },
      {
        id: "e",
        name: "Fauchaison",
        type: "spell",
      },
      {
        id: "r",
        name: "Rafale de corbeaux",
        type: "spell",
      },
    ],
  },
  fiora: {
    id: "fiora",
    name: "Fiora",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Fiora garde royal",
      },
      {
        id: "2",
        name: "Fiora oiseau nocturne",
      },
      {
        id: "3",
        name: "Proviseur Fiora",
      },
      {
        id: "4",
        name: "PROJET : Fiora",
      },
      {
        id: "22",
        name: "Fiora à l'épée ascendante",
      },
      {
        id: "23",
        name: "Fiora percecœur",
      },
      {
        id: "31",
        name: "iG Fiora",
      },
      {
        id: "41",
        name: "Fiora Pulsefire",
      },
      {
        id: "50",
        name: "Fiora bête lunaire",
      },
      {
        id: "69",
        name: "Fiora de la cour féérique",
      },
      {
        id: "80",
        name: "Fiora dracomancienne",
      },
      {
        id: "89",
        name: "Fiora reine du combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Danse de la duelliste",
        type: "passive",
      },
      {
        id: "q",
        name: "Fente",
        type: "spell",
      },
      {
        id: "w",
        name: "Riposte",
        type: "spell",
      },
      {
        id: "e",
        name: "Botte secrète",
        type: "spell",
      },
      {
        id: "r",
        name: "Défi suprême",
        type: "spell",
      },
    ],
  },
  fizz: {
    id: "fizz",
    name: "Fizz",
    classes: ["assassin", "fighter"],
    skins: [
      {
        id: "2",
        name: "Fizz de la toundra",
      },
      {
        id: "4",
        name: "Fizz du Néant",
      },
      {
        id: "8",
        name: "Fizz lapin",
      },
      {
        id: "9",
        name: "Super Fizz intergalactique",
      },
      {
        id: "10",
        name: "Fizz de la section Oméga",
      },
      {
        id: "16",
        name: "Fizz diablotin",
      },
      {
        id: "35",
        name: "Fizz berger de la pluie",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Combattant agile",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe de l'oursin",
        type: "spell",
      },
      {
        id: "w",
        name: "Trident marin",
        type: "spell",
      },
      {
        id: "e",
        name: "Joueur",
        type: "spell",
      },
      {
        id: "r",
        name: "Pêche au gros",
        type: "spell",
      },
    ],
  },
  galio: {
    id: "galio",
    name: "Galio",
    classes: ["tank", "mage"],
    skins: [
      {
        id: "1",
        name: "Galio l'enchanteur",
      },
      {
        id: "2",
        name: "Galio Hextech",
      },
      {
        id: "3",
        name: "Galio commando",
      },
      {
        id: "4",
        name: "Galio cerbère",
      },
      {
        id: "5",
        name: "Galio séducteur",
      },
      {
        id: "6",
        name: "Poulio",
      },
      {
        id: "28",
        name: "Galio mythificateur",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Frappe colossale",
        type: "passive",
      },
      {
        id: "q",
        name: "Vents de guerre",
        type: "spell",
      },
      {
        id: "w",
        name: "Bouclier de Durand",
        type: "spell",
      },
      {
        id: "e",
        name: "Horion de la justice",
        type: "spell",
      },
      {
        id: "r",
        name: "Entrée héroïque",
        type: "spell",
      },
    ],
  },
  gangplank: {
    id: "gangplank",
    name: "Gangplank",
    classes: ["fighter"],
    skins: [
      {
        id: "1",
        name: "Gangplank lugubre",
      },
      {
        id: "4",
        name: "Petit soldat Gangplank",
      },
      {
        id: "5",
        name: "Gangplank des forces spéciales",
      },
      {
        id: "6",
        name: "Gangplank sultan",
      },
      {
        id: "7",
        name: "Capitaine Gangplank",
      },
      {
        id: "8",
        name: "Gangplank nova d'effroi",
      },
      {
        id: "23",
        name: "Gangplank le Traître",
      },
      {
        id: "33",
        name: "PROJET: Gangplank",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Épreuve du feu",
        type: "passive",
      },
      {
        id: "q",
        name: "Pourparlers",
        type: "spell",
      },
      {
        id: "w",
        name: "Guérison du scorbut",
        type: "spell",
      },
      {
        id: "e",
        name: "Baril de poudre",
        type: "spell",
      },
      {
        id: "r",
        name: "Tir de barrage",
        type: "spell",
      },
    ],
  },
  garen: {
    id: "garen",
    name: "Garen",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "3",
        name: "Garen commando",
      },
      {
        id: "4",
        name: "Garen chevalier d'effroi",
      },
      {
        id: "5",
        name: "Garen vagabond",
      },
      {
        id: "6",
        name: "Garen de la Légion d'acier",
      },
      {
        id: "11",
        name: "Garen du royaume en guerre",
      },
      {
        id: "13",
        name: "Dieu-roi Garen",
      },
      {
        id: "14",
        name: "Garen Demacia Vice",
      },
      {
        id: "22",
        name: "Garen du royaume des mechas",
      },
      {
        id: "33",
        name: "Garen mythificateur",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Persévérance",
        type: "passive",
      },
      {
        id: "q",
        name: "Coup décisif",
        type: "spell",
      },
      {
        id: "w",
        name: "Courage",
        type: "spell",
      },
      {
        id: "e",
        name: "Jugement",
        type: "spell",
      },
      {
        id: "r",
        name: "Justice de Demacia",
        type: "spell",
      },
    ],
  },
  gnar: {
    id: "gnar",
    name: "Gnar",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Dino Gnar",
      },
      {
        id: "2",
        name: "Gnar gentleman",
      },
      {
        id: "13",
        name: "Super Gnar intergalactique",
      },
      {
        id: "22",
        name: "Gnar sylvestre",
      },
      {
        id: "31",
        name: "Gnar La Ilusión",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Rage génique",
        type: "passive",
      },
      {
        id: "q",
        name: "Jet de boomerang",
        type: "spell",
      },
      {
        id: "w",
        name: "Agitation",
        type: "spell",
      },
      {
        id: "e",
        name: "Rebond",
        type: "spell",
      },
      {
        id: "r",
        name: "GNAR!",
        type: "spell",
      },
    ],
  },
  gragas: {
    id: "gragas",
    name: "Gragas",
    classes: ["fighter", "mage"],
    skins: [
      {
        id: "2",
        name: "Gragas péon",
      },
      {
        id: "5",
        name: "Gragas Vandale",
      },
      {
        id: "6",
        name: "Gragas Oktoberfest",
      },
      {
        id: "10",
        name: "Gragas arctique",
      },
      {
        id: "11",
        name: "Gragas purificateur",
      },
      {
        id: "20",
        name: "Gragas astro-groove",
      },
      {
        id: "29",
        name: "Gragas de l'Ouest",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tournée",
        type: "passive",
      },
      {
        id: "q",
        name: "Fût roulant",
        type: "spell",
      },
      {
        id: "w",
        name: "Rage d'ivrogne",
        type: "spell",
      },
      {
        id: "e",
        name: "Coup de bidon",
        type: "spell",
      },
      {
        id: "r",
        name: "Fût explosif",
        type: "spell",
      },
    ],
  },
  graves: {
    id: "graves",
    name: "Graves",
    classes: ["marksman"],
    skins: [
      {
        id: "3",
        name: "Don Graves",
      },
      {
        id: "5",
        name: "Graves pistolet à eau",
      },
      {
        id: "7",
        name: "Graves des neiges",
      },
      {
        id: "14",
        name: "Graves héros de guerre",
      },
      {
        id: "18",
        name: "Graves prétorien",
      },
      {
        id: "25",
        name: "Professeur Graves de l'Académie",
      },
      {
        id: "35",
        name: "Graves Sentinelle",
      },
      {
        id: "45",
        name: "Graves de porcelaine",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Nouvelle destinée",
        type: "passive",
      },
      {
        id: "q",
        name: "Terminus",
        type: "spell",
      },
      {
        id: "w",
        name: "Écran de fumée",
        type: "spell",
      },
      {
        id: "e",
        name: "Ruée vers l'or",
        type: "spell",
      },
      {
        id: "r",
        name: "Dégâts collatéraux",
        type: "spell",
      },
    ],
  },
  gwen: {
    id: "gwen",
    name: "Gwen",
    classes: ["fighter"],
    skins: [
      {
        id: "1",
        name: "Gwen astro-groove",
      },
      {
        id: "11",
        name: "Gwen Café Chouchous",
      },
      {
        id: "20",
        name: "Gwen combattante spirituelle",
      },
      {
        id: "30",
        name: "Gwen reine du combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mille coupures",
        type: "passive",
      },
      {
        id: "q",
        name: "Tchac, tchac!",
        type: "spell",
      },
      {
        id: "w",
        name: "Brume sacrée",
        type: "spell",
      },
      {
        id: "e",
        name: "Élan incisif",
        type: "spell",
      },
      {
        id: "r",
        name: "Piqûre",
        type: "spell",
      },
    ],
  },
  hecarim: {
    id: "hecarim",
    name: "Hecarim",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Hecarim chevalier de sang",
      },
      {
        id: "2",
        name: "Hecarim faucheur",
      },
      {
        id: "3",
        name: "Hecarim sans tête",
      },
      {
        id: "4",
        name: "Hecarim arcade",
      },
      {
        id: "5",
        name: "Hecarim sylvestre",
      },
      {
        id: "7",
        name: "Hecarim Lancier Zéro",
      },
      {
        id: "8",
        name: "Hecarim de l'Ouest",
      },
      {
        id: "14",
        name: "Hecarim cavalier cosmique",
      },
      {
        id: "22",
        name: "Hecarim des arcanes",
      },
      {
        id: "31",
        name: "Hecarim élu de l'hiver",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Galop",
        type: "passive",
      },
      {
        id: "q",
        name: "Carnage",
        type: "spell",
      },
      {
        id: "w",
        name: "Essence de la peur",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge dévastatrice",
        type: "spell",
      },
      {
        id: "r",
        name: "Légion des ombres",
        type: "spell",
      },
    ],
  },
  heimerdinger: {
    id: "heimerdinger",
    name: "Heimerdinger",
    classes: ["mage", "support"],
    skins: [
      {
        id: "3",
        name: "Heimerdinger Jackys Piltover",
      },
      {
        id: "5",
        name: "Heimerdinger Hazmat",
      },
      {
        id: "6",
        name: "Heimerdinger dragonnier",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Affinité Hextech",
        type: "passive",
      },
      {
        id: "q",
        name: "Tourelle H-28G Évolution",
        type: "spell",
      },
      {
        id: "w",
        name: "Micro-roquettes Hextech",
        type: "spell",
      },
      {
        id: "e",
        name: "Grenade électro-tempête CH-2",
        type: "spell",
      },
      {
        id: "r",
        name: "AMÉLIORATION!",
        type: "spell",
      },
    ],
  },
  hwei: {
    id: "hwei",
    name: "Hwei",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Hwei élu de l'hiver",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Signature du Visionnaire",
        type: "passive",
      },
      {
        id: "q",
        name: "Sujet: Désastres",
        type: "spell",
      },
      {
        id: "w",
        name: "Sujet: Sérénités",
        type: "spell",
      },
      {
        id: "e",
        name: "Sujet: Tourments",
        type: "spell",
      },
      {
        id: "r",
        name: "Vision de désespoir",
        type: "spell",
      },
    ],
  },
  illaoi: {
    id: "illaoi",
    name: "Illaoi",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Illaoi messagère du Néant",
      },
      {
        id: "2",
        name: "Illaoi résistante",
      },
      {
        id: "10",
        name: "Illaoi invocatrice cosmique",
      },
      {
        id: "18",
        name: "Illaoi lune de neige",
      },
      {
        id: "27",
        name: "Illaoi ours de combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Prophétesse d'un dieu ancestral",
        type: "passive",
      },
      {
        id: "q",
        name: "Coup de tentacule",
        type: "spell",
      },
      {
        id: "w",
        name: "Âpre leçon",
        type: "spell",
      },
      {
        id: "e",
        name: "Épreuve de l'esprit",
        type: "spell",
      },
      {
        id: "r",
        name: "Acte de foi",
        type: "spell",
      },
    ],
  },
  irelia: {
    id: "irelia",
    name: "Irelia",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Irelia assassin",
      },
      {
        id: "2",
        name: "Irelia aviatrice",
      },
      {
        id: "3",
        name: "Cyber Irelia",
      },
      {
        id: "4",
        name: "Irelia lame de glace",
      },
      {
        id: "5",
        name: "Irelia de l'Ordre du lotus",
      },
      {
        id: "6",
        name: "Irelia à l'épée divine",
      },
      {
        id: "15",
        name: "iG Irelia",
      },
      {
        id: "16",
        name: "PROJET: Irelia",
      },
      {
        id: "18",
        name: "Irelia de l'Ouest",
      },
      {
        id: "26",
        name: "Irelia Sentinelle",
      },
      {
        id: "37",
        name: "Irelia mythificatrice",
      },
      {
        id: "45",
        name: "Irelia de porcelaine",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ferveur ionienne",
        type: "passive",
      },
      {
        id: "q",
        name: "Rush fatal",
        type: "spell",
      },
      {
        id: "w",
        name: "Danse de défi",
        type: "spell",
      },
      {
        id: "e",
        name: "Duo parfait",
        type: "spell",
      },
      {
        id: "r",
        name: "Pointe de l'avant-garde",
        type: "spell",
      },
    ],
  },
  ivern: {
    id: "ivern",
    name: "Ivern",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Ivern roi des bonbons",
      },
      {
        id: "2",
        name: "Ivern roi du dunk",
      },
      {
        id: "11",
        name: "Ivern dieu ancien",
      },
      {
        id: "20",
        name: "Ivern astronaute",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ami de la forêt",
        type: "passive",
      },
      {
        id: "q",
        name: "Enracinement",
        type: "spell",
      },
      {
        id: "w",
        name: "Main verte",
        type: "spell",
      },
      {
        id: "e",
        name: "Graine à retardement",
        type: "spell",
      },
      {
        id: "r",
        name: "Marguerite !",
        type: "spell",
      },
    ],
  },
  janna: {
    id: "janna",
    name: "Janna",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Janna des tempêtes",
      },
      {
        id: "4",
        name: "Janna héroïne de guerre",
      },
      {
        id: "5",
        name: "Janna miss météo",
      },
      {
        id: "7",
        name: "Janna gardienne des étoiles",
      },
      {
        id: "8",
        name: "Janna à l'épée sacrée",
      },
      {
        id: "13",
        name: "Janna sorcière",
      },
      {
        id: "27",
        name: "Janna reine du combat",
      },
      {
        id: "36",
        name: "Janna rose de cristal",
      },
      {
        id: "45",
        name: "Janna cyber halo",
      },
      {
        id: "46",
        name: "Janna cyber halo prestige",
      },
      {
        id: "56",
        name: "Janna écailles célestes",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Zéphyr",
        type: "passive",
      },
      {
        id: "q",
        name: "Vent hurlant",
        type: "spell",
      },
      {
        id: "w",
        name: "Alizé",
        type: "spell",
      },
      {
        id: "e",
        name: "Œil du cyclone",
        type: "spell",
      },
      {
        id: "r",
        name: "Mousson",
        type: "spell",
      },
    ],
  },
  jarvaniv: {
    id: "jarvaniv",
    name: "Jarvan IV",
    alias: "Jarvan",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "5",
        name: "Jarvan IV du royaume en guerre",
      },
      {
        id: "7",
        name: "Jarvan IV du pulsar sombre",
      },
      {
        id: "9",
        name: "Jarvan IV Hextech",
      },
      {
        id: "21",
        name: "Jarvan IV bête lunaire",
      },
      {
        id: "30",
        name: "JarvanIV des Worlds2021",
      },
      {
        id: "35",
        name: "JarvanIV héraut de la nuit",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Cadence martiale",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe du dragon",
        type: "spell",
      },
      {
        id: "w",
        name: "Égide dorée",
        type: "spell",
      },
      {
        id: "e",
        name: "Étendard demacien",
        type: "spell",
      },
      {
        id: "r",
        name: "Cataclysme",
        type: "spell",
      },
    ],
  },
  jax: {
    id: "jax",
    name: "Jax",
    classes: ["fighter"],
    skins: [
      {
        id: "1",
        name: "Le Grand Jax",
      },
      {
        id: "2",
        name: "Jax le vandale",
      },
      {
        id: "3",
        name: "Jax le pêcheur",
      },
      {
        id: "4",
        name: "Jax PAX",
      },
      {
        id: "5",
        name: "Jaximus",
      },
      {
        id: "6",
        name: "Jax Shaolin",
      },
      {
        id: "7",
        name: "Jax Némésis",
      },
      {
        id: "13",
        name: "Jax au bâton divin",
      },
      {
        id: "14",
        name: "Jax du royaume des mechas",
      },
      {
        id: "20",
        name: "Jax conquérant",
      },
      {
        id: "21",
        name: "Jax conquérant prestige",
      },
      {
        id: "22",
        name: "Jax empyréen",
      },
      {
        id: "32",
        name: "Néo Jax PAX",
      },
      {
        id: "33",
        name: "PROJET: Jax",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Acharnement",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe bondissante",
        type: "spell",
      },
      {
        id: "w",
        name: "Élargissement",
        type: "spell",
      },
      {
        id: "e",
        name: "Contre-attaque",
        type: "spell",
      },
      {
        id: "r",
        name: "Maître d'armes",
        type: "spell",
      },
    ],
  },
  jayce: {
    id: "jayce",
    name: "Jayce",
    classes: ["marksman", "fighter"],
    skins: [
      {
        id: "1",
        name: "Full Metal Jayce",
      },
      {
        id: "2",
        name: "Jayce séducteur",
      },
      {
        id: "3",
        name: "Jayce déchu",
      },
      {
        id: "4",
        name: "Jayce marteau radieux",
      },
      {
        id: "5",
        name: "Jayce de l'Académie du combat",
      },
      {
        id: "15",
        name: "Jayce résistant",
      },
      {
        id: "24",
        name: "Jayce d'Arcane",
      },
      {
        id: "25",
        name: "Jayce des Jeux du zénith",
      },
      {
        id: "35",
        name: "Jayce d'Arcane survivant",
      },
      {
        id: "36",
        name: "T1 Jayce prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Capaciteur Hextech",
        type: "passive",
      },
      {
        id: "q",
        name: "Direction le ciel!",
        type: "spell",
      },
      {
        id: "w",
        name: "Champ électrique",
        type: "spell",
      },
      {
        id: "e",
        name: "Coup foudroyant",
        type: "spell",
      },
      {
        id: "r",
        name: "Canon Mercury",
        type: "spell",
      },
    ],
  },
  jhin: {
    id: "jhin",
    name: "Jhin",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Jhin de l'Ouest",
      },
      {
        id: "2",
        name: "Jhin lune de sang",
      },
      {
        id: "4",
        name: "PROJET : Jhin",
      },
      {
        id: "5",
        name: "Jhin démiurge cosmique",
      },
      {
        id: "14",
        name: "Jhin des rouleaux de ShanHai",
      },
      {
        id: "25",
        name: "Jhin empyréen",
      },
      {
        id: "36",
        name: "Jhin combattant spirituel",
      },
      {
        id: "37",
        name: "Jhin démiurge sidéral",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Murmure",
        type: "passive",
      },
      {
        id: "q",
        name: "Grenade dansante",
        type: "spell",
      },
      {
        id: "w",
        name: "Floraison mortelle",
        type: "spell",
      },
      {
        id: "e",
        name: "Public captif",
        type: "spell",
      },
      {
        id: "r",
        name: "Rappel de rideau",
        type: "spell",
      },
    ],
  },
  jinx: {
    id: "jinx",
    name: "Jinx",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Donna Jinx",
      },
      {
        id: "2",
        name: "Jinx pyrotechnicienne",
      },
      {
        id: "4",
        name: "Jinx gardienne des étoiles",
      },
      {
        id: "12",
        name: "Jinx l'elfe arriviste",
      },
      {
        id: "13",
        name: "Jinx de l'Odyssée",
      },
      {
        id: "20",
        name: "PROJET: Jinx",
      },
      {
        id: "37",
        name: "Jinx d'Arcane",
      },
      {
        id: "38",
        name: "Jinx chat de combat",
      },
      {
        id: "51",
        name: "Jinx Café Chouchous",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Enthousiasme!",
        type: "passive",
      },
      {
        id: "q",
        name: "Flip flap !",
        type: "spell",
      },
      {
        id: "w",
        name: "Zap !",
        type: "spell",
      },
      {
        id: "e",
        name: "Pyromâcheurs!",
        type: "spell",
      },
      {
        id: "r",
        name: "Super roquette de la mort !",
        type: "spell",
      },
    ],
  },
  kaisa: {
    id: "kaisa",
    name: "Kai'Sa",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Kai'Sa ange exterminateur",
      },
      {
        id: "14",
        name: "K/DA Kai'Sa",
      },
      {
        id: "16",
        name: "iG Kai'Sa",
      },
      {
        id: "17",
        name: "Kai'Sa arcade",
      },
      {
        id: "26",
        name: "K/DA ALL OUT Kai'Sa",
      },
      {
        id: "29",
        name: "Kai'Sa dragon du lagon",
      },
      {
        id: "40",
        name: "Kai'Sa gardienne des étoiles",
      },
      {
        id: "48",
        name: "Kai'Sa guerrière d'encre",
      },
      {
        id: "59",
        name: "Kai'Sa écailles célestes",
      },
      {
        id: "69",
        name: "Kai'Sa du pulsar sombre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Seconde peau",
        type: "passive",
      },
      {
        id: "q",
        name: "Pluie d'Icathia",
        type: "spell",
      },
      {
        id: "w",
        name: "Rayon du Néant",
        type: "spell",
      },
      {
        id: "e",
        name: "Surpresseur",
        type: "spell",
      },
      {
        id: "r",
        name: "Instinct meurtrier",
        type: "spell",
      },
    ],
  },
  kalista: {
    id: "kalista",
    name: "Kalista",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Kalista lune de sang",
      },
      {
        id: "2",
        name: "Kalista des Worlds2015",
      },
      {
        id: "5",
        name: "Kalista maraudeuse",
      },
      {
        id: "14",
        name: "Kalista de la cour féérique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Maintien martial",
        type: "passive",
      },
      {
        id: "q",
        name: "Perforation",
        type: "spell",
      },
      {
        id: "w",
        name: "Sentinelle",
        type: "spell",
      },
      {
        id: "e",
        name: "Extirpation",
        type: "spell",
      },
      {
        id: "r",
        name: "Appel du destin",
        type: "spell",
      },
    ],
  },
  karma: {
    id: "karma",
    name: "Karma",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Karma déesse du soleil",
      },
      {
        id: "2",
        name: "Karma sakura",
      },
      {
        id: "3",
        name: "Karma classique",
      },
      {
        id: "4",
        name: "Karma de l'Ordre du lotus",
      },
      {
        id: "6",
        name: "Karma merveille hivernale",
      },
      {
        id: "7",
        name: "Karma conquérante",
      },
      {
        id: "8",
        name: "Karma du pulsar sombre",
      },
      {
        id: "19",
        name: "Karma héraut de l'aube",
      },
      {
        id: "26",
        name: "Karma de l'Odyssée",
      },
      {
        id: "27",
        name: "Karma déchue",
      },
      {
        id: "44",
        name: "Karma dragon de la tranquillité",
      },
      {
        id: "54",
        name: "Karma reine des fæs",
      },
      {
        id: "61",
        name: "Karma infernale",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Concentration ardente",
        type: "passive",
      },
      {
        id: "q",
        name: "Flamme intérieure",
        type: "spell",
      },
      {
        id: "w",
        name: "Volonté concentrée",
        type: "spell",
      },
      {
        id: "e",
        name: "Exaltation",
        type: "spell",
      },
      {
        id: "r",
        name: "Mantra",
        type: "spell",
      },
    ],
  },
  karthus: {
    id: "karthus",
    name: "Karthus",
    classes: ["mage"],
    skins: [
      {
        id: "9",
        name: "Karthus fléau de la lumière",
      },
      {
        id: "26",
        name: "Karthus sylvestre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Déni de mort",
        type: "passive",
      },
      {
        id: "q",
        name: "Dévastation",
        type: "spell",
      },
      {
        id: "w",
        name: "Mur de douleur",
        type: "spell",
      },
      {
        id: "e",
        name: "Souillure",
        type: "spell",
      },
      {
        id: "r",
        name: "Requiem",
        type: "spell",
      },
    ],
  },
  kassadin: {
    id: "kassadin",
    name: "Kassadin",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "1",
        name: "Kassadin du Festival",
      },
      {
        id: "3",
        name: "Kassadin humain",
      },
      {
        id: "5",
        name: "Kassadin faucheur cosmique",
      },
      {
        id: "6",
        name: "Comte Kassadin",
      },
      {
        id: "14",
        name: "Kassadin Hextech",
      },
      {
        id: "15",
        name: "Kassadin électrolame",
      },
      {
        id: "24",
        name: "Kassadin dracomancien",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pierre du Néant",
        type: "passive",
      },
      {
        id: "q",
        name: "Orbe du Néant",
        type: "spell",
      },
      {
        id: "w",
        name: "Lame éthérée",
        type: "spell",
      },
      {
        id: "e",
        name: "Pulsation",
        type: "spell",
      },
      {
        id: "r",
        name: "Fissure",
        type: "spell",
      },
    ],
  },
  katarina: {
    id: "katarina",
    name: "Katarina",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "4",
        name: "Katarina mistigri",
      },
      {
        id: "5",
        name: "Katarina du Haut commandement",
      },
      {
        id: "7",
        name: "Katarina sucre d'orge",
      },
      {
        id: "8",
        name: "Katarina du royaume en guerre",
      },
      {
        id: "9",
        name: "PROJET : Katarina",
      },
      {
        id: "12",
        name: "Katarina de l'Académie du combat",
      },
      {
        id: "21",
        name: "Katarina lune de sang",
      },
      {
        id: "29",
        name: "Katarina reine du combat",
      },
      {
        id: "37",
        name: "Katarina de l'Ouest",
      },
      {
        id: "47",
        name: "Katarina de la cour féérique",
      },
      {
        id: "48",
        name: "Katarina de la cour féérique prestige",
      },
      {
        id: "59",
        name: "Katarina de la Chasse éternelle",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Voracité",
        type: "passive",
      },
      {
        id: "q",
        name: "Lame rebondissante",
        type: "spell",
      },
      {
        id: "w",
        name: "Préparation",
        type: "spell",
      },
      {
        id: "e",
        name: "Shunpo",
        type: "spell",
      },
      {
        id: "r",
        name: "Lotus mortel",
        type: "spell",
      },
    ],
  },
  kayle: {
    id: "kayle",
    name: "Kayle",
    classes: ["mage", "marksman"],
    skins: [
      {
        id: "1",
        name: "Kayle d'argent",
      },
      {
        id: "2",
        name: "Kayle viridienne",
      },
      {
        id: "3",
        name: "Kayle transcendée",
      },
      {
        id: "5",
        name: "Kayle jugement",
      },
      {
        id: "6",
        name: "Kayle aux ailes éthérées",
      },
      {
        id: "7",
        name: "Kayle anti-émeutes",
      },
      {
        id: "9",
        name: "Kayle Pentakill",
      },
      {
        id: "15",
        name: "Kayle psychoguerrière",
      },
      {
        id: "57",
        name: "Kayle du Voyage immortel",
      },
      {
        id: "66",
        name: "Kayle empyréenne",
      },
      {
        id: "67",
        name: "Kayle empyréenne prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ascension divine",
        type: "passive",
      },
      {
        id: "q",
        name: "Incandescence",
        type: "spell",
      },
      {
        id: "w",
        name: "Bénédiction céleste",
        type: "spell",
      },
      {
        id: "e",
        name: "Lame de feu stellaire",
        type: "spell",
      },
      {
        id: "r",
        name: "Jugement divin",
        type: "spell",
      },
    ],
  },
  kayn: {
    id: "kayn",
    name: "Kayn",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Kayn chasseur d'âmes",
      },
      {
        id: "2",
        name: "Kayn de l'Odyssée",
      },
      {
        id: "8",
        name: "Kayn héraut de la nuit",
      },
      {
        id: "15",
        name: "Kayn lune de neige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Faux des Darkin",
        type: "passive",
      },
      {
        id: "q",
        name: "Moisson cruelle",
        type: "spell",
      },
      {
        id: "w",
        name: "Entaille sombre",
        type: "spell",
      },
      {
        id: "e",
        name: "Passe-muraille",
        type: "spell",
      },
      {
        id: "r",
        name: "Intrusion obscure",
        type: "spell",
      },
    ],
  },
  kennen: {
    id: "kennen",
    name: "Kennen",
    classes: ["mage"],
    skins: [
      {
        id: "2",
        name: "Kennen des marais",
      },
      {
        id: "4",
        name: "Docteur Kennen",
      },
      {
        id: "6",
        name: "Kennen lune de sang",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Marque de tempête",
        type: "passive",
      },
      {
        id: "q",
        name: "Shuriken foudroyant",
        type: "spell",
      },
      {
        id: "w",
        name: "Surtension",
        type: "spell",
      },
      {
        id: "e",
        name: "Rush foudroyant",
        type: "spell",
      },
      {
        id: "r",
        name: "Maelström",
        type: "spell",
      },
    ],
  },
  khazix: {
    id: "khazix",
    name: "Kha'Zix",
    classes: ["assassin"],
    skins: [
      {
        id: "1",
        name: "Mecha Kha'Zix",
      },
      {
        id: "3",
        name: "Kha'Zix du lotus mortel",
      },
      {
        id: "4",
        name: "Kha'Zix du pulsar sombre",
      },
      {
        id: "11",
        name: "Kha'Zix des Worlds2018",
      },
      {
        id: "60",
        name: "Kha'Zix de l'Odyssée",
      },
      {
        id: "69",
        name: "Kha'Zix gardien lunaire",
      },
      {
        id: "79",
        name: "Kha'Zix Crystalis Indomitus",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Menace invisible",
        type: "passive",
      },
      {
        id: "q",
        name: "Goût de la peur",
        type: "spell",
      },
      {
        id: "w",
        name: "Pique du Néant",
        type: "spell",
      },
      {
        id: "e",
        name: "Bond",
        type: "spell",
      },
      {
        id: "r",
        name: "Assaut du Néant",
        type: "spell",
      },
    ],
  },
  kindred: {
    id: "kindred",
    name: "Kindred",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Kindred feu des ombres",
      },
      {
        id: "2",
        name: "Super Kindred intergalactique",
      },
      {
        id: "3",
        name: "Kindred fleur spirituelle",
      },
      {
        id: "12",
        name: "Kindred de porcelaine",
      },
      {
        id: "33",
        name: "Kindred de porcelaine prestige",
      },
      {
        id: "34",
        name: "Kindred de la Chasse éternelle",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Marque de Kindred",
        type: "passive",
      },
      {
        id: "q",
        name: "Danse des flèches",
        type: "spell",
      },
      {
        id: "w",
        name: "Frénésie de Loup",
        type: "spell",
      },
      {
        id: "e",
        name: "Terreur mortelle",
        type: "spell",
      },
      {
        id: "r",
        name: "Repos d'Agneau",
        type: "spell",
      },
    ],
  },
  kled: {
    id: "kled",
    name: "Kled",
    classes: ["fighter"],
    skins: [
      {
        id: "1",
        name: "Sir Kled",
      },
      {
        id: "2",
        name: "Comte Kledula",
      },
      {
        id: "9",
        name: "Kled maraudeur",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Skaarl, le Lézard froussard",
        type: "passive",
      },
      {
        id: "q",
        name: "Piège à ours en laisse",
        type: "spell",
      },
      {
        id: "w",
        name: "Penchant pour la violence",
        type: "spell",
      },
      {
        id: "e",
        name: "Joute",
        type: "spell",
      },
      {
        id: "r",
        name: "Chaaaaaaaargez!!!",
        type: "spell",
      },
    ],
  },
  kogmaw: {
    id: "kogmaw",
    name: "Kog'Maw",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "3",
        name: "Kog'Maw monarque",
      },
      {
        id: "4",
        name: "Kog'Maw le renne",
      },
      {
        id: "5",
        name: "Kog'Maw lion chinois",
      },
      {
        id: "8",
        name: "Proto Kog'Maw",
      },
      {
        id: "10",
        name: "Kog'Maw Hextech",
      },
      {
        id: "19",
        name: "Kog'Maw arcaniste",
      },
      {
        id: "46",
        name: "Kog'Maw des rouleaux de ShanHai",
      },
      {
        id: "55",
        name: "Kog'Maw héros de guerre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Surprise d'Icathia",
        type: "passive",
      },
      {
        id: "q",
        name: "Bave caustique",
        type: "spell",
      },
      {
        id: "w",
        name: "Barrage bio-arcanique",
        type: "spell",
      },
      {
        id: "e",
        name: "Limon du Néant",
        type: "spell",
      },
      {
        id: "r",
        name: "Artillerie vivante",
        type: "spell",
      },
    ],
  },
  ksante: {
    id: "ksante",
    name: "K'Santé",
    classes: ["tank", "fighter"],
    skins: [
      {
        id: "1",
        name: "K'Santé empyréen",
      },
      {
        id: "2",
        name: "K'Santé empyréen prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Instinct intrépide",
        type: "passive",
      },
      {
        id: "q",
        name: "Coups de ntofo",
        type: "spell",
      },
      {
        id: "w",
        name: "Pour Nazumah!",
        type: "spell",
      },
      {
        id: "e",
        name: "Jeu de jambes",
        type: "spell",
      },
      {
        id: "r",
        name: "Grand jeu",
        type: "spell",
      },
    ],
  },
  leblanc: {
    id: "leblanc",
    name: "LeBlanc",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "2",
        name: "LeBlanc prestigieuse",
      },
      {
        id: "4",
        name: "LeBlanc corvus",
      },
      {
        id: "5",
        name: "LeBlanc sylvestre",
      },
      {
        id: "12",
        name: "Programme LeBlanc",
      },
      {
        id: "19",
        name: "iG LeBlanc",
      },
      {
        id: "20",
        name: "LeBlanc de l'assemblée",
      },
      {
        id: "29",
        name: "LeBlanc des Worlds2020",
      },
      {
        id: "45",
        name: "LeBlanc sorcière",
      },
      {
        id: "55",
        name: "LeBlanc légende transcendée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Image miroir",
        type: "passive",
      },
      {
        id: "q",
        name: "Sceau de malveillance",
        type: "spell",
      },
      {
        id: "w",
        name: "Distorsion",
        type: "spell",
      },
      {
        id: "e",
        name: "Chaînes éthérées",
        type: "spell",
      },
      {
        id: "r",
        name: "Imitation",
        type: "spell",
      },
    ],
  },
  leesin: {
    id: "leesin",
    name: "Lee Sin",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Lee Sin classique",
      },
      {
        id: "2",
        name: "Lee Sin acolyte",
      },
      {
        id: "3",
        name: "Lee Sin poing du dragon",
      },
      {
        id: "4",
        name: "Lee Sin muay thaï",
      },
      {
        id: "5",
        name: "Lee piSin",
      },
      {
        id: "10",
        name: "Lee Sin pugiliste",
      },
      {
        id: "11",
        name: "Lee Sin poing divin",
      },
      {
        id: "27",
        name: "Lee Sin héraut de la nuit",
      },
      {
        id: "31",
        name: "Lee Sin dragon des tempêtes",
      },
      {
        id: "41",
        name: "Lee Sin des Jeux du zénith",
      },
      {
        id: "51",
        name: "Lee Sin écailles célestes",
      },
      {
        id: "52",
        name: "Lee Sin écailles célestes divines",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Rafale",
        type: "passive",
      },
      {
        id: "q",
        name: "Onde sonore",
        type: "spell",
      },
      {
        id: "w",
        name: "Rempart",
        type: "spell",
      },
      {
        id: "e",
        name: "Trombe",
        type: "spell",
      },
      {
        id: "r",
        name: "Rage du dragon",
        type: "spell",
      },
    ],
  },
  leona: {
    id: "leona",
    name: "Leona",
    classes: ["tank", "support"],
    skins: [
      {
        id: "4",
        name: "Leona bain de soleil",
      },
      {
        id: "8",
        name: "PROJET : Leona",
      },
      {
        id: "10",
        name: "Leona de l'éclipse solaire",
      },
      {
        id: "11",
        name: "Leona de l'éclipse lunaire",
      },
      {
        id: "12",
        name: "Leona du royaume des mechas",
      },
      {
        id: "21",
        name: "Leona de l'Académie du combat",
      },
      {
        id: "34",
        name: "Leona de l'Ouest",
      },
      {
        id: "50",
        name: "Leona Crystalis",
      },
      {
        id: "52",
        name: "Leona lion de combat",
      },
      {
        id: "53",
        name: "Leona lion de combat prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Rayon de soleil",
        type: "passive",
      },
      {
        id: "q",
        name: "Bouclier de l'aube",
        type: "spell",
      },
      {
        id: "w",
        name: "Éclipse",
        type: "spell",
      },
      {
        id: "e",
        name: "Lame du zénith",
        type: "spell",
      },
      {
        id: "r",
        name: "Éruption solaire",
        type: "spell",
      },
    ],
  },
  lillia: {
    id: "lillia",
    name: "Lillia",
    classes: ["fighter", "mage"],
    skins: [
      {
        id: "1",
        name: "Lillia fleur spirituelle",
      },
      {
        id: "10",
        name: "Lillia héraut de la nuit",
      },
      {
        id: "19",
        name: "Lillia des rouleaux de ShanHai",
      },
      {
        id: "28",
        name: "Lillia de la cour féérique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Bâton chargé de rêves",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe fleurie",
        type: "spell",
      },
      {
        id: "w",
        name: "Attention, désolée!",
        type: "spell",
      },
      {
        id: "e",
        name: "Graine tournoyante",
        type: "spell",
      },
      {
        id: "r",
        name: "Douce berceuse",
        type: "spell",
      },
    ],
  },
  lissandra: {
    id: "lissandra",
    name: "Lissandra",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Lissandra hémolithe",
      },
      {
        id: "3",
        name: "Programme Lissandra",
      },
      {
        id: "4",
        name: "Lissandra de l'assemblée",
      },
      {
        id: "12",
        name: "Lissandra démiurge cosmique",
      },
      {
        id: "23",
        name: "Lissandra de porcelaine",
      },
      {
        id: "33",
        name: "Lissandra de porcelaine prestige",
      },
      {
        id: "34",
        name: "Lissandra astro-groove",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Emprise de la Sublimée",
        type: "passive",
      },
      {
        id: "q",
        name: "Éclat de glace",
        type: "spell",
      },
      {
        id: "w",
        name: "Cercle de givre",
        type: "spell",
      },
      {
        id: "e",
        name: "Chemin glacial",
        type: "spell",
      },
      {
        id: "r",
        name: "Tombeau polaire",
        type: "spell",
      },
    ],
  },
  lucian: {
    id: "lucian",
    name: "Lucian",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "1",
        name: "Lucian tueur à gages",
      },
      {
        id: "6",
        name: "PROJET : Lucian",
      },
      {
        id: "7",
        name: "Lucian cœur-de-cible",
      },
      {
        id: "8",
        name: "Lucian de l'Ouest",
      },
      {
        id: "9",
        name: "Lucian Demacia Vice",
      },
      {
        id: "18",
        name: "Lucian Pulsefire",
      },
      {
        id: "25",
        name: "Lucian héros de guerre",
      },
      {
        id: "31",
        name: "Lucian des arcanes",
      },
      {
        id: "40",
        name: "Lucian paladin d'assaut",
      },
      {
        id: "52",
        name: "Lucian élu de l'hiver",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pistolero",
        type: "passive",
      },
      {
        id: "q",
        name: "Lumière perforante",
        type: "spell",
      },
      {
        id: "w",
        name: "Flamboiement",
        type: "spell",
      },
      {
        id: "e",
        name: "Poursuite inlassable",
        type: "spell",
      },
      {
        id: "r",
        name: "Déluge de balles",
        type: "spell",
      },
    ],
  },
  lulu: {
    id: "lulu",
    name: "Lulu",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Lulu douce-amère",
      },
      {
        id: "2",
        name: "Lulu funèbre",
      },
      {
        id: "3",
        name: "Lulu dragonnière",
      },
      {
        id: "4",
        name: "Lulu merveille hivernale",
      },
      {
        id: "6",
        name: "Lulu gardienne des étoiles",
      },
      {
        id: "14",
        name: "Lulu enchanteresse cosmique",
      },
      {
        id: "26",
        name: "Lulu astro-groove",
      },
      {
        id: "46",
        name: "Lulu Café Chouchous",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pix, le Compagnon féérique",
        type: "passive",
      },
      {
        id: "q",
        name: "Duo éclatant",
        type: "spell",
      },
      {
        id: "w",
        name: "Fantaisie",
        type: "spell",
      },
      {
        id: "e",
        name: "Pix à la rescousse !",
        type: "spell",
      },
      {
        id: "r",
        name: "Croissance prodigieuse",
        type: "spell",
      },
    ],
  },
  lux: {
    id: "lux",
    name: "Lux",
    classes: ["mage", "support"],
    skins: [
      {
        id: "2",
        name: "Lux voleuse de sorts",
      },
      {
        id: "5",
        name: "Lux de la Légion d'acier",
      },
      {
        id: "6",
        name: "Lux gardienne des étoiles",
      },
      {
        id: "7",
        name: "Lux élémentaliste",
      },
      {
        id: "8",
        name: "Lux impératrice lunaire",
      },
      {
        id: "15",
        name: "Lux de l'Académie du combat",
      },
      {
        id: "17",
        name: "Lux démiurge cosmique",
      },
      {
        id: "19",
        name: "Lux astro-groove",
      },
      {
        id: "29",
        name: "Lux de porcelaine",
      },
      {
        id: "38",
        name: "Lux combattante spirituelle",
      },
      {
        id: "40",
        name: "Lux de porcelaine prestige",
      },
      {
        id: "42",
        name: "Lux empyréenne",
      },
      {
        id: "61",
        name: "Lux de la cour féérique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Illumination",
        type: "passive",
      },
      {
        id: "q",
        name: "Entrave de lumière",
        type: "spell",
      },
      {
        id: "w",
        name: "Barrière prismatique",
        type: "spell",
      },
      {
        id: "e",
        name: "Anomalie radieuse",
        type: "spell",
      },
      {
        id: "r",
        name: "Éclat final",
        type: "spell",
      },
    ],
  },
  malphite: {
    id: "malphite",
    name: "Malphite",
    classes: ["tank", "mage"],
    skins: [
      {
        id: "4",
        name: "Malphite d'obsidienne",
      },
      {
        id: "5",
        name: "Malphite glacial",
      },
      {
        id: "6",
        name: "Mecha Malphite",
      },
      {
        id: "16",
        name: "Malphite de l'Odyssée",
      },
      {
        id: "23",
        name: "Malphite du pulsar sombre",
      },
      {
        id: "27",
        name: "Malphite dieu ancien",
      },
      {
        id: "37",
        name: "Malphite gardien lunaire",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Bouclier de granit",
        type: "passive",
      },
      {
        id: "q",
        name: "Éclat sismique",
        type: "spell",
      },
      {
        id: "w",
        name: "Coup de tonnerre",
        type: "spell",
      },
      {
        id: "e",
        name: "Choc au sol",
        type: "spell",
      },
      {
        id: "r",
        name: "Force indomptable",
        type: "spell",
      },
    ],
  },
  malzahar: {
    id: "malzahar",
    name: "Malzahar",
    classes: ["mage"],
    skins: [
      {
        id: "5",
        name: "Malzahar des neiges",
      },
      {
        id: "6",
        name: "Malzahar boss de combat",
      },
      {
        id: "7",
        name: "Malzahar Hextech",
      },
      {
        id: "9",
        name: "Malzahar brise-monde",
      },
      {
        id: "18",
        name: "Malzahar abeille",
      },
      {
        id: "38",
        name: "Malzahar des Trois Honneurs",
      },
      {
        id: "39",
        name: "Malzahar empyréen",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Plan du Néant",
        type: "passive",
      },
      {
        id: "q",
        name: "Appel du Néant",
        type: "spell",
      },
      {
        id: "w",
        name: "Nuée du Néant",
        type: "spell",
      },
      {
        id: "e",
        name: "Visions maléfiques",
        type: "spell",
      },
      {
        id: "r",
        name: "Poigne du Néant",
        type: "spell",
      },
    ],
  },
  maokai: {
    id: "maokai",
    name: "Maokai",
    classes: ["tank", "support"],
    skins: [
      {
        id: "1",
        name: "Maokai calciné",
      },
      {
        id: "2",
        name: "Maokai totémique",
      },
      {
        id: "3",
        name: "Maokai festif",
      },
      {
        id: "4",
        name: "Maokai hanté",
      },
      {
        id: "7",
        name: "Maokai héros de guerre",
      },
      {
        id: "16",
        name: "Maokai brise-monde",
      },
      {
        id: "24",
        name: "Maokai astronaute",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Sève magique",
        type: "passive",
      },
      {
        id: "q",
        name: "Coup de ronces",
        type: "spell",
      },
      {
        id: "w",
        name: "Croissance torturée",
        type: "spell",
      },
      {
        id: "e",
        name: "Jet d'arbrisseau",
        type: "spell",
      },
      {
        id: "r",
        name: "Emprise de la nature",
        type: "spell",
      },
    ],
  },
  masteryi: {
    id: "masteryi",
    name: "Maître Yi",
    alias: "Master Yi",
    classes: ["assassin", "fighter"],
    skins: [
      {
        id: "1",
        name: "Maître Yi l'assassin",
      },
      {
        id: "2",
        name: "Maître Yi l'élu",
      },
      {
        id: "9",
        name: "PROJET : Yi",
      },
      {
        id: "10",
        name: "Maître Yi lame cosmique",
      },
      {
        id: "11",
        name: "Yi à l'épée éternelle",
      },
      {
        id: "17",
        name: "Bonhomme de neige Yi",
      },
      {
        id: "33",
        name: "Maître Yi psychoguerrier",
      },
      {
        id: "42",
        name: "Maître Yi séducteur",
      },
      {
        id: "52",
        name: "Maître Yi fleur spirituelle",
      },
      {
        id: "53",
        name: "Maître Yi fleur spirituelle prestige",
      },
      {
        id: "89",
        name: "Maître Yi guerrier d'encre",
      },
      {
        id: "96",
        name: "Maître Yi écailles célestes",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Coup double",
        type: "passive",
      },
      {
        id: "q",
        name: "Assaut éclair",
        type: "spell",
      },
      {
        id: "w",
        name: "Méditation",
        type: "spell",
      },
      {
        id: "e",
        name: "Style Wuju",
        type: "spell",
      },
      {
        id: "r",
        name: "Highlander",
        type: "spell",
      },
    ],
  },
  milio: {
    id: "milio",
    name: "Milio",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Milio de la cour féérique",
      },
      {
        id: "11",
        name: "Milio berger de la pluie",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tout feu tout flamme",
        type: "passive",
      },
      {
        id: "q",
        name: "Ultra méga boule de feu",
        type: "spell",
      },
      {
        id: "w",
        name: "Feu de camp",
        type: "spell",
      },
      {
        id: "e",
        name: "Chaud devant!",
        type: "spell",
      },
      {
        id: "r",
        name: "Flammes vitales",
        type: "spell",
      },
    ],
  },
  missfortune: {
    id: "missfortune",
    name: "Miss Fortune",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Miss Fortune cow-girl",
      },
      {
        id: "2",
        name: "Miss Fortune Waterloo",
      },
      {
        id: "3",
        name: "Miss Fortune agent secret",
      },
      {
        id: "4",
        name: "Miss Fortune sucre d'orge",
      },
      {
        id: "5",
        name: "Mad Fortune",
      },
      {
        id: "6",
        name: "Donna Fortune",
      },
      {
        id: "7",
        name: "Miss Fortune arcade",
      },
      {
        id: "8",
        name: "Capitaine Fortune",
      },
      {
        id: "9",
        name: "Miss Fortune pistolets à eau",
      },
      {
        id: "15",
        name: "Miss Fortune gardienne des étoiles",
      },
      {
        id: "16",
        name: "Miss Fortune déesse des flingues",
      },
      {
        id: "18",
        name: "Miss Fortune sorcière",
      },
      {
        id: "21",
        name: "Miss Fortune déchue",
      },
      {
        id: "31",
        name: "Miss Fortune lapin de combat",
      },
      {
        id: "32",
        name: "Amirale Miss Fortune lapin de combat",
      },
      {
        id: "40",
        name: "Miss Fortune de l'Alliance brisée",
      },
      {
        id: "41",
        name: "Miss Fortune de l'Alliance brisée prestige",
      },
      {
        id: "50",
        name: "Miss Fortune de porcelaine",
      },
      {
        id: "60",
        name: "Miss Fortune reine du combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Cœur volage",
        type: "passive",
      },
      {
        id: "q",
        name: "Doublé",
        type: "spell",
      },
      {
        id: "w",
        name: "Fanfaronne",
        type: "spell",
      },
      {
        id: "e",
        name: "Pluie de balles",
        type: "spell",
      },
      {
        id: "r",
        name: "Barrage de plomb",
        type: "spell",
      },
    ],
  },
  wukong: {
    id: "wukong",
    name: "Wukong",
    classes: ["fighter", "tank"],
    skins: [],
    spells: [
      {
        id: "p",
        name: "Peau de pierre",
        type: "passive",
      },
      {
        id: "q",
        name: "Écrasement",
        type: "spell",
      },
      {
        id: "w",
        name: "Guerrier espiègle",
        type: "spell",
      },
      {
        id: "e",
        name: "Nimbus",
        type: "spell",
      },
      {
        id: "r",
        name: "Cyclone",
        type: "spell",
      },
    ],
  },
  mordekaiser: {
    id: "mordekaiser",
    name: "Mordekaiser",
    classes: ["fighter", "mage"],
    skins: [
      {
        id: "1",
        name: "Mordekaiser le dragonnier",
      },
      {
        id: "2",
        name: "Mordekaiser infernal",
      },
      {
        id: "4",
        name: "Lord Mordekaiser",
      },
      {
        id: "6",
        name: "Mordekaiser du pulsar sombre",
      },
      {
        id: "13",
        name: "PROJET: Mordekaiser",
      },
      {
        id: "32",
        name: "Mordekaiser de l'Ouest",
      },
      {
        id: "42",
        name: "Mordekaiser ravageur de cendres",
      },
      {
        id: "44",
        name: "Mordekaiser dieu ancien",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Vortex de ténèbres",
        type: "passive",
      },
      {
        id: "q",
        name: "Oblitération",
        type: "spell",
      },
      {
        id: "w",
        name: "Indestructible",
        type: "spell",
      },
      {
        id: "e",
        name: "Emprise funeste",
        type: "spell",
      },
      {
        id: "r",
        name: "Royaume des morts",
        type: "spell",
      },
    ],
  },
  morgana: {
    id: "morgana",
    name: "Morgana",
    classes: ["mage", "support"],
    skins: [
      {
        id: "2",
        name: "Morgana pécheresse",
      },
      {
        id: "3",
        name: "Morgana la Lame sinistre",
      },
      {
        id: "4",
        name: "Morgana des ronces",
      },
      {
        id: "5",
        name: "Morgana mariée fantôme",
      },
      {
        id: "6",
        name: "Morgana héroïne de guerre",
      },
      {
        id: "11",
        name: "Morgana sorcière",
      },
      {
        id: "17",
        name: "Morgana impératrice majestueuse",
      },
      {
        id: "26",
        name: "Morgana de l'assemblée",
      },
      {
        id: "39",
        name: "Morgana héraut de l'aube",
      },
      {
        id: "41",
        name: "Morgana sorcière prestige",
      },
      {
        id: "50",
        name: "Morgana terreur des étoiles",
      },
      {
        id: "60",
        name: "Morgana lune de neige",
      },
      {
        id: "70",
        name: "Morgana de porcelaine",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Siphon d'âme",
        type: "passive",
      },
      {
        id: "q",
        name: "Entrave sombre",
        type: "spell",
      },
      {
        id: "w",
        name: "Tourment ténébreux",
        type: "spell",
      },
      {
        id: "e",
        name: "Bouclier noir",
        type: "spell",
      },
      {
        id: "r",
        name: "Chaînes spirituelles",
        type: "spell",
      },
    ],
  },
  naafiri: {
    id: "naafiri",
    name: "Naafiri",
    classes: ["assassin", "fighter"],
    skins: [
      {
        id: "1",
        name: "Naafiri combattante spirituelle",
      },
      {
        id: "11",
        name: "PROJET: Naafiri",
      },
    ],
    spells: [
      {
        id: "p",
        name: "La meute s'agrandit",
        type: "passive",
      },
      {
        id: "q",
        name: "Dagues des Darkin",
        type: "spell",
      },
      {
        id: "w",
        name: "Hallali",
        type: "spell",
      },
      {
        id: "e",
        name: "Éviscération",
        type: "spell",
      },
      {
        id: "r",
        name: "Appel de la meute",
        type: "spell",
      },
    ],
  },
  nami: {
    id: "nami",
    name: "Nami",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Koi Nami",
      },
      {
        id: "2",
        name: "Nami naïade",
      },
      {
        id: "9",
        name: "Programme Nami",
      },
      {
        id: "15",
        name: "Nami au bâton splendide",
      },
      {
        id: "24",
        name: "Nami destinée cosmique",
      },
      {
        id: "41",
        name: "Nami astro-groove",
      },
      {
        id: "42",
        name: "Nami astro-groove prestige",
      },
      {
        id: "51",
        name: "Nami de l'assemblée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Déferlantes",
        type: "passive",
      },
      {
        id: "q",
        name: "Prison aqueuse",
        type: "spell",
      },
      {
        id: "w",
        name: "Flux et reflux",
        type: "spell",
      },
      {
        id: "e",
        name: "Bénédiction de l'Aquamancienne",
        type: "spell",
      },
      {
        id: "r",
        name: "Raz-de-marée",
        type: "spell",
      },
    ],
  },
  nasus: {
    id: "nasus",
    name: "Nasus",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "5",
        name: "Nasus infernal",
      },
      {
        id: "10",
        name: "Nasus brise-monde",
      },
      {
        id: "11",
        name: "Nasus gardien lunaire",
      },
      {
        id: "16",
        name: "Proto Nasus",
      },
      {
        id: "25",
        name: "Nasus astro-groove",
      },
      {
        id: "35",
        name: "Nasus titan blindé",
      },
      {
        id: "45",
        name: "Nasus héraut de la nuit",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mangeur d'âmes",
        type: "passive",
      },
      {
        id: "q",
        name: "Buveuse d'âmes",
        type: "spell",
      },
      {
        id: "w",
        name: "Flétrissement",
        type: "spell",
      },
      {
        id: "e",
        name: "Esprit enflammé",
        type: "spell",
      },
      {
        id: "r",
        name: "Fureur des sables",
        type: "spell",
      },
    ],
  },
  nautilus: {
    id: "nautilus",
    name: "Nautilus",
    classes: ["tank", "support"],
    skins: [
      {
        id: "3",
        name: "AstroNautilus",
      },
      {
        id: "6",
        name: "Nautilus conquérant",
      },
      {
        id: "9",
        name: "Nautilus des rouleaux de ShanHai",
      },
      {
        id: "27",
        name: "Nautilus paladin cosmique",
      },
      {
        id: "36",
        name: "Nautilus Crystalis Indomitus",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Coup écrasant",
        type: "passive",
      },
      {
        id: "q",
        name: "Abordage",
        type: "spell",
      },
      {
        id: "w",
        name: "Colère du titan",
        type: "spell",
      },
      {
        id: "e",
        name: "Répliques",
        type: "spell",
      },
      {
        id: "r",
        name: "Grenade ASM",
        type: "spell",
      },
    ],
  },
  neeko: {
    id: "neeko",
    name: "Neeko",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Neeko merveille hivernale",
      },
      {
        id: "10",
        name: "Neeko gardienne des étoiles",
      },
      {
        id: "12",
        name: "Neeko des rouleaux de ShanHai",
      },
      {
        id: "22",
        name: "Neeko sorcière",
      },
      {
        id: "31",
        name: "Neeko ville démoniaque",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mirage inné",
        type: "passive",
      },
      {
        id: "q",
        name: "Explosion florale",
        type: "spell",
      },
      {
        id: "w",
        name: "Métaclonage",
        type: "spell",
      },
      {
        id: "e",
        name: "Spirale épineuse",
        type: "spell",
      },
      {
        id: "r",
        name: "Floraison renversante",
        type: "spell",
      },
    ],
  },
  nidalee: {
    id: "nidalee",
    name: "Nidalee",
    classes: ["assassin", "mage"],
    skins: [
      {
        id: "1",
        name: "Nidalee lapin des neiges",
      },
      {
        id: "2",
        name: "Nidalee léopard",
      },
      {
        id: "3",
        name: "Nidalee servante",
      },
      {
        id: "4",
        name: "Pharaon Nidalee",
      },
      {
        id: "5",
        name: "Nidalee sorcière",
      },
      {
        id: "6",
        name: "Nidalee chasseuse de têtes",
      },
      {
        id: "7",
        name: "Nidalee du royaume en guerre",
      },
      {
        id: "8",
        name: "Nidalee challenger",
      },
      {
        id: "9",
        name: "Super Nidalee intergalactique",
      },
      {
        id: "11",
        name: "Nidalee héraut de l'aube",
      },
      {
        id: "18",
        name: "Nidalee chasseresse cosmique",
      },
      {
        id: "48",
        name: "Nidalee La Ilusión",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Prédateur",
        type: "passive",
      },
      {
        id: "q",
        name: "Javelot",
        type: "spell",
      },
      {
        id: "w",
        name: "Guérilla",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge primale",
        type: "spell",
      },
      {
        id: "r",
        name: "Aspect du Couguar",
        type: "spell",
      },
    ],
  },
  nilah: {
    id: "nilah",
    name: "Nilah",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "0",
        name: "default",
      },
      {
        id: "1",
        name: "Nilah gardienne des étoiles",
      },
      {
        id: "11",
        name: "Nilah de l'assemblée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Joie éternelle",
        type: "passive",
      },
      {
        id: "q",
        name: "Lame fluide",
        type: "spell",
      },
      {
        id: "w",
        name: "Voile de liesse",
        type: "spell",
      },
      {
        id: "e",
        name: "Torrent",
        type: "spell",
      },
      {
        id: "r",
        name: "Apothéose",
        type: "spell",
      },
    ],
  },
  nocturne: {
    id: "nocturne",
    name: "Nocturne",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "3",
        name: "Nocturne ravageur",
      },
      {
        id: "4",
        name: "Nocturne revenant",
      },
      {
        id: "5",
        name: "Nocturne eternum",
      },
      {
        id: "7",
        name: "Nocturne dieu ancien",
      },
      {
        id: "16",
        name: "Nocturne Hextech",
      },
      {
        id: "17",
        name: "Nocturne de l'Alliance brisée",
      },
      {
        id: "26",
        name: "Nocturne empyréen",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Lames d'ombre",
        type: "passive",
      },
      {
        id: "q",
        name: "Crépuscule",
        type: "spell",
      },
      {
        id: "w",
        name: "Linceul des ténèbres",
        type: "spell",
      },
      {
        id: "e",
        name: "Horreur indicible",
        type: "spell",
      },
      {
        id: "r",
        name: "Paranoïa",
        type: "spell",
      },
    ],
  },
  nunu: {
    id: "nunu",
    name: "Nunu et Willump",
    alias: "Nunu",
    classes: ["tank", "mage"],
    skins: [
      {
        id: "1",
        name: "Nunu et Willump Sasquatch",
      },
      {
        id: "2",
        name: "Nunu et Willump du Solstice",
      },
      {
        id: "3",
        name: "Nunu et Willump peluche",
      },
      {
        id: "4",
        name: "Nunu et Bot Willump",
      },
      {
        id: "5",
        name: "Nunu et Willump blindés",
      },
      {
        id: "8",
        name: "Nunu et Willump origami",
      },
      {
        id: "16",
        name: "Nunu et Willump astro-groove",
      },
      {
        id: "26",
        name: "Nunu et Willump abeille",
      },
      {
        id: "35",
        name: "Nunu et Willump paladins cosmiques",
      },
      {
        id: "44",
        name: "Nunu et Willump Nuit d'effroi",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Appel de Freljord",
        type: "passive",
      },
      {
        id: "q",
        name: "Voracité",
        type: "spell",
      },
      {
        id: "w",
        name: "Boule de neige géante!",
        type: "spell",
      },
      {
        id: "e",
        name: "Rafale de boules de neige",
        type: "spell",
      },
      {
        id: "r",
        name: "Zéro absolu",
        type: "spell",
      },
    ],
  },
  olaf: {
    id: "olaf",
    name: "Olaf",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "2",
        name: "Olaf des glaces",
      },
      {
        id: "3",
        name: "Brolaf",
      },
      {
        id: "25",
        name: "Olaf Sentinelle",
      },
      {
        id: "44",
        name: "Olaf infernal",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Rage du berzerker",
        type: "passive",
      },
      {
        id: "q",
        name: "Déchireuse",
        type: "spell",
      },
      {
        id: "w",
        name: "Force décuplée",
        type: "spell",
      },
      {
        id: "e",
        name: "Frappe sauvage",
        type: "spell",
      },
      {
        id: "r",
        name: "Ragnarok",
        type: "spell",
      },
    ],
  },
  orianna: {
    id: "orianna",
    name: "Orianna",
    classes: ["mage", "support"],
    skins: [
      {
        id: "5",
        name: "Orianna merveille hivernale",
      },
      {
        id: "6",
        name: "Orianna cœur-de-cible",
      },
      {
        id: "7",
        name: "Orianna du pulsar sombre",
      },
      {
        id: "8",
        name: "Orianna héroïne de guerre",
      },
      {
        id: "20",
        name: "Orianna abeille",
      },
      {
        id: "29",
        name: "Orianna gardienne des étoiles",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Remontoir",
        type: "passive",
      },
      {
        id: "q",
        name: "Ordre : Attaque",
        type: "spell",
      },
      {
        id: "w",
        name: "Ordre: Dissonance",
        type: "spell",
      },
      {
        id: "e",
        name: "Ordre: Protection",
        type: "spell",
      },
      {
        id: "r",
        name: "Ordre : Onde de choc",
        type: "spell",
      },
    ],
  },
  ornn: {
    id: "ornn",
    name: "Ornn",
    classes: ["tank"],
    skins: [
      {
        id: "1",
        name: "Fulguro Ornn",
      },
      {
        id: "2",
        name: "Ornn sylvestre",
      },
      {
        id: "11",
        name: "Ornn astro-groove",
      },
      {
        id: "20",
        name: "Ornn tchou-tchou",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Forgeron ambulant",
        type: "passive",
      },
      {
        id: "q",
        name: "Fracture magmatique",
        type: "spell",
      },
      {
        id: "w",
        name: "Fournaise",
        type: "spell",
      },
      {
        id: "e",
        name: "Ruée ardente",
        type: "spell",
      },
      {
        id: "r",
        name: "Appel du dieu de la forge",
        type: "spell",
      },
    ],
  },
  pantheon: {
    id: "pantheon",
    name: "Pantheon",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Pantheon myrmidon",
      },
      {
        id: "2",
        name: "Pantheon impitoyable",
      },
      {
        id: "3",
        name: "Persée Pantheon",
      },
      {
        id: "4",
        name: "Full Metal Pantheon",
      },
      {
        id: "5",
        name: "Pantheon dace",
      },
      {
        id: "6",
        name: "Pantheon tueur de dragons",
      },
      {
        id: "16",
        name: "Pantheon Pulsefire",
      },
      {
        id: "25",
        name: "Pantheon déchu",
      },
      {
        id: "36",
        name: "Pantheon conquérant de cendres",
      },
      {
        id: "38",
        name: "Pantheon de la Chasse éternelle",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ardeur mortelle",
        type: "passive",
      },
      {
        id: "q",
        name: "Lance astrale",
        type: "spell",
      },
      {
        id: "w",
        name: "Assaut martial",
        type: "spell",
      },
      {
        id: "e",
        name: "Égide impénétrable",
        type: "spell",
      },
      {
        id: "r",
        name: "Météore",
        type: "spell",
      },
    ],
  },
  poppy: {
    id: "poppy",
    name: "Poppy",
    classes: ["tank", "fighter"],
    skins: [
      {
        id: "1",
        name: "Poppy noxienne",
      },
      {
        id: "2",
        name: "Lollipoppy",
      },
      {
        id: "3",
        name: "Poppy forgeron",
      },
      {
        id: "4",
        name: "Poppy de son",
      },
      {
        id: "5",
        name: "Poppy royale",
      },
      {
        id: "6",
        name: "Poppy chevalier rouge",
      },
      {
        id: "7",
        name: "Poppy gardienne des étoiles",
      },
      {
        id: "14",
        name: "Poppy faon des neiges",
      },
      {
        id: "15",
        name: "Poppy Hextech",
      },
      {
        id: "24",
        name: "Poppy sorcière",
      },
      {
        id: "33",
        name: "Poppy Café Chouchous",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Ambassadrice de fer",
        type: "passive",
      },
      {
        id: "q",
        name: "Commotion",
        type: "spell",
      },
      {
        id: "w",
        name: "Présence immuable",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge héroïque",
        type: "spell",
      },
      {
        id: "r",
        name: "Verdict de la gardienne",
        type: "spell",
      },
    ],
  },
  pyke: {
    id: "pyke",
    name: "Pyke",
    classes: ["support", "assassin"],
    skins: [
      {
        id: "1",
        name: "Pyke spectre des sables",
      },
      {
        id: "9",
        name: "Pyke lune de sang",
      },
      {
        id: "16",
        name: "PROJET: Pyke",
      },
      {
        id: "25",
        name: "Pyke psychoguerrier",
      },
      {
        id: "34",
        name: "Pyke Sentinelle",
      },
      {
        id: "44",
        name: "Pyke chevalier de cendres",
      },
      {
        id: "45",
        name: "Pyke empyréen",
      },
      {
        id: "53",
        name: "Pyke combattant spirituel",
      },
      {
        id: "54",
        name: "Pyke combattant spirituel prestige",
      },
      {
        id: "64",
        name: "Pyke Nuit d'effroi",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Don des noyés",
        type: "passive",
      },
      {
        id: "q",
        name: "Harponnage",
        type: "spell",
      },
      {
        id: "w",
        name: "Plongée spectrale",
        type: "spell",
      },
      {
        id: "e",
        name: "Ressac fantôme",
        type: "spell",
      },
      {
        id: "r",
        name: "Exécution abyssale",
        type: "spell",
      },
    ],
  },
  qiyana: {
    id: "qiyana",
    name: "Qiyana",
    classes: ["assassin"],
    skins: [
      {
        id: "1",
        name: "Qiyana boss de combat",
      },
      {
        id: "2",
        name: "True Damage Qiyana",
      },
      {
        id: "11",
        name: "Qiyana reine du combat",
      },
      {
        id: "30",
        name: "Qiyana impératrice lunaire",
      },
      {
        id: "40",
        name: "Qiyana La Ilusión",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Privilège royal",
        type: "passive",
      },
      {
        id: "q",
        name: "Courroux élémentaire",
        type: "spell",
      },
      {
        id: "w",
        name: "Terraforce",
        type: "spell",
      },
      {
        id: "e",
        name: "Audace",
        type: "spell",
      },
      {
        id: "r",
        name: "Tour de force suprême",
        type: "spell",
      },
    ],
  },
  quinn: {
    id: "quinn",
    name: "Quinn",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "1",
        name: "Quinn phénix",
      },
      {
        id: "2",
        name: "Quinn éclaireur pastel",
      },
      {
        id: "4",
        name: "Quinn cœur-de-cible",
      },
      {
        id: "5",
        name: "Quinn purificatrice",
      },
      {
        id: "14",
        name: "Quinn gardienne des étoiles",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Busard",
        type: "passive",
      },
      {
        id: "q",
        name: "Assaut aveuglant",
        type: "spell",
      },
      {
        id: "w",
        name: "Œil d'aigle",
        type: "spell",
      },
      {
        id: "e",
        name: "Salto",
        type: "spell",
      },
      {
        id: "r",
        name: "En territoire ennemi",
        type: "spell",
      },
    ],
  },
  rakan: {
    id: "rakan",
    name: "Rakan",
    classes: ["support"],
    skins: [
      {
        id: "1",
        name: "Rakan de l'aube cosmique",
      },
      {
        id: "2",
        name: "Rakan cœur tendre",
      },
      {
        id: "4",
        name: "iG Rakan",
      },
      {
        id: "5",
        name: "Rakan gardien des étoiles",
      },
      {
        id: "9",
        name: "Rakan sylvestre",
      },
      {
        id: "18",
        name: "Rakan des arcanes",
      },
      {
        id: "27",
        name: "Rakan de l'Alliance brisée",
      },
      {
        id: "36",
        name: "Rakan gardien des étoiles repenti",
      },
      {
        id: "37",
        name: "Rakan dracomancien",
      },
      {
        id: "38",
        name: "Rakan dracomancien prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Plumes enchantées",
        type: "passive",
      },
      {
        id: "q",
        name: "Rémige rayonnante",
        type: "spell",
      },
      {
        id: "w",
        name: "Entrée triomphale",
        type: "spell",
      },
      {
        id: "e",
        name: "Valse guerrière",
        type: "spell",
      },
      {
        id: "r",
        name: "Danse ultime",
        type: "spell",
      },
    ],
  },
  rammus: {
    id: "rammus",
    name: "Rammus",
    classes: ["tank"],
    skins: [
      {
        id: "6",
        name: "Full Metal Rammus",
      },
      {
        id: "16",
        name: "Rammus Hextech",
      },
      {
        id: "26",
        name: "Rammus durian",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Carapace cloutée",
        type: "passive",
      },
      {
        id: "q",
        name: "Démolisseur",
        type: "spell",
      },
      {
        id: "w",
        name: "Boule défensive",
        type: "spell",
      },
      {
        id: "e",
        name: "Provocation frénétique",
        type: "spell",
      },
      {
        id: "r",
        name: "Frappe ascendante",
        type: "spell",
      },
    ],
  },
  reksai: {
    id: "reksai",
    name: "Rek'Sai",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Rek'Sai eternum",
      },
      {
        id: "9",
        name: "Rek'Sai des glaces noires",
      },
      {
        id: "17",
        name: "Rek'Sai sylvestre",
      },
      {
        id: "26",
        name: "Rek'Sai primordienne",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Fureur des Xer'Sai",
        type: "passive",
      },
      {
        id: "q",
        name: "Courroux de la reine",
        type: "spell",
      },
      {
        id: "w",
        name: "Enfouissement",
        type: "spell",
      },
      {
        id: "e",
        name: "Morsure féroce",
        type: "spell",
      },
      {
        id: "r",
        name: "Rush du Néant",
        type: "spell",
      },
    ],
  },
  rell: {
    id: "rell",
    name: "Rell",
    classes: ["tank", "support"],
    skins: [
      {
        id: "1",
        name: "Rell reine du combat",
      },
      {
        id: "10",
        name: "Rell gardienne des étoiles",
      },
      {
        id: "20",
        name: "Rell de l'Ouest",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mise en pièces",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe dislocatrice",
        type: "spell",
      },
      {
        id: "w",
        name: "Ferromancie: Descendre en piqué",
        type: "spell",
      },
      {
        id: "e",
        name: "Joute endiablée",
        type: "spell",
      },
      {
        id: "r",
        name: "Tempête magnétique",
        type: "spell",
      },
    ],
  },
  renata: {
    id: "renata",
    name: "Renata Glasc",
    alias: "Renata",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Amirale Glasc",
      },
      {
        id: "20",
        name: "Renata Glasc La Ilusión",
      },
      {
        id: "21",
        name: "Renata Glasc La Ilusión prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pression",
        type: "passive",
      },
      {
        id: "q",
        name: "Poignée de main",
        type: "spell",
      },
      {
        id: "w",
        name: "Patronage",
        type: "spell",
      },
      {
        id: "e",
        name: "Programme de fidélité",
        type: "spell",
      },
      {
        id: "r",
        name: "Prise de contrôle hostile",
        type: "spell",
      },
    ],
  },
  renekton: {
    id: "renekton",
    name: "Renekton",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Renekton galactique",
      },
      {
        id: "5",
        name: "Renekton de la terre brûlée",
      },
      {
        id: "6",
        name: "Renekton maître nageur",
      },
      {
        id: "17",
        name: "Renekton Hextech",
      },
      {
        id: "26",
        name: "PROJET: Renekton",
      },
      {
        id: "33",
        name: "Renekton héraut de l'aube",
      },
      {
        id: "42",
        name: "Renekton des Worlds2023",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Règne de la colère",
        type: "passive",
      },
      {
        id: "q",
        name: "Destruction des faibles",
        type: "spell",
      },
      {
        id: "w",
        name: "Prédateur impitoyable",
        type: "spell",
      },
      {
        id: "e",
        name: "Tranche et coupe",
        type: "spell",
      },
      {
        id: "r",
        name: "Dominus",
        type: "spell",
      },
    ],
  },
  rengar: {
    id: "rengar",
    name: "Rengar",
    classes: ["assassin", "fighter"],
    skins: [
      {
        id: "1",
        name: "Rengar chasseur de têtes",
      },
      {
        id: "2",
        name: "Rengar chasseur nocturne",
      },
      {
        id: "8",
        name: "Mecha Rengar",
      },
      {
        id: "30",
        name: "Rengar Sentinelle",
      },
      {
        id: "40",
        name: "Rengar ville démoniaque",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Prédateur invisible",
        type: "passive",
      },
      {
        id: "q",
        name: "Esprit sauvage",
        type: "spell",
      },
      {
        id: "w",
        name: "Rugissement",
        type: "spell",
      },
      {
        id: "e",
        name: "Bolas",
        type: "spell",
      },
      {
        id: "r",
        name: "Chasseur-né",
        type: "spell",
      },
    ],
  },
  riven: {
    id: "riven",
    name: "Riven",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "2",
        name: "Riven Némésis",
      },
      {
        id: "3",
        name: "Riven lapin de combat",
      },
      {
        id: "4",
        name: "Riven des Worlds2012",
      },
      {
        id: "5",
        name: "Riven lame du dragon",
      },
      {
        id: "16",
        name: "Riven héraut de l'aube",
      },
      {
        id: "18",
        name: "Riven Pulsefire",
      },
      {
        id: "20",
        name: "Riven à l'épée vaillante",
      },
      {
        id: "23",
        name: "Riven fleur spirituelle",
      },
      {
        id: "34",
        name: "Riven Sentinelle",
      },
      {
        id: "44",
        name: "Riven super lapin de combat",
      },
      {
        id: "55",
        name: "Riven de l'Alliance brisée",
      },
      {
        id: "63",
        name: "Riven embuscade férale",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Lame runique",
        type: "passive",
      },
      {
        id: "q",
        name: "Ailes brisées",
        type: "spell",
      },
      {
        id: "w",
        name: "Décharge de ki",
        type: "spell",
      },
      {
        id: "e",
        name: "Bravoure",
        type: "spell",
      },
      {
        id: "r",
        name: "Lame de l'exilée",
        type: "spell",
      },
    ],
  },
  rumble: {
    id: "rumble",
    name: "Rumble",
    classes: ["fighter", "mage"],
    skins: [
      {
        id: "3",
        name: "Super Rumble intergalactique",
      },
      {
        id: "4",
        name: "Rumble baron des friches",
      },
      {
        id: "13",
        name: "Rumble astro-groove",
      },
      {
        id: "23",
        name: "Rumble Café Chouchous",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Titan de bric-à-brac",
        type: "passive",
      },
      {
        id: "q",
        name: "Lance-flammes",
        type: "spell",
      },
      {
        id: "w",
        name: "Bouclier recyclé",
        type: "spell",
      },
      {
        id: "e",
        name: "Harpon électrique",
        type: "spell",
      },
      {
        id: "r",
        name: "Éradication",
        type: "spell",
      },
    ],
  },
  ryze: {
    id: "ryze",
    name: "Ryze",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Ryze jeune",
      },
      {
        id: "2",
        name: "Ryze tribal",
      },
      {
        id: "3",
        name: "Oncle Ryze",
      },
      {
        id: "4",
        name: "Ryze triomphant",
      },
      {
        id: "5",
        name: "Ryze professeur",
      },
      {
        id: "6",
        name: "Ryze zombie",
      },
      {
        id: "7",
        name: "Ryze au cristal noir",
      },
      {
        id: "8",
        name: "Ryze pirate",
      },
      {
        id: "11",
        name: "Ryze des Worlds2019",
      },
      {
        id: "20",
        name: "Ryze des arcanes",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Maîtrise des arcanes",
        type: "passive",
      },
      {
        id: "q",
        name: "Court-circuit",
        type: "spell",
      },
      {
        id: "w",
        name: "Prison runique",
        type: "spell",
      },
      {
        id: "e",
        name: "Flux envoûtant",
        type: "spell",
      },
      {
        id: "r",
        name: "Portail transdimensionnel",
        type: "spell",
      },
    ],
  },
  samira: {
    id: "samira",
    name: "Samira",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "1",
        name: "Samira psychoguerrière",
      },
      {
        id: "10",
        name: "Samira astro-groove",
      },
      {
        id: "20",
        name: "Samira de l'Ouest",
      },
      {
        id: "30",
        name: "Samira combattante spirituelle",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Élan téméraire",
        type: "passive",
      },
      {
        id: "q",
        name: "Panache",
        type: "spell",
      },
      {
        id: "w",
        name: "Tourbillon de lame",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge sauvage",
        type: "spell",
      },
      {
        id: "r",
        name: "Gâchette infernale",
        type: "spell",
      },
    ],
  },
  sejuani: {
    id: "sejuani",
    name: "Sejuani",
    classes: ["tank"],
    skins: [
      {
        id: "1",
        name: "Sejuani défenses acérées",
      },
      {
        id: "2",
        name: "Sejuani fatale",
      },
      {
        id: "3",
        name: "Sejuani classique",
      },
      {
        id: "4",
        name: "Sejuani cavalerie ursine",
      },
      {
        id: "5",
        name: "Sejuani chevaucheuse de Poro",
      },
      {
        id: "7",
        name: "Sejuani traqueuse de l'aube",
      },
      {
        id: "8",
        name: "Sejuani pyrotechnicienne",
      },
      {
        id: "15",
        name: "Sejuani Hextech",
      },
      {
        id: "16",
        name: "PROJET: Sejuani",
      },
      {
        id: "26",
        name: "Sejuani de l'éclipse solaire",
      },
      {
        id: "36",
        name: "Sejuani héroïne de guerre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Fureur du nord",
        type: "passive",
      },
      {
        id: "q",
        name: "Assaut arctique",
        type: "spell",
      },
      {
        id: "w",
        name: "Colère de l'hiver",
        type: "spell",
      },
      {
        id: "e",
        name: "Permafrost",
        type: "spell",
      },
      {
        id: "r",
        name: "Prison de glace",
        type: "spell",
      },
    ],
  },
  senna: {
    id: "senna",
    name: "Senna",
    classes: ["support", "marksman"],
    skins: [
      {
        id: "1",
        name: "True Damage Senna",
      },
      {
        id: "10",
        name: "Senna de l'Ouest",
      },
      {
        id: "16",
        name: "PROJET: Senna",
      },
      {
        id: "26",
        name: "Senna de l'éclipse lunaire",
      },
      {
        id: "27",
        name: "Senna de l'éclipse lunaire prestige",
      },
      {
        id: "46",
        name: "Senna gardienne des étoiles",
      },
      {
        id: "56",
        name: "Senna élue de l'hiver",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Absolution",
        type: "passive",
      },
      {
        id: "q",
        name: "Ombre perforante",
        type: "spell",
      },
      {
        id: "w",
        name: "Dernière étreinte",
        type: "spell",
      },
      {
        id: "e",
        name: "Malédiction de la Brume noire",
        type: "spell",
      },
      {
        id: "r",
        name: "Ténèbres aveuglantes",
        type: "spell",
      },
    ],
  },
  seraphine: {
    id: "seraphine",
    name: "Séraphine",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "K/DA ALL OUT Séraphine Indé",
      },
      {
        id: "2",
        name: "K/DA ALL OUT Séraphine Étoile montante",
      },
      {
        id: "3",
        name: "K/DA ALL OUT Séraphine Superstar",
      },
      {
        id: "4",
        name: "Séraphine phénix gracieux",
      },
      {
        id: "15",
        name: "Séraphine du Chant de l'océan prestige",
      },
      {
        id: "24",
        name: "Séraphine de la cour féérique",
      },
      {
        id: "34",
        name: "Séraphine gardienne des étoiles",
      },
      {
        id: "43",
        name: "Séraphine colombe de combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Présence sur scène",
        type: "passive",
      },
      {
        id: "q",
        name: "Note aiguë",
        type: "spell",
      },
      {
        id: "w",
        name: "Son ambiophonique",
        type: "spell",
      },
      {
        id: "e",
        name: "Battement",
        type: "spell",
      },
      {
        id: "r",
        name: "Bis",
        type: "spell",
      },
    ],
  },
  sett: {
    id: "sett",
    name: "Sett",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Sett du royaume des mechas",
      },
      {
        id: "8",
        name: "Sett dragon obsidienne",
      },
      {
        id: "19",
        name: "Sett pyrotechnicien",
      },
      {
        id: "38",
        name: "Sett fleur spirituelle",
      },
      {
        id: "45",
        name: "Sett combattant spirituel",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Roi de l'arène",
        type: "passive",
      },
      {
        id: "q",
        name: "Rogne",
        type: "spell",
      },
      {
        id: "w",
        name: "Coup cathartique",
        type: "spell",
      },
      {
        id: "e",
        name: "Casse-tête",
        type: "spell",
      },
      {
        id: "r",
        name: "Le Clou du spectacle",
        type: "spell",
      },
    ],
  },
  shaco: {
    id: "shaco",
    name: "Shaco",
    classes: ["assassin"],
    skins: [
      {
        id: "3",
        name: "Shac-noisettes",
      },
      {
        id: "6",
        name: "Shaco masqué",
      },
      {
        id: "8",
        name: "Shaco du pulsar sombre",
      },
      {
        id: "15",
        name: "Shaco arcaniste",
      },
      {
        id: "23",
        name: "Shaco cauchemar criminel",
      },
      {
        id: "33",
        name: "Shaco élu de l'hiver",
      },
      {
        id: "43",
        name: "Shaco combattant spirituel",
      },
      {
        id: "44",
        name: "Shaco combattant spirituel prestige",
      },
      {
        id: "54",
        name: "Shaco Nuit d'effroi",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Traîtrise",
        type: "passive",
      },
      {
        id: "q",
        name: "Tromperie",
        type: "spell",
      },
      {
        id: "w",
        name: "Boîte surprise",
        type: "spell",
      },
      {
        id: "e",
        name: "Poison double",
        type: "spell",
      },
      {
        id: "r",
        name: "Hallucination",
        type: "spell",
      },
    ],
  },
  shen: {
    id: "shen",
    name: "Shen",
    classes: ["tank"],
    skins: [
      {
        id: "1",
        name: "Shen glacé",
      },
      {
        id: "2",
        name: "Shen au manteau jaune",
      },
      {
        id: "3",
        name: "Shen chirurgien",
      },
      {
        id: "4",
        name: "Shen lune de sang",
      },
      {
        id: "5",
        name: "Samouraï Shen",
      },
      {
        id: "15",
        name: "Shen Pulsefire",
      },
      {
        id: "22",
        name: "Shen psychoguerrier",
      },
      {
        id: "49",
        name: "Shen gardien de cendres",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Barrière de ki",
        type: "passive",
      },
      {
        id: "q",
        name: "Assaut crépusculaire",
        type: "spell",
      },
      {
        id: "w",
        name: "Refuge spirituel",
        type: "spell",
      },
      {
        id: "e",
        name: "Rush des ombres",
        type: "spell",
      },
      {
        id: "r",
        name: "Soutien indéfectible",
        type: "spell",
      },
    ],
  },
  shyvana: {
    id: "shyvana",
    name: "Shyvana",
    classes: ["fighter", "mage"],
    skins: [
      {
        id: "2",
        name: "Shyvana chamane",
      },
      {
        id: "3",
        name: "Shyvana aux flammes noires",
      },
      {
        id: "4",
        name: "Shyvana dragon de glace",
      },
      {
        id: "5",
        name: "Shyvana des Worlds2014",
      },
      {
        id: "6",
        name: "Super Shyvana intergalactique",
      },
      {
        id: "8",
        name: "Shyvana déchue",
      },
      {
        id: "17",
        name: "Shyvana du Voyage immortel",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Fureur d'enfant de dragon",
        type: "passive",
      },
      {
        id: "q",
        name: "Morsure double",
        type: "spell",
      },
      {
        id: "w",
        name: "Combustion",
        type: "spell",
      },
      {
        id: "e",
        name: "Souffle de flammes",
        type: "spell",
      },
      {
        id: "r",
        name: "Vol du dragon",
        type: "spell",
      },
    ],
  },
  singed: {
    id: "singed",
    name: "Singed",
    classes: ["tank", "mage"],
    skins: [
      {
        id: "5",
        name: "Singed techmaturgique",
      },
      {
        id: "6",
        name: "Singed des neiges",
      },
      {
        id: "9",
        name: "Singed apiculteur",
      },
      {
        id: "10",
        name: "Singed résistant",
      },
      {
        id: "19",
        name: "Singed astronaute",
      },
      {
        id: "28",
        name: "Laboratoire de Shimmer de Singed d'Arcane",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Sillage toxique",
        type: "passive",
      },
      {
        id: "q",
        name: "Piste empoisonnée",
        type: "spell",
      },
      {
        id: "w",
        name: "Attrape-mouche",
        type: "spell",
      },
      {
        id: "e",
        name: "Projection",
        type: "spell",
      },
      {
        id: "r",
        name: "Potion de démence",
        type: "spell",
      },
    ],
  },
  sion: {
    id: "sion",
    name: "Sion",
    classes: ["tank", "fighter"],
    skins: [
      {
        id: "1",
        name: "Sion Hextech",
      },
      {
        id: "2",
        name: "Sion barbare",
      },
      {
        id: "3",
        name: "Sion bûcheron",
      },
      {
        id: "4",
        name: "Sion massacreur",
      },
      {
        id: "5",
        name: "Mecha Sion Zéro",
      },
      {
        id: "14",
        name: "Sion brise-monde",
      },
      {
        id: "22",
        name: "Sion des glaces noires",
      },
      {
        id: "30",
        name: "Sion de l'Ouest",
      },
      {
        id: "40",
        name: "Sion paladin cosmique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Gloire posthume",
        type: "passive",
      },
      {
        id: "q",
        name: "Fracas meurtrier",
        type: "spell",
      },
      {
        id: "w",
        name: "Feu intérieur",
        type: "spell",
      },
      {
        id: "e",
        name: "Cri du tueur",
        type: "spell",
      },
      {
        id: "r",
        name: "Assaut inarrêtable",
        type: "spell",
      },
    ],
  },
  sivir: {
    id: "sivir",
    name: "Sivir",
    classes: ["marksman"],
    skins: [
      {
        id: "5",
        name: "Sivir PAX",
      },
      {
        id: "6",
        name: "Sivir du blizzard",
      },
      {
        id: "8",
        name: "Sivir héroïne de guerre",
      },
      {
        id: "9",
        name: "Néo Sivir PAX",
      },
      {
        id: "10",
        name: "Sivir livreuse de pizza",
      },
      {
        id: "16",
        name: "Sivir lune de sang",
      },
      {
        id: "25",
        name: "Sivir de l'Odyssée",
      },
      {
        id: "43",
        name: "Sivir de l'éclipse solaire",
      },
      {
        id: "50",
        name: "Sivir mythificatrice",
      },
      {
        id: "51",
        name: "Sivir mythificatrice prestige",
      },
      {
        id: "61",
        name: "Sivir embuscade férale",
      },
      {
        id: "70",
        name: "Anni-Sivir-saire",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mille-pattes",
        type: "passive",
      },
      {
        id: "q",
        name: "Lame boomerang",
        type: "spell",
      },
      {
        id: "w",
        name: "Ricochet",
        type: "spell",
      },
      {
        id: "e",
        name: "Bouclier magique",
        type: "spell",
      },
      {
        id: "r",
        name: "En chasse",
        type: "spell",
      },
    ],
  },
  skarner: {
    id: "skarner",
    name: "Skarner",
    classes: ["tank", "fighter"],
    skins: [
      {
        id: "1",
        name: "Skarner fléau des sables",
      },
      {
        id: "2",
        name: "Skarner tellurique",
      },
      {
        id: "3",
        name: "Proto Skarner Alpha",
      },
      {
        id: "5",
        name: "Skarner dard cosmique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Échos des vibrations",
        type: "passive",
      },
      {
        id: "q",
        name: "Terre brisée",
        type: "spell",
      },
      {
        id: "w",
        name: "Bastion sismique",
        type: "spell",
      },
      {
        id: "e",
        name: "Impact d'Ixtal",
        type: "spell",
      },
      {
        id: "r",
        name: "Empalement",
        type: "spell",
      },
    ],
  },
  smolder: {
    id: "smolder",
    name: "Smolder",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Smolder écailles célestes",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Dragon en herbe",
        type: "passive",
      },
      {
        id: "q",
        name: "Boule de feu draconique",
        type: "spell",
      },
      {
        id: "w",
        name: "Atchoum!",
        type: "spell",
      },
      {
        id: "e",
        name: "Flap, flap, flap!",
        type: "spell",
      },
      {
        id: "r",
        name: "MAMAAAN!",
        type: "spell",
      },
    ],
  },
  sona: {
    id: "sona",
    name: "Sona",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Sona la muse",
      },
      {
        id: "5",
        name: "Sona arcade",
      },
      {
        id: "6",
        name: "DJ Sona",
      },
      {
        id: "7",
        name: "Sona cœur tendre",
      },
      {
        id: "9",
        name: "Sona de l'Odyssée",
      },
      {
        id: "17",
        name: "Sona psychoguerrière",
      },
      {
        id: "35",
        name: "Sona gardienne des étoiles",
      },
      {
        id: "45",
        name: "Sona du Voyage immortel",
      },
      {
        id: "46",
        name: "Sona du Voyage immortel prestige",
      },
      {
        id: "56",
        name: "Sona héroïne de guerre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Accord de puissance",
        type: "passive",
      },
      {
        id: "q",
        name: "Hymne à la bravoure",
        type: "spell",
      },
      {
        id: "w",
        name: "Aria de persévérance",
        type: "spell",
      },
      {
        id: "e",
        name: "Mélodie de vélocité",
        type: "spell",
      },
      {
        id: "r",
        name: "Crescendo",
        type: "spell",
      },
    ],
  },
  soraka: {
    id: "soraka",
    name: "Soraka",
    classes: ["support", "mage"],
    skins: [
      {
        id: "3",
        name: "Soraka du temple",
      },
      {
        id: "4",
        name: "Soraka faucheuse",
      },
      {
        id: "6",
        name: "Programme Soraka",
      },
      {
        id: "7",
        name: "Soraka gardienne des étoiles",
      },
      {
        id: "9",
        name: "Soraka merveille hivernale",
      },
      {
        id: "15",
        name: "Soraka héraut de l'aube",
      },
      {
        id: "16",
        name: "Soraka héraut de la nuit",
      },
      {
        id: "17",
        name: "Soraka gardienne des étoiles prestige",
      },
      {
        id: "27",
        name: "Soraka fleur spirituelle",
      },
      {
        id: "37",
        name: "Soraka du Voyage immortel",
      },
      {
        id: "44",
        name: "Soraka de la cour féérique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Salut",
        type: "passive",
      },
      {
        id: "q",
        name: "Appel de l'étoile",
        type: "spell",
      },
      {
        id: "w",
        name: "Infusion astrale",
        type: "spell",
      },
      {
        id: "e",
        name: "Équinoxe",
        type: "spell",
      },
      {
        id: "r",
        name: "Souhait",
        type: "spell",
      },
    ],
  },
  swain: {
    id: "swain",
    name: "Swain",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Swain du front nord",
      },
      {
        id: "2",
        name: "Swain de Bilgewater",
      },
      {
        id: "3",
        name: "Swain tyran",
      },
      {
        id: "4",
        name: "Swain maître des dragons",
      },
      {
        id: "11",
        name: "Swain Hextech",
      },
      {
        id: "21",
        name: "Swain élu de l'hiver",
      },
      {
        id: "32",
        name: "Swain de la Chasse éternelle",
      },
      {
        id: "33",
        name: "Swain de la Chasse éternelle prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Nuée de corbeaux",
        type: "passive",
      },
      {
        id: "q",
        name: "Poigne mortifère",
        type: "spell",
      },
      {
        id: "w",
        name: "Œil de l'empire",
        type: "spell",
      },
      {
        id: "e",
        name: "Capture",
        type: "spell",
      },
      {
        id: "r",
        name: "Incarnation démoniaque",
        type: "spell",
      },
    ],
  },
  sylas: {
    id: "sylas",
    name: "Sylas",
    classes: ["mage", "assassin"],
    skins: [
      {
        id: "1",
        name: "Sylas spectre lunaire",
      },
      {
        id: "8",
        name: "Sylas de Freljord",
      },
      {
        id: "13",
        name: "PROJET: Sylas",
      },
      {
        id: "34",
        name: "Sylas tueur de cendres",
      },
      {
        id: "36",
        name: "Sylas élu de l'hiver",
      },
      {
        id: "46",
        name: "Sylas du pulsar sombre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Volée de pétricite",
        type: "passive",
      },
      {
        id: "q",
        name: "Croix du forçat",
        type: "spell",
      },
      {
        id: "w",
        name: "Régicide",
        type: "spell",
      },
      {
        id: "e",
        name: "Évasion",
        type: "spell",
      },
      {
        id: "r",
        name: "Détournement",
        type: "spell",
      },
    ],
  },
  syndra: {
    id: "syndra",
    name: "Syndra",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Syndra justicière",
      },
      {
        id: "2",
        name: "Syndra de l'Atlantide",
      },
      {
        id: "6",
        name: "Syndra gardienne des étoiles",
      },
      {
        id: "25",
        name: "Syndra sorcière",
      },
      {
        id: "34",
        name: "Syndra gardienne des étoiles prestige",
      },
      {
        id: "44",
        name: "Syndra fleur spirituelle",
      },
      {
        id: "54",
        name: "Syndra de l'assemblée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Transcendance",
        type: "passive",
      },
      {
        id: "q",
        name: "Sphère noire",
        type: "spell",
      },
      {
        id: "w",
        name: "Force de la volonté",
        type: "spell",
      },
      {
        id: "e",
        name: "Dispersion des faibles",
        type: "spell",
      },
      {
        id: "r",
        name: "Déchaînement de puissance",
        type: "spell",
      },
    ],
  },
  tahmkench: {
    id: "tahmkench",
    name: "Tahm Kench",
    classes: ["tank", "support"],
    skins: [
      {
        id: "1",
        name: "Tahm Kench cordon-bleu",
      },
      {
        id: "3",
        name: "Tahm Kench numismate",
      },
      {
        id: "11",
        name: "Tahm Kench des arcanes",
      },
      {
        id: "20",
        name: "Tahm Kench de l'Ouest",
      },
      {
        id: "30",
        name: "Tahm Kench des rouleaux de ShanHai",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Goût acquis",
        type: "passive",
      },
      {
        id: "q",
        name: "Coup de langue",
        type: "spell",
      },
      {
        id: "w",
        name: "Plongée abyssale",
        type: "spell",
      },
      {
        id: "e",
        name: "Peau épaisse",
        type: "spell",
      },
      {
        id: "r",
        name: "Dévoration",
        type: "spell",
      },
    ],
  },
  taliyah: {
    id: "taliyah",
    name: "Taliyah",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Taliyah de Freljord",
      },
      {
        id: "11",
        name: "Taliyah gardienne des étoiles",
      },
      {
        id: "21",
        name: "Taliyah Crystalis",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Surf tellurique",
        type: "passive",
      },
      {
        id: "q",
        name: "Rafale filée",
        type: "spell",
      },
      {
        id: "w",
        name: "Poussée sismique",
        type: "spell",
      },
      {
        id: "e",
        name: "Défilage tellurique",
        type: "spell",
      },
      {
        id: "r",
        name: "Mur de la tisseuse",
        type: "spell",
      },
    ],
  },
  talon: {
    id: "talon",
    name: "Talon",
    classes: ["assassin"],
    skins: [
      {
        id: "3",
        name: "Talon lame du dragon",
      },
      {
        id: "5",
        name: "Talon lune de sang",
      },
      {
        id: "12",
        name: "Talon à l'épée tenace",
      },
      {
        id: "39",
        name: "Talon de l'Ouest prestige",
      },
      {
        id: "49",
        name: "Talon embuscade férale",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Saignée fatale",
        type: "passive",
      },
      {
        id: "q",
        name: "Diplomatie noxienne",
        type: "spell",
      },
      {
        id: "w",
        name: "Ratissage",
        type: "spell",
      },
      {
        id: "e",
        name: "Voie de l'assassin",
        type: "spell",
      },
      {
        id: "r",
        name: "Assaut ténébreux",
        type: "spell",
      },
    ],
  },
  taric: {
    id: "taric",
    name: "Taric",
    classes: ["support", "tank"],
    skins: [
      {
        id: "1",
        name: "Taric émeraude",
      },
      {
        id: "2",
        name: "Taric du cinquième âge",
      },
      {
        id: "3",
        name: "Taric hémolithe",
      },
      {
        id: "4",
        name: "Taric à Malibu",
      },
      {
        id: "18",
        name: "Taric astro-groove",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Plastronneur",
        type: "passive",
      },
      {
        id: "q",
        name: "Bénédiction stellaire",
        type: "spell",
      },
      {
        id: "w",
        name: "Bastion",
        type: "spell",
      },
      {
        id: "e",
        name: "Éblouissement",
        type: "spell",
      },
      {
        id: "r",
        name: "Lumière cosmique",
        type: "spell",
      },
    ],
  },
  teemo: {
    id: "teemo",
    name: "Teemo",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "1",
        name: "Teemo l'elfe heureux",
      },
      {
        id: "2",
        name: "Teemo éclaireur",
      },
      {
        id: "3",
        name: "Teemo blaireau",
      },
      {
        id: "4",
        name: "Teemo astronaute",
      },
      {
        id: "5",
        name: "Teemo lapin",
      },
      {
        id: "6",
        name: "Super Teemo",
      },
      {
        id: "7",
        name: "Teemo panda",
      },
      {
        id: "8",
        name: "Teemo de la section Oméga",
      },
      {
        id: "14",
        name: "Teemo diablotin",
      },
      {
        id: "18",
        name: "Teemo abeille",
      },
      {
        id: "25",
        name: "Teemo fleur spirituelle",
      },
      {
        id: "37",
        name: "Teemo pyrotechnicien",
      },
      {
        id: "47",
        name: "Teemo astro-groove",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Guérilla",
        type: "passive",
      },
      {
        id: "q",
        name: "Fléchette aveuglante",
        type: "spell",
      },
      {
        id: "w",
        name: "Vélocité",
        type: "spell",
      },
      {
        id: "e",
        name: "Tir toxique",
        type: "spell",
      },
      {
        id: "r",
        name: "Piège nocif",
        type: "spell",
      },
    ],
  },
  thresh: {
    id: "thresh",
    name: "Thresh",
    classes: ["support", "tank"],
    skins: [
      {
        id: "1",
        name: "Thresh des profondeurs",
      },
      {
        id: "2",
        name: "Thresh des Worlds2013",
      },
      {
        id: "3",
        name: "Thresh lune de sang",
      },
      {
        id: "5",
        name: "Thresh du pulsar sombre",
      },
      {
        id: "6",
        name: "Thresh de l'Ouest",
      },
      {
        id: "13",
        name: "Thresh Pulsefire",
      },
      {
        id: "17",
        name: "Thresh fleur spirituelle",
      },
      {
        id: "27",
        name: "Thresh libéré",
      },
      {
        id: "28",
        name: "Thresh dragon d'acier",
      },
      {
        id: "39",
        name: "Thresh empereur lunaire",
      },
      {
        id: "49",
        name: "Thresh élu de l'hiver",
      },
      {
        id: "59",
        name: "Thresh concierge",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Damnation",
        type: "passive",
      },
      {
        id: "q",
        name: "Peine capitale",
        type: "spell",
      },
      {
        id: "w",
        name: "Lien des ténèbres",
        type: "spell",
      },
      {
        id: "e",
        name: "Fauchage",
        type: "spell",
      },
      {
        id: "r",
        name: "La cage",
        type: "spell",
      },
    ],
  },
  tristana: {
    id: "tristana",
    name: "Tristana",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "1",
        name: "Tristana Riot Girl",
      },
      {
        id: "2",
        name: "Tristana l'elfe sérieuse",
      },
      {
        id: "3",
        name: "Tristana pompier",
      },
      {
        id: "4",
        name: "Tristana guérilla",
      },
      {
        id: "5",
        name: "Tristana pirate",
      },
      {
        id: "10",
        name: "Tristana dragonnière",
      },
      {
        id: "11",
        name: "Tristana sorcière",
      },
      {
        id: "12",
        name: "Tristana de la section Oméga",
      },
      {
        id: "24",
        name: "Tristana diablotin",
      },
      {
        id: "40",
        name: "Tristana Hextech",
      },
      {
        id: "41",
        name: "Tristana pyrotechnicienne",
      },
      {
        id: "51",
        name: "Tristana fleur spirituelle",
      },
      {
        id: "61",
        name: "Tristana de la cour féérique",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tir de précision",
        type: "passive",
      },
      {
        id: "q",
        name: "Tir rapide",
        type: "spell",
      },
      {
        id: "w",
        name: "Saut roquette",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge explosive",
        type: "spell",
      },
      {
        id: "r",
        name: "Tir à impact",
        type: "spell",
      },
    ],
  },
  trundle: {
    id: "trundle",
    name: "Trundle",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Trundle batteur",
      },
      {
        id: "2",
        name: "Trundle ferrailleur",
      },
      {
        id: "3",
        name: "Trundle classique",
      },
      {
        id: "6",
        name: "Trundle tueur de dragons",
      },
      {
        id: "12",
        name: "Trundle Nuit d'effroi",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tribut du roi",
        type: "passive",
      },
      {
        id: "q",
        name: "Morsure",
        type: "spell",
      },
      {
        id: "w",
        name: "Royaume gelé",
        type: "spell",
      },
      {
        id: "e",
        name: "Montagne de glace",
        type: "spell",
      },
      {
        id: "r",
        name: "Soumission",
        type: "spell",
      },
    ],
  },
  tryndamere: {
    id: "tryndamere",
    name: "Tryndamere",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "5",
        name: "Tryndamere sultan",
      },
      {
        id: "6",
        name: "Tryndamere du royaume en guerre",
      },
      {
        id: "7",
        name: "Tryndamere du cauchemar",
      },
      {
        id: "9",
        name: "Tryndamere techno-chimique",
      },
      {
        id: "10",
        name: "Tryndamere lune de sang",
      },
      {
        id: "18",
        name: "Tryndamere héraut de la nuit",
      },
      {
        id: "27",
        name: "Tryndamere héros de guerre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Vague de violence",
        type: "passive",
      },
      {
        id: "q",
        name: "Soif de sang",
        type: "spell",
      },
      {
        id: "w",
        name: "Moquerie",
        type: "spell",
      },
      {
        id: "e",
        name: "Balafre",
        type: "spell",
      },
      {
        id: "r",
        name: "Rage inépuisable",
        type: "spell",
      },
    ],
  },
  twistedfate: {
    id: "twistedfate",
    name: "Twisted Fate",
    classes: ["mage", "marksman"],
    skins: [
      {
        id: "5",
        name: "Twisted Fate de l'Ouest",
      },
      {
        id: "7",
        name: "Twisted Fate des enfers",
      },
      {
        id: "10",
        name: "Twisted Fate lune de sang",
      },
      {
        id: "11",
        name: "Twisted Fate Pulsefire",
      },
      {
        id: "13",
        name: "Twisted Fate de l'Odyssée",
      },
      {
        id: "25",
        name: "Twisted Fate cauchemar criminel",
      },
      {
        id: "36",
        name: "Twisted Fate astro-groove",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Dé pipé",
        type: "passive",
      },
      {
        id: "q",
        name: "Atouts",
        type: "spell",
      },
      {
        id: "w",
        name: "Bonne pioche",
        type: "spell",
      },
      {
        id: "e",
        name: "Paquet",
        type: "spell",
      },
      {
        id: "r",
        name: "Destinée",
        type: "spell",
      },
    ],
  },
  twitch: {
    id: "twitch",
    name: "Twitch",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "1",
        name: "Twitch le boss",
      },
      {
        id: "2",
        name: "Twitch de Whistler",
      },
      {
        id: "3",
        name: "Twitch médiéval",
      },
      {
        id: "4",
        name: "Twitch gangster",
      },
      {
        id: "5",
        name: "Twitch Vandale",
      },
      {
        id: "8",
        name: "Twitch de la section Oméga",
      },
      {
        id: "12",
        name: "Twitch roi des glaces",
      },
      {
        id: "36",
        name: "Twitch tueur de dragons",
      },
      {
        id: "45",
        name: "Twitch de l'Ouest",
      },
      {
        id: "55",
        name: "Twitch au fromage",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Venin mortel",
        type: "passive",
      },
      {
        id: "q",
        name: "Embuscade",
        type: "spell",
      },
      {
        id: "w",
        name: "Dose de venin",
        type: "spell",
      },
      {
        id: "e",
        name: "Contamination",
        type: "spell",
      },
      {
        id: "r",
        name: "Panique",
        type: "spell",
      },
    ],
  },
  udyr: {
    id: "udyr",
    name: "Udyr",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Udyr ceinture noire",
      },
      {
        id: "2",
        name: "Udyr primitif",
      },
      {
        id: "3",
        name: "Udyr gardien des esprits",
      },
      {
        id: "5",
        name: "Udyr oracle draconique",
      },
      {
        id: "6",
        name: "Udyr maître de l'encre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Canalisation des esprits",
        type: "passive",
      },
      {
        id: "q",
        name: "Griffe sauvage",
        type: "spell",
      },
      {
        id: "w",
        name: "Cape de fer",
        type: "spell",
      },
      {
        id: "e",
        name: "Piétinement flamboyant",
        type: "spell",
      },
      {
        id: "r",
        name: "Tempête spirituelle",
        type: "spell",
      },
    ],
  },
  urgot: {
    id: "urgot",
    name: "Urgot",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Crabgot ennemi géant",
      },
      {
        id: "2",
        name: "Urgot le boucher",
      },
      {
        id: "3",
        name: "Proto Urgot",
      },
      {
        id: "9",
        name: "Urgot de l'Ouest",
      },
      {
        id: "15",
        name: "Urgot cosplay Gardien des pyjamas",
      },
      {
        id: "23",
        name: "Urgot Nuit d'effroi",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Flammes purificatrices",
        type: "passive",
      },
      {
        id: "q",
        name: "Torpille corrosive",
        type: "spell",
      },
      {
        id: "w",
        name: "Géhenne",
        type: "spell",
      },
      {
        id: "e",
        name: "Mépris",
        type: "spell",
      },
      {
        id: "r",
        name: "Règne de la terreur",
        type: "spell",
      },
    ],
  },
  varus: {
    id: "varus",
    name: "Varus",
    classes: ["marksman", "mage"],
    skins: [
      {
        id: "2",
        name: "Varus à l'arc pur",
      },
      {
        id: "3",
        name: "Varus arctique",
      },
      {
        id: "4",
        name: "Varus cœur-de-cible",
      },
      {
        id: "6",
        name: "Varus du pulsar sombre",
      },
      {
        id: "7",
        name: "Varus conquérant",
      },
      {
        id: "16",
        name: "PROJET: Varus",
      },
      {
        id: "17",
        name: "Varus chasseur cosmique",
      },
      {
        id: "44",
        name: "Varus lune de neige",
      },
      {
        id: "53",
        name: "Varus empyréen",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Vengeance incarnée",
        type: "passive",
      },
      {
        id: "q",
        name: "Flèche perforante",
        type: "spell",
      },
      {
        id: "w",
        name: "Carquois meurtri",
        type: "spell",
      },
      {
        id: "e",
        name: "Pluie de flèches",
        type: "spell",
      },
      {
        id: "r",
        name: "Chaîne corruptrice",
        type: "spell",
      },
    ],
  },
  vayne: {
    id: "vayne",
    name: "Vayne",
    classes: ["marksman", "assassin"],
    skins: [
      {
        id: "4",
        name: "Vayne cœur-de-cible",
      },
      {
        id: "6",
        name: "Vayne à l'arbalète pure",
      },
      {
        id: "10",
        name: "Vayne voleuse d'âmes",
      },
      {
        id: "11",
        name: "PROJET : Vayne",
      },
      {
        id: "12",
        name: "Vayne pyrotechnicienne",
      },
      {
        id: "14",
        name: "Vayne fleur spirituelle",
      },
      {
        id: "25",
        name: "Vayne Sentinelle",
      },
      {
        id: "44",
        name: "Vayne héraut de l'aube",
      },
      {
        id: "55",
        name: "Vayne dracomancienne",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Chasseresse nocturne",
        type: "passive",
      },
      {
        id: "q",
        name: "Roulade",
        type: "spell",
      },
      {
        id: "w",
        name: "Carreaux d'argent",
        type: "spell",
      },
      {
        id: "e",
        name: "Condamnation",
        type: "spell",
      },
      {
        id: "r",
        name: "Combat ultime",
        type: "spell",
      },
    ],
  },
  veigar: {
    id: "veigar",
    name: "Veigar",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Veigar le mage blanc",
      },
      {
        id: "3",
        name: "Veigar barbe grise",
      },
      {
        id: "8",
        name: "Veigar boss de fin",
      },
      {
        id: "9",
        name: "Veigar de la section Oméga",
      },
      {
        id: "13",
        name: "Veigar sylvestre",
      },
      {
        id: "41",
        name: "Veigar dresseur de monstres",
      },
      {
        id: "51",
        name: "Veigar abeille",
      },
      {
        id: "60",
        name: "Veigar Nuit d'effroi",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pouvoir maléfique phénoménal",
        type: "passive",
      },
      {
        id: "q",
        name: "Coup malin",
        type: "spell",
      },
      {
        id: "w",
        name: "Matière noire",
        type: "spell",
      },
      {
        id: "e",
        name: "Profanation",
        type: "spell",
      },
      {
        id: "r",
        name: "Explosion primordiale",
        type: "spell",
      },
    ],
  },
  velkoz: {
    id: "velkoz",
    name: "Vel'Koz",
    classes: ["mage", "support"],
    skins: [
      {
        id: "1",
        name: "Proto Vel'Koz",
      },
      {
        id: "2",
        name: "Vel'Koz aux rayons purs",
      },
      {
        id: "4",
        name: "Vel'Koz infernal",
      },
      {
        id: "11",
        name: "Vel'Koz des glaces noires",
      },
      {
        id: "20",
        name: "Vel'Koz abeille",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Décomposition organique",
        type: "passive",
      },
      {
        id: "q",
        name: "Fission du plasma",
        type: "spell",
      },
      {
        id: "w",
        name: "Ouverture de faille",
        type: "spell",
      },
      {
        id: "e",
        name: "Dislocation tectonique",
        type: "spell",
      },
      {
        id: "r",
        name: "Désintégrateur de formes de vie",
        type: "spell",
      },
    ],
  },
  vex: {
    id: "vex",
    name: "Vex",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Vex héraut de l'aube",
      },
      {
        id: "10",
        name: "Vex empyréenne",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Malheur et Désespoir",
        type: "passive",
      },
      {
        id: "q",
        name: "Mistral perdant",
        type: "spell",
      },
      {
        id: "w",
        name: "Lâchez-moi!",
        type: "spell",
      },
      {
        id: "e",
        name: "Ténèbres imminentes",
        type: "spell",
      },
      {
        id: "r",
        name: "Déferlement d'Ombre",
        type: "spell",
      },
    ],
  },
  vi: {
    id: "vi",
    name: "Vi",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "2",
        name: "Agent Vi",
      },
      {
        id: "3",
        name: "Vi séductrice",
      },
      {
        id: "4",
        name: "Vi démoniaque",
      },
      {
        id: "5",
        name: "Vi du royaume en guerre",
      },
      {
        id: "11",
        name: "PROJET : Vi",
      },
      {
        id: "12",
        name: "Vi bourreau des cœurs",
      },
      {
        id: "20",
        name: "Vi psychoguerrière",
      },
      {
        id: "29",
        name: "Vi d'Arcane",
      },
      {
        id: "39",
        name: "Vi embuscade férale",
      },
      {
        id: "48",
        name: "Vi bagarreuse d'Arcane",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Bouclier antichoc",
        type: "passive",
      },
      {
        id: "q",
        name: "Brise-coffre",
        type: "spell",
      },
      {
        id: "w",
        name: "Coups fracassants",
        type: "spell",
      },
      {
        id: "e",
        name: "Force implacable",
        type: "spell",
      },
      {
        id: "r",
        name: "Mise en demeure",
        type: "spell",
      },
    ],
  },
  viego: {
    id: "viego",
    name: "Viego",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Viego bête lunaire",
      },
      {
        id: "10",
        name: "Viego Dissonance de Pentakill",
      },
      {
        id: "21",
        name: "Roi Viego",
      },
      {
        id: "30",
        name: "Viego combattant spirituel",
      },
      {
        id: "37",
        name: "Viego des Worlds2024",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Assujettissement",
        type: "passive",
      },
      {
        id: "q",
        name: "Lame du roi déchu",
        type: "spell",
      },
      {
        id: "w",
        name: "Gueule spectrale",
        type: "spell",
      },
      {
        id: "e",
        name: "Chemin tourmenté",
        type: "spell",
      },
      {
        id: "r",
        name: "Cœur brisé",
        type: "spell",
      },
    ],
  },
  viktor: {
    id: "viktor",
    name: "Viktor",
    classes: ["mage"],
    skins: [
      {
        id: "3",
        name: "Viktor créateur",
      },
      {
        id: "4",
        name: "Viktor thanatophore",
      },
      {
        id: "5",
        name: "Viktor psychoguerrier",
      },
      {
        id: "14",
        name: "Viktor de l'Ouest",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Glorieuse évolution",
        type: "passive",
      },
      {
        id: "q",
        name: "Siphonnage",
        type: "spell",
      },
      {
        id: "w",
        name: "Champ gravitationnel",
        type: "spell",
      },
      {
        id: "e",
        name: "Rayon de la mort",
        type: "spell",
      },
      {
        id: "r",
        name: "Tempête du chaos",
        type: "spell",
      },
    ],
  },
  vladimir: {
    id: "vladimir",
    name: "Vladimir",
    classes: ["mage", "fighter"],
    skins: [
      {
        id: "1",
        name: "Comte Vladimir",
      },
      {
        id: "2",
        name: "Marquis Vladimir",
      },
      {
        id: "6",
        name: "Vladimir voleur d'âmes",
      },
      {
        id: "8",
        name: "Vladimir des eaux sombres",
      },
      {
        id: "14",
        name: "Vladimir héraut de la nuit",
      },
      {
        id: "21",
        name: "Vladimir dévoreur cosmique",
      },
      {
        id: "30",
        name: "Vladimir Café Chouchous",
      },
      {
        id: "39",
        name: "Vladimir de l'Alliance brisée",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Pacte de sang",
        type: "passive",
      },
      {
        id: "q",
        name: "Transfusion",
        type: "spell",
      },
      {
        id: "w",
        name: "Bain de sang",
        type: "spell",
      },
      {
        id: "e",
        name: "Vagues de sang",
        type: "spell",
      },
      {
        id: "r",
        name: "Peste sanguine",
        type: "spell",
      },
    ],
  },
  volibear: {
    id: "volibear",
    name: "Volibear",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Fulguro Volibear",
      },
      {
        id: "2",
        name: "Volibear nordique",
      },
      {
        id: "3",
        name: "Volibear runique",
      },
      {
        id: "6",
        name: "Volibear aux mille piques",
      },
      {
        id: "7",
        name: "Volibear dragon de la dualité",
      },
      {
        id: "9",
        name: "Volibear dragon de la dualité prestige",
      },
      {
        id: "19",
        name: "Volibear esprit d'encre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Tempête impitoyable",
        type: "passive",
      },
      {
        id: "q",
        name: "Coup fulgurant",
        type: "spell",
      },
      {
        id: "w",
        name: "Folie mutilatrice",
        type: "spell",
      },
      {
        id: "e",
        name: "Foudroiement",
        type: "spell",
      },
      {
        id: "r",
        name: "Tempête incarnée",
        type: "spell",
      },
    ],
  },
  warwick: {
    id: "warwick",
    name: "Warwick",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Warwick gris",
      },
      {
        id: "2",
        name: "Urf le lamantin",
      },
      {
        id: "3",
        name: "Grand méchant Warwick",
      },
      {
        id: "4",
        name: "Warwick de la toundra",
      },
      {
        id: "5",
        name: "Warwick sauvage",
      },
      {
        id: "6",
        name: "Warwick de feu",
      },
      {
        id: "7",
        name: "Warwick hyène",
      },
      {
        id: "9",
        name: "Urfwick",
      },
      {
        id: "10",
        name: "Warwick gardien lunaire",
      },
      {
        id: "16",
        name: "PROJET: Warwick",
      },
      {
        id: "35",
        name: "Warwick dieu ancien",
      },
      {
        id: "45",
        name: "Warwick élu de l'hiver",
      },
      {
        id: "46",
        name: "Warwick élu de l'hiver prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Soif inextinguible",
        type: "passive",
      },
      {
        id: "q",
        name: "Dents de la bête",
        type: "spell",
      },
      {
        id: "w",
        name: "Traque sanguinaire",
        type: "spell",
      },
      {
        id: "e",
        name: "Hurlement bestial",
        type: "spell",
      },
      {
        id: "r",
        name: "Contrainte infinie",
        type: "spell",
      },
    ],
  },
  xayah: {
    id: "xayah",
    name: "Xayah",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Xayah du crépuscule cosmique",
      },
      {
        id: "2",
        name: "Xayah cœur tendre",
      },
      {
        id: "4",
        name: "Xayah gardienne des étoiles",
      },
      {
        id: "8",
        name: "Xayah sylvestre",
      },
      {
        id: "17",
        name: "Xayah phénix courageux",
      },
      {
        id: "28",
        name: "Xayah des arcanes",
      },
      {
        id: "37",
        name: "Xayah de l'Alliance brisée",
      },
      {
        id: "38",
        name: "Xayah gardienne des étoiles repentie",
      },
      {
        id: "47",
        name: "Xayah chauve-souris de combat",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Plumes perçantes",
        type: "passive",
      },
      {
        id: "q",
        name: "Dagues jumelles",
        type: "spell",
      },
      {
        id: "w",
        name: "Plumage mortel",
        type: "spell",
      },
      {
        id: "e",
        name: "Appel des lames",
        type: "spell",
      },
      {
        id: "r",
        name: "Rafale de plumes",
        type: "spell",
      },
    ],
  },
  xerath: {
    id: "xerath",
    name: "Xerath",
    classes: ["mage", "support"],
    skins: [
      {
        id: "5",
        name: "Xerath du pulsar sombre",
      },
      {
        id: "12",
        name: "Xerath des arcanes",
      },
      {
        id: "21",
        name: "Xerath astronaute",
      },
      {
        id: "30",
        name: "Xerath Crystalis Indomitus",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Afflux de mana",
        type: "passive",
      },
      {
        id: "q",
        name: "Rayon arcanique",
        type: "spell",
      },
      {
        id: "w",
        name: "Œil de la destruction",
        type: "spell",
      },
      {
        id: "e",
        name: "Orbe d'électrocution",
        type: "spell",
      },
      {
        id: "r",
        name: "Rite arcanique",
        type: "spell",
      },
    ],
  },
  xinzhao: {
    id: "xinzhao",
    name: "Xin Zhao",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "2",
        name: "Xin Zhao impérial",
      },
      {
        id: "3",
        name: "Xin Zhao Viscero",
      },
      {
        id: "5",
        name: "Xin Zhao du royaume en guerre",
      },
      {
        id: "6",
        name: "Xin Zhao agent secret",
      },
      {
        id: "13",
        name: "Xin Zhao tueur de dragons",
      },
      {
        id: "20",
        name: "Xin Zhao défenseur cosmique",
      },
      {
        id: "27",
        name: "Xin Zhao maraudeur",
      },
      {
        id: "36",
        name: "Xin Zhao pyrotechnicien",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Détermination",
        type: "passive",
      },
      {
        id: "q",
        name: "Frappe des trois serres",
        type: "spell",
      },
      {
        id: "w",
        name: "Vent et foudre",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge audacieuse",
        type: "spell",
      },
      {
        id: "r",
        name: "Garde circulaire",
        type: "spell",
      },
    ],
  },
  yasuo: {
    id: "yasuo",
    name: "Yasuo",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Yasuo de l'Ouest",
      },
      {
        id: "2",
        name: "PROJET : Yasuo",
      },
      {
        id: "3",
        name: "Yasuo lune de sang",
      },
      {
        id: "9",
        name: "Yasuo héraut de la nuit",
      },
      {
        id: "10",
        name: "Yasuo de l'Odyssée",
      },
      {
        id: "17",
        name: "Yasuo boss de combat",
      },
      {
        id: "18",
        name: "True Damage Yasuo",
      },
      {
        id: "36",
        name: "Yasuo fleur spirituelle",
      },
      {
        id: "45",
        name: "Yasuo loup de mer",
      },
      {
        id: "54",
        name: "Yasuo dragon de la vérité",
      },
      {
        id: "55",
        name: "Yasuo dragon des rêves",
      },
      {
        id: "56",
        name: "Yasuo guerrier d'encre",
      },
      {
        id: "57",
        name: "Yasuo guerrier d'encre prestige",
      },
      {
        id: "68",
        name: "Yasuo de la prédiction",
      },
      {
        id: "77",
        name: "Yasuo loup de combat",
      },
      {
        id: "87",
        name: "Yasuo héraut de la nuit genèse",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Voie du vagabond",
        type: "passive",
      },
      {
        id: "q",
        name: "Tempête d'acier",
        type: "spell",
      },
      {
        id: "w",
        name: "Mur de vent",
        type: "spell",
      },
      {
        id: "e",
        name: "Cercle tranchant",
        type: "spell",
      },
      {
        id: "r",
        name: "Dernier soupir",
        type: "spell",
      },
    ],
  },
  yone: {
    id: "yone",
    name: "Yone",
    classes: ["fighter", "assassin"],
    skins: [
      {
        id: "1",
        name: "Yone fleur spirituelle",
      },
      {
        id: "10",
        name: "Yone de l'Académie du combat",
      },
      {
        id: "19",
        name: "Yone héraut de l'aube",
      },
      {
        id: "35",
        name: "Yone guerrier d'encre",
      },
      {
        id: "46",
        name: "HEARTSTEEL Yone prestige",
      },
      {
        id: "55",
        name: "Yone de l'Ouest",
      },
      {
        id: "58",
        name: "Yone de l'Ouest pacificateur",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Voie du chasseur",
        type: "passive",
      },
      {
        id: "q",
        name: "Acier mortel",
        type: "spell",
      },
      {
        id: "w",
        name: "Fendoir spirituel",
        type: "spell",
      },
      {
        id: "e",
        name: "Libération spirituelle",
        type: "spell",
      },
      {
        id: "r",
        name: "Destin scellé",
        type: "spell",
      },
    ],
  },
  yorick: {
    id: "yorick",
    name: "Yorick",
    classes: ["fighter", "tank"],
    skins: [
      {
        id: "1",
        name: "Yorick ensevelisseur",
      },
      {
        id: "3",
        name: "Yorick à la pelle pure",
      },
      {
        id: "12",
        name: "Yorick résistant",
      },
      {
        id: "30",
        name: "Yorick fleur spirituelle",
      },
      {
        id: "40",
        name: "Yorick du pulsar sombre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Berger des âmes",
        type: "passive",
      },
      {
        id: "q",
        name: "Derniers sacrements",
        type: "spell",
      },
      {
        id: "w",
        name: "Sombre cortège",
        type: "spell",
      },
      {
        id: "e",
        name: "Brume endeuillée",
        type: "spell",
      },
      {
        id: "r",
        name: "Élégie des Îles",
        type: "spell",
      },
    ],
  },
  yuumi: {
    id: "yuumi",
    name: "Yuumi",
    classes: ["support", "mage"],
    skins: [
      {
        id: "1",
        name: "Proviseur Yuumi de l'Académie",
      },
      {
        id: "28",
        name: "Yuumi sorcière",
      },
      {
        id: "49",
        name: "Yuumi cyber-chat",
      },
      {
        id: "50",
        name: "Yuumi cyber-chat prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Chat-maraderie",
        type: "passive",
      },
      {
        id: "q",
        name: "Tête chat-sseuse",
        type: "spell",
      },
      {
        id: "w",
        name: "Félin pour l'autre!",
        type: "spell",
      },
      {
        id: "e",
        name: "Zouuu!",
        type: "spell",
      },
      {
        id: "r",
        name: "Chat-pitre final",
        type: "spell",
      },
    ],
  },
  zac: {
    id: "zac",
    name: "Zac",
    classes: ["tank", "fighter"],
    skins: [
      {
        id: "1",
        name: "Zac arme spéciale",
      },
      {
        id: "7",
        name: "Proto Zac",
      },
      {
        id: "14",
        name: "Zac empyréen",
      },
      {
        id: "24",
        name: "Zac nachos",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Division cellulaire",
        type: "passive",
      },
      {
        id: "q",
        name: "Étirements",
        type: "spell",
      },
      {
        id: "w",
        name: "Matière instable",
        type: "spell",
      },
      {
        id: "e",
        name: "Fronde",
        type: "spell",
      },
      {
        id: "r",
        name: "Boing!",
        type: "spell",
      },
    ],
  },
  zed: {
    id: "zed",
    name: "Zed",
    classes: ["assassin"],
    skins: [
      {
        id: "1",
        name: "Zed électrolame",
      },
      {
        id: "3",
        name: "PROJET : Zed",
      },
      {
        id: "10",
        name: "Zed des Worlds2016",
      },
      {
        id: "11",
        name: "Zed thanatophore",
      },
      {
        id: "13",
        name: "Zed fléau galactique",
      },
      {
        id: "15",
        name: "Zed psychoguerrier",
      },
      {
        id: "30",
        name: "PROJET: Zed prestige",
      },
      {
        id: "31",
        name: "Zed séducteur",
      },
      {
        id: "38",
        name: "Zed empyréen",
      },
      {
        id: "49",
        name: "Zed du Voyage immortel",
      },
      {
        id: "58",
        name: "Zed lune de sang",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mépris des faibles",
        type: "passive",
      },
      {
        id: "q",
        name: "Shuriken-rasoir",
        type: "spell",
      },
      {
        id: "w",
        name: "Ombre vivante",
        type: "spell",
      },
      {
        id: "e",
        name: "Taillade des ombres",
        type: "spell",
      },
      {
        id: "r",
        name: "Marque de la mort",
        type: "spell",
      },
    ],
  },
  zeri: {
    id: "zeri",
    name: "Zeri",
    classes: ["marksman"],
    skins: [
      {
        id: "1",
        name: "Zeri rose fanée",
      },
      {
        id: "19",
        name: "Zeri du Voyage immortel",
      },
      {
        id: "28",
        name: "Zeri Nuit d'effroi",
      },
      {
        id: "29",
        name: "Zeri Nuit d'effroi prestige",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Batterie vivante",
        type: "passive",
      },
      {
        id: "q",
        name: "Rafale",
        type: "spell",
      },
      {
        id: "w",
        name: "Laser électrocuteur",
        type: "spell",
      },
      {
        id: "e",
        name: "Charge ionique",
        type: "spell",
      },
      {
        id: "r",
        name: "Éruption électrique",
        type: "spell",
      },
    ],
  },
  ziggs: {
    id: "ziggs",
    name: "Ziggs",
    classes: ["mage"],
    skins: [
      {
        id: "3",
        name: "Ziggs bombe à eau",
      },
      {
        id: "4",
        name: "Ziggs des neiges",
      },
      {
        id: "5",
        name: "Ziggs maître arcaniste",
      },
      {
        id: "6",
        name: "Ziggs boss de combat",
      },
      {
        id: "7",
        name: "Ziggs de l'Odyssée",
      },
      {
        id: "14",
        name: "Ziggs folie sucrée",
      },
      {
        id: "23",
        name: "Ziggs Hextech",
      },
      {
        id: "33",
        name: "Ziggs La Ilusión",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Mèche courte",
        type: "passive",
      },
      {
        id: "q",
        name: "Bombe rebondissante",
        type: "spell",
      },
      {
        id: "w",
        name: "Charge explosive",
        type: "spell",
      },
      {
        id: "e",
        name: "Mines Hexplosives",
        type: "spell",
      },
      {
        id: "r",
        name: "Méga bombe infernale",
        type: "spell",
      },
    ],
  },
  zilean: {
    id: "zilean",
    name: "Zilean",
    classes: ["support", "mage"],
    skins: [
      {
        id: "4",
        name: "Zilean voyageur du temps",
      },
      {
        id: "5",
        name: "Zilean lune de sang",
      },
      {
        id: "6",
        name: "Zilean folie sucrée",
      },
      {
        id: "14",
        name: "Zilean élu de l'hiver",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Temps dans une bouteille",
        type: "passive",
      },
      {
        id: "q",
        name: "Bombe à retardement",
        type: "spell",
      },
      {
        id: "w",
        name: "Retour rapide",
        type: "spell",
      },
      {
        id: "e",
        name: "Distorsion temporelle",
        type: "spell",
      },
      {
        id: "r",
        name: "Retour temporel",
        type: "spell",
      },
    ],
  },
  zoe: {
    id: "zoe",
    name: "Zoé",
    classes: ["mage"],
    skins: [
      {
        id: "1",
        name: "Zoé cyberpop",
      },
      {
        id: "9",
        name: "Zoé gardienne des étoiles",
      },
      {
        id: "18",
        name: "Zoé arcaniste",
      },
      {
        id: "22",
        name: "Zoé élue de l'hiver",
      },
      {
        id: "33",
        name: "Zoé du pulsar sombre",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Plus d'étincelles!",
        type: "passive",
      },
      {
        id: "q",
        name: "Astro-pong!",
        type: "spell",
      },
      {
        id: "w",
        name: "Voleuse de sorts",
        type: "spell",
      },
      {
        id: "e",
        name: "Bulle soporifique",
        type: "spell",
      },
      {
        id: "r",
        name: "Bond dimensionnel",
        type: "spell",
      },
    ],
  },
  zyra: {
    id: "zyra",
    name: "Zyra",
    classes: ["mage", "support"],
    skins: [
      {
        id: "2",
        name: "Zyra hantée",
      },
      {
        id: "4",
        name: "Zyra sorcière draconique",
      },
      {
        id: "5",
        name: "Zyra de l'assemblée",
      },
      {
        id: "16",
        name: "Zyra cauchemar criminel",
      },
      {
        id: "36",
        name: "Zyra mythificatrice",
      },
      {
        id: "46",
        name: "Zyra ville démoniaque",
      },
      {
        id: "55",
        name: "Zyra lune de sang",
      },
    ],
    spells: [
      {
        id: "p",
        name: "Jardin de ronces",
        type: "passive",
      },
      {
        id: "q",
        name: "Épines funestes",
        type: "spell",
      },
      {
        id: "w",
        name: "Croissance incontrôlée",
        type: "spell",
      },
      {
        id: "e",
        name: "Racines fixatrices",
        type: "spell",
      },
      {
        id: "r",
        name: "Ronces étrangleuses",
        type: "spell",
      },
    ],
  },
};
