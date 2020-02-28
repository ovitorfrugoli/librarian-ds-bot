const commando = require('discord.js-commando');

class GerminationEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'germination',
            group: 'zenchantments',
            memberName: 'germination',
            description: 'Informações detalhadas sobre o encantamento Germination.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Germination**\n\
            *Descrição:* Usa a farinha de osso do inventário do jogador.\n\
            *Encantamento disponível:* Todos\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Enxadas.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $10000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Roxa, Coluna 2, Linha 4.\n')
    }
}

module.exports = GerminationEnchant;