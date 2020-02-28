const commando = require('discord.js-commando');

class SonicShockEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sonicshock',
            group: 'zenchantments',
            memberName: 'sonicshock',
            description: 'Informações detalhadas sobre o encantamento Sonic Shock.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Sonic Shock**\n\
            *Descrição:* Dano ao ir rápido com a elytra.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Elytra.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $70000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Laranja, Coluna 2, Linha 4.\n')
    }
}

module.exports = SonicShockEnchant;