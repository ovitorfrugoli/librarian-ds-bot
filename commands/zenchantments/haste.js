const commando = require('discord.js-commando');

class HasteEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'haste',
            group: 'zenchantments',
            memberName: 'haste',
            description: 'Informações detalhadas sobre o encantamento Haste.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Haste**\n\
            *Descrição:* Basicamente o que Efficiency faz.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Ferramentas.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $400000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Azul, Coluna 4, Linha 5.\n')
    }
}

module.exports = HasteEnchant;