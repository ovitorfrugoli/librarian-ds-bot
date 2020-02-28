const commando = require('discord.js-commando');

class FlameEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flame',
            group: 'enchantments',
            memberName: 'flame',
            description: 'Informações detalhadas sobre o encantamento Flame.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Flame**\n\
            *Descrição:* A flecha ateia fogo nos alvos.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Arcos\n\
            *Level máximo:* 1.\n\
            *Conflitos:* \n\
            *Valor de venda:* $7000.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 2, Linha 5.\n')
    }
}

module.exports = FlameEnchant;