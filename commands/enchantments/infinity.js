const commando = require('discord.js-commando');

class InfinityEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'infinity',
            group: 'enchantments',
            memberName: 'infinity',
            description: 'Informações detalhadas sobre o encantamento Infinity.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Infinity**\n\
            *Descrição:* Flechas infinitas.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* Mending.\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = InfinityEnchant;