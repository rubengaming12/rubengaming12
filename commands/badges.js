const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 //Afblijven
let id = message.author.id
let badges = 'Geen'
// ---
// Stel je badges in
let badge1 = '😎'
let badge2 = '😆'
let badge3 = '⚠'
// ---

//Op id van member
if(id == '573921489540087854'){
    badges = badge1 + badge2
}
// ---
    
// Op rol
if (message.member.roles.cache.has('864169922996469800')){
    badges = badge2 + badge3
    }
// ---
    
// Embed
let embed = new discord.MessageEmbed()
.setTitle(`Badges van ${message.author.tag}`)
.setColor('RED')
.addField('Badges', badges);
//---
    
//Verzenden    
message.channel.send(embed)
//---
   

}

   module.exports.help = {
    name: "badge",
    aliases: []
}