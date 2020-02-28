const commando = require('discord.js-commando');

class ForceEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'force',
            group: 'zenchantments',
            memberName: 'force',
            description: 'Informações detalhadas sobre o encantamento Force.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Force**\n\
            *Descrição:* Empurra ou puxa mobs próximos.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $30000.\n\
            *Conflito:* Rainbow, Slam e Gust. \n\
            *Mapeamento:* Prateleira Azul, Coluna 3, Linha 3.\n')
    }
}

module.exports = ForceEnchant;