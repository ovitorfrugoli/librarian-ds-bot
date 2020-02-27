const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('useful', 'Useful');
bot.registry.registerGroup('enchantments', 'Enchantments');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NjgyNDgxMDQ3MTYxNjY3NTg0.Xlgndg.lX8Vu_hwwq-hgvwbePD_Wtus_I0');
