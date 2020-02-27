const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('useful', 'Useful');
bot.registry.registerGroup('enchantments', 'Enchantments');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NjgyNDgxMDQ3MTYxNjY3NTg0.Xldoew.yWBPh8he9gTMEZr_Fd1ofTkA3qY');
