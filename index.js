const Discord = require("discord.js");
const botConfig = require("./botconfig.json")
const fileLevels = require("./data/levels.json")

const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Can't find any files");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`The File ${f} Got Loaded`);

        // client.commands.set(fileGet.help.name, fileGet);
        if (fileGet.help && fileGet.help.name) {
            client.commands.set(fileGet.help.name, fileGet);
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);

        };

    })

});


client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);

    client.user.setActivity("Watch Eyes", { type: "Playing" });

});

client.on("messageUpdate", async (oldMessage, newMessage) => {

    if (newMessage.author.bot) return;

    if(oldMessage.content == newMessage.content) return;

    var embed = new Discord.MessageEmbed()
        .setAuthor((`${newMessage.author.tag}`),newMessage.author.avatarURL({ size: 4096 }))
        .setDescription(`**Message:** ${newMessage} **got edited in** ${newMessage.channel}\n **Before:** ${oldMessage}`)
        .setTimestamp()
        .setColor('#00f00');

    client.channels.cache.get('854299795551944744').send(embed);

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var commands = client.commands.get(command.slice(prefix.length));

    var args = message.content.slice(prefix.lengh).split(/ +/);

    if (commands && message.content.startsWith(prefix)) commands.run(client, message, args);

    var randomXp = Math.floor(Math.random(1) * 25) + 1;

    var idUser = message.author.id;

    if (!fileLevels[idUser]) {

        fileLevels[idUser] = {

            xp: 0,
            level: 0

        };

    }

    fileLevels[idUser].xp += randomXp;

    var levelUser = fileLevels[idUser].level;
    var xpUser = fileLevels[idUser].xp;
    var nextLevelXp = levelUser * 500;

    if (nextLevelXp === 0) nextLevelXp = 100;

    console.log(nextLevelXp + " " + xpUser);

    if (xpUser > nextLevelXp) {

        fileLevels[idUser].level += 1;

        fileLevels[idUser].xp = 0;

        var embedLevel = new Discord.MessageEmbed()
            .setTitle((`${message.author.tag}`),message.author.avatarURL({ size: 4096 }))
            .setDescription("***Level Up***")
            .setColor("#29e53f")
            .addField("New Level: ", fileLevels[idUser].level);

        message.channel.send(embedLevel);

        var channel = message.member.guild.channels.cache.get("865019819497226250");

    }

    fs.writeFile("./data/levels.json", JSON.stringify(fileLevels), err => {

        if (err) console.log(err);

    });

    if(fileLevels[idUser].level == 5){

        var role = message.guild.roles.cache.find(r => r.name == "OG");

        var member = message.member;
        member.roles.add(role);

        var embedLevel = new Discord.MessageEmbed()
            .setTitle((`${message.author.tag}`),message.author.avatarURL({ size: 4096 }))
            .setDescription((`${message.author.tag}`),"***Unlocked the role Found (LVL 5+)***")
            .setColor("#29e53f")
            .addField("New Level: ", fileLevels[idUser].level);
        message.channel.send(embedLevel);

    } else {
        var embedLevel = new Discord.MessageEmbed()
            .setTitle((`${message.author.tag}`),message.author.avatarURL({ size: 4096 }))
            .setDescription("***Level Up***")
            .setColor("#29e53f")
            .addField("New Level: ", fileLevels[idUser].level);
        message.channel.send(embedLevel);
    
    }


    if (command === `${prefix}hallo`) {

        return message.channel.send("hallo!");

    }


})





//});


async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

}