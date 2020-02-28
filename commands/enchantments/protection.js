const commando = require('discord.js-commando');

class ProtectionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'protection',
            group: 'enchantments',
            memberName: 'protection',
            description: 'Informações detalhadas sobre o encantamento Protection.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Protection**\n\
            *Descrição:* Reduz grande parte dos danos em 4% por level.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Armaduras.\n\
            *Level máximo:* 4.\n\
            *Conflitos:* Qualquer outro tipo de proteção.\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Prateleira Vermelha, Coluna 3, Linha 4.\n')
    }
}

module.exports = ProtectionEnchant;