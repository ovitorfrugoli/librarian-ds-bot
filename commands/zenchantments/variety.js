const commando = require('discord.js-commando');

class VarietyEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'variety',
            group: 'zenchantments',
            memberName: 'variety',
            description: 'Informações detalhadas sobre o encantamento Variety.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Variety**\n\
            *Descrição:* Madeiras e folhas aleatórias.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Machados.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $5000.\n\
            *Conflito:* Fire\n\
            *Mapeamento:* Prateleira Roxa, Coluna 3, Linha 1.\n')
    }
}

module.exports = VarietyEnchant;