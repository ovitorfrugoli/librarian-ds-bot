const commando = require('discord.js-commando');

class LongCastEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'longcast',
            group: 'zenchantments',
            memberName: 'longcast',
            description: 'Informações detalhadas sobre o encantamento Long Cast.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Long Cast**\n\
            *Descrição:* Lança os anzóis de pesca mais longe.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Vara de pescar.\n\
            *Level máximo:* 2.\n\
            *Valor de venda:* $6000.\n\
            *Conflito:* Short Cast.\n\
            *Mapeamento:* Prateleira Azul, Coluna 4, Linha 2.\n')
    }
}

module.exports = LongCastEnchant;