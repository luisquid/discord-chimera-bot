/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
exports.run = (bot, message, args) => {
	message.channel.send('Pong!').catch(console.error);
};

exports.help = {
	name : 'ping'
};