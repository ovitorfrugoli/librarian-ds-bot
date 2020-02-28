const commando = require('discord.js-commando');

class BlastProtectionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'blastprotection',
            group: 'enchantments',
            memberName: 'blastprotection',
            description: 'Informações detalhadas sobre o encantamento Blast Protection.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Blast Protection**\n\
            *Descrição:* Reduz o dano de explosões e knockback.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Armaduras.\n\
            *Level máximo:* 4.\n\
            *Conflitos:* Todo outro tipo de proteção.\n\
            *Valor de venda:* $5000.\n\
            *Mapeamento:* Prateleira Vermelha, Coluna 4, Linha 2.\n')
    }
}

module.exports = BlastProtectionEnchant;