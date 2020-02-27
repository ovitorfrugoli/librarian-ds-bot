const commando = require('discord.js-commando');

class MultishotEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'multishot',
            group: 'enchantments',
            memberName: 'multishot',
            description: 'Informações detalhadas sobre o encantamento Multishot.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Multishot**\n\
            *Descrição:* Atira três flechas e gasta apenas uma.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Crossbow.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* Piercing\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = MultishotEnchant;