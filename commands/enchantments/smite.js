const commando = require('discord.js-commando');

class SmiteEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'smite',
            group: 'enchantments',
            memberName: 'smite',
            description: 'Informações detalhadas sobre o encantamento Smite.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Smite**\n\
            *Descrição:* Aumenta o dano para mortos vivos.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas e Machados.\n\
            *Level máximo:* 5.\n\
            *Conflitos:* Bane of Arthropods e Sharpness.\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = SmiteEnchant;