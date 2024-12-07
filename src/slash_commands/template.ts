import { CommandInteraction } from "discord.js";
import { CommandConfig } from "../types/commands";

export const template: CommandConfig = {
  name: "commandName",
  description: "Description de la commande",
  args: [],
  execute: async (interaction: CommandInteraction) => {},
};
