const commando = require('discord.js-commando');

class SiphonEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'siphon',
            group: 'zenchantments',
            memberName: 'siphon',
            description: 'Informações detalhadas sobre o encantamento Siphon.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Siphon**\n\
            *Descrição:* Drena a saúde do inimigo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas e Arcos.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $90000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Laranja, Coluna 1, Linha 1.\n')
    }
}

module.exports = SiphonEnchant;