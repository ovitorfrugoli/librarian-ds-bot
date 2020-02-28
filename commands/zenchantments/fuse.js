const commando = require('discord.js-commando');

class FuseEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fuse',
            group: 'zenchantments',
            memberName: 'fuse',
            description: 'Informações detalhadas sobre o encantamento Fuse.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Fuse**\n\
            *Descrição:* Acende qualquer coisa explosiva.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $2000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Roxa, Coluna 1, Linha 3.\n')
    }
}

module.exports = FuseEnchant;