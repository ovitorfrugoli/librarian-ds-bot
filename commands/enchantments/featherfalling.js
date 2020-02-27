const commando = require('discord.js-commando');

class FeatherFallingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'featherfalling',
            group: 'enchantments',
            memberName: 'featherfalling',
            description: 'Informações detalhadas sobre o encantamento Feather Falling.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Feather Falling**\n\
            *Descrição:* Diminui o dano causado por queda e por perolas do end.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Botas\n\
            *Level máximo:* 4.\n\
            *Conflitos:* \n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = FeatherFallingEnchant;