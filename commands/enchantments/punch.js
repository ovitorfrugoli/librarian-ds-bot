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
            *Valor de venda:* $5500.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 2, Linha 3.\n')
    }
}

module.exports = PunchEnchant;