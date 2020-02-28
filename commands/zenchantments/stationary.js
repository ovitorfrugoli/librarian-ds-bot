const commando = require('discord.js-commando');

class StationaryEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stationary',
            group: 'zenchantments',
            memberName: 'stationary',
            description: 'Informações detalhadas sobre o encantamento Stationary.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Stationary**\n\
            *Descrição:* Mantém os mobs enraizados no local.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas e Arcos.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $10000.\n\
            *Conflito:* Knockback\n\
            *Mapeamento:* Prateleira Laranja, Coluna 4, Linha 2.\n')
    }
}

module.exports = StationaryEnchant;