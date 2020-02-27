const commando = require('discord.js-commando');

class BaneOfArthropodsEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'baneofarthropods',
            group: 'enchantments',
            memberName: 'baneofarthropods',
            description: 'Informações detalhadas sobre o encantamento Bane of Arthropods.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Bane of Arthropods**\n\
            *Descrição:* Inflinge mais dano à artrópodes.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas e Machados.\n\
            *Level máximo:* 5.\n\
            *Conflitos:* Smite e Sharpness.\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = BaneOfArthropodsEnchant;