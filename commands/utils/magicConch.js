const { SlashCommandBuilder } = require('discord.js');

function ninetyPercentYes() {
    //Generated with Google Gemini
    // Generate a random number between 0 and 1.
    const randomNumber = Math.random();

    // If the random number is less than 0.9, return "yes".
    // This will happen 90% of the time.
    if (randomNumber < 0.9) {
        return "yes";
    } else {
        return "no";
    }
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('conch')
		.setDescription('Ask the magic conch!')
        .addStringOption( option => 
            option.setName('question')
			.setDescription('What will you ask the Magic Conch?')
			.setRequired(true)
        ),
	async execute(interaction) {
        console.log({interaction})
		await interaction.reply(ninetyPercentYes());
	},
};