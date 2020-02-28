const commando = require('discord.js-commando');

class RiptideEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'riptide',
            group: 'enchantments',
            memberName: 'riptide',
            description: 'Informações detalhadas sobre o encantamento Riptide.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Riptide**\n\
            *Descrição:* Tridente leva o jogador junto a ele quando lançado (Oceanos e chuva).\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Tridente.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Channeling e Loyalty.\n\
            *Valor de venda:* $7000.\n\
            *Mapeamento:* Prateleira Azul, Coluna 1, Linha 4.\n')
    }
}

module.exports = RiptideEnchant;