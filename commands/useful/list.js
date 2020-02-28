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
        1.Aqua Affinity\n\
        2.Bane of Arthropods\n\
        3.Blast Protection\n\
        4.Channeling\n\
        5.Curse of Binding\n\
        6.Curse of Vanishing\n\
        7.Depth Strider\n\
        8.Efficiency\n\
        9.Feather Falling\n\
        10.Fire Aspect\n\
        11.Flame\n\
        12.Fortune\n\
        13.Frost Walker\n\
        14.Impaling\n\
        15.Infinity\n\
        16.Knockback\n\
        17.Looting\n\
        18.Loyalty\n\
        19.Luck of the Sea\n\
        20.Lure\n\
        21.Mending\n\
        22.Multishot\n\
        23.Piercing\n\
        24.Power\n\
        25.Projectile Protection\n\
        26.Protection\n\
        27.Punch\n\
        28.Quick Charge\n\
        29.Respiration\n\
        30.Riptide\n\
        31.Sharpness\n\
        32.Chopping\n\
        33.Silk Touch\n\
        34.Smite\n\
        35.Sweeping Edge\n\
        36.Thorns\n\
        37.Unbreaking\n\
        38.Anthropomorphism\n\
        39.Arborist\n\
        40.Bind\n\
        41.Blazescurse\n\
        42.Blizzard\n\
        43.Bounce\n\
        44.Decapitation\n\
        45.Extraction\n\
        46.Fire\n\
        47.Firestorm\n\
        48.Force\n\
        49.Fuse\n\
        50.Germination\n\
        51.Gluttony\n\
        52.Goldrush\n\
        53.Grab\n\
        54.Haste\n\
        55.Haul\n\
        56.Ice Aspect\n\
        57.Level\n\
        58.Longcast\n\
        59.Lumber\n\
        60.Magnetism\n\
        61.Mystery Fish\n\
        62.Nether Step\n\
        63.Night Vision\n\
        64.Potion\n\
        65.Potion Resistance\n\
        66.Rainbow\n\
        67.Reaper\n\
        68.Reveal\n\
        69.Saturation\n\
        70.Shortcast\n\
        71.Siphon\n\
        72.Sonic Shock\n\
        73.Spikes\n\
        74.Stationary\n\
        75.Stock\n\
        76.Stream\n\
        77.Toxic\n\
        78.Tracer\n\
        79.Transformation\n\
        80.Variety\n\
        81.Vortex\n')
    }
}

module.exports = EnchantsCommand;