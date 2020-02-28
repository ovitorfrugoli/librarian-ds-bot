const commando = require('discord.js-commando');

class BlizzardEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'blizzard',
            group: 'zenchantments',
            memberName: 'blizzard',
            description: 'Informações detalhadas sobre o encantamento Blizzard.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Blizzard**\n\
            *Descrição:* Inflinge slow no alvo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 3.\n\
            *Valor de venda:* $80000.\n\
            *Conflito:* Firestorm\n\
            *Mapeamento:* Prateleira Laranja, Coluna 4, Linha 4.\n')
    }
}

module.exports = BlizzardEnchant;