const commando = require('discord.js-commando');

class LoyaltyEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'loyalty',
            group: 'enchantments',
            memberName: 'loyalty',
            description: 'Informações detalhadas sobre o encantamento Loyalty.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Loyalty**\n\
            *Descrição:* Tridente volta ao usuário ao ser jogado.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Tridente.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Riptide.\n\
            *Valor de venda:* $3000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = LoyaltyEnchant;