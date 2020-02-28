const commando = require('discord.js-commando');

class ShortCastEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shortcast',
            group: 'zenchantments',
            memberName: 'shortcast',
            description: 'Informações detalhadas sobre o encantamento Short Cast.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Short Cast**\n\
            *Descrição:* Lança anzóis de pesca mais perto.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Vara de pescar.\n\
            *Level máximo:* 2.\n\
            *Valor de venda:* $5000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Vermelha, Coluna 2, Linha 2.\n')
    }
}

module.exports = ShortCastEnchant;