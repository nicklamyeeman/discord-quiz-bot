export const multipliers = [1.5, 1.7, 2.4, 0.2, 1.2, 0.1, 0.3, 0.5];
export const arrows = ["↖️", "⬆️", "↗️", "⬅️", "➡️", "↙️", "⬇️", "↘️"];

export const getRandomMultiplier = () =>
  multipliers[Math.floor(Math.random() * multipliers.length)];

export const getMatchingArrow = (multiplier: number) =>
  arrows[multipliers.findIndex((m) => m === multiplier)];
