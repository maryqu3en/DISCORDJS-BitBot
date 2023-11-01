const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deez')
		.setDescription('Replies with nuts!'),
	async execute(interaction) {
		await interaction.reply('nuts!');
	},
};