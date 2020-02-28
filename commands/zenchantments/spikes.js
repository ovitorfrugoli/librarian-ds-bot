const commando = require('discord.js-commando');

class SpikesEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spikes',
            group: 'zenchantments',
            memberName: 'spikes',
            description: 'Informações detalhadas sobre o encantamento Spikes.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Spikes**\n\
            *Descrição:* Danifica entidades ao saltar perto da mesma.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Botas.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $20000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Verde, Coluna 1, Linha 5.\n')
    }
}

module.exports = SpikesEnchant;