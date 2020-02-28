const commando = require('discord.js-commando');

class FireEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fire',
            group: 'zenchantments',
            memberName: 'fire',
            description: 'Informações detalhadas sobre o encantamento Fire.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Fire**\n\
            *Descrição:* Dropa a versão queimada das coisas.\n\
            *Encantamento disponível:* Super-VIP\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Ferramentas.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $50000.\n\
            *Conflito:* Variety. \n\
            *Mapeamento:* Prateleira Laranja, Coluna 4, Linha 5.\n')
    }
}

module.exports = FireEnchant;