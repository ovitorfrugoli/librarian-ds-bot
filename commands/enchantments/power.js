const commando = require('discord.js-commando');

class PowerEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'power',
            group: 'enchantments',
            memberName: 'power',
            description: 'Informações detalhadas sobre o encantamento Power.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Power**\n\
            *Descrição:* Aumenta o dano das flechas.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Arco.\n\
            *Level máximo:* 5.\n\
            *Conflitos:*\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = PowerEnchant;