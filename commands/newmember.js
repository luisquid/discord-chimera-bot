/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
exports.run = async (bot, message, args) =>{
	bot.emit('guildMemberAdd', message.member);
};

exports.help = {
	name: 'newmember'
};