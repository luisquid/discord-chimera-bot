const countGame = new Set();
const { prefix } = require('../config');

const Keyv = require('keyv');
const keyv = new Keyv();

keyv.on('error', err => console.error('Keyv connection error: ', err));

exports.run = async (bot, message, args) => {

	const cmdName = bot.commands.get('bonk', 'help.name');

	const user = args[0];
	//if(!message.member.roles.cache.has('807758676206026802')) return message.channel.send("You are not part of the jorny prevention armed commando! òwó");
	
	if (!user) return message.channel.send(`Usage: \`${prefix + cmdName} <user>\``);
	
	const jorny = message.mentions.members.first();

	let faces = ["òwó", "( ͡° ͜ʖ ͡°)", "( ͡~ ͜ʖ ͡°)", "( ͡ʘ ͜ʖ ͡ʘ)", "ᕦ( ͡° ͜ʖ ͡°)ᕤ"]
	
	let bonks;
	const bonkTimes = await keyv.get(jorny.id);
	
	if(!bonkTimes)
	{
		keyv.set(jorny.id, 1);
		bonks = 1;
	}
	else
	{
		bonks = bonkTimes + 1;		
	}

	keyv.set(jorny.id, bonks);

	return message.channel.send(jorny.displayName + " ha sido bonkeado " + bonks + (bonks == 1 ? " vez " : " veces") + faces[Math.floor(Math.random() * faces.length)]);

};

exports.help = {
	name: 'bonk',
};