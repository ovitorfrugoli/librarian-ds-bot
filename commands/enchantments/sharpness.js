const commando = require('discord.js-commando');

class SharpnessEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sharpness',
            group: 'enchantments',
            memberName: 'sharpness',
            description: 'Informações detalhadas sobre o encantamento Sharpness.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Sharpness**\n\
            *Descrição:* Aumenta o dano.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas e Machados.\n\
            *Level máximo:* 5.\n\
            *Conflitos:* Bane of Arthropods e Loyalty.\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = SharpnessEnchant;