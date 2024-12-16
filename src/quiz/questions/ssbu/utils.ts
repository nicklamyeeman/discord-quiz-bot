import { createCanvas, loadImage } from "@napi-rs/canvas";
import { aNewFoeHasAppearedBackgroundImage } from "../../utils";
import { SSBUFighter } from "./data";

export const SSBU_FIGHTER_IMAGE_PATH_BASE = "assets/images/ssbu/fighters";
export const SSBU_FIGHTER_SERIE_IMAGE_PATH_BASE = "assets/images/ssbu/series";

export const getRandomFighterFrom = (ssbuFighters: {
  [id: string]: SSBUFighter;
}) => {
  const ssbuFighterIndex = Math.floor(
    Math.random() * Object.entries(ssbuFighters).length
  );
  return Object.entries(ssbuFighters)[ssbuFighterIndex][1];
};

export const getANewFoeHasApproachedImage = async (
  ssbuFighter: SSBUFighter,
  isFinal?: boolean
) => {
  const imageCanvas = createCanvas(
    aNewFoeHasAppearedBackgroundImage.width,
    aNewFoeHasAppearedBackgroundImage.height
  );
  const imageContext = imageCanvas.getContext("2d");
  imageContext.drawImage(
    aNewFoeHasAppearedBackgroundImage,
    0,
    0,
    aNewFoeHasAppearedBackgroundImage.width,
    aNewFoeHasAppearedBackgroundImage.height
  );

  const ssbuFighterImage = await loadImage(
    `./${SSBU_FIGHTER_IMAGE_PATH_BASE}/${ssbuFighter.id}.png`
  );
  if (!isFinal) {
    const pokemonCanvas = createCanvas(
      ssbuFighterImage.width,
      ssbuFighterImage.height
    );
    const pokemonContext = pokemonCanvas.getContext("2d");
    pokemonContext.fillStyle = "#000";
    pokemonContext.fillRect(
      0,
      0,
      ssbuFighterImage.width,
      ssbuFighterImage.height
    );
    pokemonContext.globalCompositeOperation = "destination-in";
    pokemonContext.drawImage(
      ssbuFighterImage,
      0,
      0,
      ssbuFighterImage.width,
      ssbuFighterImage.height
    );
    imageContext.drawImage(pokemonCanvas, 130, 20);
  } else {
    imageContext.drawImage(
      ssbuFighterImage,
      130,
      20,
      ssbuFighterImage.width,
      ssbuFighterImage.height
    );
  }
  return imageCanvas.encode("png");
};
