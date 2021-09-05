const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.channel.send("https://www.instagram.com/rubengaming_1/")

}

module.exports.help = {
    name: "instagram",
    cooldown: 10,
    description: "",
    category: ""
}