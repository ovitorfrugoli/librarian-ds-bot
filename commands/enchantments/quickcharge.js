const commando = require('discord.js-commando');

class QuickChargeEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'quickcharge',
            group: 'enchantments',
            memberName: 'quickcharge',
            description: 'Informações detalhadas sobre o encantamento Quick Charge.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Quick Charge**\n\
            *Descrição:* Diminui o tempo de recarregamento do crossbow.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Crossbow.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* \n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = QuickChargeEnchant;