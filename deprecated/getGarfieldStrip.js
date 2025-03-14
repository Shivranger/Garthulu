const { getGarfield, todayGarfield, randomGarfield, randomThreePanel, randomSunday, FIRST_GARFIELD, PIPE_COMIC, WINDOW_COMIC } = require("garfieldjs");
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('praise')
		.setDescription('Get a blessing from the eldritch overlord.'),
	async execute(interaction) {
        todayGarfield()
        .then(s => interaction.reply(s))
        .error(() => interaction.reply('The stars are broken...')); 
		;
	},
};