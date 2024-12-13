import { createCanvas, ImageData, loadImage } from "@napi-rs/canvas";
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
  const blurFactor = Math.round(Math.random() * 7 + 12);
  const championImage = await loadImage(
    `./${LOL_CHAMPION_IMAGE_PATH_BASE}/${champion?.id}.png`
  );
  const width = Math.round(championImage.width / blurFactor) * blurFactor;
  const height = Math.round(championImage.height / blurFactor) * blurFactor;

  const imageCanvas = createCanvas(width, height);
  const imageContext = imageCanvas.getContext("2d");

  const championCanvas = createCanvas(width, height);
  const championContext = championCanvas.getContext("2d");
  championContext.filter = "grayscale(100%)";
  championContext.drawImage(championImage, 0, 0, width, height);
  const { data: imageData } = championContext.getImageData(0, 0, width, height);
  for (let i = 0; i < width / blurFactor; i++) {
    for (let j = 0; j < height / blurFactor; j++) {
      let r = 0;
      let g = 0;
      let b = 0;
      for (let x = 0; x < blurFactor; x++) {
        for (let y = 0; y < blurFactor; y++) {
          const index = (i * blurFactor + x + (j * blurFactor + y) * width) * 4;
          r += imageData[index];
          g += imageData[index + 1];
          b += imageData[index + 2];
        }
      }
      r = Math.round(r / blurFactor ** 2);
      g = Math.round(g / blurFactor ** 2);
      b = Math.round(b / blurFactor ** 2);
      for (let x = 0; x < blurFactor; x++) {
        for (let y = 0; y < blurFactor; y++) {
          const index = (i * blurFactor + x + (j * blurFactor + y) * width) * 4;
          imageData[index] = r;
          imageData[index + 1] = g;
          imageData[index + 2] = b;
        }
      }
    }
  }
  championContext.putImageData(new ImageData(imageData, width, height), 0, 0);

  imageContext.drawImage(championCanvas, 0, 0, width, height);
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
