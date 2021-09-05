const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.channel.send("https://twitter.com/RubenGaming13")

}

module.exports.help = {
    name: "twitter",
    cooldown: 10,
    description: "",
    category: ""
}