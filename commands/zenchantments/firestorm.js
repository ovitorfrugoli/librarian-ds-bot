const commando = require('discord.js-commando');

class FireStormEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'firestorm',
            group: 'zenchantments',
            memberName: 'firestorm',
            description: 'Informações detalhadas sobre o encantamento Firestorm.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Firestorm**\n\
            *Descrição:* Desfere uma tempestade de fogo ao impacto.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $80000.\n\
            *Conflito:* Blizzard. \n\
            *Mapeamento:* Prateleira Roxa, Coluna 1, Linha 4.\n')
    }
}

module.exports = FireStormEnchant;