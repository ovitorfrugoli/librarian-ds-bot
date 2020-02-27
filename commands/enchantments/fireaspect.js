const commando = require('discord.js-commando');

class FireAspectEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fireaspect',
            group: 'enchantments',
            memberName: 'fireaspect',
            description: 'Informações detalhadas sobre o encantamento Fire Aspect.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Fire Aspect**\n\
            *Descrição:* Diminui o dano causado por queda e por perolas do end.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas\n\
            *Level máximo:* 2.\n\
            *Conflitos:* \n\
            *Valor de venda:* $10000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = FireAspectEnchant;