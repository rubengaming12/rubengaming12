const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("https://discord.gg/R8Ctk7sq5t");

}

module.exports.help = {
    name: "haarlem",
    cooldown: 10
}
