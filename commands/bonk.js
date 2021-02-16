const countGame = new Set();
const { prefix } = require('../config');

exports.run = async (bot, message, args) => {

	const cmdName = bot.commands.get('bonk', 'help.name');

	const user = args[0];
	if(!message.member.roles.cache.has('807758676206026802')) return message.channel.send("You are not part of the jorny prevention armed commando! òwó");
	
	if (!user) return message.channel.send(`Usage: \`${prefix + cmdName} <user>\``);
	console.log(message.guild.member(user));
	
	const jorny = message.mentions.members.first();
	console.log(jorny);
	jorny.voice.setChannel('711407103125880914');

	return message.channel.send(jorny.displayName + " has been bonked to jorny jail. òwó");

};

exports.help = {
	name: 'bonk',
};