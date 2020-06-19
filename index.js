const { Client, RichEmbed } = require('discord.js')

const { token } = require("./config.js")

const commandHandler = require("./handlers/command.handler")

const client = new Client()

commandHandler(client)

client.on('ready', () => {
  client.user.setActivity(`kanał Dudeksikorski`, {type: `WATCHING`})
  console.log(`${client.user.tag} JEST AKTYWNY!`)
});


const config = require("./config.js")

client.login(token)