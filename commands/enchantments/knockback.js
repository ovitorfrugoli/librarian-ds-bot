const commando = require('discord.js-commando');

class KnockbackEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'knockback',
            group: 'enchantments',
            memberName: 'knockback',
            description: 'Informações detalhadas sobre o encantamento Knockback.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Knockback**\n\
            *Descrição:* Aumenta Knockback.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 2.\n\
            *Conflitos:* \n\
            *Valor de venda:* $5000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = KnockbackEnchant;