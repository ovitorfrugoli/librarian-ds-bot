const commando = require('discord.js-commando');

class AuthorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'autor',
            group: 'useful',
            memberName: 'autor',
            description: 'Exibe os créditos do bot.'
        });
    }

    async run(message, args) {
        message.reply('\n>>> **Créditos do Bibliotecário:**\n\
        *Criado por* Vitor Santos\n\
        *última atualização em* 27 de fevereiro de 2020.\n\
        *contate-o via Discord:* Vithinn#1561.\n')
    }
}

module.exports = AuthorCommand;