const commando = require('discord.js-commando');

class PotionREnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'potionresistance',
            group: 'zenchantments',
            memberName: 'potionresistance',
            description: 'Informações detalhadas sobre o encantamento Potion Resistance.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Potion Resistance**\n\
            *Descrição:* Diminui efeito de poções no jogador.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Armaduras.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $50000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Vermelha, Coluna 1, Linha 3.\n')
    }
}

module.exports = PotionREnchant;