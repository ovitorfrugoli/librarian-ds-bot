const commando = require('discord.js-commando');

class ThornsEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'thorns',
            group: 'enchantments',
            memberName: 'thorns',
            description: 'Informações detalhadas sobre o encantamento Thorns.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Thorns**\n\
            *Descrição:* Reflete o dano inflingido em ti.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Armaduras.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* \n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = ThornsEnchant;