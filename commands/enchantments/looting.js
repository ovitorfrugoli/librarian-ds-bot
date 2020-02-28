const commando = require('discord.js-commando');

class LootingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'looting',
            group: 'enchantments',
            memberName: 'looting',
            description: 'Informações detalhadas sobre o encantamento Looting.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Looting**\n\
            *Descrição:* Aumenta a quantia de itens doprados por mobs.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Silk Touch.\n\
            *Valor de venda:* $10000.\n\
            *Mapeamento:* Prateleira Azul, Coluna 1, Linha 2.\n')
    }
}

module.exports = LootingEnchant;