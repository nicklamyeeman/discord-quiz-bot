import "./database/database";

import { ActivityType, Client, GatewayIntentBits } from "discord.js";

import { config, guildConfig } from "./config";
import { GameThemes, HOUR } from "./types/constants";

import { checkAdminCommand } from "./admin_commands";
import { deployCommands } from "./commands";
import { startQuiz } from "./quiz/quiz";
import { commands } from "./slash_commands";
import {
  backupDatabase,
  commandNotAllowedInChannel,
  initUser,
  logUser,
  runOnInterval,
} from "./utils";

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
    backupDatabase(
      client.guilds.cache.find((guild) => guild.id === guildConfig.GUILD_ID) ??
        null
    );
  }, HOUR * 12);
});

client.on("guildAvailable", async (guild) => {
  await deployCommands(guild.id);
  await startQuiz(guild);
});

client.on("guildCreate", async (guild) => {
  await deployCommands(guild.id);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  await initUser(interaction.user, interaction);

  const command = commands[interaction.commandName as keyof typeof commands];
  if (command) {
    const notAllowedMessage = commandNotAllowedInChannel(
      interaction,
      command.channel
    );
    if (notAllowedMessage) {
      return interaction.reply(notAllowedMessage);
    }
    await logUser(interaction.user, interaction, "commands");
    await command.execute(interaction);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    return;
  }
  await initUser(message.author, message);
  await logUser(message.author, message, "messages");

  checkAdminCommand(message);
});

client.login(config.DISCORD_BOT_TOKEN);
