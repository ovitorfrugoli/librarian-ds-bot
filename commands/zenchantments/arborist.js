const commando = require('discord.js-commando');

class ArboristEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'arborist',
            group: 'zenchantments',
            memberName: 'arborist',
            description: 'Informações detalhadas sobre o encantamento Arborist.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Arborist**\n\
            *Descrição:* Dropa mais maçãs, sticks e saplings.\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Machados.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Prateleira Azul, Coluna 1, Linha 5.\n')
    }
}

module.exports = ArboristEnchant;