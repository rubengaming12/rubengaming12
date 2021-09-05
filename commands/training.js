const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

  const TrainingsKanaal = message.guild.channels.cache.get('852839997328982066')
  if(!TrainingsKanaal) return message.reply("Geen trainingskanaal gevonden");

                    var Eenheid = new discord.MessageEmbed()
                        .setTitle("Eenheid")
                        .setColor("BLUE")
                        .setDescription("Welke eenheid?")

                    var Host = new discord.MessageEmbed()
                        .setTitle("Host")
                        .setColor("BLUE")
                        .setDescription("Wie wordt de Host?")
 
                    var CoHost = new discord.MessageEmbed()
                        .setTitle("Co-Host")
                        .setColor("BLUE")
                        .setDescription("Wie wordt de Co-Host?")
 
                    var Supervisor = new discord.MessageEmbed()
                        .setTitle("Supervisor")
                        .setColor("BLUE")
                        .setDescription("Wie wordt de Supervisor?")
 
                    var Type = new discord.MessageEmbed()
                        .setTitle("Type")
                        .setColor("BLUE")
                        .setDescription("Wat is de type van je training?")
 
                    var Datum = new discord.MessageEmbed()
                        .setTitle("Datum")
                        .setColor("BLUE")
                        .setDescription("Wat is de datum van je training?")
 
                    var Tijd = new discord.MessageEmbed()
                        .setTitle("Tijd")
                        .setColor("BLUE")
                        .setDescription("Hoelaat is je training?")

                    var Opmerkingen = new discord.MessageEmbed()
                        .setTitle("Opmerkingen")
                        .setColor("BLUE")
                        .setDescription("Wat zijn je opmerkingen?")


                         message.channel.send(Eenheid)
                         message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => { 
                         
                         var antwoord1 = antwoord.first()
                         message.channel.send(Host)
                        
                          message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                            var antwoord2 = antwoord.first()
                            message.channel.send(CoHost)
                            
                            message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                var antwoord3 = antwoord.first()
                                message.channel.send(Supervisor)
  
                                
                                message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                    var antwoord4 = antwoord.first()
                                    message.channel.send(Type)
                                    
                                    message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                        var antwoord5 = antwoord.first()
                                        message.channel.send(Datum)
                                        
                                        message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                            var antwoord6 = antwoord.first()
                                            message.channel.send(Tijd)
                                            
                                            message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                                var antwoord7 = antwoord.first()
                                                message.channel.send(Opmerkingen)
                                                
                                                message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                                    var antwoord8 = antwoord.first()
                                                    
                                                    //message.channel.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord => {
                                                        //var antwoord9 = antwoord.first()
                                                        
                                                        var TrainingEmbed = new discord.MessageEmbed()
                                                            .setTitle(`${antwoord1} Training`)
                                                            .setColor("#68FF33")
                                                                    .addFields(
            {name: "**Host:**", value: antwoord2},
            {name: "**Co-Host:**", value: antwoord3},
            {name: "**Supervisor:**", value: antwoord4},
            {name: "**Type:**", value: antwoord5},
            {name: "**Datum**", value: antwoord6},
            {name: "**Tijd**", value: antwoord7},
            {name: "**Opmerkingen:**", value: antwoord8})

                                                        message.channel.send("Je Training is succesvol ingepland! Bekijk hieronder je training.")
                                                        message.channel.send(TrainingEmbed)
                                                        TrainingsKanaal.send(TrainingEmbed)
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                      
                      
                        





}

module.exports.help = {
    name: "training",
    cooldown: 10,
}