const { SlashCommandBuilder } = require('discord.js');

async function nopeApiCall() {
    const response = await fetch('https://naas.isalman.dev/no');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.reason;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nope')
        .setDescription('rejects your question with a random nope response'),
    async execute(interaction) {
        await interaction.reply(await nopeApiCall());
    },
};