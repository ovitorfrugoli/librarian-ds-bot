const commando = require('discord.js-commando');

class GoldRushEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'goldrush',
            group: 'zenchantments',
            memberName: 'goldrush',
            description: 'Informações detalhadas sobre o encantamento Gold Rush.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Gold Rush**\n\
            *Descrição:* Dropa pepitas de ouro ao minerar areia.\n\
            *Encantamento disponível:* Super-VIP\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Pás.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $20000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Roxa, Coluna 1, Linha 2.\n')
    }
}

module.exports = GoldRushEnchant;