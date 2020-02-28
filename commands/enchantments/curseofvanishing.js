const commando = require('discord.js-commando');

class VanishingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'curseofvanishing',
            group: 'enchantments',
            memberName: 'curseofvanishing',
            description: 'Informações detalhadas sobre o encantamento Curse of Vanishing.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Curse of Vanishing**\n\
            *Descrição:* O item é destruido em sua morte.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Praticamente tudo.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* \n\
            *Valor de venda:* $0.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 4, Linha 2.\n')
    }
}

module.exports = VanishingEnchant;