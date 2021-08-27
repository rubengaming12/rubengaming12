const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen perms");

    var embed = new discord.MessageEmbed()
        .setTitle("Systeem Restart")
        .setDescription("⚠Herstarten van de bot...")
        .setColor("ORANGE");

        return message.channel.send(embed);

    process.exit();


}

module.exports.help = {
    name: "restart"
}