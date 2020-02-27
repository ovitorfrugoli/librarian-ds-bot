const commando = require('discord.js-commando');

class AquaAffinityEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'aquaaffinity',
            group: 'enchantments',
            memberName: 'aquaaffinity',
            description: 'Informações detalhadas sobre o encantamento Aqua Affinity.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Aqua Affinity**\n\
            *Descrição:* Aumenta a velocidade de mineração embaixo da água.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Capacete e Casco de Tartaruga.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $7000.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = AquaAffinityEnchant;