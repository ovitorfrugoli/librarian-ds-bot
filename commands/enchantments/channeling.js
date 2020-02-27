const commando = require('discord.js-commando');

class ChannelingEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'channeling',
            group: 'enchantments',
            memberName: 'channeling',
            description: 'Informações detalhadas sobre o encantamento Channeling.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Channeling**\n\
            *Descrição:* O tridente cria um raio onde ele acerta. (Apenas em dias de chuva ou tempestade).\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Tridente.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* Riptide.\n\
            *Valor de venda:* Indefinido.\n\
            *Mapeamento:* Indefinido.\n')
    }
}

module.exports = ChannelingEnchant;