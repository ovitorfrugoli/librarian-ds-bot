const commando = require('discord.js-commando');

class SilkTouchEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'silktouch',
            group: 'enchantments',
            memberName: 'silktouch',
            description: 'Informações detalhadas sobre o encantamento Silk Touch.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Silk Touch**\n\
            *Descrição:* Os blocos minerados dropam eles mesmos.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Ferramentas.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* Fortune, Looting e Luck of the Sea.\n\
            *Valor de venda:* $7000.\n\
            *Mapeamento:* Prateleira Laranja, Coluna 2, Linha 2.\n')
    }
}

module.exports = SilkTouchEnchant;