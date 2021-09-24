const { warn } = require('console');
const discord = require('discord.js');
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(client, message, args) =>{
        
     // !warn spelerNaam redenen hier

     if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("U heeft hier geen perms voor");

     if (!args[0]) return message.reply("❌Lid niet gevonden");

     if (!args[1]) return message.reply("Geen redenen opgegeven");

     if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

     var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

     var reason = args.slice(1).join(" ");

     if (!warnUser) return message.reply("Kan de gebruiker niet vinden");

     if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Kan deze persoon niet warnen");

    if(!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
        if(err) console.log(err);
    });


    var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp() 
            .setDescription(`** Gewarnt:** ${warnUser} (${warnUser.id})
            **Gewarnt door:** ${message.author}
            **Reden: ** ${reason}`)
            .addField("Aantal warns:", warns[warnUser.id].warns);

            var channel = message.member.guild.channels.cache.get("857935702734143508");

            if(!channel) return;

            channel.send(embed);

      var warnEmbed = new discord.MessageEmbed()
            .setTitle("⚠Warn Systeem")
            .setColor("#ff0000")
            .setTimestamp() 
            .setDescription(`**Gewarnde persoon:** ${warnUser} (${warnUser.id})
            **Gewarnt door:** ${message.author}
            **Reden: ** ${reason}`)
            .setTimestamp();

            return message.channel.send(warnEmbed);

            if(warns[warnUser.id].warns === 3) {

            var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setTimestamp() 
            .setDescription("PAS OP")
            .addField("Bericht:", "Je hebt nog 1 kans over voordat je een ban krijgt");

            message.channel.send(embed);
            
        
        }else if(warns[warnUser.id].warns == 4){
            message.guild.member(warnUser).ban(reason);
            message.channel.send(`${warnUser} Is verbannen door de bot wegens teveel warns`);
        }
} 


module.exports.help = {
    name: "warn"
}
