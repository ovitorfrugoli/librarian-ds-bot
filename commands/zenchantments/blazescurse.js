const commando = require('discord.js-commando');

class BlazesCurseEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'blazescurse',
            group: 'zenchantments',
            memberName: 'blazescurse',
            description: 'Informações detalhadas sobre o encantamento Blazes Curse.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Blazes Curse**\n\
            *Descrição:* Fogo e lava não inflingem dano, porém água e chuva sim.\n\
            *Encantamento disponível:* Super-VIP\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Peitoral.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $60000.\n\
            *Mapeamento:* Prateleira Laranja, Coluna 2, Linha 4.\n')
    }
}

module.exports = BlazesCurseEnchant;