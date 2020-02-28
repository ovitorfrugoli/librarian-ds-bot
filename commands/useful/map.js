const commando = require('discord.js-commando');

class AuthorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'map',
            group: 'useful',
            memberName: 'map',
            description: 'Exibe o mapeamento da sala de encantamentos.'
        });
    }

    async run(message, args) {
        message.reply('Atente-se as lãs no chão da sala de encantamentos.\n\
        O mapeamento estará localizado no `!<encantamento>`\n\
        e será dado por: `Prateleira X, Coluna Y, Linha Z`\n\
        da esquerda para a direita, de cima para baixo, semelhante à uma matriz.')
    }
}

module.exports = AuthorCommand;