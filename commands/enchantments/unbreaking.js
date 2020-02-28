const commando = require('discord.js-commando');

class UnbreakingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'unbreaking',
            group: 'enchantments',
            memberName: 'unbreaking',
            description: 'Informações detalhadas sobre o encantamento Unbreaking.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Unbreaking**\n\
            *Descrição:* Aumenta a durabilidade dos itens.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Praticamente tudo.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* \n\
            *Valor de venda:* $12000.\n\
            *Mapeamento:* Prateleira Vermelha, Coluna 4, Linha 2.\n')
    }
}

module.exports = UnbreakingEnchant;