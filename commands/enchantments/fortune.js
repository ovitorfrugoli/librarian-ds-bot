const commando = require('discord.js-commando');

class FortuneEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fortune',
            group: 'enchantments',
            memberName: 'fortune',
            description: 'Informações detalhadas sobre o encantamento Fortune.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Fortune**\n\
            *Descrição:* Aumenta a chance de dropar mais itens.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Ferramentas\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Silk Touch.\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = FortuneEnchant;