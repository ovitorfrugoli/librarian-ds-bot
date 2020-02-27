const commando = require('discord.js-commando');

class PunchEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'punch',
            group: 'enchantments',
            memberName: 'punch',
            description: 'Informações detalhadas sobre o encantamento Punch.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Punch**\n\
            *Descrição:* Aumenta o knockback em arcos.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 2.\n\
            *Conflitos:* \n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = PunchEnchant;