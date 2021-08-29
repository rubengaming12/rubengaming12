const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Site")
        .setDescription("http://servercommunitynlbe.nl/")
        .setColor("BLUE");

}

module.exports.help = {
    name: "site",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}