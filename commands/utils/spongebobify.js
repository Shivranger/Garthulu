const { SlashCommandBuilder } = require('discord.js');

//function from https://glot.io/snippets/fe4q3fekl0
function spongebobText(str) {
    let newStr = ''
    str.split('').forEach((el, idx) => {
        newStr += idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
    })
    return newStr
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spongebobify')
		.setDescription('For when you want to be petty')
        .addStringOption( option => 
            option.setName('statement')
			.setDescription('The BS you want to make fun of')
			.setRequired(true)
        ),
	async execute(interaction) {
        const statement = interaction.options.getString('statement');
		await interaction.reply(spongebobText(statement));
	},
};