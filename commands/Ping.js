const { MessageAttachment } = require("discord.js")

module.exports = {
    name: "ping",
    description: "Wysyła na chacie 'Pong!",

    run(msg) {
        const { channel } = msg      
        channel.send('Pong!')
    },
}