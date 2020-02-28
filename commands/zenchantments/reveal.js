const commando = require('discord.js-commando');

class RevealEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'reveal',
            group: 'zenchantments',
            memberName: 'reveal',
            description: 'Informações detalhadas sobre o encantamento Reveal.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Reveal**\n\
            *Descrição:* Revela minérios próximos.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Picaretas.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $25000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Roxa, Coluna 2, Linha 1.\n')
    }
}

module.exports = RevealEnchant;