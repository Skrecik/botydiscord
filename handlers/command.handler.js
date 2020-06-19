const { prefix } = require(__dirname + "/../config")
const { Collection } = require("discord.js")
const { readdirSync } = require("fs")
const ascii = require("ascii-table")
const table = new ascii().setHeading("Command", "Status")
module.exports = (client) => {
    client.commands = new Collection()
    const commandFiles = readdirSync(__dirname + "/../commands")
    for (const file of commandFiles) {
        const command = require(__dirname + `/../commands/${file}`)
        if (command.name) {
            client.commands.set(command.name, command)
            table.addRow(file, "✅")
        } else {
            table.addRow(file, "❌")
            continue
        }
    }
    console.log(table.toString())
    client.on('message', msg => {
        const { author, guild, channel, member } = msg
        if (msg.author.bot) {
          return
        }
        if (msg.content.indexOf(prefix) !== 0) return  
        const args = msg.content.slice(prefix.length).trim().split(/ +/g)
        console.log(args)
        const cmd = args.shift().toLocaleLowerCase()
        if (!client.commands.has(cmd)) return
        try {
            client.commands.get(cmd).run(msg, args)
        } catch (error) {
            console.log(error)
            msg.reply("Spróbuj ponownie!")
        }      
      });
}
