const discord = require('discord.js');

module.exports.run = async(client, message, args) =>{

    var ledenTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = ledenTotal - bots;
    var online = message.guild.members.cache.filter(m => m.user.presence.status == "Online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var ledenEmbed = new discord.MessageEmbed()
        .setColor("BLUE")
        .addField("Leden", ledenTotal, true)
        .addField("Bots", bots, true)
        .addField("Mensen", people, true)
        .addField("Online", online, true);

        message.channel.send(ledenEmbed);


} 


module.exports.help = {
    name: "leden",
    cooldown: 10
}
