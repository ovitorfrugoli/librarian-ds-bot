const commando = require('discord.js-commando');

class MendingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mending',
            group: 'enchantments',
            memberName: 'mending',
            description: 'Informações detalhadas sobre o encantamento Mending.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Mending**\n\
            *Descrição:* Repara os itens com experiência adquirida.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Praticamente tudo.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* Infinity\n\
            *Valor de venda:* $8000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = MendingEnchant;