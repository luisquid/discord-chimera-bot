/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (bot, message, args) => {
	const doggo = await fetch('https://dog.ceo/api/breeds/image/random')
		.then(rest => rest.json())
		.then(json => json.message);

	const embed = new Discord.MessageEmbed()
		.setAuthor(message.member.user.tag, message.member.user.avatarURL())
		.setColor(0xdd2423)
		.setImage(doggo)
		.setThumbnail(message.guild.iconURL())
		.setFooter('A random doggo!!')
		.setTimestamp();

	message.channel.send(embed);
};

exports.help = {
	name : 'doggo',
};