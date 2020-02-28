const commando = require('discord.js-commando');

class LevelEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'level',
            group: 'zenchantments',
            memberName: 'level',
            description: 'Informações detalhadas sobre o encantamento Level.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Level**\n\
            *Descrição:* Aumenta a porcentagem de XP dropada.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas, Arcos, Picaretas.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $100000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Vermelha, Coluna 2, Linha 1.\n')
    }
}

module.exports = LevelEnchant;