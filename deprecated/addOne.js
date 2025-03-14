const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addone')
		.setDescription('add one to the number you provide')
        .addNumberOption( option => 
            option.setName('number')
			.setDescription('Will return one for that this!')
			.setRequired(true)
        ),
	async execute(interaction) {
        let arg = interaction.options.getNumber('number');
		await interaction.reply(`${arg + 1}`);
	},
};