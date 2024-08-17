//import vanilla from "data.js";
//import caco from "data.js";

const vanilla = {
    effects: [
        {basegold: 25, name: "Cure Disease"},
        {basegold: 7, name: "Damage Health"},
        {basegold: 65, name: "Damage Magicka"},
        {basegold: 324, name: "Damage Magicka Regen"},
        {basegold: 53, name: "Damage Stamina"},
        {basegold: 194, name: "Damage Stamina Regen"},
        {basegold: 142, name: "Fear"},
        {basegold: 58, name: "Fortify Alteration"},
        {basegold: 56, name: "Fortify Barter"},
        {basegold: 0, name: "Fortify Blocking"},
        {basegold: 256, name: "Fortify Carry Weight"},
        {basegold: 92, name: "Fortify Conjuration"},
        {basegold: 184, name: "Fortify Destruction"},
        {basegold: 17, name: "Fortify Enchanting"},
        {basegold: 599, name: "Fortify Health"},
        {basegold: 65, name: "Fortify Heavy Armor"},
        {basegold: 116, name: "Fortify Illusion"},
        {basegold: 65, name: "Fortify Light Armor"},
        {basegold: 30, name: "Fortify Lockpicking"},
        {basegold: 87, name: "Fortify Magicka"},
        {basegold: 145, name: "Fortify Marksman"},
        {basegold: 145, name: "Fortify One-Handed"},
        {basegold: 145, name: "Fortify Pickpocket"},
        {basegold: 145, name: "Fortify Restoration"},
        {basegold: 101, name: "Fortify Smithing"},
        {basegold: 145, name: "Fortify Sneak"},
        {basegold: 87, name: "Fortify Stamina"},
        {basegold: 145, name: "Fortify Two-Handed"},
        {basegold: 127, name: "Frenzy"},
        {basegold: 322, name: "Invisibility"},
        {basegold: 102, name: "Lingering Damage Health"},
        {basegold: 85, name: "Lingering Damage Magicka"},
        {basegold: 15, name: "Lingering Damage Stamina"},
        {basegold: 337, name: "Paralysis"},
        {basegold: 217, name: "Regenerate Health"},
        {basegold: 217, name: "Regenerate Magicka"},
        {basegold: 217, name: "Regenerate Stamina"},
        {basegold: 107, name: "Resist Fire"},
        {basegold: 107, name: "Resist Frost"},
        {basegold: 61, name: "Resist Magic"},
        {basegold: 25, name: "Restore Health"},
        {basegold: 30, name: "Restore Magicka"},
        {basegold: 30, name: "Restore Stamina"},
        {basegold: 122, name: "Waterbreathing"},
        {basegold: 60, name: "Weakness to Fire"},
        {basegold: 50, name: "Weakness to Frost"},
        {basegold: 61, name: "Weakness to Magic"},
        {basegold: 70, name: "Weakness to Shock"},
        {basegold: 0, name: "Well-being"}
    ],
    ingredients: [
        { available: true, name:"Abecean Longfin", effects: ["Weakness to Frost", "Fortify Sneak", "Weakness to Poison", "Fortify Restoration"] },
        { available: true, name:"Alocasia Fruit",effects: ["Regenerate Stamina", "Light", "Ravage Magicka", "Regenerate Health"], dlc: "Creation-club" },
        { available: true, name:"Ambrosia",effects: ["Restore Health", "Regenerate Health", "Fortify Health", "Cure Poison"], dlc: "Creation-club" },
        { available: true, name:"Ancestor Moth Wing", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "Dawnguard" },
        { available: true, name:"Angelfish",effects: ["Regenerate Health", "Resist Fire", "Fortify Marksman", "Waterbreathing"], dlc: "Creation-club" },
        { available: true, name:"Angler Larvae",effects: ["Lingering Damage Health", "Regenerate Stamina", "Waterbreathing", "Fortify Two-Handed"], dlc: "Creation-club" },
        { available: true, name:"Ash Creep Cluster", effects: ["Damage Stamina", "Invisibility", "Resist Fire", "Fortify Destruction"], dlc: "Dragonborn" },
        { available: true, name:"Ash Hopper Jelly", effects: ["Restore Health", "Fortify Light Armor", "Resist Shock", "Weakness to Frost"], dlc: "Dragonborn" },
        { available: true, name:"Ashen Grass Pod", effects: ["Resist Fire", "Weakness to Shock", "Fortify Lockpicking", "Fortify Sneak"], dlc: "Dragonborn" },
        { available: true, name:"Aster Bloom Core",effects: ["Resist Magic", "Fortify Light Armor", "Fortify Block", "Paralysis"], dlc: "Creation-club" },
        { available: true, name:"Bear Claws", effects: ["Restore Stamina", "Fortify Health", "Fortify One-Handed", "Damage Magicka Regen"] },
        { available: true, name:"Bee", effects: ["Restore Stamina", "Ravage Stamina", "Regenerate Stamina", "Weakness to Shock"] },
        { available: true, name:"Beehive Husk", effects: ["Resist Poison", "Fortify Light Armor", "Fortify Sneak", "Fortify Destruction"] },
        { available: true, name:"Berit's Ashes", effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"] },
        { available: true, name:"Bittergreen Petals",effects: ["Lingering Damage Stamina", "Invisibility", "Cure Poison", "Damage Magicka"], dlc: "Creation-club" },
        { available: true, name:"Bleeding Crown", effects: ["Weakness to Fire", "Fortify Block", "Weakness to Poison", "Resist Magic"] },
        { available: true, name:"Blind Watcher's Eye",effects: ["Light", "Fortify Magicka", "Fortify Alteration", "Spell Absorption"], dlc: "Creation-club" },
        { available: true, name:"Bliss Bug Thorax",effects: ["Weakness to Fire", "Resist Fire", "Fortify Heavy Armor", "Fortify Illusion"], dlc: "Creation-club" },
        { available: true, name:"Blister Pod Cap",effects: ["Restore Magicka", "Fortify Magicka", "Night Eye", "Invisibility"], dlc: "Creation-club" },
        { available: true, name:"Blisterwort", effects: ["Damage Stamina", "Frenzy", "Restore Health", "Fortify Smithing"] },
        { available: true, name:"Bloodgrass",effects: ["Invisibility", "Resist Poison", "Slow", "Fortify Health"], dlc: "Creation-club" },
        { available: true, name:"Blue Butterfly Wing", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"] },
        { available: true, name:"Blue Dartwing", effects: ["Resist Shock", "Fortify Pickpocket", "Restore Health", "Fear"] },
        { available: true, name:"Blue Mountain Flower", effects: ["Restore Health", "Fortify Conjuration", "Fortify Health", "Damage Magicka Regen"] },
        { available: true, name:"Boar Tusk", effects: ["Fortify Stamina", "Fortify Health", "Fortify Block", "Frenzy"], dlc: "Dragonborn" },
        { available: true, name:"Bog Beacon",effects: ["Restore Magicka", "Fortify Heavy Armor", "Fear", "Damage Stamina"], dlc: "Creation-club" },
        { available: true, name:"Bone Meal", effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"] },
        { available: true, name:"Briar Heart", effects: ["Restore Magicka", "Fortify Block", "Paralysis", "Fortify Magicka"] },
        { available: true, name:"Bungler's Bane",effects: ["Slow", "Ravage Stamina", "Damage Stamina Regen", "Resist Magic"], dlc: "Creation-club" },
        { available: true, name:"Burnt Spriggan Wood", effects: ["Weakness to Fire", "Fortify Alteration", "Damage Magicka Regen", "Slow"], dlc: "Dragonborn" },
        { available: true, name:"Butterfly Wing", effects: ["Restore Health", "Fortify Barter", "Lingering Damage Stamina", "Damage Magicka"] },
        { available: true, name:"Canis Root", effects: ["Damage Stamina", "Fortify One-Handed", "Fortify Marksman", "Paralysis"] },
        { available: true, name:"Charred Skeever Hide", effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Restore Health"] },
        { available: true, name:"Chaurus Eggs", effects: ["Weakness to Poison", "Fortify Stamina", "Damage Magicka", "Invisibility"] },
        { available: true, name:"Chaurus Hunter Antennae", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "Dawnguard" },
        { available: true, name:"Chicken's Egg", effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Stamina"] },
        { available: true, name:"Chokeberry",effects: ["Damage Health", "Ravage Health", "Lingering Damage Health", "Weakness to Poison"], dlc: "Creation-club" },
        { available: true, name:"Chokeweed",effects: ["Weakness to Frost", "Restore Stamina", "Cure Disease", "Damage Magicka"], dlc: "Creation-club" },
        { available: true, name:"Coda Flower",effects: ["Damage Health", "Lingering Damage Stamina", "Ravage Magicka", "Fortify Carry Weight"], dlc: "Creation-club" },
        { available: true, name:"Comberry",effects: ["Damage Stamina", "Spell Absorption", "Restore Magicka", "Fortify Destruction"], dlc: "Creation-club" },
        { available: true, name:"Congealed Putrescence",effects: ["Ravage Health", "Restore Magicka", "Weakness to Fire", "Fortify Conjuration"], dlc: "Creation-club" },
        { available: true, name:"Corkbulb Root",effects: ["Paralysis", "Restore Health", "Resist Shock", "Fortify Marksman"], dlc: "Creation-club" },
        { available: true, name:"Corrupted Human Heart",effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "Creation-club" },
        { available: true, name:"Creep Cluster", effects: ["Restore Magicka", "Damage Stamina Regen", "Fortify Carry Weight", "Weakness to Magic"] },
        { available: true, name:"Crimson Nirnroot", effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"] },
        { available: true, name:"Cyrodilic Spadetail", effects: ["Damage Stamina", "Fortify Restoration", "Fear", "Ravage Health"] },
        { available: true, name:"Daedra Silk",effects: ["Lingering Damage Stamina", "Paralysis", "Night Eye", "Invisibility"], dlc: "Creation-club" },
        { available: true, name:"Daedra Venin",effects: ["Ravage Health", "Paralysis", "Fortify Destruction", "Spell Absorption"], dlc: "Creation-club" },
        { available: true, name:"Daedroth Teeth",effects: ["Resist Frost", "Light", "Damage Magicka Regen", "Regenerate Stamina"], dlc: "Creation-club" },
        { available: true, name:"Daedra Heart", effects: ["Restore Health", "Damage Stamina Regen", "Damage Magicka", "Fear"] },
        { available: true, name:"Deathbell", effects: ["Damage Health", "Ravage Stamina", "Slow", "Weakness to Poison"] },
        { available: true, name:"Dragon's Tongue", effects: ["Resist Fire", "Fortify Barter", "Fortify Illusion", "Fortify Two-Handed"] },
        { available: true, name:"Dreugh Wax",effects: ["Weakness to Magic", "Frenzy", "Fortify Enchanting", "Fortify Smithing"], dlc: "Creation-club" },
        { available: true, name:"Dwarven Oil", effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"] },
        { available: true, name:"Ectoplasm", effects: ["Restore Magicka", "Fortify Destruction", "Fortify Magicka", "Damage Health"] },
        { available: true, name:"Elves Ear", effects: ["Restore Magicka", "Fortify Marksman", "Weakness to Frost", "Resist Fire"] },
        { available: true, name:"Elytra Ichor",effects: ["Restore Magicka", "Invisibility", "Slow", "Fear"], dlc: "Creation-club" },
        { available: true, name:"Emperor Parasol Moss", effects: ["Damage Health", "Fortify Magicka", "Regenerate Health", "Fortify Two-Handed"], dlc: "Dragonborn" },
        { available: true, name:"Eye of Sabre Cat", effects: ["Restore Stamina", "Ravage Health", "Damage Magicka", "Restore Health"] },
        { available: true, name:"Falmer Ear", effects: ["Damage Health", "Frenzy", "Resist Poison", "Fortify Lockpicking"] },
        { available: true, name:"Felsaad Tern Feathers", effects: ["Restore Health", "Fortify Light Armor", "Cure Disease", "Resist Magic"], dlc: "Dragonborn" },
        { available: true, name:"Fine-Cut Void Salts", effects: ["Weakness to Shock", "Resist Magic", "Damage Health", "Fortify Magicka"] },
        { available: true, name:"Fire Petal",effects: ["Damage Health", "Resist Fire", "Spell Absorption", "Paralysis"], dlc: "Creation-club" },
        { available: true, name:"Fire Salts", effects: ["Weakness to Frost", "Resist Fire", "Restore Magicka", "Regenerate Magicka"] },
        { available: true, name:"Flame Stalk",effects: ["Restore Health", "Resist Frost", "Weakness to Fire", "Invisibility"], dlc: "Creation-club" },
        { available: true, name:"Fly Amanita", effects: ["Resist Fire", "Fortify Two-Handed", "Frenzy", "Regenerate Stamina"] },
        { available: true, name:"Frost Mirriam", effects: ["Resist Frost", "Fortify Sneak", "Ravage Magicka", "Damage Stamina Regen"] },
        { available: true, name:"Frost Salts", effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Fortify Conjuration"] },
        { available: true, name:"Fungus Stalk",effects: ["Restore Magicka", "Fortify Health", "Fortify Stamina", "Waterbreathing"], dlc: "Creation-club" },
        { available: true, name:"Garlic", effects: ["Resist Poison", "Fortify Stamina", "Regenerate Magicka", "Regenerate Health"] },
        { available: true, name:"Giant Lichen", effects: ["Weakness to Shock", "Ravage Health", "Weakness to Poison", "Restore Magicka"] },
        { available: true, name:"Giant's Toe", effects: ["Damage Stamina", "Fortify Health", "Fortify Carry Weight", "Damage Stamina Regen"] },
        { available: true, name:"Glassfish",effects: ["Restore Magicka", "Invisibility", "Fortify Illusion", "Fortify Persuasion"], dlc: "Creation-club" },
        { available: true, name:"Gleamblossom", effects: ["Resist Magic", "Fear", "Regenerate Health", "Paralysis"], dlc: "Dawnguard" },
        { available: true, name:"Glow Dust", effects: ["Damage Magicka", "Damage Magicka Regen", "Fortify Destruction", "Resist Shock"] },
        { available: true, name:"Glowing Mushroom", effects: ["Resist Shock", "Fortify Destruction", "Fortify Smithing", "Fortify Health"] },
        { available: true, name:"Gnarl Bark",effects: ["Damage Health", "Regenerate Health", "Fortify Heavy Armor", "Resist Fire"], dlc: "Creation-club" },
        { available: true, name:"Gold Kanet",effects: ["Paralysis", "Ravage Health", "Weakness to Frost", "Fortify Smithing"], dlc: "Creation-club" },
        { available: true, name:"Goldfish",effects: ["Restore Stamina", "Fortify Heavy Armor", "Waterbreathing", "Resist Frost"], dlc: "Creation-club" },
        { available: true, name:"Grass Pod", effects: ["Resist Poison", "Ravage Magicka", "Fortify Alteration", "Restore Magicka"] },
        { available: true, name:"Green Butterfly Wing",effects: ["Restore Magicka", "Fear", "Slow", "Invisibility"], dlc: "Creation-club" },
        { available: true, name:"Hackle-Lo Leaf",effects: ["Restore Stamina", "Paralysis", "Waterbreathing", "Fortify Restoration"], dlc: "Creation-club" },
        { available: true, name:"Hagraven Claw", effects: ["Resist Magic", "Lingering Damage Magicka", "Fortify Enchanting", "Fortify Barter"] },
        { available: true, name:"Hagraven Feathers", effects: ["Damage Magicka", "Fortify Conjuration", "Frenzy", "Weakness to Shock"] },
        { available: true, name:"Hanging Moss", effects: ["Damage Magicka", "Fortify Health", "Damage Magicka Regen", "Fortify One-Handed"] },
        { available: true, name:"Harrada",effects: ["Damage Health", "Damage Magicka", "Paralysis", "Damage Magicka Regen"], dlc: "Creation-club" },
        { available: true, name:"Hawk Beak", effects: ["Restore Stamina", "Resist Frost", "Fortify Carry Weight", "Resist Shock"] },
        { available: true, name:"Hawk Feathers", effects: ["Cure Disease", "Fortify Light Armor", "Fortify One-Handed", "Fortify Sneak"] },
        { available: true, name:"Healing Salts",effects: ["Weakness to Magic", "Fortify Restoration", "Slow", "Regenerate Magicka"], dlc: "Creation-club" },
        { available: true, name:"Heart of Order",effects: ["Restore Health", "Fortify Health", "Fortify One-Handed", "Fortify Two-Handed"], dlc: "Creation-club" },
        { available: true, name:"Histcarp", effects: ["Restore Stamina", "Fortify Magicka", "Damage Stamina Regen", "Waterbreathing"] },
        { available: true, name:"Honeycomb", effects: ["Restore Stamina", "Fortify Block", "Fortify Light Armor", "Ravage Stamina"] },
        { available: true, name:"Human Flesh", effects: ["Damage Health", "Paralysis", "Restore Magicka", "Fortify Sneak"] },
        { available: true, name:"Human Heart", effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"] },
        { available: true, name:"Hunger Tongue",effects: ["Weakness to Fire", "Cure Disease", "Cure Poison", "Fortify Magicka"], dlc: "Creation-club" },
        { available: true, name:"Hydnum Azure Giant Spore",effects: ["Resist Frost", "Fortify Health", "Regenerate Health", "Light"], dlc: "Creation-club" },
        { available: true, name:"Hypha Facia",effects: ["Weakness to Poison", "Frenzy", "Ravage Stamina", "Resist Magic"], dlc: "Creation-club" },
        { available: true, name:"Ice Wraith Teeth", effects: ["Weakness to Frost", "Fortify Heavy Armor", "Invisibility", "Weakness to Fire"] },
        { available: true, name:"Imp Gall",effects: ["Damage Health", "Weakness to Fire", "Fortify Barter", "Cure Poison"], dlc: "Creation-club" },
        { available: true, name:"Imp Stool", effects: ["Damage Health", "Lingering Damage Health", "Paralysis", "Restore Health"] },
        { available: true, name:"Ironwood Fruit",effects: ["Restore Health", "Resist Fire", "Damage Stamina", "Restore Magicka"], dlc: "Creation-club" },
        { available: true, name:"Jarrin Root", effects: ["Damage Health", "Damage Magicka", "Damage Stamina", "Damage Magicka Regen"] },
        { available: true, name:"Jazbay Grapes", effects: ["Weakness to Magic", "Fortify Magicka", "Regenerate Magicka", "Ravage Health"] },
        { available: true, name:"Juniper Berries", effects: ["Weakness to Fire", "Fortify Marksman", "Regenerate Health", "Damage Stamina Regen"] },
        { available: true, name:"Juvenile Mudcrab",effects: ["Regenerate Stamina", "Fortify Carry Weight", "Cure Disease", "Fortify Two-Handed"], dlc: "Creation-club" },
        { available: true, name:"Kagouti Hide",effects: ["Lingering Damage Stamina", "Night Eye", "Fortify Carry Weight", "Resist Shock"], dlc: "Creation-club" },
        { available: true, name:"Kresh Fiber",effects: ["Weakness to Magic", "Slow", "Fortify Sneak", "Fortify Pickpocket"], dlc: "Creation-club" },
        { available: true, name:"Large Antlers", effects: ["Restore Stamina", "Fortify Stamina", "Slow", "Damage Stamina Regen"] },
        { available: true, name:"Lavender", effects: ["Resist Magic", "Fortify Stamina", "Ravage Magicka", "Fortify Conjuration"] },
        { available: true, name:"Lichor",effects: ["Restore Magicka", "Regenerate Magicka", "Fortify Magicka", "Spell Absorption"], dlc: "Creation-club" },
        { available: true, name:"Luminous Russula",effects: ["Lingering Damage Stamina", "Lingering Damage Health", "Waterbreathing", "Fear"], dlc: "Creation-club" },
        { available: true, name:"Luna Moth Wing", effects: ["Damage Magicka", "Fortify Light Armor", "Regenerate Health", "Invisibility"] },
        { available: true, name:"Lyretail Anthias",effects: ["Restore Magicka", "Fortify Alteration", "Fortify Conjuration", "Fortify Carry Weight"], dlc: "Creation-club" },
        { available: true, name:"Marshmerrow",effects: ["Restore Health", "Fortify Carry Weight", "Weakness to Magic", "Damage Stamina"], dlc: "Creation-club" },
        { available: true, name:"Minotaur Horn",effects: ["Resist Poison", "Damage Magicka Regen", "Regenerate Health", "Regenerate Magicka"], dlc: "Creation-club" },
        { available: true, name:"Moon Sugar", effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Regenerate Magicka"] },
        { available: true, name:"Mora Tapinella", effects: ["Restore Magicka", "Lingering Damage Health", "Regenerate Stamina", "Fortify Illusion"] },
        { available: true, name:"Mort Flesh",effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "Creation-club" },
        { available: true, name:"Mudcrab Chitin", effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Resist Fire"] },
        { available: true, name:"Namira's Rot", effects: ["Damage Magicka", "Fortify Lockpicking", "Fear", "Regenerate Health"] },
        { available: true, name:"Netch Jelly", effects: ["Paralysis", "Fortify Carry Weight", "Restore Stamina", "Fear"], dlc: "Dragonborn" },
        { available: true, name:"Nightshade", effects: ["Damage Health", "Damage Magicka Regen", "Lingering Damage Stamina", "Fortify Destruction"] },
        { available: true, name:"Nirnroot", effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"] },
        { available: true, name:"Nordic Barnacle", effects: ["Damage Magicka", "Waterbreathing", "Regenerate Health", "Fortify Pickpocket"] },
        { available: true, name:"Ogre's Teeth",effects: ["Weakness to Shock", "Resist Poison", "Lingering Damage Magicka", "Regenerate Health"], dlc: "Creation-club" },
        { available: true, name:"Orange Dartwing", effects: ["Restore Stamina", "Ravage Magicka", "Fortify Pickpocket", "Lingering Damage Health"] },
        { available: true, name:"Pearl", effects: ["Restore Stamina", "Fortify Block", "Restore Magicka", "Resist Shock"] },
        { available: true, name:"Pearlfish",effects: ["Restore Stamina", "Resist Frost", "Fortify Smithing", "Fortify One-Handed"], dlc: "Creation-club" },
        { available: true, name:"Pine Thrush Egg", effects: ["Restore Stamina", "Fortify Lockpicking", "Weakness to Poison", "Resist Shock"] },
        { available: true, name:"Poison Bloom", effects: ["Damage Health", "Slow", "Fortify Carry Weight", "Fear"], dlc: "Dawnguard" },
        { available: true, name:"Powdered Mammoth Tusk", effects: ["Restore Stamina", "Fortify Sneak", "Weakness to Fire", "Fear"] },
        { available: true, name:"Purple Butterfly Wing",effects: ["Regenerate Health", "Regenerate Magicka", "Regenerate Stamina", "Paralysis"], dlc: "Creation-club" },
        { available: true, name:"Purple Mountain Flower", effects: ["Restore Stamina", "Fortify Sneak", "Lingering Damage Magicka", "Resist Frost"] },
        { available: true, name:"Pygmy Sunfish",effects: ["Restore Stamina", "Lingering Damage Magicka", "Damage Magicka Regen", "Fortify Restoration"], dlc: "Creation-club" },
        { available: true, name:"Red Kelp Gas Bladder",effects: ["Regenerate Stamina", "Waterbreathing", "Cure Disease", "Fortify Magicka"], dlc: "Creation-club" },
        { available: true, name:"Red Mountain Flower", effects: ["Restore Magicka", "Ravage Magicka", "Fortify Magicka", "Damage Health"] },
        { available: true, name:"Redwort Flower",effects: ["Resist Frost", "Cure Poison", "Damage Health", "Invisibility"], dlc: "Creation-club" },
        { available: true, name:"River Betty", effects: ["Damage Health", "Fortify Alteration", "Slow", "Fortify Carry Weight"] },
        { available: true, name:"Rock Warbler Egg", effects: ["Restore Health", "Fortify One-Handed", "Damage Stamina", "Weakness to Magic"] },
        { available: true, name:"Roobrush",effects: ["Weakness to Magic", "Fortify Sneak", "Lingering Damage Health", "Cure Poison"], dlc: "Creation-club" },
        { available: true, name:"Rot Scale",effects: ["Slow", "Lingering Damage Health", "Fear", "Paralysis"], dlc: "Creation-club" },
        { available: true, name:"Sabre Cat Tooth", effects: ["Restore Stamina", "Fortify Heavy Armor", "Fortify Smithing", "Weakness to Poison"] },
        { available: true, name:"Salt Pile", effects: ["Weakness to Magic", "Fortify Restoration", "Slow", "Regenerate Magicka"] },
        { available: true, name:"Saltrice",effects: ["Restore Stamina", "Fortify Magicka", "Damage Stamina Regen", "Restore Health"], dlc: "Creation-club" },
        { available: true, name:"Scaly Pholiota", effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Stamina", "Fortify Carry Weight"] },
        { available: true, name:"Scalon Fin",effects: ["Waterbreathing", "Damage Health", "Lingering Damage Magicka", "Damage Magicka Regen"], dlc: "Creation-club" },
        { available: true, name:"Scathecraw", effects: ["Ravage Health", "Ravage Stamina", "Ravage Magicka", "Lingering Damage Health"], dlc: "Dragonborn" },
        { available: true, name:"Screaming Maw",effects: ["Regenerate Magicka", "Fortify Alteration", "Invisibility", "Regenerate Health"], dlc: "Creation-club" },
        { available: true, name:"Scrib Jelly",effects: ["Regenerate Magicka", "Cure Poison", "Cure Disease", "Regenerate Stamina"], dlc: "Creation-club" },
        { available: true, name:"Scrib Jerky",effects: ["Restore Stamina", "Fortify Stamina", "Paralysis", "Waterbreathing"], dlc: "Creation-club" },
        { available: true, name:"Silverside Perch", effects: ["Restore Stamina", "Damage Stamina Regen", "Ravage Health", "Resist Frost"] },
        { available: true, name:"Simon Rodayne's Heart",effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "Creation-club" },
        { available: true, name:"Skeever Tail", effects: ["Damage Stamina Regen", "Ravage Health", "Damage Health", "Fortify Light Armor"] },
        { available: true, name:"Slaughterfish Egg", effects: ["Resist Poison", "Fortify Pickpocket", "Lingering Damage Health", "Fortify Stamina"] },
        { available: true, name:"Slaughterfish Scales", effects: ["Resist Frost", "Lingering Damage Health", "Fortify Heavy Armor", "Fortify Block"] },
        { available: true, name:"Sload Soap",effects: ["Resist Fire", "Fear", "Fortify Conjuration", "Fortify Alteration"], dlc: "Creation-club" },
        { available: true, name:"Small Antlers", effects: ["Weakness to Poison", "Fortify Restoration", "Lingering Damage Stamina", "Damage Health"] },
        { available: true, name:"Small Pearl", effects: ["Restore Stamina", "Fortify One-Handed", "Fortify Restoration", "Resist Frost"] },
        { available: true, name:"Snowberries", effects: ["Resist Fire", "Fortify Enchanting", "Resist Frost", "Resist Shock"] },
        { available: true, name:"Spadefish",effects: ["Restore Health", "Fortify Lockpicking", "Fortify Pickpocket", "Cure Disease"], dlc: "Creation-club" },
        { available: true, name:"Spiddal Stick",effects: ["Damage Health", "Damage Magicka", "Weakness to Fire", "Restore Stamina"], dlc: "Creation-club" },
        { available: true, name:"Spawn Ash", effects: ["Ravage Stamina", "Resist Fire", "Fortify Enchanting", "Ravage Magicka"], dlc: "Dragonborn" },
        { available: true, name:"Spider Egg", effects: ["Damage Stamina", "Damage Magicka Regen", "Fortify Lockpicking", "Fortify Marksman"] },
        { available: true, name:"Spriggan Sap", effects: ["Damage Magicka Regen", "Fortify Enchanting", "Fortify Smithing", "Fortify Alteration"] },
        { available: true, name:"Steel-Blue Entoloma",effects: ["Restore Magicka", "Fortify Destruction", "Resist Frost", "Fortify Carry Weight"], dlc: "Creation-club" },
        { available: true, name:"Stoneflower Petals",effects: ["Weakness to Shock", "Fortify One-Handed", "Fortify Magicka", "Fortify Enchanting"], dlc: "Creation-club" },
        { available: true, name:"Swamp Fungal Pod", effects: ["Resist Shock", "Lingering Damage Magicka", "Paralysis", "Restore Health"] },
        { available: true, name:"Taproot", effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"] },
        { available: true, name:"Thistle Branch", effects: ["Resist Frost", "Ravage Stamina", "Resist Poison", "Fortify Heavy Armor"] },
        { available: true, name:"Thorn Hook",effects: ["Lingering Damage Health", "Paralysis", "Regenerate Magicka", "Regenerate Health"], dlc: "Creation-club" },
        { available: true, name:"Torchbug Thorax", effects: ["Restore Stamina", "Lingering Damage Magicka", "Weakness to Magic", "Fortify Stamina"] },
        { available: true, name:"Trama Root", effects: ["Weakness to Shock", "Fortify Carry Weight", "Damage Magicka", "Slow"], dlc: "Dragonborn" },
        { available: true, name:"Troll Fat", effects: ["Resist Poison", "Fortify Two-Handed", "Frenzy", "Damage Health"] },
        { available: true, name:"Tundra Cotton", effects: ["Resist Magic", "Fortify Magicka", "Fortify Block", "Fortify Barter"] },
        { available: true, name:"Vampire Dust", effects: ["Invisibility", "Restore Magicka", "Regenerate Health", "Cure Disease"] },
        { available: true, name:"Void Essence",effects: ["Restore Health", "Fortify Health", "Fortify Stamina", "Regenerate Health"], dlc: "Creation-club" },
        { available: true, name:"Void Salts", effects: ["Weakness to Shock", "Resist Magic", "Damage Health", "Fortify Magicka"] },
        { available: true, name:"Watcher's Eye",effects: ["Night Eye", "Fortify Magicka", "Fortify Illusion", "Spell Absorption"], dlc: "Creation-club" },
        { available: true, name:"Wheat", effects: ["Restore Health", "Fortify Health", "Damage Stamina Regen", "Lingering Damage Magicka"] },
        { available: true, name:"White Cap", effects: ["Weakness to Frost", "Fortify Heavy Armor", "Restore Magicka", "Ravage Magicka"] },
        { available: true, name:"Wild Grass Pod",effects: ["Resist Poison", "Ravage Magicka", "Fortify Alteration", "Restore Magicka"], dlc: "Creation-club" },
        { available: true, name:"Wisp Stalk Caps",effects: ["Damage Health", "Weakness to Poison", "Frenzy", "Regenerate Stamina"], dlc: "Creation-club" },
        { available: true, name:"Wisp Wrappings", effects: ["Restore Stamina", "Fortify Destruction", "Fortify Carry Weight", "Resist Magic"] },
        { available: true, name:"Withering Moon",effects: ["Restore Magicka", "Spell Absorption", "Fortify Light Armor", "Cure Disease"], dlc: "Creation-club" },
        { available: true, name:"Worm's Head Cap",effects: ["Fortify Lockpicking", "Night Eye", "Fortify Carry Weight", "Slow"], dlc: "Creation-club" },
        { available: true, name:"Yellow Mountain Flower", effects: ["Resist Poison", "Fortify Restoration", "Fortify Health", "Damage Stamina Regen"], dlc: "Dawnguard" }
    ]
};

const caco = {
    effects: [
		{basegold: 29, name:"Blood"},
		{basegold: 96, name:"Cure Disease"},
		{basegold: 35, name:"Cure Poison"},
		{basegold: 30, name:"Damage Health"},
		{basegold: 90, name:"Damage Magicka"},
		{basegold: 30, name:"Damage Magicka Regen"},
		{basegold: 90, name:"Damage Stamina"},
		{basegold: 31, name:"Damage Stamina Regen"},
		{basegold: 44, name:"Damage Undead"},
		{basegold: 35, name:"Detect Life"},
		{basegold: 47, name:"Drain Intelligence"},
		{basegold: 60, name:"Drain Strength"},
		{basegold: 46, name:"Etherealize"},
		{basegold: 50, name:"Fatigue"},
		{basegold: 46, name:"Fear"},
		{basegold: 53, name:"Feather"},
		{basegold: 31, name:"Fire Aversion"},
		{basegold: 35, name:"Fortify Alteration"},
		{basegold: 29, name:"Fortify Barter"},
		{basegold: 44, name:"Fortify Block"},
		{basegold: 45, name:"Fortify Conjuration"},
		{basegold: 50, name:"Fortify Destruction"},
		{basegold: 43, name:"Fortify Enchanting"},
		{basegold: 41, name:"Fortify Heavy Armor"},
		{basegold: 40, name:"Fortify Illusion"},
		{basegold: 41, name:"Fortify Light Armor"},
		{basegold: 45, name:"Fortify Lockpicking"},
		{basegold: 45, name:"Fortify Marksman"},
		{basegold: 60, name:"Fortify One-Handed"},
		{basegold: 50, name:"Fortify Pickpocket"},
		{basegold: 50, name:"Fortify Restoration"},
		{basegold: 50, name:"Fortify Smithing"},
		{basegold: 54, name:"Fortify Sneak"},
		{basegold: 52, name:"Fortify Speech"},
		{basegold: 62, name:"Fortify Two-Handed"},
		{basegold: 25, name:"Fortify Unarmed"},
		{basegold: 56, name:"Frenzy"},
		{basegold: 51, name:"Frost Aversion"},
		{basegold: 15, name:"Health"},
		{basegold: 36, name:"Health Fortification"},
		{basegold: 42, name:"Health Regeneration"},
		{basegold: 40, name:"Invisibility"},
		{basegold: 21, name:"Light"},
		{basegold: 41, name:"Lingering Damage Health"},
		{basegold: 20, name:"Lingering Damage Magicka"},
		{basegold: 20, name:"Lingering Damage Stamina"},
		{basegold: 27, name:"Lingering Damage Undead"},
		{basegold: 45, name:"Magic Aversion"},
		{basegold: 31, name:"Magicka"},
		{basegold: 36, name:"Magicka Fortification"},
		{basegold: 50, name:"Magicka Regeneration"},
		{basegold: 60, name:"Night Eye"},
		{basegold: 74, name:"Paralysis"},
		{basegold: 73, name:"Poison Aversion"},
		{basegold: 0, name:"Protect Soul"},
		{basegold: 35, name:"Ravage Health"},
		{basegold: 43, name:"Resist Disease"},
		{basegold: 51, name:"Resist Fire"},
		{basegold: 51, name:"Resist Frost"},
		{basegold: 52, name:"Resist Magic"},
		{basegold: 40, name:"Resist Paralysis"},
		{basegold: 37, name:"Resist Poison"},
		{basegold: 51, name:"Resist Shock"},
		{basegold: 21, name:"Shock Aversion"},
		{basegold: 41, name:"Silence"},
		{basegold: 58, name:"Slow"},
		{basegold: 20, name:"Speed"},
		{basegold: 0, name:"Spell Absorption"},
		{basegold: 51, name:"Stamina"},
		{basegold: 35, name:"Stamina Fortification"},
		{basegold: 45, name:"Stamina Regeneration"},
		{basegold: 20, name:"Waterbreathing"},
		{basegold: 56, name:"Waterwalking"}
	],
    ingredients: [
        {available: true, name: "Abecean Longfin", effects: ["Frost Aversion", "Fortify Sneak", "Poison Aversion", "Fortify Restoration"], dlc: "" },
        {available: true, name: "Akatosh Butterfly", effects: ["Fortify Restoration", "Fortify One-handed", "Frost Aversion", "Fortify Destruction"], dlc: "caco" },
        {available: true, name: "Alkanet Flower", effects: ["Resist Poison", "Magicka", "Detect Life", "Damage Stamina"], dlc: "caco" },
        {available: true, name: "Alocasia Fruit", effects: ["Stamina Regeneration", "Light", "Silence", "Health Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Aloe Vera", effects: ["Health", "Stamina", "Lingering Damage Undead", "Etherealize"], dlc: "caco" },
        {available: true, name: "Ambrosia", effects: ["Health", "Health Regeneration", "Health Fortification", "Cure Poison"], dlc: "Creation-club" },
        {available: true, name: "Ancestor Moth Wing", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "Dawnguard" },
        {available: true, name: "Angelfish", effects: ["Regenerate Health", "Resist Fire", "Fortify Marksman", "Waterbreathing"], dlc: "Creation-club" },
        {available: true, name: "Angler Larvae", effects: ["Lingering Damage Health", "Regenerate Stamina", "Waterbreathing", "Fortify Two-Handed"], dlc: "Creation-club" },
        {available: true, name: "Argonian Scales", effects: ["Resist Poison", "Resist Disease", "Fortify Light Armor", "Fortify Lockpicking"], dlc: "caco" },
        {available: true, name: "Arrowroot", effects: ["Slow", "Fortify Marksman", "Fortify Unarmed", "Speed"], dlc: "caco" },
        {available: true, name: "Ash Creep Cluster", effects: ["Damage Stamina", "Invisibility", "Resist Fire", "Fortify Destruction"], dlc: "Dragonborn" },
        {available: true, name: "Ash Hopper Jelly", effects: ["Health", "Fortify Light Armor", "Resist Shock", "Frost Aversion"], dlc: "Dragonborn" },
        {available: true, name: "Ashen Grass Pod", effects: ["Resist Fire", "Shock Aversion", "Fortify Lockpicking", "Fortify Sneak"], dlc: "Dragonborn" },
        {available: true, name: "Aster Bloom Core", effects: ["Resist Magic", "Fortify Light Armor", "Fortify Block", "Paralysis"], dlc: "Creation-club" },
        {available: true, name: "Atlas Moth", effects: ["Damage Stamina Regen", "Detect Life", "Magic Aversion", "Night Eye"], dlc: "caco" },
        {available: true, name: "Ayleid Moon Moth", effects: ["Drain Intelligence", "Fortify Alteration", "Fortify Restoration", "Shock Aversion"], dlc: "caco" },
        {available: true, name: "Banded Pennant", effects: ["Lingering Damage Undead", "Stamina Regeneration", "Magicka Regeneration", "Waterwalking"], dlc: "caco" },
        {available: true, name: "Barley/Barely Extract", effects: ["Magicka", "Magicka Fortification", "Fortify Heavy Armor", "Damage Stamina Regen"], dlc: "caco" },
        {available: true, name: "Bear Bile", effects: ["Fortify Heavy Armor", "Fortify Speech", "Fortify Light Armor", "Frenzy"], dlc: "caco" },
        {available: true, name: "Bear Claws", effects: ["Stamina", "Health Fortification", "Fortify One-Handed", "Damage Magicka Regen"], dlc: "" },
        {available: true, name: "Bear Fat", effects: ["Resist Poison", "Stamina", "Health", "Cure Disease"], dlc: "caco" },
        {available: true, name: "Bee", effects: ["Stamina", "Fatigue", "Stamina Regeneration", "Shock Aversion"], dlc: "" },
        {available: true, name: "Beehive Husk", effects: ["Resist Poison", "Fortify Light Armor", "Fortify Sneak", "Fortify Destruction"], dlc: "" },
        {available: true, name: "Bergamot Seeds", effects: ["Resist Paralysis", "Lingering Damage Undead", "Resist Disease", "Silence"], dlc: "caco" },
        {available: true, name: "Berit's Ashes", effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Fatigue"], dlc: "" },
        {available: true, name: "Bittergreen Petals", effects: ["Lingering Damage Stamina", "Invisibility", "Cure Poison", "Damage Magicka"], dlc: "Creation-club" },
        {available: true, name: "Bitterling", effects: ["Waterbreathing", "Frost Aversion", "Cure Disease", "Health"], dlc: "caco" },
        {available: true, name: "Black Lichen", effects: ["Slow", "Cure Poison", "Resist Frost", "Drain Strength"], dlc: "caco" },
        {available: true, name: "Black Pearl", effects: ["Damage Undead", "Resist Paralysis", "Cure Poison", "Night Eye"], dlc: "caco" },
        {available: true, name: "Blackbrow Bleak", effects: ["Frost Aversion", "Cure Poison", "Fire Aversion", "Shock Aversion"], dlc: "caco" },
        {available: true, name: "Bleeding Crown", effects: ["Fire Aversion", "Fortify Block", "Poison Aversion", "Resist Magic"], dlc: "" },
        {available: true, name: "Blind Betty", effects: ["Lingering Damage Undead", "Damage Magicka Regen", "Fortify Unarmed", "Cure Poison"], dlc: "caco" },
        {available: true, name: "Blind Watcher's Eye", effects: ["Light", "Magicka Fortification", "Fortify Alteration", "Spell Absorption"], dlc: "Creation-club" },
        {available: true, name: "Bliss Bug Thorax", effects: ["Fire Aversion", "Resist Fire", "Fortify Heavy Armor", "Fortify Illusion"], dlc: "Creation-club" },
        {available: true, name: "Blister Pod", effects: ["Magicka", "Magicka Fortification", "Night Eye", "Invisibility"], dlc: "caco" },
        {available: true, name: "Blisterwort", effects: ["Damage Stamina", "Frenzy", "Health", "Fortify Smithing"], dlc: "" },
        {available: true, name: "Bloatspore", effects: ["Drain Intelligence", "Fortify Alteration", "Detect Life", "Fortify Conjuration"], dlc: "caco" },
        {available: true, name: "Blood of Altmer", effects: ["Blood", "Magicka Regeneration", "Magicka Fortification", "Magic Aversion"], dlc: "caco" },
        {available: true, name: "Blood of Argonian", effects: ["Blood", "Resist Disease", "Waterbreathing", "Health Regeneration"], dlc: "caco" },
        {available: true, name: "Blood of Bosmer", effects: ["Blood", "Resist Disease", "Fortify Marksman", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Blood of Breton", effects: ["Blood", "Resist Magic", "Fortify Restoration", "Fortify Conjuration"], dlc: "caco" },
        {available: true, name: "Blood of Dunmer", effects: ["Blood", "Resist Fire", "Fortify Destruction", "Fortify Enchanting"], dlc: "caco" },
        {available: true, name: "Blood of Imperial", effects: ["Blood", "Fortify Speech", "Fortify Heavy Armor", "Fortify Block"], dlc: "caco" },
        {available: true, name: "Blood of Khajiit", effects: ["Blood", "Speed", "Fortify Sneak", "Night Eye"], dlc: "caco" },
        {available: true, name: "Blood of Nord", effects: ["Blood", "Resist Frost", "Fortify Two-handed", "Stamina Fortification"], dlc: "caco" },
        {available: true, name: "Blood of Orc", effects: ["Blood", "Fortify Heavy Armor", "Fortify One-handed", "Frenzy"], dlc: "caco" },
        {available: true, name: "Blood of Redguard", effects: ["Blood", "Resist Poison", "Stamina Regeneration", "Fortify One-handed"], dlc: "caco" },
        {available: true, name: "Bloodgrass", effects: ["Invisibility", "Resist Poison", "Slow", "Health Fortification"], dlc: "Creation-club" },
        {available: true, name: "Blue Butterfly Wing", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "" },
        {available: true, name: "Blue Clipper Butterfly", effects: ["Fortify Alteration", "Damage Undead", "Fortify Illusion", "Fortify Speech"], dlc: "caco" },
        {available: true, name: "Blue Dartwing", effects: ["Resist Shock", "Fortify Pickpocket", "Health", "Fear"], dlc: "" },
        {available: true, name: "Blue Mountain Flower", effects: ["Health", "Fortify Conjuration", "Health Fortification", "Damage Magicka Regen"], dlc: "" },
        {available: true, name: "Blue Mountain Flower/Extract", effects: ["Fortify Conjuration", "Magicka Fortification", "Damage Health", "Magicka"], dlc: "caco" },
        {available: true, name: "Blue Orfe", effects: ["Health", "Cure Disease", "Fatigue", "Drain Intelligence"], dlc: "caco" },
        {available: true, name: "Boar Tusk", effects: ["Stamina Fortification", "Health Fortification", "Fortify Block", "Frenzy"], dlc: "Dragonborn" },
        {available: true, name: "Bog Beacon", effects: ["Magicka", "Fortify Heavy Armor", "Fear", "Damage Stamina"], dlc: "Creation-club" },
        {available: true, name: "Bone Hawk Claw", effects: ["Damage Stamina Regen", "Fortify Marksman", "Fortify Conjuration", "Drain Strength"], dlc: "caco" },
        {available: true, name: "Bone Hawk Feathers", effects: ["Poison Aversion", "Ravage Health", "Fortify Pickpocket", "Fortify Enchanting"], dlc: "caco" },
        {available: true, name: "Bone Meal", effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Fatigue"], dlc: "" },
        {available: true, name: "Briar Heart", effects: ["Magicka", "Fortify Block", "Paralysis", "Magicka Fortification"], dlc: "" },
        {available: true, name: "Bungler's Bane", effects: ["Slow", "Fatigue", "Damage Stamina Regen", "Resist Magic"], dlc: "Creation-club" },
        {available: true, name: "Burnt Spriggan Wood", effects: ["Fire Aversion", "Fortify Alteration", "Damage Magicka Regen", "Slow"], dlc: "Dragonborn" },
        {available: true, name: "Butterfly Wing", effects: ["Health", "Fortify Barter", "Lingering Damage Stamina", "Damage Magicka"], dlc: "" },
        {available: true, name: "Canis Root", effects: ["Damage Stamina", "Fortify One-Handed", "Fortify Marksman", "Paralysis"], dlc: "" },
        {available: true, name: "Canis Root Extract", effects: ["Damage Stamina", "Fortify Marksman", "Silence", "Fortify Light Armor"], dlc: "caco" },
        {available: true, name: "Cavefish", effects: ["Damage Undead", "Detect Life", "Resist Disease", "Waterbreathing"], dlc: "caco" },
        {available: true, name: "Ceanothus Moth", effects: ["Fortify Pickpocket", "Fortify Lockpicking", "Cure Poison", "Lingering Damage Undead"], dlc: "caco" },
        {available: true, name: "Cecropia Moth", effects: ["Ravage Health", "Damage Health", "Fear", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Charred Skeever Hide", effects: ["Stamina", "Cure Disease", "Resist Poison", "Health"], dlc: "" },
        {available: true, name: "Chaurus Eggs", effects: ["Poison Aversion", "Stamina Fortification", "Damage Magicka", "Invisibility"], dlc: "" },
        {available: true, name: "Chaurus Hunter Antennae", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "Dawnguard" },
        {available: true, name: "Chicken Feathers", effects: ["Fortify Unarmed", "Fortify Pickpocket", "Cure Poison", "Shock Aversion"], dlc: "caco" },
        {available: true, name: "Chicken's Egg", effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Undead"], dlc: "" },
        {available: true, name: "Chokeberries", effects: ["Poison Aversion", "Damage Health", "Silence", "Frenzy"], dlc: "caco" },
        {available: true, name: "Chokeweed", effects: ["Frost Aversion", "Stamina", "Cure Disease", "Damage Magicka"], dlc: "Creation-club" },
        {available: true, name: "Clouded Funnel Cap", effects: ["Damage Magicka", "Magicka", "Damage Stamina", "Fortify Conjuration"], dlc: "caco" },
        {available: true, name: "Coda Flower", effects: ["Damage Health", "Lingering Damage Stamina", "Silence", "Feather"], dlc: "Creation-club" },
        {available: true, name: "Columbine Root Extract/Pulp", effects: ["Fortify Speech", "Magicka Fortification", "Resist Frost", "Etherealize"], dlc: "caco" },
        {available: true, name: "Columbine Root Pulp", effects: ["Fortify Speech", "Magicka Fortification", "Resist Frost", "Etherealize"], dlc: "caco" },
        {available: true, name: "Comberry", effects: ["Damage Stamina", "Spell Absorption", "Magicka", "Fortify Destruction"], dlc: "Creation-club" },
        {available: true, name: "Comet Moth", effects: ["Damage Stamina Regen", "Fortify Alteration", "Fortify Block", "Fortify Heavy Armor"], dlc: "caco" },
        {available: true, name: "Common Blue Butterfly", effects: ["Frost Aversion", "Cure Disease", "Health Regeneration", "Magicka Regeneration"], dlc: "caco" },
        {available: true, name: "Common Shiner", effects: ["Resist Disease", "Fortify Smithing", "Fortify Unarmed", "Waterbreathing"], dlc: "caco" },
        {available: true, name: "Congealed Putrescence", effects: ["Ravage Health", "Magicka", "Fire Aversion", "Fortify Conjuration"], dlc: "Creation-club" },
        {available: true, name: "Corkbulb Root", effects: ["Paralysis", "Health", "Resist Shock", "Fortify Marksman"], dlc: "Creation-club" },
        {available: true, name: "Corrupted Human Heart", effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "Creation-club" },
        {available: true, name: "Creep Cluster", effects: ["Magicka", "Damage Stamina Regen", "Feather", "Magic Aversion"], dlc: "" },
        {available: true, name: "Creep Cluster Extract", effects: ["Feather", "Damage Stamina Regen", "Magic Aversion", "Magicka"], dlc: "caco" },
        {available: true, name: "Crimson Marsh Glider", effects: ["Resist Paralysis", "Cure Disease", "Waterwalking", "Poison Aversion"], dlc: "caco" },
        {available: true, name: "Crimson Nirnroot", effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"], dlc: "" },
        {available: true, name: "Crushed Amber", effects: ["Health", "Resist Fire", "Resist Disease", "Speed"], dlc: "caco"},
        {available: true, name: "Crushed Ant Paste", effects: ["Fortify Unarmed", "Feather", "Cure Poison", "Fortify Lockpicking"], dlc: "caco" },
        {available: true, name: "Crushed Onyx", effects: ["Fortify Block", "Fortify Smithing", "Shock Aversion", "Resist Shock"], dlc: "caco"},
        {available: true, name: "Cyrodilic Spadetail", effects: ["Damage Stamina", "Fortify Restoration", "Fear", "Ravage Health"], dlc: "" },
        {available: true, name: "Daedra Heart", effects: ["Health", "Damage Stamina Regen", "Damage Magicka", "Fear"], dlc: "" },
        {available: true, name: "Daedra Silk", effects: ["Slow", "Night Eye", "Damage Stamina", "Etherealize"], dlc: "caco" },
        {available: true, name: "Daedra Venin", effects: ["Paralysis", "Ravage Health", "Drain Intelligence", "Stamina"], dlc: "caco" },
        {available: true, name: "Daedroth Teeth", effects: ["Stamina Fortification", "Frenzy", "Night Eye", "Drain Strength"], dlc: "caco" },
        {available: true, name: "Darkwater Minnow", effects: ["Fire Aversion", "Fortify Block", "Waterbreathing", "Fortify Speech"], dlc: "caco" },
        {available: true, name: "Deathbell", effects: ["Damage Health", "Fatigue", "Slow", "Poison Aversion"], dlc: "" },
        {available: true, name: "Direnni's Dartwing", effects: ["Fortify Conjuration", "Frost Aversion", "Speed", "Drain Strength"], dlc: "caco" },
        {available: true, name: "Dragon Heartscales", effects: ["Fortify Alteration", "Drain Intelligence", "Resist Magic", "Fortify Heavy Armor"], dlc: "caco" },
        {available: true, name: "Dragon Tooth", effects: ["Magicka", "Fortify Two-handed", "Magic Aversion", "Resist Paralysis"], dlc: "caco" },
        {available: true, name: "Dragon's Tongue", effects: ["Resist Fire", "Fortify Barter", "Fortify Illusion", "Fortify Two-Handed"], dlc: "" },
        {available: true, name: "Dragon's Tongue Extract", effects: ["Fortify Speech", "Resist Fire", "Fortify Two-handed", "Fortify Illusion"], dlc: "caco" },
        {available: true, name: "Dreugh Wax", effects: ["Waterbreathing", "Fatigue", "Lingering Damage Health", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Druadach Dart", effects: ["Lingering Damage Undead", "Speed", "Fortify Marksman", "Waterbreathing"], dlc: "caco" },
        {available: true, name: "Dwarven Oil", effects: ["Magic Aversion", "Fortify Illusion", "Magicka Regeneration", "Magicka"], dlc: "" },
        {available: true, name: "Ebony Jewelwing", effects: ["Resist Paralysis", "Damage Magicka Regen", "Resist Shock", "Detect Life"], dlc: "caco" },
        {available: true, name: "Ectoplasm", effects: ["Magicka", "Fortify Destruction", "Magicka Fortification", "Damage Health"], dlc: "" },
        {available: true, name: "Elven Heart", effects: ["Magicka Regeneration", "Fortify Conjuration", "Fortify Destruction", "Fortify Illusion"], dlc: "caco" },
        {available: true, name: "Elves Ear", effects: ["Magicka", "Fortify Marksman", "Frost Aversion", "Resist Fire"], dlc: "" },
        {available: true, name: "Elves Ear Extract", effects: ["Magicka", "Health", "Frost Aversion", "Resist Fire"], dlc: "caco" },
        {available: true, name: "Elytra Ichor", effects: ["Magicka", "Invisibility", "Slow", "Fear"], dlc: "Creation-club" },
        {available: true, name: "Emerald Darner", effects: ["Waterwalking", "Cure Disease", "Damage Undead", "Speed"], dlc: "caco" },
        {available: true, name: "Emerald Swallowtail", effects: ["Drain Intelligence", "Fortify One-handed", "Resist Disease", "Fortify Alteration"], dlc: "caco" },
        {available: true, name: "Emperor Dartwing", effects: ["Fortify Restoration", "Fortify Illusion", "Fortify Unarmed", "Damage Undead"], dlc: "caco" },
        {available: true, name: "Emperor Moth", effects: ["Magicka Fortification", "Cure Disease", "Fire Aversion", "Magicka"], dlc: "caco" },
        {available: true, name: "Emperor Parasol Moss", effects: ["Damage Health", "Magicka Fortification", "Health Regeneration", "Fortify Two-Handed"], dlc: "Dragonborn" },
        {available: true, name: "Eye of Sabre Cat", effects: ["Stamina", "Ravage Health", "Damage Magicka", "Health"], dlc: "" },
        {available: true, name: "Falkreath Minnow", effects: ["Fortify Light Armor", "Poison Aversion", "Fortify Lockpicking", "Resist Paralysis"], dlc: "caco" },
        {available: true, name: "Falmer Blood", effects: ["Fortify Sneak", "Resist Poison", "Magicka", "Stamina"], dlc: "caco" },
        {available: true, name: "Falmer Ear", effects: ["Damage Health", "Frenzy", "Resist Poison", "Fortify Lockpicking"], dlc: "" },
        {available: true, name: "Felsaad Tern Feathers", effects: ["Health", "Fortify Light Armor", "Cure Disease", "Resist Magic"], dlc: "Dragonborn" },
        {available: true, name: "Fennel Seed Extract", effects: ["Magicka Fortification", "Stamina Fortification", "Fortify Two-handed", "Posion Aversion"], dlc: "caco" },
        {available: true, name: "Fennel Seeds", effects: ["Magicka Fortification", "Stamina Fortification", "Fortify Two-handed", "Poison Aversion"], dlc: "caco"},
        {available: true, name: "Fine-Cut Ash Salts", effects: ["Drain Strength", "Fortify Enchanting", "Fatigue", "Resist Magic"], dlc: "caco" },
        {available: true, name: "Fine-Cut Fire Salts", effects: ["Fire Aversion", "Resist Frost", "Magicka Regeneration", "Magicka"], dlc: "caco" },
        {available: true, name: "Fine-Cut Frost Salts", effects: ["Frost Aversion", "Resist Fire", "Damage Health", "Magicka"], dlc: "caco" },
        {available: true, name: "Fine-Cut Void Salts", effects: ["Shock Aversion", "Resist Shock", "Silence", "Magicka"], dlc: "caco" },
        {available: true, name: "Finely Ground Bone Meal", effects: ["Damage Stamina", "Fortify Conjuration", "Resist Fire", "Night Eye"], dlc: "caco" },
        {available: true, name: "Fire Petals", effects: ["Lingering Damage Health", "Resist Fire", "Resist Paralysis", "Ravage Health"], dlc: "caco" },
        {available: true, name: "Fire Salts", effects: ["Frost Aversion", "Resist Fire", "Magicka", "Magicka Regeneration"], dlc: "" },
        {available: true, name: "Flame Skimmer", effects: ["Frost Aversion", "Speed", "Cure Poison", "Damage Magicka Regen"], dlc: "caco" },
        {available: true, name: "Flame Stalk", effects: ["Health", "Resist Frost", "Fire Aversion", "Invisibility"], dlc: "Creation-club" },
        {available: true, name: "Flax Seed Extract", effects: ["Feather", "Fortify Block", "Lingering Damage Health", "Magicka"], dlc: "caco" },
        {available: true, name: "Flax Seeds", effects: ["Feather", "Fortify Block", "Lingering Damage Health", "Magicka"], dlc: "caco"},
        {available: true, name: "Fly Amanita", effects: ["Resist Fire", "Fortify Two-Handed", "Frenzy", "Stamina Regeneration"], dlc: "" },
        {available: true, name: "Fox Fat", effects: ["Fortify Lockpicking", "Fortify Speech", "Fortify Pickpocket", "Lingering Damage Undead"], dlc: "caco" },
        {available: true, name: "Foxglove Nectar", effects: ["Resist Poison", "Resist Disease", "Resist Paralysis", "Night Eye"], dlc: "caco" },
        {available: true, name: "Frogspawn", effects: ["Waterbreathing", "Cure Disease", "Frost Aversion", "Fortify Pickpocket"], dlc: "caco" },
        {available: true, name: "Frost Mirriam", effects: ["Resist Frost", "Fortify Sneak", "Silence", "Damage Stamina Regen"], dlc: "" },
        {available: true, name: "Frost Mirriam Extract", effects: ["Resist Frost", "Stamina Fortification", "Magicka Fortification", "Fire Aversion"], dlc: "caco" },
        {available: true, name: "Frost Salts", effects: ["Fire Aversion", "Resist Frost", "Magicka", "Fortify Conjuration"], dlc: "" },
        {available: true, name: "Frost Skimmer", effects: ["Fire Aversion", "Resist Frost", "Stamina", "Waterwalking"], dlc: "caco" },
        {available: true, name: "Fungus Stalk", effects: ["Magicka", "Health Fortification", "Stamina Fortification", "Waterbreathing"], dlc: "Creation-club" },
        {available: true, name: "Garlic", effects: ["Resist Poison", "Stamina Fortification", "Magicka Regeneration", "Health Regeneration"], dlc: "" },
        {available: true, name: "Garlic Extract", effects: ["Resist Disease", "Stamina Regeneration", "Health Regeneration", "Magicka Regeneration"], dlc: "caco" },
        {available: true, name: "Ghostfish", effects: ["Resist Poison", "Speed", "Etherealize", "Shock Aversion"], dlc: "caco" },
        {available: true, name: "Giant Lichen", effects: ["Shock Aversion", "Ravage Health", "Poison Aversion", "Magicka"], dlc: "" },
        {available: true, name: "Giant's Blood", effects: ["Fortify Unarmed", "Fortify Smithing", "Shock Aversion", "Resist Disease"], dlc: "caco" },
        {available: true, name: "Giant's Toe", effects: ["Damage Stamina", "Health Fortification", "Feather", "Damage Stamina Regen"], dlc: "" },
        {available: true, name: "Ginseng", effects: ["Magicka Fortification", "Cure Poison", "Slow", "Damage Undead"], dlc: "caco" },
        {available: true, name: "Glassfish", effects: ["Magicka", "Invisibility", "Fortify Illusion", "Fortify Persuasion"], dlc: "Creation-club" },
        {available: true, name: "Gleamblossom", effects: ["Resist Magic", "Fear", "Health Regeneration", "Paralysis"], dlc: "Dawnguard" },
        {available: true, name: "Glow Dust", effects: ["Damage Magicka", "Damage Magicka Regen", "Fortify Destruction", "Resist Shock"], dlc: "" },
        {available: true, name: "Glowing Mushroom", effects: ["Resist Shock", "Fortify Destruction", "Fortify Smithing", "Health Fortification"], dlc: "" },
        {available: true, name: "Glowing Mushroom Extract", effects: ["Etherealize", "Resist Shock", "Fortify Destruction", "Health Fortification"], dlc: "caco" },
        {available: true, name: "Gnarl Bark", effects: ["Damage Health", "Health Regeneration", "Fortify Heavy Armor", "Resist Fire"], dlc: "Creation-club" },
        {available: true, name: "Goat Eye", effects: ["Damage Stamina", "Fortify Illusion", "Damage Magicka Regen", "Damage Stamina Regen"], dlc: "caco" },
        {available: true, name: "Gold Kanet", effects: ["Paralysis", "Ravage Health", "Frost Aversion", "Fortify Smithing"], dlc: "Creation-club" },
        {available: true, name: "Golden Rudd", effects: ["Fortify Unarmed", "Fortify Restoration", "Resist Disease", "Lingering Damage Health"], dlc: "caco" },
        {available: true, name: "Golden Skimmer", effects: ["Shock Aversion", "Waterwalking", "Frenzy", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Golden-Ringed Darner", effects: ["Fortify Lockpicking", "Fortify Light Armor", "Damage Stamina Regen", "Fortify Block"], dlc: "caco" },
        {available: true, name: "Goldfish", effects: ["Stamina", "Fortify Heavy Armor", "Waterbreathing", "Resist Frost"], dlc: "Creation-club" },
        {available: true, name: "Grass Pod", effects: ["Resist Poison", "Silence", "Fortify Alteration", "Magicka"], dlc: "" },
        {available: true, name: "Gravedust", effects: ["Fortify Smithing", "Drain Intelligence", "Damage Undead", "Cure Disease"], dlc: "caco" },
        {available: true, name: "Gravetar", effects: ["Fear", "Resist Frost", "Ravage Health", "Fortify Two-handed"], dlc: "caco" },
        {available: true, name: "Green Butterfly Wing", effects: ["Magicka", "Fear", "Slow", "Invisibility"], dlc: "Creation-club" },
        {available: true, name: "Green Tench", effects: ["Poison Aversion", "Fortify Two-handed", "Resist Shock", "Ravage Health"], dlc: "caco" },
        {available: true, name: "Gudgeon", effects: ["Resist Disease", "Health Regeneration", "Lingering Damage Health", "Health Fortification"], dlc: "caco" },
        {available: true, name: "Hackle-Lo Leaf", effects: ["Stamina", "Paralysis", "Waterbreathing", "Fortify Restoration"], dlc: "Creation-club" },
        {available: true, name: "Hagraven Claw", effects: ["Resist Magic", "Damage Undead", "Fortify Enchanting", "Fortify Barter"], dlc: "" },
        {available: true, name: "Hagraven Feathers", effects: ["Damage Magicka", "Fortify Conjuration", "Frenzy", "Shock Aversion"], dlc: "" },
        {available: true, name: "Hanging Moss", effects: ["Damage Magicka", "Health Fortification", "Damage Magicka Regen", "Fortify One-Handed"], dlc: "" },
        {available: true, name: "Hanging Moss Extract", effects: ["Damage Magicka Regen", "Stamina Fortification", "Fortify One-handed", "Damage Magicka"], dlc: "caco" },
        {available: true, name: "Harrada", effects: ["Damage Health", "Damage Magicka", "Paralysis", "Damage Magicka Regen"], dlc: "Creation-club" },
        {available: true, name: "Hawk Beak", effects: ["Stamina", "Resist Frost", "Feather", "Resist Shock"], dlc: "" },
        {available: true, name: "Hawk Feathers", effects: ["Cure Disease", "Fortify Light Armor", "Fortify One-Handed", "Fortify Sneak"], dlc: "" },
        {available: true, name: "Hawk's Egg", effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Undead"], dlc: "caco"},
        {available: true, name: "Healing Salts", effects: ["Magic Aversion", "Fortify Restoration", "Slow", "Magicka Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Heart of Order", effects: ["Health", "Health Fortification", "Fortify One-Handed", "Fortify Two-Handed"], dlc: "Creation-club" },
        {available: true, name: "Heather", effects: ["Damage Stamina Regen", "Fortify Speech", "Slow", "Fortify Lockpicking"], dlc: "caco"},
        {available: true, name: "Heather Extract", effects: ["Damage Stamina Regen", "Fortify Speech", "Slow", "Fortify Lockpicking"], dlc: "caco" },
        {available: true, name: "Histcarp", effects: ["Stamina", "Magicka Fortification", "Damage Stamina Regen", "Waterbreathing"], dlc: "" },
        {available: true, name: "Honeycomb", effects: ["Stamina", "Fortify Block", "Fortify Light Armor", "Fatigue"], dlc: "" },
        {available: true, name: "Horker Tusk", effects: ["Magicka Fortification", "Fortify Conjuration", "Lingering Damage Undead", "Detect Life"], dlc: "caco" },
        {available: true, name: "Horse Hair", effects: ["Speed", "Cure Poison", "Resist Shock", "Poison Aversion"], dlc: "caco" },
        {available: true, name: "Human Flesh", effects: ["Damage Health", "Paralysis", "Magicka", "Fortify Sneak"], dlc: "" },
        {available: true, name: "Human Heart", effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "" },
        {available: true, name: "Hunger Tongue", effects: ["Fire Aversion", "Cure Disease", "Cure Poison", "Magicka Fortification"], dlc: "Creation-club" },
        {available: true, name: "Hydnum Azure Giant Spore", effects: ["Resist Frost", "Health Fortification", "Health Regeneration", "Light"], dlc: "Creation-club" },
        {available: true, name: "Hypha Facia", effects: ["Poison Aversion", "Frenzy", "Fatigue", "Resist Magic"], dlc: "Creation-club" },
        {available: true, name: "Ice Wraith Teeth", effects: ["Frost Aversion", "Fortify Heavy Armor", "Invisibility", "Fire Aversion"], dlc: "" },
        {available: true, name: "Imp Gall", effects: ["Fortify Speech", "Resist Paralysis", "Lingering Damage Health", "Fire Aversion"], dlc: "caco" },
        {available: true, name: "Imp Stool", effects: ["Damage Health", "Lingering Damage Health", "Paralysis", "Health"], dlc: "" },
        {available: true, name: "Ironwood Fruit", effects: ["Health", "Resist Fire", "Damage Stamina", "Magicka"], dlc: "Creation-club" },
        {available: true, name: "Ironwood Extract", effects: ["Health Fortification", "Fortify Conjuration", "Resist Fire", "Fatigue"], dlc: "caco" },
        {available: true, name: "Ironwood Nuts", effects: ["Health Fortification", "Fortify Conjuration", "Resist Fire", "Fatigue"], dlc: "caco"},
        {available: true, name: "Jarrin Root", effects: ["Damage Health", "Damage Magicka", "Damage Stamina", "Damage Magicka Regen"], dlc: "" },
        {available: true, name: "Jazbay Extract", effects: ["Magicka Fortification", "Magic Aversion", "Ravage Health", "Magicka Regeneration"], dlc: "caco" },
        {available: true, name: "Jazbay Grapes", effects: ["Magic Aversion", "Magicka Fortification", "Magicka Regeneration", "Ravage Health"], dlc: "" },
        {available: true, name: "Juniper Berries", effects: ["Fire Aversion", "Fortify Marksman", "Health Regeneration", "Damage Stamina Regen"], dlc: "" },
        {available: true, name: "Juniper Berry Extract", effects: ["Fortify Marksman", "Damage Stamina Regen", "Health Regeneration", "Fire Aversion"], dlc: "caco" },
        {available: true, name: "Juvenile Mudcrab", effects: ["Stamina Regeneration", "Feather", "Cure Disease", "Fortify Two-Handed"], dlc: "Creation-club" },
        {available: true, name: "Kagouti Hide", effects: ["Lingering Damage Stamina", "Night Eye", "Feather", "Resist Shock"], dlc: "Creation-club" },
        {available: true, name: "Khajiit Eye", effects: ["Night Eye", "Fortify Pickpocket", "Detect Life", "Fear"], dlc: "caco" },
        {available: true, name: "Kresh Fiber", effects: ["Magic Aversion", "Slow", "Fortify Sneak", "Fortify Pickpocket"], dlc: "Creation-club" },
        {available: true, name: "Kwama Cuttle", effects: ["Waterwalking", "Resist Poison", "Fatigue", "Waterbreathing"], dlc: "caco" },
        {available: true, name: "Kwama Egg", effects: ["Health Fortification", "Stamina", "Resist Frost", "Resist Paralysis"], dlc: "caco" },
        {available: true, name: "Large Antlers", effects: ["Stamina", "Stamina Fortification", "Slow", "Damage Stamina Regen"], dlc: "" },
        {available: true, name: "Lavender", effects: ["Resist Magic", "Stamina Fortification", "Silence", "Fortify Conjuration"], dlc: "" },
        {available: true, name: "Lavender Extract", effects: ["Fortify Speech", "Stamina Fortification", "Drain Intelligence", "Fortify Conjuration"], dlc: "caco" },
        {available: true, name: "Lichor", effects: ["Magicka", "Magicka Regeneration", "Magicka Fortification", "Spell Absorption"], dlc: "Creation-club" },
        {available: true, name: "Lotus Seeds", effects: ["Waterwalking", "Feather", "Cure Poison", "Lingering Damage Health"], dlc: "caco" },
        {available: true, name: "Luminous Russula", effects: ["Lingering Damage Stamina", "Lingering Damage Health", "Waterbreathing", "Fear"], dlc: "Creation-club" },
        {available: true, name: "Luna Moth Wing", effects: ["Damage Magicka", "Fortify Light Armor", "Health Regeneration", "Invisibility"], dlc: "" },
        {available: true, name: "Lyretail Anthias", effects: ["Magicka", "Fortify Alteration", "Fortify Conjuration", "Feather"], dlc: "Creation-club" },
        {available: true, name: "Mandrake Root", effects: ["Fear", "Cure Disease", "Fortify Destruction", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Marsh Fritillary", effects: ["Speed", "Fortify Light Armor", "Fortify Illusion", "Fear"], dlc: "caco" },
        {available: true, name: "Marshmerrow", effects: ["Health Regeneration", "Damage Stamina Regen", "Health", "Fortify Enchanting"], dlc: "caco" },
        {available: true, name: "Marshmerrow Extract", effects: ["Health Regeneration", "Damage Stamina Regen", "Health", "Fortify Enchanting"], dlc: "caco" },
        {available: true, name: "Minotaur Horn", effects: ["Resist Poison", "Damage Magicka Regen", "Health Regeneration", "Magicka Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Monkshood Root Pulp", effects: ["Fortify Unarmed", "Drain Intelligence", "Slow", "Fortify Heavy Armor"], dlc: "caco" },
        {available: true, name: "Moon Sugar", effects: ["Fire Aversion", "Resist Frost", "Magicka", "Magicka Regeneration"], dlc: "" },
        {available: true, name: "Mora Tapinella", effects: ["Magicka", "Lingering Damage Health", "Stamina Regeneration", "Fortify Illusion"], dlc: "" },
        {available: true, name: "Morning Glory Root Pulp", effects: ["Fortify Illusion", "Resist Frost", "Slow", "Lingering Damage Undead"], dlc: "caco" },
        {available: true, name: "Mort Flesh", effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "Creation-club" },
        {available: true, name: "Mourning Cloak", effects: ["Damage Undead", "Fortify Lockpicking", "Resist Disease", "Lingering Damage Undead"], dlc: "caco" },
        {available: true, name: "Mudcrab Chitin", effects: ["Stamina", "Cure Disease", "Resist Poison", "Resist Fire"], dlc: "" },
        {available: true, name: "Mugwort Seeds", effects: ["Health", "Fortify One-handed", "Fortify Light Armor", "Stamina Regeneration"], dlc: "caco" },
        {available: true, name: "Namira's Rot", effects: ["Damage Magicka", "Fortify Lockpicking", "Fear", "Health Regeneration"], dlc: "" },
        {available: true, name: "Netch Jelly", effects: ["Paralysis", "Feather", "Stamina", "Fear"], dlc: "Dragonborn" },
        {available: true, name: "Nightshade", effects: ["Damage Health", "Damage Magicka Regen", "Lingering Damage Undead", "Fortify Destruction"], dlc: "" },
        {available: true, name: "Nightshade Extract", effects: ["Fortify Destruction", "Damage Undead", "Damage Magicka Regen", "Damage Health"], dlc: "caco" },
        {available: true, name: "Nirnroot", effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"], dlc: "" },
        {available: true, name: "Nordic Barnacle", effects: ["Damage Magicka", "Waterbreathing", "Health Regeneration", "Fortify Pickpocket"], dlc: "" },
        {available: true, name: "Nordic Swallowtail", effects: ["Health", "Fire Aversion", "Fortify Two-handed", "Resist Magic"], dlc: "caco" },
        {available: true, name: "Ogre's Teeth", effects: ["Frenzy", "Fortify Unarmed", "Shock Aversion", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Onyx", effects: ["Fortify Block", "Fortify Smithing", "Shock Aversion", "Resist Shock"], dlc: "caco" },
        {available: true, name: "Orange Dartwing", effects: ["Stamina", "Silence", "Fortify Pickpocket", "Lingering Damage Health"], dlc: "" },
        {available: true, name: "Orange Tip Butterfly", effects: ["Fire Aversion", "Detect Life", "Cure Disease", "Fortify Marksman"], dlc: "caco" },
        {available: true, name: "Orc Liver", effects: ["Fortify Smithing", "Fortify Heavy Armor", "Stamina Fortification", "Stamina Regen"], dlc: "caco" },
        {available: true, name: "Oxgall", effects: ["Damage Stamina", "Fortify Unarmed", "Fortify Heavy Armor", "Fortify Restoration"], dlc: "caco" },
        {available: true, name: "Padomaic Tigerfish", effects: ["Fortify Unarmed", "Frenzy", "Fortify Alteration", "Waterbreathing"], dlc: "caco" },
        {available: true, name: "Painted Lady", effects: ["Damage Magicka Regen", "Poison Aversion", "Cure Poison", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Peacock Butterfly", effects: ["Fortify Block", "Cure Disease", "Fortify Pickpocket", "Fortify Sneak"], dlc: "caco" },
        {available: true, name: "Pearl", effects: ["Stamina", "Fortify Block", "Magicka", "Resist Shock"], dlc: "" },
        {available: true, name: "Pearlfish", effects: ["Stamina", "Resist Frost", "Fortify Smithing", "Fortify One-Handed"], dlc: "Creation-club" },
        {available: true, name: "Peony Seeds", effects: ["Stamina Fortification", "Slow", "Lingering Damage Health", "Stamina"], dlc: "caco" },
        {available: true, name: "Pheasant Feathers", effects: ["Fortify Pickpocket", "Fortify Restoration", "Cure Disease", "Damage Stamina"], dlc: "caco" },
        {available: true, name: "Pine Thrush Egg", effects: ["Stamina", "Fortify Lockpicking", "Poison Aversion", "Resist Shock"], dlc: "" },
        {available: true, name: "Poison Bloom", effects: ["Damage Health", "Slow", "Feather", "Fear"], dlc: "Dawnguard" },
        {available: true, name: "Polyphemus Moth", effects: ["Fortify Illusion", "Fear", "Fortify Conjuration", "Detect Life"], dlc: "caco" },
        {available: true, name: "Powdered Mammoth Tusk", effects: ["Stamina", "Fortify Sneak", "Fire Aversion", "Fear"], dlc: "" },
        {available: true, name: "Purple Butterfly Wing", effects: ["Health Regeneration", "Magicka Regeneration", "Stamina Regeneration", "Paralysis"], dlc: "Creation-club" },
        {available: true, name: "Purple Mountain Flower", effects: ["Stamina", "Fortify Sneak", "Damage Undead", "Resist Frost"], dlc: "" },
        {available: true, name: "Purple Mountain Flower Extract", effects: ["Fortify Sneak", "Fortify Marksman", "Lingering Damage Undead", "Stamina"], dlc: "caco" },
        {available: true, name: "Putrefied Flesh", effects: ["Ravage Health", "Damage Magicka Regen", "Drain Strength", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Pygmy Sunfish", effects: ["Stamina", "Lingering Damage Magicka", "Damage Magicka Regen", "Fortify Restoration"], dlc: "Creation-club" },
        {available: true, name: "Racer Plumes", effects: ["Speed", "Fortify Sneak", "Stamina Regeneration", "Damage Undead"], dlc: "caco" },
        {available: true, name: "Red Admiral Butterfly", effects: ["Magic Aversion", "Health", "Damage Stamina Regen", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Red Cracker Butterfly", effects: ["Fortify Pickpocket", "Poison Aversion", "Cure Poison", "Ravage Health"], dlc: "caco" },
        {available: true, name: "Red Kelp Gas Bladder", effects: ["Stamina Regeneration", "Waterbreathing", "Cure Disease", "Magicka Fortification"], dlc: "Creation-club" },
        {available: true, name: "Red Lichen", effects: ["Slow", "Fortify Speech", "Cure Disease", "Drain Intelligence"], dlc: "caco" },
        {available: true, name: "Red Mountain Flower", effects: ["Magicka", "Silence", "Magicka Fortification", "Damage Health"], dlc: "" },
        {available: true, name: "Red Mountain Flower Extract", effects: ["Drain Intelligence", "Health Fortification", "Damage Magicka Regen", "Health"], dlc: "caco" },
        {available: true, name: "Redbelly Dace", effects: ["Fortify Restoration", "Cure Disease", "Cure Poison", "Frost Aversion"], dlc: "caco" },
        {available: true, name: "Redwort Flower (with long stem)", effects: ["Fortify Destruction", "Ravage Health", "Resist Frost", "Cure Poison"], dlc: "caco" },
        {available: true, name: "Redwort Flower", effects: ["Resist Frost", "Cure Poison", "Damage Health", "Invisibility"], dlc: "Creation-club" },
        {available: true, name: "River Betty", effects: ["Damage Health", "Fortify Alteration", "Slow", "Feather"], dlc: "" },
        {available: true, name: "Rock Warbler Egg", effects: ["Health", "Fortify One-Handed", "Damage Stamina", "Magic Aversion"], dlc: "" },
        {available: true, name: "Roobrush", effects: ["Fortify Pickpocket", "Damage Stamina Regen", "Cure Poison", "Lingering Damage Health"], dlc: "caco" },
        {available: true, name: "Rot Scale", effects: ["Slow", "Lingering Damage Health", "Fear", "Paralysis"], dlc: "Creation-club" },
        {available: true, name: "Ruby Shiner", effects: ["Resist Disease", "Frost Aversion", "Health", "Magicka"], dlc: "caco" },
        {available: true, name: "Sabre Cat Tooth", effects: ["Stamina", "Fortify Heavy Armor", "Fortify Smithing", "Poison Aversion"], dlc: "" },
        {available: true, name: "Salmon Roe", effects: ["Stamina", "Waterbreathing", "Magicka Fortification", "Magicka Regeneration"], dlc: "caco"},
        {available: true, name: "Salt Pile", effects: ["Magic Aversion", "Fortify Restoration", "Slow", "Magicka Regeneration"], dlc: "" },
        {available: true, name: "Saltrice", effects: ["Stamina", "Magicka Fortification", "Damage Stamina Regen", "Health"], dlc: "Creation-club" },
        {available: true, name: "Saltrice", effects: ["Stamina Regeneration", "Health Fortification", "Damage Undead", "Stamina Fortification"], dlc: "caco" },
        {available: true, name: "Saltrice Extract", effects: ["Stamina Regeneration", "Health Fortification", "Damage Undead", "Stamina Fortification"], dlc: "caco" },
        {available: true, name: "Sawtooth Butterfly", effects: ["Fortify Marksman", "Night Eye", "Resist Paralysis", "Frost Aversion"], dlc: "caco" },
        {available: true, name: "Scalon Fin", effects: ["Waterbreathing", "Damage Health", "Lingering Damage Magicka", "Damage Magicka Regen"], dlc: "Creation-club" },
        {available: true, name: "Scaly Pholiota", effects: ["Magic Aversion", "Fortify Illusion", "Stamina Regeneration", "Feather"], dlc: "" },
        {available: true, name: "Scamp Skin", effects: ["Lingering Damage Health", "Resist Shock", "Damage Magicka", "Fortify Block"], dlc: "caco" },
        {available: true, name: "Scathecraw", effects: ["Ravage Health", "Fatigue", "Silence", "Lingering Damage Health"], dlc: "Dragonborn" },
        {available: true, name: "Screaming Maw", effects: ["Magicka Regeneration", "Fortify Alteration", "Invisibility", "Health Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Scrib Jelly", effects: ["Fortify Restoration", "Cure Poison", "Cure Disease", "Fortify Alteration"], dlc: "caco" },
        {available: true, name: "Scrib Jerky", effects: ["Stamina", "Stamina Fortification", "Paralysis", "Waterbreathing"], dlc: "Creation-club" },
        {available: true, name: "Silverjaw Minnow", effects: ["Damage Undead", "Waterbreathing", "Lingering Damage Undead", "Cure Disease"], dlc: "caco" },
        {available: true, name: "Silverside Perch", effects: ["Stamina", "Damage Stamina Regen", "Ravage Health", "Resist Frost"], dlc: "" },
        {available: true, name: "Simon Rodayne's Heart", effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"], dlc: "Creation-club" },
        {available: true, name: "Skeever Tail", effects: ["Damage Stamina Regen", "Ravage Health", "Damage Health", "Fortify Light Armor"], dlc: "" },
        {available: true, name: "Slaughterfish Egg", effects: ["Resist Poison", "Fortify Pickpocket", "Lingering Damage Health", "Stamina Fortification"], dlc: "" },
        {available: true, name: "Slaughterfish Scales", effects: ["Resist Frost", "Lingering Damage Health", "Fortify Heavy Armor", "Fortify Block"], dlc: "" },
        {available: true, name: "Sload Soap", effects: ["Damage Undead", "Fortify Pickpocket", "Resist Fire", "Fortify Sneak"], dlc: "caco" },
        {available: true, name: "Small Antlers", effects: ["Poison Aversion", "Fortify Restoration", "Lingering Damage Undead", "Damage Health"], dlc: "" },
        {available: true, name: "Small Pearl", effects: ["Stamina", "Fortify One-Handed", "Fortify Restoration", "Resist Frost"], dlc: "" },
        {available: true, name: "Snowberries", effects: ["Resist Fire", "Fortify Enchanting", "Resist Frost", "Resist Shock"], dlc: "" },
        {available: true, name: "Snowberry Extract", effects: ["Fortify Enchanting", "Resist Fire", "Resist Frost", "Resist Shock"], dlc: "caco" },
        {available: true, name: "Soul Husk", effects: ["Protect Soul", "Resist Paralysis", "Paralysis", "Etherealize"], dlc: "caco" },
        {available: true, name: "Spadefish", effects: ["Health", "Fortify Lockpicking", "Fortify Pickpocket", "Cure Disease"], dlc: "Creation-club" },
        {available: true, name: "Spawn Ash", effects: ["Fatigue", "Resist Fire", "Fortify Enchanting", "Silence"], dlc: "Dragonborn" },
        {available: true, name: "Spiddal Stick", effects: ["Damage Health", "Damage Magicka", "Fire Aversion", "Stamina"], dlc: "Creation-club" },
        {available: true, name: "Spider Egg", effects: ["Damage Stamina", "Damage Magicka Regen", "Fortify Lockpicking", "Fortify Marksman"], dlc: "" },
        {available: true, name: "Spider Silk", effects: ["Damage Stamina Regen", "Resist Disease", "Fortify Light Armor", "Fortify Lockpicking"], dlc: "caco" },
        {available: true, name: "Spiky Grass/Extract", effects: ["Drain Intelligence", "Cure Poison", "Fortify Alteration", "Magicka"], dlc: "caco" },
        {available: true, name: "Spriggan Sap", effects: ["Damage Magicka Regen", "Fortify Enchanting", "Fortify Smithing", "Fortify Alteration"], dlc: "" },
        {available: true, name: "St. Jahn's Wort Nectar", effects: ["Waterbreathing", "Cure Poison", "Resist Shock", "Etherealize"], dlc: "caco" },
        {available: true, name: "Steel-Blue Entoloma", effects: ["Magicka", "Fortify Destruction", "Resist Frost", "Feather"], dlc: "Creation-club" },
        {available: true, name: "Stoneflower", effects: ["Lingering Damage Undead", "Stamina", "Fortify Speech", "Magicka"], dlc: "caco" },
        {available: true, name: "Stoneflower Petals", effects: ["Shock Aversion", "Fortify One-Handed", "Magicka Fortification", "Fortify Enchanting"], dlc: "Creation-club" },
        {available: true, name: "Sulfur", effects: ["Resist Disease", "Lingering Damage Undead", "Stamina", "Ravage Health"], dlc: "caco" },
        {available: true, name: "Swamp Betty", effects: ["Shock Aversion", "Fortify Heavy Armor", "Fortify Two-handed", "Paralysis"], dlc: "caco" },
        {available: true, name: "Swamp Fungal Pod", effects: ["Resist Shock", "Damage Undead", "Paralysis", "Health"], dlc: "" },
        {available: true, name: "Taproot", effects: ["Magic Aversion", "Fortify Illusion", "Magicka Regeneration", "Magicka"], dlc: "" },
        {available: true, name: "Thistle Branch", effects: ["Resist Frost", "Fatigue", "Resist Poison", "Fortify Heavy Armor"], dlc: "" },
        {available: true, name: "Thistle Extract", effects: ["Fatigue", "Fortify Heavy Armor", "Resist Poison", "Resist Frost"], dlc: "caco" },
        {available: true, name: "Thorn Hook", effects: ["Lingering Damage Health", "Paralysis", "Magicka Regeneration", "Health Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Tiger Lily Nectar", effects: ["Waterwalking", "Fortify Smithing", "Drain Strength", "Frenzy"], dlc: "caco" },
        {available: true, name: "Tinder Polypore Cap", effects: ["Fortify Alteration", "Damage Magicka", "Invisibility", "Resist Disease"], dlc: "caco" },
        {available: true, name: "Torchbug Thorax", effects: ["Stamina", "Damage Undead", "Magic Aversion", "Stamina Fortification"], dlc: "" },
        {available: true, name: "Trama Root", effects: ["Shock Aversion", "Feather", "Damage Magicka", "Slow"], dlc: "Dragonborn" },
        {available: true, name: "Troll Fat", effects: ["Resist Poison", "Fortify Two-Handed", "Frenzy", "Damage Health"], dlc: "" },
        {available: true, name: "Troll's Blood", effects: ["Health Regeneration", "Fire Aversion", "Health Fortification", "Ravage Health"], dlc: "caco" },
        {available: true, name: "Tundra Cotton", effects: ["Resist Magic", "Magicka Fortification", "Fortify Block", "Fortify Barter"], dlc: "" },
        {available: true, name: "Tundra Cotton Extract", effects: ["Fortify Unarmed", "Resist Paralysis", "Fortify Block", "Fortify Speech"], dlc: "caco" },
        {available: true, name: "Vampire Dust", effects: ["Invisibility", "Magicka", "Health Regeneration", "Cure Disease"], dlc: "" },
        {available: true, name: "Violet Coprinus", effects: ["Fatigue", "Ravage Health", "Speed", "Waterwalking"], dlc: "caco" },
        {available: true, name: "Void Essence", effects: ["Health", "Health Fortification", "Stamina Fortification", "Health Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Void Salts", effects: ["Shock Aversion", "Resist Magic", "Damage Health", "Magicka Fortification"], dlc: "" },
        {available: true, name: "Warpaint Shiner", effects: ["Damage Stamina Regen", "Fortify Illusion", "Damage Magicka Regen", "Health Fortification"], dlc: "caco" },
        {available: true, name: "Watcher's Eye", effects: ["Night Eye", "Magicka Fortification", "Fortify Illusion", "Spell Absorption"], dlc: "Creation-club" },
        {available: true, name: "Water Hyacinth Nectar", effects: ["Waterbreathing", "Magic Aversion", "Magicka", "Fatigue"], dlc: "caco" },
        {available: true, name: "Werebear Claws", effects: ["Fortify Block", "Fortify One-handed", "Fortify Two-handed", "Resist Poison"], dlc: "caco" },
        {available: true, name: "Werewolf Blood", effects: ["Detect Life", "Fear", "Fortify Alteration", "Cure Disease"], dlc: "caco" },
        {available: true, name: "Wheat", effects: ["Health", "Health Fortification", "Damage Stamina Regen", "Damage Undead"], dlc: "" },
        {available: true, name: "Wheat Extract", effects: ["Health", "Health Fortification", "Damage Magicka Regen", "Damage Stamina Regen"], dlc: "caco" },
        {available: true, name: "White Cap", effects: ["Frost Aversion", "Fortify Heavy Armor", "Magicka", "Silence"], dlc: "" },
        {available: true, name: "White Witch Moth", effects: ["Poison Aversion", "Silence", "Fortify Sneak", "Fortify One-handed"], dlc: "caco" },
        {available: true, name: "Widow Skimmer", effects: ["Waterwalking", "Shock Aversion", "Ravage Health", "Fortify Lockpicking"], dlc: "caco" },
        {available: true, name: "Wild Grass Pod", effects: ["Resist Poison", "Silence", "Fortify Alteration", "Magicka"], dlc: "Creation-club" },
        {available: true, name: "Wisp Stalk Caps", effects: ["Damage Health", "Poison Aversion", "Frenzy", "Stamina Regeneration"], dlc: "Creation-club" },
        {available: true, name: "Wisp Stalks", effects: ["Waterwalking", "Damage Stamina", "Damage Health", "Damage Magicka"], dlc: "caco" },
        {available: true, name: "Wisp Wrappings", effects: ["Stamina", "Fortify Destruction", "Feather", "Resist Magic"], dlc: "" },
        {available: true, name: "Withering Moon", effects: ["Magicka", "Spell Absorption", "Fortify Light Armor", "Cure Disease"], dlc: "Creation-club" },
        {available: true, name: "Wolf Liver", effects: ["Fortify Unarmed", "Fire Aversion", "Resist Disease", "Detect Life"], dlc: "caco" },
        {available: true, name: "Worm's Head Cap", effects: ["Fortify Lockpicking", "Night Eye", "Feather", "Slow"], dlc: "Creation-club" },
        {available: true, name: "Wormwood Leaves", effects: ["Lingering Damage Health", "Lingering Damage Undead", "Fortify Sneak", "Fortify Marksman"], dlc: "caco" },
        {available: true, name: "Yellow Mountain Flower", effects: ["Resist Poison", "Fortify Restoration", "Health Fortification", "Damage Stamina Regen"], dlc: "Dawnguard" }
    ]
};

function useCaco() {
	return document.body.classList.contains("use-caco");
}

function toggleAvailability(e) {
	let ingredients = useCaco() ? caco.ingredients : vanilla.ingredients;
	let dex = ingredients.findIndex(i => i.name == this.innerText);
	ingredients[dex].available = !ingredients[dex].available;
	loadLists();
}

function allIngredientsUnavailable() {
	let ingredients = useCaco() ? caco.ingredients : vanilla.ingredients;
	ingredients.forEach(i => i.available = i.available ? !i.available : i.available);
    loadLists();
}

function toggleUnavailableList() {
	Array.from(document.getElementsByClassName("toggle-ingredients-list")).forEach(e => e.classList.toggle("d-none"));
}

function toggleDLCIngredients(e) {
	let ingredients = useCaco() ? caco.ingredients : vanilla.ingredients;
	ingredients.forEach((i) => {
		if (i.dlc && i.dlc.toLowerCase() === this.classList[1]) {
			i.available = false;
		}
	});
	loadLists();
}

function populateIngredientsList(parentList, ingredientName, clsList) {
	let ingItem = document.createElement("li");
	ingItem.addEventListener("click", toggleAvailability);
	ingItem.innerHTML = ingredientName;
    if (clsList) ingItem.classList.add(clsList.toLowerCase());
	parentList.appendChild(ingItem);
}

function createConcoctionElement(headerContent, ingList) {
    let concoction = document.createElement("li");
    let header = document.createElement("h4");
    header.innerHTML = headerContent;
    concoction.appendChild(header);

    let ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("ingredients");

    if (ingList.length < 2) {
        concoction.classList.add("order-last");
    }

    ingList.forEach(i => populateIngredientsList(ingredientsList, i.name, i.dlc ? i.dlc : false))
    concoction.appendChild(ingredientsList);

    return concoction;
}

function createCacoConcoctionElement(effectsArr, ingList, clsList) {
	let concoction = document.createElement("li");
	let header = document.createElement("h4");
	header.innerHTML = effectsArr.join(" & ");
	concoction.appendChild(header);
	let ingredientsList = document.createElement("ul");
	ingredientsList.classList.add("ingredients");
	
	if (ingList.length < 2) {
        concoction.classList.add("order-last");
    }
	
	ingList.forEach((i) => {
		
		let ingItem = document.createElement("li");
		ingItem.addEventListener("click", toggleAvailability);
		if (i.dlc) ingItem.classList.add(i.dlc.toLowerCase());
		
		let [pri, sec, ter, quar] = i.effects;
		for (let e of effectsArr) {
			let potencyIndicator = document.createElement("span");
			switch(e) {
				case pri:
					potencyIndicator.classList.add("primary");
					break;
				case sec:
					potencyIndicator.classList.add("secondary");
					break;
				case ter:
					potencyIndicator.classList.add("tertiary");
					break;
				case quar:
					potencyIndicator.classList.add("quarternary");
					break;
				default:
					break;
			}
			
			ingItem.appendChild(potencyIndicator);
		}
		ingItem.append(i.name);
		ingredientsList.appendChild(ingItem);
		concoction.appendChild(ingredientsList);
		
	});
	
	return concoction;
}

function loadLists() {
	
	let allConcoctions = document.getElementsByClassName('all-concoctions')[0];
	let unavailableIngredients = document.getElementsByClassName("unavailable-ingredients")[0];
	allConcoctions.innerHTML = "";
	unavailableIngredients.innerHTML = "";

	if(useCaco()) {
		let effectsIter = _.orderBy(Array.from(caco.effects), ["basegold"], ["desc"]);
		let testEffects = [];
		
		for (let iter = 0; iter < effectsIter.length; iter++) {
			testEffects.push(effectsIter[iter].name);
			
			for (let innerIter = iter+1; innerIter < effectsIter.length; innerIter++) {
				testEffects.push(effectsIter[innerIter].name);
				
				let ings = caco.ingredients.filter((i) => testEffects.every(e => i.effects.indexOf(e) !== -1));
				
				if (ings.length > 2) {
					allConcoctions.appendChild(createCacoConcoctionElement(testEffects, ings.filter(i => i.available)));
				}
				
				testEffects.pop();
			}
			let ings = caco.ingredients.filter((i) => testEffects.every(e => i.effects.indexOf(e) !== -1));
			
			if (ings.length > 2) {
				allConcoctions.appendChild(createCacoConcoctionElement(testEffects, ings.filter(i => i.available)));
			}
			
			testEffects.pop();
		}
		
		_.filter(caco.ingredients, i => !i.available).forEach(ing => populateIngredientsList(unavailableIngredients, ing.name, ing.dlc ? ing.dlc : false));
		
		
		
		
	}
	else {
		let effectsIter = _.orderBy(Array.from(vanilla.effects), ["basegold"], ["desc"]);
		let testEffects = [];
		
		let buildList = (compArr) => {
			let ings = vanilla.ingredients.filter(i => compArr.every(e => i.effects.indexOf(e) !== -1));
			if (ings.length > 2) {
				allConcoctions.appendChild(createConcoctionElement(compArr.join(" & "), ings.filter(i => i.available)));
			}
			
			compArr.pop();
		};
		
		for (let iter = 0; iter < effectsIter.length; iter ++) {
			testEffects.push(effectsIter[iter].name);
			for (let innerIter = iter+1; innerIter < effectsIter.length; innerIter++) {
				testEffects.push(effectsIter[innerIter].name);
				buildList(testEffects);
			}
			
			buildList(testEffects);
		}
		
		_.filter(vanilla.ingredients, i => !i.available).forEach(ing => populateIngredientsList(unavailableIngredients, ing.name, ing.dlc ? ing.dlc : false));				
				
	}
}



loadLists();
document.querySelector(".use-caco-mod").addEventListener("click", function(e) { document.body.classList.add("use-caco"); loadLists(); }); 
document.querySelector(".toggle-ingredients-list-button").addEventListener("click", toggleUnavailableList);
document.querySelector(".turnoff-all-ingredients-button").addEventListener("click", allIngredientsUnavailable);
document.querySelectorAll(".hide-dlc").forEach(e => e.addEventListener("click", toggleDLCIngredients));

