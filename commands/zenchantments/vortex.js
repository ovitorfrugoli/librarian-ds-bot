const commando = require('discord.js-commando');

class VortexEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'vortex',
            group: 'zenchantments',
            memberName: 'vortex',
            description: 'Informações detalhadas sobre o encantamento Vortex.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Vortex**\n\
            *Descrição:* Puxa os itens dropados para sí.\n\
            *Encantamento disponível:* \n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas e Arcos.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $15000.\n\
            *Conflito:*\n\
            *Mapeamento:* Prateleira Roxa, Coluna 4, Linha 5.\n')
    }
}

module.exports = VortexEnchant;