const commando = require('discord.js-commando');

class MagnetismEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'magnetism',
            group: 'zenchantments',
            memberName: 'magnetism',
            description: 'Informações detalhadas sobre o encantamento Magnetism.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Magnetism**\n\
            *Descrição:* Atraí lentamente itens ao jogador.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Calças.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $30000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Azul, Coluna 4, Linha 1.\n')
    }
}

module.exports = MagnetismEnchant;