const discord = require('discord.js');

module.exports.run = async(client, message, args) =>{

    try{

        var text = "doneren - test";

        message.author.send(text);

        var embed = new discord.MessageEmbed()
            .setTitle("Doneren")
            .setColor("GREEN")
            .setDescription("Je kan de informatie in je dm vinden!")
            .setFooter(`Requested by ${message.author.tag}`)
            .setTimestamp();

            return message.channel.send(embed);

    }catch(error){
        message.reply("Er is fout gegaan")
    }
} 


module.exports.help = {
    name: "doneren",
    cooldown: 10
}
