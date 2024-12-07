import {
  APIApplicationCommandIntegerOption,
  APIApplicationCommandStringOption,
  APIApplicationCommandUserOption,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export type CommandConfig = {
  name: SlashCommandBuilder["name"];
  description: SlashCommandBuilder["description"];
  args?: Array<
    | APIApplicationCommandStringOption
    | APIApplicationCommandIntegerOption
    | APIApplicationCommandUserOption
  >;
  channel?: string;
  execute: (interaction: CommandInteraction) => any;
};
