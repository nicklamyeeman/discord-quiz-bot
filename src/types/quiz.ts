import {
  AttachmentBuilder,
  EmbedBuilder,
  EmojiIdentifierResolvable,
  Message,
} from "discord.js";

export type Quiz = {
  isLive: boolean;
  rushTime?: "all" | "pokemon" | "lol" | null;
};

export type QuizNextQuestion = {
  embed: EmbedBuilder;
  file?: AttachmentBuilder;
  answer: RegExp;
  reward: number;
  incorrectReaction?: (message: string) => EmojiIdentifierResolvable | null;
  onEnd: (message: Message) => void;
};
