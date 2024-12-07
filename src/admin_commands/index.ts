import { Message } from "discord.js";
import { guildConfig } from "../config";
import { gift } from "./gift/gift";
import { pause } from "./pause/pause";
import { start } from "./start/start";

export const adminCommands = [start, pause, gift];

export const checkAdminCommand = (message: Message) => {
  const command = adminCommands.find((command) =>
    new RegExp(`^!${command.name}\\b`).test(message.content)
  );
  if (!command) {
    return;
  }
  const userId = message.author.id;
  if (guildConfig.DISCORD_OWNER_ID !== userId) {
    return message.reply("Vous ne pouvez pas utiliser cette commande.");
  }
  return command.execute(message);
};
