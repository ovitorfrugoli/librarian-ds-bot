const commando = require('discord.js-commando');

class BindEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bind',
            group: 'zenchantments',
            memberName: 'bind',
            description: 'Informações detalhadas sobre o encantamento Bind.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Bind**\n\
            *Descrição:* Mantém o item ao morrer.\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Praticamente tudo.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $150000.\n\
            *Mapeamento:* Prateleira Laranja, Coluna 2, Linha 4.\n')
    }
}

module.exports = BindEnchant;