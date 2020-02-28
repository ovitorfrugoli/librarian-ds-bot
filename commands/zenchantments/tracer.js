const commando = require('discord.js-commando');

class TracerEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tracer',
            group: 'zenchantments',
            memberName: 'tracer',
            description: 'Informações detalhadas sobre o encantamento Tracer.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Tracer**\n\
            *Descrição:* Guia a flecha para os alvos e os ataca.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arco.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $50000.\n\
            *Conflito:*\n\
            *Mapeamento:* Prateleira Verde, Coluna 1, Linha 3.\n')
    }
}

module.exports = TracerEnchant;