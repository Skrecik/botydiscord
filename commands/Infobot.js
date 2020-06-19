const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "infobot",
    description: "Podaje informacje na temat bota",

    run(msg) {
        const { channel } = msg
        const embed = new RichEmbed()
      
        .setTitle("INFO O BOCIE")
        .setDescription("***BOTA STWORZYŁ DUDEKSIKORSKI#7302. WERSJA BOTA TO v1.9-New***")
        .setColor(0xFF7F00)
      
      msg.channel.send(embed)
      msg.delete()
    },
}