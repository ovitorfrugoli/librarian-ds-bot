const commando = require('discord.js-commando');

class DecapitationEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'decapitation',
            group: 'zenchantments',
            memberName: 'decapitation',
            description: 'Informações detalhadas sobre o encantamento Decapitation.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Decapitation**\n\
            *Descrição:* Arrancar a cabeça do caboclo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 4.\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Prateleira Vermelha, Coluna 3, Linha 1.\n')
    }
}

module.exports = DecapitationEnchant;