const commando = require('discord.js-commando');

class EfficiencyEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'efficiency',
            group: 'enchantments',
            memberName: 'efficiency',
            description: 'Informações detalhadas sobre o encantamento Efficiency.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Efficiency**\n\
            *Descrição:* Aumenta a velocidade de quebra de seus respectivos blocos.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Ferramentas e tesouras.\n\
            *Level máximo:* 5.\n\
            *Conflitos:* \n\
            *Valor de venda:* $13000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = EfficiencyEnchant;