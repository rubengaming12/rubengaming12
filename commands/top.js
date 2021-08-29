const discord = require(`discord.js`);
const db = require('quick.db');
let config = require("./botconfig.json");
 
exports.run = async (client, message, args) => {
    let prefix = db.fetch(`prefix_${message.guild.id}`) || config.prefix;
    let symbool = db.fetch(`symbool_${message.guild.id}`) || config.symbool;
 
		let money = db
			.all()
			.filter(data => data.ID.startsWith(`bank_${message.guild.id}`))
			.sort((a, b) => b.data - a.data);
        money.length = 10;
 
		var finalLb = '';
		for (var i in money) {
			finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[1])? client.users.cache.get(money[i].ID.split('_')[1]).tag: 'Niet gevonden'}** - ${symbool}${money[i].data}\n`;
		}
 
 
		const embed = new discord.MessageEmbed()
			.setTitle(`Top 10`)
			.setColor(config.color)
			.setDescription(finalLb)
		message.channel.send(embed);
    }
 
    module.exports.help = {
 
        name: "top",
        cat: "economie",
        desc: "Bekijk de geld top"
 
        }