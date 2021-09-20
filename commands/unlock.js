const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
 
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Zorg dat je de juiste permissies hebt");
 
  await message.channel.overwritePermissions([
 
    {
      id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
      dany: ['SEND_MESSAGES']
    }
 
 
  ]);
 
  var embed = new discord.MessageEmbed()
            .setTitle("Lockdown")
            .setColor("#ff1100")
            .setDescription(`⚠De lockdown is opgeheven door: ${message.author}`);

            return message.channel.send(embed); 
}
 
module.exports.help = {
  name: "unlock"
}