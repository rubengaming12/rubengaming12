const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Roblox naam")
        .setColor("BLUE")
        .setDescription("Ruben zijn roblox naam is:\n**kiansadler6556**\n\nhttps://www.roblox.com/users/471176128/profile");

        return message.channel.send(embed);

}

module.exports.help = {
    name: "roblox",
    cooldown: 10,
    description: "",
    category: ""
}