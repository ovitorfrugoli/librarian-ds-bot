const commando = require('discord.js-commando');

class LumberEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lumber',
            group: 'zenchantments',
            memberName: 'lumber',
            description: 'Informações detalhadas sobre o encantamento Lumber.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Lumber**\n\
            *Descrição:* Quebra a arma de uma vez só.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Machados.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $10000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Laranja, Coluna 3, Linha 4.\n')
    }
}

module.exports = LumberEnchant;