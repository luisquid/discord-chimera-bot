/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable no-undef */
module.exports = (bot, member) => {

	let userLogs = member.guild.channels.cache.find(
        channel => channel.name.toLowerCase() === 'bot-testing'
      );
    userLogs.send(`${member.user.tag} has left **${member.guild}**!`);
};