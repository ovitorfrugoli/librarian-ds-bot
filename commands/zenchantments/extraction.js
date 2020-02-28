const commando = require('discord.js-commando');

class ExtractionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'extraction',
            group: 'zenchantments',
            memberName: 'extraction',
            description: 'Informações detalhadas sobre o encantamento Extraction.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Extraction**\n\
            *Descrição:* Derrete e produz mais minérios.\n\
            *Encantamento disponível:* Super-VIP\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Picaretas.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $100000.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 1, Linha 5.\n')
    }
}

module.exports = ExtractionEnchant;