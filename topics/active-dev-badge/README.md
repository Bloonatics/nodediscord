![image](https://github.com/nodediscord/nodediscord/assets/98406658/449aa7bb-30a9-4c06-8ee6-9dfaeb5135f2)

# Active developer badge

You may also be the one who wants to obtain this badge. Follow this guide to get the badge in an easy and fun way.

> Read the [official article] for more info about this programme.

# Outline

1. Create a bot and invite it to your server
2. Start up the bot and fulfil the requirement
3. Claim the badge

# Before starting

- Create a [replit] account. It is a good online IDE for you to edit and run your bot.
- Make sure you have the following setting enabled.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/7fc5c93f-0fef-47b9-9bb4-7f50a074a23c)

# 1. Create a bot and invite it to your server

Go to [Discord Developer Portal] and create a new application.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/7059d6ed-6a7c-43dd-b2b9-5e24ec8504d7)

Great, now we have an app with a bot included. Go to OAuth2 => URL Generator and select `bot` and `applications.commands` scopes.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/45016b5a-375d-4ad8-9012-087207c9ce53)

Just ignore the bot permissions because we don't need them.

Scroll down and copy the generated URL. It should be something like this:

```
https://discord.com/api/oauth2/authorize?client_id=1190408305097592964&permissions=0&scope=bot+applications.commands
```

Use the URL to invite the bot to your server, just like how you invite other public bots to servers.

Nice! Now you have your own bot in your server, but it is still offline. That's why you shouldn't leave this page yet.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/07568070-1776-44c6-9c00-ad065c11c390)

# 2. Start up the bot and fulfil the requirement

Login to your [replit] account and click `Create Repl`, select `Node.js` template and create it.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/7ca23de4-46af-4cf4-a8b7-c90d85a91a0f)

Click `Secrets` and `Shell` from `Tools` if they are not opened yet. We will use `Secrets` to store your bot token and `Shell` to install `discord.js`.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/de15f9bf-799e-4b85-80f4-25c667c5f7d4)

Type the following command in `Shell` to install `discord.js`.

```
npm i discord.js
```

![image](https://github.com/nodediscord/nodediscord/assets/98406658/d7f4dc3a-3028-4f38-aecd-35ac3980e516)

Reset your bot token and copy it. Make sure to not share your bot token like me.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/795cf4b7-a2f6-4295-b746-fbbfea93d757)

Add it in `Secrets` tab. Please note that everything is case-sensitive.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/d7e79c4d-cb97-42db-9d4f-27611fbb2b74)

The configuration is done. What we are missing is just the JavaScript to power your bot. Copy the code below and paste it in your `index.js` file.

```js
const { Client, GatewayIntentBits, Events } = require('discord.js');
const bot = new Client({ intents: GatewayIntentBits.Guilds });

bot.once(Events.ClientReady, () => bot.application.commands.set([
  {
    name: 'easy',
    description: 'My first command!'
  }
]));

bot.on(Events.InteractionCreate, (i) => i.reply('Programming is easy.'));

bot.login(process.env.token);
```

This code is quite short as we just want to register a simple slash command and provide a simple response when someone runs it.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/df7fa5bc-bec0-42b7-bb46-9cf550ec07dc)

Run the program. You should see that your bot is online and a slash command has been deployed. If you can't see the command after typing `/easy`, refresh your Discord app (not the bot).

![image](https://github.com/nodediscord/nodediscord/assets/98406658/2765d3c4-c771-4e64-bca4-2ce0ab6a6f2e)

Run it once and it is already enough, but if you are excited, you can try it more.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/8ff900ee-e9c4-474a-b127-954828307f80)

Undeniably, programming is easy. Now you have fulfilled the requirement, enjoy!

# 3. Claim the badge

Wait, how can I claim the badge? Wait 24 hours and then go to [Active Developer Portal] to finish the remaining steps.

> Remember to read the [official article].

![image](https://github.com/nodediscord/nodediscord/assets/98406658/df77acbf-58aa-445c-9427-a011b430c956)

Now your profile has an additional badge, but most importantly this may be your first computer programming experience.

![image](https://github.com/nodediscord/nodediscord/assets/98406658/34a29243-47fc-4d08-83b8-b3b3ba57f49d)

# Maintaining eligibility

You should start up your bot and run its command once every month.

# Summary

In this tutorial, you have learnt...

- What is Discord active developer programme and how to complete it.
- Create your own bot and invite it to your servers.
- Setup Node.js program in [replit] to host your Discord bot.

[official article]: https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge
[replit]: https://replit.com/
[Discord Developer Portal]: https://discord.com/developers/applications
[Active Developer Portal]: https://discord.com/developers/active-developer
