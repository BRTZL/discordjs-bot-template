const Discord = require('discord.js');
const client = new Discord.Client();
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

// Create an event for initializing bot
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    // Set Bot activity as `serving xx servers`
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    console.log("member added");
    // TODO add code
});

// Create an event listener for remove guild members
client.on('guildMemberRemove', member => {
    console.log("member removed");
    // TODO add code
});

// Create an event listener for when the bot joins a guild.
client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

// Create an event listener for when the bot is removed from a guild.
client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

// Create an event listener for incoming messages
client.on("message", async message => {
    // Ignore if message owner is a bot
    // if (message.author.bot) return;

    // Check for if messages start with prefix in config file
    if (!message.content.startsWith(config.prefix)) return;

    // Let's split the message according to the spaces and turn it to the list
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        message.reply(`List of all commands: 
        - \`latency\`
        - \`time\`
        - \`flip-a-coin\`
        - \`kick\`
        - \`ban\`
        - \`clear\`
        `)
            .catch(error => message.reply(error));
    }

    else if (command === "time") {
        var date = new Date();
        let options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };

        message.reply(`Current time and date is ${date.toLocaleTimeString("en-us", options)}`);
    }

    else if (command === "latency") {
        const m = await message.channel.send("Latency calculating...");
        m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }

    else if (command === "kick") {
        // This command must be limited to mods and admins. In this example we just hardcode the role names.
        if (!message.member.roles.cache.some(r => ["Administrator", "Moderator"].includes(r.name)))
            return message.reply("Sorry, you don't have permissions to use this!");

        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.kickable)
            return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    }

    else if (command === "ban") {
        // This command must be limited to mods and admins. In this example we just hardcode the role names.
        if (!message.member.roles.cache.some(r => ["Administrator"].includes(r.name)))
            return message.reply("Sorry, you don't have permissions to use this!");

        let member = message.mentions.members.first();
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.bannable)
            return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }

    else if (command === "clear") {
        // This command removes all messages from all users in the channel, up to 100.

        // get the delete count, as an actual number.
        const deleteCount = parseInt(args[0], 10);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }

    else {
        message.reply(`The \`${command}\` is not a valid command. Type \`${config.prefix}help\` to see all commands`)
    }
});

client.login(config.token);