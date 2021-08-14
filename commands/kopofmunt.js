const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    message.channel.send(`Ik had **${result}** in gedachten`);


}

module.exports.help = {
    name: "kof"
}