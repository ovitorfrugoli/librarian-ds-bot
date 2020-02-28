const commando = require('discord.js-commando');

class GrabEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'grab',
            group: 'zenchantments',
            memberName: 'grab',
            description: 'Informações detalhadas sobre o encantamento Grab.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Grab**\n\
            *Descrição:* Teletransporta item e XP direto para o jogador.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Ferramentas.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $90000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Roxa, Coluna 1, Linha 1.\n')
    }
}

module.exports = GrabEnchant;