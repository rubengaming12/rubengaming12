const discord = require('discord.js');

module.exports.run = async(client, message, args) =>{

    try{

        var text = "**The Ruben Gaming Commands** \n\n **__Algemeen__** \n !hallo - Geeft een hallo terug. \n !info - Geeft info \n !serverinfo - Geeft serverinfo \n !leden - Kijk hoeveel leden er in de server zitten \n !botinfo - Laat alle informatie over de bot zien \n !avatar(persoon) - Bekijk de discord avatar van een persoon of van jezelf \n\n **__Minigames__** \n !sps - Speel steen papier schaar met de bot \n !kof - Speel kop of steen met de bot \n\n **__Informatie__** \n !info - Geeft info \n !help - Geeft informatie over de commands \n !youtube - Geeft info over Ruben zijn kanaal \n !doneer - Geeft informatie over het doneren \n\n **__Staff Commands__** \n !kick - Kick een persoon \n !mute - Mute een persoon \n !ban - Ban een persoon \n !clear - Verwijder berichten uit de chat \n !lockdown - Zet de chat opslot \n !unlock - Haal de chat lock eraf";

        message.author.send(text);

        message.reply("Alle commands kan je vinden in je privé berichten");

    }catch(error){
        message.reply("Er is fout gegaan")
    }
} 

// yo, ik heb net wat fout gedaan en ben nu dit kwijt. wat ben je kwijt? me commands index ect, dat moet terug
module.exports.help = {
    name: "help"
}
// zit t daar tussen? idk. het zijn 100 indexés ofz xd ben je alleen je index kwijt? nee kijk