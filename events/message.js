const { prefix } = require('../config.js');

module.exports = (bot, message) =>{
	if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	const cmd = bot.commands.get(command);

	if(!cmd) {
		return message.channel.send('I do not know that command... yet!');
	}

	cmd.run(bot, message, args);
};