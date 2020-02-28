const commando = require('discord.js-commando');

class AnthropomorphismEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'anthropomorphism',
            group: 'zenchantments',
            memberName: 'anthropomorphism',
            description: 'Informações detalhadas sobre o encantamento Anthropomorphism.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Anthropomorphism**\n\
            *Descrição:* Gera blocos que te protegem quando agacha e aperta botão direito, e ataca usando botão esquerdo.\n\
            *Encantamento disponível:* Magnata\n\
            *Tipo de encantamento:* Zenchantment\n\
            *Aplicado em:* Picareta.\n\
            *Level máximo:* 1.\n\
            *Valor de venda:* $25000.\n\
            *Mapeamento:* Prateleira Laranja, Coluna 4, Linha 1.\n')
    }
}

module.exports = AnthropomorphismEnchant;