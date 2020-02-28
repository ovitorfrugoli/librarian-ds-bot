const commando = require('discord.js-commando');

class ToxicEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'toxic',
            group: 'zenchantments',
            memberName: 'toxic',
            description: 'Informações detalhadas sobre o encantamento Toxic.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Toxic**\n\
            *Descrição:* Efeito de naúsea no alvo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arco e Espada.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $5000.\n\
            *Conflito:*\n\
            *Mapeamento:* Prateleira Verde, Coluna 1, Linha 4.\n')
    }
}

module.exports = ToxicEnchant;