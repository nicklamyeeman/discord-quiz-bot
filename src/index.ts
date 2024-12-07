import "./database/database";

import { ActivityType, Client, GatewayIntentBits } from "discord.js";

import { config } from "./config";
import { GameThemes, HOUR } from "./types/constants";

import { deployCommands } from "./commands";
import { commands } from "./slash_commands";
import { commandNotAllowedInChannel, initUser, runOnInterval } from "./utils";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Discord bot is ready as ${client.user?.tag}! 🤖`);
  console.log(
    `https://discordapp.com/oauth2/authorize?client_id=${client.user?.id}&scope=bot%20applications.commands`
  );

  runOnInterval(() => {
    const randomThemeIndex = Math.floor(Math.random() * GameThemes.length);
    client.user?.setActivity(GameThemes[randomThemeIndex], {
      type: ActivityType.Playing,
    });
  }, HOUR * 12);
});

client.on("guildAvailable", async (guild) => {
  await deployCommands(guild.id);
});

client.on("guildCreate", async (guild) => {
  await deployCommands(guild.id);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  await initUser(interaction.user);

  const command = commands[interaction.commandName as keyof typeof commands];
  if (command) {
    const notAllowedMessage = commandNotAllowedInChannel(
      interaction,
      command.channel
    );
    if (notAllowedMessage) {
      return interaction.reply(notAllowedMessage);
    }

    command.execute(interaction);
  }
});

client.login(config.DISCORD_BOT_TOKEN);
