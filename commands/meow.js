/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (bot, message, args) => {
	const meow = await fetch('http://aws.random.cat/meow')
		.then(rest => rest.json())
		.then(json => json.file);

	const embed = new Discord.MessageEmbed()
		.setAuthor(message.member.user.tag, message.member.user.avatarURL())
		.setColor(0xdd9323)
		.setImage(meow)
		.setThumbnail(message.guild.iconURL())
		.setFooter('A random kitty!!')
		.setTimestamp();

	message.channel.send(embed);
};

exports.help = {
	name : 'meow',
};