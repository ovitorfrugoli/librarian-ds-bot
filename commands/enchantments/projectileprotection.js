const commando = require('discord.js-commando');

class ProjectileProtectionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'projectileprotection',
            group: 'enchantments',
            memberName: 'projectileprotection',
            description: 'Informações detalhadas sobre o encantamento Projectile Protection.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Projectile Protection**\n\
            *Descrição:* Reduz o dano dos projéteis.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Armaduras.\n\
            *Level máximo:* 4.\n\
            *Conflitos:* Qualquer outro tipo de proteção\n\
            *Valor de venda:* $5000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = ProjectileProtectionEnchant;