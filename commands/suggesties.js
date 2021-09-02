const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "suggesties");
    if (!channel) return message.reply("Suggest kanaal niet gevonden\nMaak een kanaal aan die heet**suggesties**");

    var argsBericht = args.join(" ");
    if (!argsBericht) return message.reply("Geen suggestie meegegeven");

    var embed = new discord.MessageEmbed()
        .setDescription(argsBericht)
        .setColor("ORANGE")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

        channel.send(embed).then(async (msg) => {

            await msg.react("👍");
            await msg.react("👎");
            message.delete();
        }).catch(err => {
            console.log(err);
        });

}

module.exports.help = {
    name: "suggestie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}