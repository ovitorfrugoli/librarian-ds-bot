const commando = require('discord.js-commando');
const bot = new commando.Client();
const token = process.env.token;

bot.registry.registerGroup('useful', 'Useful');
bot.registry.registerGroup('enchantments', 'Enchantments');
bot.registry.registerGroup('zenchantments', 'Zenchantments');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(token);
