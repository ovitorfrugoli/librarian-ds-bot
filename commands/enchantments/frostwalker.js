const commando = require('discord.js-commando');

class FrostWalkerEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'frostwalker',
            group: 'enchantments',
            memberName: 'frostwalker',
            description: 'Informações detalhadas sobre o encantamento Frost Walker.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Frost Walker**\n\
            *Descrição:* Transforma água em gelo e te permite andar sobre a água.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Botas.\n\
            *Level máximo:* 2.\n\
            *Conflitos:* Depth Strider.\n\
            *Valor de venda:* $10000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = FrostWalkerEnchant;