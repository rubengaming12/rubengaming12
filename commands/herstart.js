const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen perms");

    await message.channel.send("⚠Herstarten van de bot...");

    process.exit();


}

module.exports.help = {
    name: "restart"
}