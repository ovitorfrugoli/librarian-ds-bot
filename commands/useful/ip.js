const commando = require('discord.js-commando');

class IpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ip',
            group: 'useful',
            memberName: 'ip',
            description: 'Exibe o ip do servidor.'
        });
    }

    async run(message, args) {
        message.reply('`jogar.craftit.com.br:25565`\n')
    }
}

module.exports = IpCommand;