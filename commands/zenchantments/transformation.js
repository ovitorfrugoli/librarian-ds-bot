const commando = require('discord.js-commando');

class TransformationEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'transformation',
            group: 'zenchantments',
            memberName: 'transformation',
            description: 'Informações detalhadas sobre o encantamento Transformation.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Transformation**\n\
            *Descrição:* Altera o mob para o primogênito dele.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $200000.\n\
            *Conflito:*\n\
            *Mapeamento:* Prateleira Verde, Coluna 1, Linha 2.\n')
    }
}

module.exports = TransformationEnchant;