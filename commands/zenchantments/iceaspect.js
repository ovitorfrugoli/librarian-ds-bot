const commando = require('discord.js-commando');

class iceAspectEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'iceaspect',
            group: 'zenchantments',
            memberName: 'iceaspect',
            description: 'Informações detalhadas sobre o encantamento Ice Aspect.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Ice Aspect**\n\
            *Descrição:* Congela temporariamente o alvo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 2.\n\
            *Valor de venda:* $40000.\n\
            *Conflito:* \n\
            *Mapeamento:* Prateleira Azul, Coluna 4, Linha 3.\n')
    }
}

module.exports = iceAspectEnchant;