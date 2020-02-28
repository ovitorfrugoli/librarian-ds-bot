const commando = require('discord.js-commando');

class StockEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stock',
            group: 'zenchantments',
            memberName: 'stock',
            description: 'Informações detalhadas sobre o encantamento stationary.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **stationary**\n\
            *Descrição:* Repõe o item que o jogador estava utilizando.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Peitoral e Elytra.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $10000.\n\
            *Conflito:*\n\
            *Mapeamento:* Prateleira Laranja, Coluna 2, Linha 3.\n')
    }
}

module.exports = StockEnchant;