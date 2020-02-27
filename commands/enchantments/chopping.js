const commando = require('discord.js-commando');

class ChoppingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chopping',
            group: 'enchantments',
            memberName: 'chopping',
            description: 'Informações detalhadas sobre o encantamento Chopping.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Chopping**\n\
            *Descrição:* Aumenta o dano e o tempo de stun.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Machados.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Sharpness, Bane of Arthropods e Smite.\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = ChoppingEnchant;