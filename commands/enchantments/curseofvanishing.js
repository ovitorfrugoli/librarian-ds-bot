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
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = VanishingEnchant;