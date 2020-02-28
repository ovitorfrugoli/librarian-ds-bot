const commando = require('discord.js-commando');

class MysteryFishEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mysteryfish',
            group: 'zenchantments',
            memberName: 'mysteryfish',
            description: 'Informações detalhadas sobre o encantamento Mystery Fish.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Mystery Fish**\n\
            *Descrição:* Captura na água como Lula e Guardiões.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Vara de pesca.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $10000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Vermelha, Coluna 1, Linha 5.\n')
    }
}

module.exports = MysteryFishEnchant;