const commando = require('discord.js-commando');

class StreamEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stream',
            group: 'zenchantments',
            memberName: 'stream',
            description: 'Informações detalhadas sobre o encantamento Stream.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Stream**\n\
            *Descrição:* Trilha de particulas.\n\
            *Encantamento disponível:* \n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Elytra.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $5000.\n\
            *Conflito:*\n\
            *Mapeamento:* Prateleira Laranja, Coluna 2, Linha 1.\n')
    }
}

module.exports = StreamEnchant;