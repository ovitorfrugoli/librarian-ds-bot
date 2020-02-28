const commando = require('discord.js-commando');

class RespirationEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'respiration',
            group: 'enchantments',
            memberName: 'respiration',
            description: 'Informações detalhadas sobre o encantamento Respiration.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Respiration**\n\
            *Descrição:* Aumenta o tempo de respiração em baixo da água.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Capacetes e Cascos.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* \n\
            *Valor de venda:* $8000.\n\
            *Mapeamento:* Prateleira Laranja, Coluna 1, Linha 3.\n')
    }
}

module.exports = RespirationEnchant;