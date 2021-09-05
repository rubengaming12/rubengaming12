const discord = require('discord.js');

module.exports.run = async(client, message, args) =>{

    try{

        var text = "";

        message.author.send(text);

        message.reply("Je kan de informatie in je dm vinden");

    }catch(error){
        message.reply("Er is fout gegaan")
    }
} 


module.exports.help = {
    name: "doneren",
    cooldown: 10
}
