const commando = require('discord.js-commando');

class BindingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'curseofbinding',
            group: 'enchantments',
            memberName: 'curseofbinding',
            description: 'Informações detalhadas sobre o encantamento Curse of Binding.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Curse of Binding**\n\
            *Descrição:* O item não pode ser removido.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Armaduras, Elytra.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* \n\
            *Valor de venda:* $0\n\
            *Mapeamento:* Prateleira Roxa, Coluna 4, Linha 2.\n')
    }
}

module.exports = BindingEnchant;