const commando = require('discord.js-commando');

class LureEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lure',
            group: 'enchantments',
            memberName: 'lure',
            description: 'Informações detalhadas sobre o encantamento Lure.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Lure**\n\
            *Descrição:* Aumenta a frequência dos peixes morderem a isca.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Vara de pesca.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* \n\
            *Valor de venda:* $7000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = LureEnchant;