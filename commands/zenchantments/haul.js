const commando = require('discord.js-commando');

class HaulEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'haul',
            group: 'zenchantments',
            memberName: 'haul',
            description: 'Informações detalhadas sobre o encantamento Haul.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Haul**\n\
            *Descrição:* Arrasta blocos ao redor.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Picaretas.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $25000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Azul, Coluna 4, Linha 4.\n')
    }
}

module.exports = HaulEnchant;