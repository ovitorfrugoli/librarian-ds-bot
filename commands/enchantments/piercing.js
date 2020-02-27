const commando = require('discord.js-commando');

class PiercingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'piercing',
            group: 'enchantments',
            memberName: 'piercing',
            description: 'Informações detalhadas sobre o encantamento Piercing.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Piercing**\n\
            *Descrição:* As flechas penetram mais de um inimigo.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Crossbow.\n\
            *Level máximo:* 4.\n\
            *Conflitos:* Multishot\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = PiercingEnchant;