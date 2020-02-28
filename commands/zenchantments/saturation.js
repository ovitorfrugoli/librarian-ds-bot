const commando = require('discord.js-commando');

class SaturationEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'saturation',
            group: 'zenchantments',
            memberName: 'saturation',
            description: 'Informações detalhadas sobre o encantamento Saturation.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Saturation**\n\
            *Descrição:* Gasta menos fome.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Calças.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $90000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Roxa, Coluna 4, Linha 1.\n')
    }
}

module.exports = SaturationEnchant;