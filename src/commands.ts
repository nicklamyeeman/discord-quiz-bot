import { REST, Routes } from "discord.js";

import { config } from "./config";
import { commands } from "./slash_commands";

const commandsData = Object.values(commands).map((command) => command.data);
const rest = new REST({ version: "10" }).setToken(config.DISCORD_BOT_TOKEN);

export const deployCommands = async (guildId: string) => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(
      Routes.applicationGuildCommands(config.DISCORD_APP_ID, guildId),
      {
        body: commandsData,
      }
    );
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
