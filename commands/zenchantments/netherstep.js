const commando = require('discord.js-commando');

class NetherStepEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'netherstep',
            group: 'zenchantments',
            memberName: 'netherstep',
            description: 'Informações detalhadas sobre o encantamento Nether Step.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Nether Step**\n\
            *Descrição:* Caminha sob a lava.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Botas.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $30000.\n\
            *Conflito:* Frost Walker\n\
            *Mapeamento:* Prateleira Roxa, Coluna 3, Linha 2.\n')
    }
}

module.exports = NetherStepEnchant;