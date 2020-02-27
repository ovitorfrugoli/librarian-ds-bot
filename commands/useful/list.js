const commando = require('discord.js-commando');

class EnchantsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lista',
            group: 'useful',
            memberName: 'lista',
            description: 'Lista de encantamentos disponíveis.'
        });
    }

    async run(message, args) {
        message.reply('\n\
        >>> `Utilize: !<nome do encantamento> para informações detalhadas.`\n\n\
        **Lista de encantamentos**\n\
        1.Aqua Affinity \n\
        2.Bane of Arthropods \n\
        3.Blast Protection \n\
        4.Channeling \n\
        5.Curse of Binding \n\
        6.Curse of Vanishing \n\
        7.Depth Strider \n\
        8.Efficiency \n\
        9.Feather Falling \n\
        10.Fire Aspect \n\
        11.Flame \n\
        12.Fortune \n\
        13.Frost Walker \n\
        14.Impaling \n\
        15.Infinity \n\
        16.Knockback \n\
        17.Looting \n\
        18.Loyalty \n\
        19.Luck of the Sea \n\
        20.Lure \n\
        21.Mending \n\
        22.Multishot \n\
        23.Piercing \n\
        24.Power \n\
        25.Projectile Protection \n\
        26.Protection \n\
        27.Punch \n\
        28.Quick Charge \n\
        29.Respiration \n\
        30.Riptide \n\
        31.Sharpness \n\
        32.Chopping \n\
        33.Silk Touch \n\
        34.Smite \n\
        35.Sweeping Edge \n\
        36.Thorns \n\
        37.Unbreaking \n')
    }
}

module.exports = EnchantsCommand;