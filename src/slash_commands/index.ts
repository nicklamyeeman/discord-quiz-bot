import {
  APIApplicationCommandIntegerOption,
  APIApplicationCommandStringOption,
  ApplicationCommandOptionType,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

import { balance } from "./balance/balance";
import { flip } from "./flip/flip";
import { ping } from "./ping/ping";
import { spin } from "./spin/spin";
import { statistics } from "./statistics/statistics";
import { top } from "./top/top";

export const commands = [ping, balance, flip, spin, statistics, top].reduce(
  (acc, command) => {
    const data = new SlashCommandBuilder()
      .setName(command.name)
      .setDescription(command.description);
    for (const arg of command.args ?? []) {
      switch (arg.type) {
        case ApplicationCommandOptionType.Integer: {
          data.addIntegerOption((option) =>
            option
              .setName(arg.name)
              .setDescription(arg.description)
              .setRequired(arg.required ?? false)
              .setMinValue(arg?.min_value ?? 0)
              .addChoices(
                (arg as APIApplicationCommandIntegerOption).choices ?? []
              )
          );
          break;
        }
        case ApplicationCommandOptionType.String: {
          data.addStringOption((option) =>
            option
              .setName(arg.name)
              .setDescription(arg.description)
              .setRequired(arg.required ?? false)
              .addChoices(
                (arg as APIApplicationCommandStringOption).choices ?? []
              )
          );
          break;
        }
        case ApplicationCommandOptionType.User: {
          data.addUserOption((option) =>
            option
              .setName(arg.name)
              .setDescription(arg.description)
              .setRequired(arg.required ?? false)
          );
          break;
        }
      }
    }
    return {
      ...acc,
      [command.name]: {
        data,
        channel: command.channel,
        execute: command.execute,
      },
    };
  },
  {} as {
    [command: string]: {
      data: SlashCommandBuilder;
      channel?: string;
      execute: (interaction: CommandInteraction) => any;
    };
  }
);
