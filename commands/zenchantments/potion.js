const commando = require('discord.js-commando');

class PotionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'potion',
            group: 'zenchantments',
            memberName: 'potion',
            description: 'Informações detalhadas sobre o encantamento Potion.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Potion**\n\
            *Descrição:* Efeito aleatorio de poção ao atacar.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $50000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Vermelha, Coluna 1, Linha 4.\n')
    }
}

module.exports = PotionEnchant;