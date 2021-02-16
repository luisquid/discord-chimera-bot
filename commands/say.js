/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
exports.run = (bot, message, args) => {
	const response = args.join(' ');
	message.delete();
	message.channel.send(response);
};

exports.help = {
	name : 'say'
};