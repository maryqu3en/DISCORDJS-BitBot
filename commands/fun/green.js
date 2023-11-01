const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('green')
		.setDescription('Replies with Green Bit!'),
	async execute(interaction) {
		await interaction.reply('Green Bit!');
	},
};