/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable no-undef */
module.exports = (bot, member) => {

	let userLogs = member.guild.channels.cache.find(c => c.name === 'bot-testing');
    userLogs.send(`${member.user.tag} has joined **${member.guild}**!`);
};