import { createCanvas, loadImage } from "@napi-rs/canvas";
import { LoLChampion, lolChampions } from "./data";

export const LOL_CHAMPION_IMAGE_PATH_BASE = "assets/images/champion";
export const LOL_CHAMPION_SPELL_IMAGE_PATH_BASE = "assets/images/spell";
export const LOL_CHAMPION_SKIN_IMAGE_PATH_BASE = "assets/images/skin";

export const dualClassLoLChampions = Object.entries(lolChampions)
  .filter(([, champion]) => champion.classes.length === 2)
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof lolChampions
  );

export const lolChampionsWithSkin = Object.entries(lolChampions)
  .filter(([, champion]) => (champion?.skins || []).length > 0)
  .reduce(
    (acc, [id, value]) => ({ ...acc, [id]: value }),
    {} as typeof lolChampions
  );

export const getRandomLoLChampionSpell = (champion: LoLChampion) => {
  const abilityIndex = Math.floor(Math.random() * champion.spells.length);
  return champion.spells[abilityIndex];
};

export const getRandomLoLChampionSkin = (champion: LoLChampion) => {
  const skinIndex = Math.floor(Math.random() * (champion?.skins || []).length);
  return champion.skins?.[skinIndex];
};

export const getRandomLoLChampionFrom = (champions: {
  [id: string]: LoLChampion;
}) => {
  const lolChampionIndex = Math.floor(
    Math.random() * Object.entries(champions).length
  );
  return Object.entries(champions)[lolChampionIndex][1];
};

export const getWhosThatLoLChampionImage = async (champion: LoLChampion) => {
  const blurFactor = Math.floor(Math.random() * 5 + 10);
  const championImage = await loadImage(
    `./${LOL_CHAMPION_IMAGE_PATH_BASE}/${champion?.id}.png`
  );
  const imageCanvas = createCanvas(championImage.width, championImage.height);
  const imageContext = imageCanvas.getContext("2d");

  const championCanvas = createCanvas(
    championImage.width / blurFactor,
    championImage.height / blurFactor
  );
  const championContext = championCanvas.getContext("2d");
  championContext.imageSmoothingEnabled = false;
  championContext.filter = "grayscale(100%)";
  championContext.drawImage(
    championImage,
    0,
    0,
    championImage.width / blurFactor,
    championImage.height / blurFactor
  );

  imageContext.drawImage(
    championCanvas,
    0,
    0,
    championImage.width,
    championImage.height
  );
  return imageCanvas.encode("png");
};

export const getWhosThatLoLChampionSkinImage = async (
  skinId: string | null
) => {
  const championSkinImage = await loadImage(
    `./${LOL_CHAMPION_SKIN_IMAGE_PATH_BASE}/${skinId}.jpg`
  );
  const rectWidth = Math.round(championSkinImage.width / 3);
  const rectHeight = Math.round(championSkinImage.height / 2);
  const randomX = Math.floor(
    Math.random() * (championSkinImage.width - rectWidth)
  );
  const randomY = Math.floor(
    Math.random() * (championSkinImage.height - rectHeight)
  );

  const imageCanvas = createCanvas(rectWidth, rectHeight);
  const imageContext = imageCanvas.getContext("2d");

  imageContext.drawImage(
    championSkinImage,
    randomX,
    randomY,
    championSkinImage.width,
    championSkinImage.height,
    0,
    0,
    championSkinImage.width,
    championSkinImage.height
  );
  return imageCanvas.encode("png");
};
