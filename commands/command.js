const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Info-Staff")
        .setDescription("De staff sollicitaties zijn momenteel gesloten")
        .setColor("BLUE");

}

module.exports.help = {
    name: "info staff",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}