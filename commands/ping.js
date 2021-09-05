const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    
    var embed = new Discord.MessageEmbed()
    .setTitle('Bereken...')
    .setColor("BLUE")
    message.channel.send(embed)
    .then(messageTime => {
        var embed = new Discord.MessageEmbed()
        .setDescription(`Bot latency: **${messageTime.createdTimestamp - message.createdTimestamp}ms**\n API Latency: **${Math.round(client.ws.ping)}ms**`)
        .setColor('BLUE')
        .setFooter('Ruben Gaming')
        .setTimestamp()
        message.channel.send(embed);
        }) 
    
}

module.exports.help = {
    name: "ping",
    cooldown: 10
  }
  