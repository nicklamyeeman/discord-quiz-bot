import { Colors, CommandInteraction, EmbedBuilder } from "discord.js";
import { CommandConfig } from "../../types/commands";

export const ping: CommandConfig = {
  name: "ping",
  description: "Affiche le ping du bot",
  execute: async (interaction: CommandInteraction) => {
    const createdTime = Date.now();

    const embed = new EmbedBuilder()
      .setDescription(["```yaml", "Pong: --ms", "API: ---ms", "```"].join("\n"))
      .setColor(Colors.Blue);
    await interaction.reply({ embeds: [embed], ephemeral: true });

    const outboundDelay = Date.now() - createdTime;
    const APIDelay = Math.round(interaction.client.ws.ping);
    embed.setDescription(
      ["```yaml", `Pong: ${outboundDelay}ms`, `API: ${APIDelay}ms`, "```"].join(
        "\n"
      )
    );
    await interaction.editReply({ embeds: [embed] });
  },
};
