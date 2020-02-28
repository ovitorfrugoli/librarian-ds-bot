const commando = require('discord.js-commando');

class ReaperEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'reaper',
            group: 'zenchantments',
            memberName: 'reaper',
            description: 'Informações detalhadas sobre o encantamento Reaper.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Reaper**\n\
            *Descrição:* Efeito de cegueira e Wither ao alvo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $90000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Laranja, Coluna 4, Linha 3.\n')
    }
}

module.exports = ReaperEnchant;