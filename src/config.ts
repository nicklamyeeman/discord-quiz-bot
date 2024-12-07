import dotenv from "dotenv";

dotenv.config();
const { DISCORD_BOT_TOKEN, DISCORD_APP_ID } = process.env;

if (!DISCORD_BOT_TOKEN || !DISCORD_APP_ID) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_BOT_TOKEN,
  DISCORD_APP_ID,
};

const { GUILD_ID, CASINO_CHANNEL_ID, BACKUP_CHANNEL_ID, QUIZ_CHANNEL_ID } =
  process.env;

export const guildConfig = {
  GUILD_ID,
  CASINO_CHANNEL_ID,
  BACKUP_CHANNEL_ID,
  QUIZ_CHANNEL_ID,
};
