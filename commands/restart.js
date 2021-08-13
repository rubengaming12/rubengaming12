const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

    var helpEmbed = new discord.MessageEmbed()
    .setTitle("Systeem restart")
    .setDescription("De bot is opnieuw opgestart door de Bot\nDeveloper of automatisch.\nAls u een prompt had aangevraagd moet\ndeze opnieuw worden gestart.\n\nErvaart u problemen met de bot? Neem\ncontact op met <@559372712540110880>")
    .setColor("ORANGE")
    .setTimestamp()

return message.channel.send(helpEmbed);


}

module.exports.help = {
    name: "restart20"
}