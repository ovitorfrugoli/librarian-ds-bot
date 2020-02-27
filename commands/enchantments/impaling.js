const commando = require('discord.js-commando');

class ImpalingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'impaling',
            group: 'enchantments',
            memberName: 'impaling',
            description: 'Informações detalhadas sobre o encantamento Impaling.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Impaling**\n\
            *Descrição:* Aumenta o dano em mobs que spawnam no oceano. Também aumenta o dano enquanto está chovendo.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Tridente.\n\
            *Level máximo:* 5.\n\
            *Conflitos:* \n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = ImpalingEnchant;