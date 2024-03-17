const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lasagna')
		.setDescription('Lasagna?'),
	async execute(interaction) {
		await interaction.reply('Lasagna!');
	},
};
