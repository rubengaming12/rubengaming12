const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

         var permsEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Zorg dat je de juiste permissies krijgt\n\nBenodigde permissies: **KICK_MEMBERS**");
        
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(permsEmbed);
 
 
        var memberEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Geef een member op");

        if (!args[0])  return message.channel.send(memberEmbed);
    
        var redenEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Geef een reden op");
        
        if (!args[1]) return message.channel.send(redenEmbed);

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        var reason = args.slice(2).join(" ");

        if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(kickUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
            **Gekickt door:** ${message.author}
            **Redenen: ** ${reason}`);

        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Reageer binnen 30 sec.")
            .setDescription(`Wil je ${kickUser} kicken?`);


        message.channel.send(embedPrompt).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                kickUser.kick(reason).catch(err => {
                    if (err) return message.channel.send(`Error...`);
                });

                message.reply(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply("Kick geanuleerd").then(m => m.delete(5000));

            }

        });

    }
    async function promptMessage(message, author, time, reactions) {
        time *= 1000;
        for (const reaction of reactions) {
            await message.react(reaction);
        }

        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }

module.exports.help = {
    name: "kick"
}
