/* eslint-disable no-unused-vars */
exports.run = async (bot, message, args) => {
	let roles = 'Roles del server con su ID \n \n';
	message.guild.roles.cache.forEach((role) => {
		roles += `${role.name} => ${role.id} \n`;
	});
	message.channel.send(roles);
};

exports.help = {
	name : 'roleid',
};