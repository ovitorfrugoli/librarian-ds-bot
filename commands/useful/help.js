const commando = require('discord.js-commando');

class AjudaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ajuda',
            group: 'useful',
            memberName: 'ajuda',
            description: 'Disponibiliza a lista de comandos.'
        });
    }

    async run(message, args) {
        message.reply('\n>>> Comandos disponíveis:\n\
                       **!ajuda** - Exibe a lista de comandos.\n\
                       **!lista** - Exibe a lista de encantamentos.\n\
                       **!<encantamento>** - Exibe informações sobre o encantamento desejado.\n\
                       **!autor** - Exibe os créditos do Bot.\n\
                       **!ip** - Exibe o IP do servidor\n\
                       **!mapa** - Exibe o mapeamento da sala de encantamentos.\n')
    }
}

module.exports = AjudaCommand;