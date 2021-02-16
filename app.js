/* eslint-disable curly */
/* eslint-disable no-trailing-spaces */
/* eslint-disable brace-style */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const bot = new Discord.Client();
require('dotenv-flow').config();
const { token } = require('./config');

// const config = {
// 	token: process.env.TOKEN,
// 	prefix: process.env.PREFIX
// };

bot.commands = new Enmap();

fs.readdir('./events/', async (err, files) =>{
    if(err) return console.error;
    files.forEach(file =>{
        if(!file.endsWith('.js'))return;

        const evt = require(`./events/${file}`);
        const evtName = file.split('.')[0];
        console.log(`Loaded events ${evtName}.`);
        bot.on(evtName, evt.bind(null, bot));
    });
});

fs.readdir('./commands/', async (err, files) =>{
    if(err) return console.error;
    files.forEach(file =>{
        if(!file.endsWith('.js'))return;

        const props = require(`./commands/${file}`);
        const cmdName = file.split('.')[0];
        console.log(`Loaded command ${cmdName}.`);
        bot.commands.set(cmdName, props);
    });
});
bot.login(token);