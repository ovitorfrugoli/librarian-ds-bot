const commando = require('discord.js-commando');

class FireProtectionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fireprotection',
            group: 'enchantments',
            memberName: 'fireprotection',
            description: 'Informações detalhadas sobre o encantamento Fire Protection.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Fire Protection**\n\
            *Descrição:* Reduz o dano pelo fogo e o tempo de queima.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Armaduras\n\
            *Level máximo:* 4.\n\
            *Conflitos:* Todo outro tipo de proteção.\n\
            *Valor de venda:* $5000.\n\
            *Mapeamento:* Prateleira Azul, Coluna 3, Linha 5.\n')
    }
}

module.exports = FireProtectionEnchant;