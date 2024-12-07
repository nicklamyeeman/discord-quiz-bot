export const coinImage = {
  heads: "assets/images/currency/flipcoin_heads.png",
  tails: "assets/images/currency/flipcoin_tails.png",
} as const;

export const flipCoin = () => (Math.random() < 0.5 ? "heads" : "tails");
