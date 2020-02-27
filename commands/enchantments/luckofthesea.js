const commando = require('discord.js-commando');

class LuckoftheSeaEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'luckofthesea',
            group: 'enchantments',
            memberName: 'luckofthesea',
            description: 'Informações detalhadas sobre o encantamento Luck of the Sea.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Luck of the Sea**\n\
            *Descrição:* Aumenta a chance de loots random.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Vara de pesca.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Silk touch.\n\
            *Valor de venda:* $7000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = LuckoftheSeaEnchant;