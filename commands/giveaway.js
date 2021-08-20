const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //!giveaway aantalSpeler tijd berichtjeTekst test test

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("BAN_MEMBERS")) var giveawaywEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Zorg dat je de juiste permissies krijgt\n\nBenodigde permissies: **BAN_MEMBERS**");

        return message.channel.send(giveawaywEmbed);

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    if (!winnerCount) var giveawayrEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Geen aantal spelers opgegeven.");

        return message.channel.send(giveawayrEmbed);

    if (!time) var giveawayyEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Geen tijd opgegeven.");

        return message.channel.send(giveawayyEmbed);

    if (!item) var giveawayiEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setColor("#ff1100")
        .setDescription("Geen winnaars item opgegeven.");

        return message.channel.send(giveawayiEmbed);

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setColor("BLUE")
        .setFooter(`Vervalt: ${dateEnd}`)
        .setDescription(item);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }

        }

        if (peopleReacted.length == 0) {
            var embedm = new discord.MessageEmbed()
            .setTitle("Winnaar")
            .setColor("BLUE")
            .setDescription("Niemand heeft gewonnen dus de bot wint.");

            return message.channel.send(embedm);
        }

        if (peopleReacted.length < winnerCount) {
            var embedv = new discord.MessageEmbed()
            .setTitle("Winnaar")
            .setColor("BLUE")
            .setDescription("Er zijn te weinig mensen die mee deden daarom heeft de bot gewonnen.");

            return message.channel.send(embedv);
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if (winners[o] == peopleReacted[random]) {
                    inList = true;
                    y--;
                    break;
                }

            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }

        }

        for (let y = 0; y < winners.length; y++) {

            var embed = new discord.MessageEmbed()
            .setTitle("Winnaar")
            .setColor("BLUE")
            .setDescription("Proficiat: " + winners[y].username + `Je hebt gewonnen ${item}`);

            return message.channel.send(embed);

        }

    }, time * 1000)

}

module.exports.help = {
    name: "giveaway",
}
