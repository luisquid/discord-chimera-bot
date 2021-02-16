require('dotenv-flow');

module.exports = client =>{
	console.log(client.user.tag + ' Ready!');
	//const messageReactionId = process.env.REACTION_ID;
	//const welcome = client.channels.cache.find(c => c.name === 'welcome');
	//welcome.messages.fetch(messageReactionId).then(message => console.log(message.content)).catch('Something went wrong: ' + console.error);
};
