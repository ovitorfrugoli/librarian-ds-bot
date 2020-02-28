const commando = require('discord.js-commando');

class BounceEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bounce',
            group: 'zenchantments',
            memberName: 'bounce',
            description: 'Informações detalhadas sobre o encantamento Bounce.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Bounce**\n\
            *Descrição:* Pulo mais alto em slimeblock.\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Botas.\n\
            *Level máximo:* 5.\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 4, Linha 2.\n')
    }
}

module.exports = BounceEnchant;