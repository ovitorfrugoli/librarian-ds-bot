const commando = require('discord.js-commando');

class NightvisionEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'nightvision',
            group: 'zenchantments',
            memberName: 'nightvision',
            description: 'Informações detalhadas sobre o encantamento Nightvision.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Nightvision**\n\
            *Descrição:* Permite que o jogador veja no escuro.\n\
            *Encantamento disponível:*\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Capacete.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $10000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Laranja, Coluna 1, Linha 4.\n')
    }
}

module.exports = NightvisionEnchant;