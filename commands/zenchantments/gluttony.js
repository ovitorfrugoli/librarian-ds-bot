const commando = require('discord.js-commando');

class GluttonyEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'gluttony',
            group: 'zenchantments',
            memberName: 'gluttony',
            description: 'Informações detalhadas sobre o encantamento Gluttony.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Gluttony**\n\
            *Descrição:* Come automaticamente pelo jogador.\n\
            *Encantamento disponível:* Super-VIP\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Capacetes.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $70000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Azul, Coluna 3, Linha 1.\n')
    }
}

module.exports = GluttonyEnchant;