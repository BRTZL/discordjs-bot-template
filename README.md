# Discord.js Bot Template

This repo gives you boilerplate for developing fast discord bot with discord.js.


## How to get discord bot token
### **1. Go to the Discord Developer Portal**

Your first step is to browse over to the Discord Developer Portal:  [https://discordapp.com/developers/applications/](https://discordapp.com/developers/applications/)

This portal shows all of your applications and bots.

If you already have a bot created, click it in the list. If you don’t have any discord bots, click the “New Application” button.

![Create Discord Application](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-1-1024x372.jpg)

### **2. Give Your Bot a Name**

Here you’ll be prompted to give your application (bot) a name.

You’re likely making a Discord Bot here, or you need your token for a Discord Bot. If this is true, then think about what you want your bot to be named and enter it here.

![Name Your Discord Application](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-2.jpg)

### **3. Bring Your Bot to Life**  With an Icon and Description

Awesome! You’ve created your very first Discord Application! The only thing left is to bring your bot to life by giving it a description and an icon…

![Add Your Discord Application Icon and Description](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-3.jpg)

The best size for your bot’s icon is 1024×1024 pixels, but you can go lower and achieve quality results. I personally go with 512×512 most of the time (based on the icons I choose).

Next I uploaded that icon into Discord and hit the green “Save Changes” button.

“The Token Master” is looking much better already!

![Discord Bot Icon and Description Done](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-7.jpg)

### **4. Retrieve Your Token**

Your next step is to go over the menu on the left side of the screen and click “Bot”. It’s the icon that looks like a little puzzle piece.

![Discord Development Portal - Browse to the Bot Tab](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-8.jpg)

Now you want to click the blue “Add Bot” button

![Discord Bot - Click Add Bot](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-9.jpg)

Click the “Yes, do it!” button…

![Discord Bot - Add Bot to This App Dialog](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-10.jpg)

**You’ll see a green message, “A wild bot has appeared!”**

You’ll also see a “Token” and a blue link you can click called “Click to Reveal Token”

As soon as you click this link, your token will be revealed…

![Discord Bot - A Wild Bot Has Appeared!](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-11.jpg)

**And that’s it! You have your token!**

A natural next step, however, is to add your bot into your Discord Server.

### **5. Add Your Bot to a Discord Server**

In order to add your bot to your Discord Server, you’ll need to navigate back to the “OAuth2” tab.

![Discord Bot Token - OAuth2 Screen](https://cdn.writebots.com/wp-content/uploads/2019/08/1-discord-bot-oauth2-1024x507.jpeg)

Once there, scroll down to the “Oauth2 URL Generator” section. In the “Scopes” section, you’ll want to select the “bot” checkbox.

![Discord Bot Token - OAuth2 URL Generator "Bot" Selection](https://cdn.writebots.com/wp-content/uploads/2019/08/2-select-bot-checkbox.jpeg)

You’ll notice that a URL appeared as soon as you clicked “bot” — this will be your URL for adding your bot to a server.

But we’re not quite there yet!

Scroll down some more to the “Bot Permissions” section. This is where you choose what permissions to give your bot, and what it  _can_  and  _can’t_  do.

![Discord Bot Permissions Checkbox Selection](https://cdn.writebots.com/wp-content/uploads/2019/08/3-bot-permissions.jpeg)

Based on what type of bot you’re planning on building, you’ll want to select permissions that most closely match what it’ll be doing day-to-day.

**Important:  _Do not_  select all of the permissions “just to make things easy”. Your permissions are the second line of defense in case somebody gets their hands on your bot token. Only give your bot the permissions it** _**really needs**_**, that way you lower the risk of compromising your server.**

After you’ve selected your permissions, scroll up a little bit and look at the URL that was generated.

![Discord Bot Authorization String (Client ID & Permissions)](https://cdn.writebots.com/wp-content/uploads/2019/08/4-final-bot-string.jpeg)

Click the blue “Copy” button on the right side. This is the URL you’ll navigate to in order to add your bot to a server.

Go to that URL and you’ll see a page that looks sort of like this (see below). Here you’ll want to select the server you’re adding your bot to, double-check the permissions you’re giving your bot, and then continue to the next step.

![Discord Bot - Add Bot to Server (Authorize)](https://cdn.writebots.com/wp-content/uploads/2019/08/5-authorize-bot.jpeg)

You’ll likely get an “I’m not a robot” captcha message on the next screen. Solve the captcha and continue.

![Discord Bot Captcha Message (not a robot)](https://cdn.writebots.com/wp-content/uploads/2019/08/6-captcha-message-not-robot.jpeg)

Success! Your bot has been authorized, and you should see it pop up in the list of participants on your server!

![Discord Bot Authorized and Added to Server](https://cdn.writebots.com/wp-content/uploads/2019/08/7-final-bot-authorized.jpeg)

That wasn’t so hard, was it? You’ve successfully created a Discord Bot Token and added your own bot to a server!

## Config file
After you clone go to the config.json file and insert your bot token. And if you want you can change prefix of bot.
```json
{
	"token": "your token",
	"prefix": "!"
}
```


## Copyrights

This README file uses external images and descriptions from [cdn.writebots.com](https://cdn.writebots.com/).