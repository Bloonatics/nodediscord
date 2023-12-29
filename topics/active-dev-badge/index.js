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
