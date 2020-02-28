const commando = require('discord.js-commando');

class RainbowEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rainbow',
            group: 'zenchantments',
            memberName: 'rainbow',
            description: 'Informações detalhadas sobre o encantamento Rainbow.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Rainbow**\n\
            *Descrição:* Ao colher lã, a cor vem aleatória.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Tesoura.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $5000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Laranja, Coluna 1, Linha 5.\n')
    }
}

module.exports = RainbowEnchant;