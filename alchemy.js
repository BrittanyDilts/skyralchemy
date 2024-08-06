/*
Note:
If type=="Potion" 
If concoctions[x].gold.length == 4, gold is for potion, draught, philter, elixir
If concoctions[x].gold.length == 5, gold is for potion, draught, solution, philter, elixir
If concoctions[x].effect == "Invisibility", brief, extended, enduring, prolonged
If concoctions[x].gold.length == 6, minor, *, plentiful, vigorous, extreme, ultimate

If type==="Poison"
If concoctions[x].gold.length == 5, weak, * potent, virulent, deadly
If concoctions[x].effect contains "Regen" or "Weakness", weak, *, potent, malign, deadly
Some Lingering potions are *, enduring, lasting, persisting, unceasing

*/

/* 
	concoctions obj keys: {type, name, effect, gold, dlc}
*/
const oldConcoctions = [
	{type: "Potion", basegold: 79, name: "Potion of Cure Disease", effect: "Cure Disease", gold: [79]},
	{type: "Potion", basegold: 49, name: "Potion of Alteration", effect: "Fortify Alteration", gold: [49, 106, 165, 227]},
	{type: "Potion", name: "Potion of Haggling", effect: "Fortify Barter", gold: [84, 131, 180, 230]},
	{type: "Potion", name: "Potion of the Defender", effect: "Fortify Blocking", gold: [45, 70, 96, 123]},
	{type: "Potion", name: "Potion of Strength", effect: "Fortify Carry Weight", gold: [170, 266, 365, 467, 571]},
	{type: "Potion", name: "Conjurer's Potion", effect: "Fortify Conjuration", gold: [96, 132, 207, 284]},
	{type: "Potion", name: "Potion of Destruction", effect: "Fortify Destruction", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Enchanter's Potion", effect: "Fortify Enchanting", gold: [54, 84, 116, 148]},
	{type: "Potion", name: "Potion of Health", effect: "Fortify Health", gold: [67, 145, 226, 311, 398]},
	{type: "Potion", name: "Potion of the Knight", effect: "Fortify Heavy Armor", gold: [45, 70, 96, 123]},
	{type: "Potion", name: "Potion of Illusion", effect: "Fortify Illusion", gold: [99, 212, 331, 455]},
	{type: "Potion", name: "Skirmisher's Potion", effect: "Fortify Light Armor", gold: [45, 70, 96, 123]},
	{type: "Potion", name: "Potion of Lockpicking", effect: "Fortify Lockpicking", gold: [45, 70, 96, 123]},
	{type: "Potion", name: "Potion of Extra Magicka", effect: "Fortify Magicka", gold: [58, 124, 194, 266, 341]},
	{type: "Potion", name: "Potion of True Shot", effect: "Fortify Marksman", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Potion of the Warrior", effect: "Fortify One-Handed", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Potion of Pickpocketing", effect: "Fortify Pickpocket", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Potion of the Healer", effect: "Fortify Restoration", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Blacksmith's Potion", effect: "Fortify Smithing", gold: [67, 105, 145, 185]},
	{type: "Potion", name: "Potion of Light Feet", effect: "Fortify Sneak", gold: [45, 70, 96, 123]},
	{type: "Potion", name: "Potion of Enhanced Stamina", effect: "Fortify Stamina", gold: [341, 731, 1142, 1568, 341]},
	{type: "Potion", name: "Potion of the Berserker", effect: "Fortify Two-Handed", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Potion of Invisibility", effect: "Invisibility", gold: [214, 334, 459, 587]},
	{type: "Potion", name: "Potion of Regeneration", effect: "Regenerate Health", gold: [311, 380, 451, 522, 668]},
	{type: "Potion", name: "Potion of Lasting Potency", effect: "Regenerate Magicka", gold: [311, 380, 451, 522, 668]},
	{type: "Potion", name: "Potion of Vigor", effect: "Regenerate Stamina", gold: [311, 380, 451, 522, 668]},
	{type: "Potion", name: "Potion of Resist Fire", effect: "Resist Fire", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Potion of Resist Cold", effect: "Resist Frost", gold: [96, 151, 207, 265]},
	{type: "Potion", name: "Potion of Resist Magic", effect: "Resist Magic", gold: [90, 141, 193, 248]},
	{type: "Potion", name: "Potion or Healing", effect: "Restore Health", gold: [17, 36, 57, 79, 123, 251]},
	{type: "Potion", name: "Potion of Magicka", effect: "Restore Magicka", gold: [20, 44, 69, 95, 148, 150]},
	{type: "Potion", name: "Potion of Stamina", effect: "Restore Stamina", gold: [20, 44, 69, 95, 148, 150]},
	{type: "Potion", name: "Potion of Waterbreathing", effect: "Waterbreathing", gold: [46, 100, 156, 215]},
	{type: "Potion", name: "Potion of Well-being", effect: "Well-being", gold: [31, 82, 139, 195, 238, 269], dlc: "Dragonborn" },
	{type: "Poison", name: "Poison", effect: "Damage Health", gold: [58, 103, 149, 221, 296]},
	{type: "Poison", name: "Magicka Poison", effect: "Damage Magicka", gold: [92, 162, 235, 348]},
	{type: "Poison", name: "Magicka Recovery Poison", effect: "Damage Magicka Regen", gold: [79, 169, 285, 414, 568]},
	{type: "Poison", name: "Stamina Poison", effect: "Damage Stamina", gold: [75, 133, 192, 285, 380]},
	{type: "Poison", name: "Vigor Poison", effect: "Damage Stamina Regen", gold: [74, 159, 248, 341]},
	{type: "Poison", name: "Fear Poison", effect: "Fear", gold: [98, 164, 281, 402, 526]},
	{type: "Poison", name: "Frenzy Poison", effect: "Frenzy", gold: [88, 147, 252, 360, 472]},
	{type: "Poison", name: "Lingering Poison", effect: "Lingering Damage Health", gold: [12, 18, 40, 55, 86]},
	{type: "Poison", name: "Lingering Magicka Poison", effect: "Lingering Damage Magicka", gold: [10, 15, 33, 45, 71]},
	{type: "Poison", name: "Lingering Stamina Poison", effect: "Lingering Damage Stamina", gold: [6, 12, 20, 27, 35]},
	{type: "Poison", name: "Paralysis Poison", effect: "Paralysis", gold: [132, 233, 337, 500, 781]},
	{type: "Poison", name: "Aversion to Fire", effect: "Weakness to Fire", gold: [116, 164, 215, 266, 318]},
	{type: "Poison", name: "Aversion to Frost", effect: "Weakness to Frost", gold: [96, 137, 179, 221, 265]},
	{type: "Poison", name: "Aversion to Magic", effect: "Weakness to Magic", gold: [193, 274, 358, 443, 530]},
	{type: "Poison", name: "Aversion to Shock", effect: "Weakness to Shock", gold: [193, 274, 358, 443, 530]}
];



const concoctions = [
{basegold: 6, type: "Poison", effect: "Lingering Damage Stamina", name: "Lingering Stamina Poison"},
{basegold: 10, type: "Poison", effect: "Lingering Damage Magicka", name: "Lingering Magicka Poison"},
{basegold: 12, type: "Poison", effect: "Lingering Damage Health", name: "Lingering Poison"},
{basegold: 17, type: "Potion", effect: "Restore Health", name: "Potion or Healing"},
{basegold: 20, type: "Potion", effect: "Restore Magicka", name: "Potion of Magicka"},
{basegold: 20, type: "Potion", effect: "Restore Stamina", name: "Potion of Stamina"},
{basegold: 31, type: "Potion", effect: "Well-being", name: "Potion of Well-being"},
{basegold: 45, type: "Potion", effect: "Fortify Blocking", name: "Potion of the Defender"},
{basegold: 45, type: "Potion", effect: "Fortify Heavy Armor", name: "Potion of the Knight"},
{basegold: 45, type: "Potion", effect: "Fortify Light Armor", name: "Skirmisher's Potion"},
{basegold: 45, type: "Potion", effect: "Fortify Lockpicking", name: "Potion of Lockpicking"},
{basegold: 45, type: "Potion", effect: "Fortify Sneak", name: "Potion of Light Feet"},
{basegold: 46, type: "Potion", effect: "Waterbreathing", name: "Potion of Waterbreathing"},
{basegold: 49, type: "Potion", effect: "Fortify Alteration", name: "Potion of Alteration"},
{basegold: 54, type: "Potion", effect: "Fortify Enchanting", name: "Enchanter's Potion"},
{basegold: 58, type: "Potion", effect: "Fortify Magicka", name: "Potion of Extra Magicka"},
{basegold: 58, type: "Poison", effect: "Damage Health", name: "Poison"},
{basegold: 67, type: "Potion", effect: "Fortify Health", name: "Potion of Health"},
{basegold: 67, type: "Potion", effect: "Fortify Smithing", name: "Blacksmith's Potion"},
{basegold: 74, type: "Poison", effect: "Damage Stamina Regen", name: "Vigor Poison"},
{basegold: 75, type: "Poison", effect: "Damage Stamina", name: "Stamina Poison"},
{basegold: 79, type: "Potion", effect: "Cure Disease", name: "Potion of Cure Disease"},
{basegold: 79, type: "Poison", effect: "Damage Magicka Regen", name: "Magicka Recovery Poison"},
{basegold: 84, type: "Potion", effect: "Fortify Barter", name: "Potion of Haggling"},
{basegold: 88, type: "Poison", effect: "Frenzy", name: "Frenzy Poison"},
{basegold: 90, type: "Potion", effect: "Resist Magic", name: "Potion of Resist Magic"},
{basegold: 92, type: "Poison", effect: "Damage Magicka", name: "Magicka Poison"},
{basegold: 96, type: "Potion", effect: "Fortify Conjuration", name: "Conjurer's Potion"},
{basegold: 96, type: "Potion", effect: "Fortify Destruction", name: "Potion of Destruction"},
{basegold: 96, type: "Potion", effect: "Fortify Marksman", name: "Potion of True Shot"},
{basegold: 96, type: "Potion", effect: "Fortify One-Handed", name: "Potion of the Warrior"},
{basegold: 96, type: "Potion", effect: "Fortify Pickpocket", name: "Potion of Pickpocketing"},
{basegold: 96, type: "Potion", effect: "Fortify Restoration", name: "Potion of the Healer"},
{basegold: 96, type: "Potion", effect: "Fortify Two-Handed", name: "Potion of the Berserker"},
{basegold: 96, type: "Potion", effect: "Resist Fire", name: "Potion of Resist Fire"},
{basegold: 96, type: "Potion", effect: "Resist Frost", name: "Potion of Resist Cold"},
{basegold: 96, type: "Poison", effect: "Weakness to Frost", name: "Aversion to Frost"},
{basegold: 98, type: "Poison", effect: "Fear", name: "Fear Poison"},
{basegold: 99, type: "Potion", effect: "Fortify Illusion", name: "Potion of Illusion"},
{basegold: 116, type: "Poison", effect: "Weakness to Fire", name: "Aversion to Fire"},
{basegold: 132, type: "Poison", effect: "Paralysis", name: "Paralysis Poison"},
{basegold: 170, type: "Potion", effect: "Fortify Carry Weight", name: "Potion of Strength"},
{basegold: 193, type: "Poison", effect: "Weakness to Magic", name: "Aversion to Magic"},
{basegold: 193, type: "Poison", effect: "Weakness to Shock", name: "Aversion to Shock"},
{basegold: 214, type: "Potion", effect: "Invisibility", name: "Potion of Invisibility"},
{basegold: 311, type: "Potion", effect: "Regenerate Health", name: "Potion of Regeneration"},
{basegold: 311, type: "Potion", effect: "Regenerate Magicka", name: "Potion of Lasting Potency"},
{basegold: 311, type: "Potion", effect: "Regenerate Stamina", name: "Potion of Vigor"},
{basegold: 341, type: "Potion", effect: "Fortify Stamina", name: "Potion of Enhanced Stamina"}
]




/* 
	concoctions obj keys: {name, effects, dlc}
*/
const ingredients = [
  { available: true, name:"Abecean Longfin", effects: ["Weakness to Frost", "Fortify Sneak", "Weakness to Poison", "Fortify Restoration"] },  
  { available: true, name:"Ancestor Moth Wing", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "Dawnguard" },
  { available: true, name:"Ash Creep Cluster", effects: ["Damage Stamina", "Invisibility", "Resist Fire", "Fortify Destruction"], dlc: "Dragonborn" },
  { available: true, name:"Ash Hopper Jelly", effects: ["Restore Health", "Fortify Light Armor", "Resist Shock", "Weakness to Frost"], dlc: "Dragonborn" },
  { available: true, name:"Ashen Grass Pod", effects: ["Resist Fire", "Weakness to Shock", "Fortify Lockpicking", "Fortify Sneak"], dlc: "Dragonborn" },
  { available: true, name:"Bear Claws", effects: ["Restore Stamina", "Fortify Health", "Fortify One-Handed", "Damage Magicka Regen"] },
  { available: true, name:"Bee", effects: ["Restore Stamina", "Ravage Stamina", "Regenerate Stamina", "Weakness to Shock"] },
  { available: true, name:"Beehive Husk", effects: ["Resist Poison", "Fortify Light Armor", "Fortify Sneak", "Fortify Destruction"] },
  { available: true, name:"Berit's Ashes", effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"] },
  { available: true, name:"Bleeding Crown", effects: ["Weakness to Fire", "Fortify Block", "Weakness to Poison", "Resist Magic"] },
  { available: true, name:"Blisterwort", effects: ["Damage Stamina", "Frenzy", "Restore Health", "Fortify Smithing"] },
  { available: true, name:"Blue Butterfly Wing", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"] },
  { available: true, name:"Blue Dartwing", effects: ["Resist Shock", "Fortify Pickpocket", "Restore Health", "Fear"] },
  { available: true, name:"Blue Mountain Flower", effects: ["Restore Health", "Fortify Conjuration", "Fortify Health", "Damage Magicka Regen"] },
  { available: true, name:"Boar Tusk", effects: ["Fortify Stamina", "Fortify Health", "Fortify Block", "Frenzy"], dlc: "Dragonborn" },
  { available: true, name:"Bone Meal", effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"] },
  { available: true, name:"Briar Heart", effects: ["Restore Magicka", "Fortify Block", "Paralysis", "Fortify Magicka"] },
  { available: true, name:"Burnt Spriggan Wood", effects: ["Weakness to Fire", "Fortify Alteration", "Damage Magicka Regen", "Slow"], dlc: "Dragonborn" },
  { available: true, name:"Butterfly Wing", effects: ["Restore Health", "Fortify Barter", "Lingering Damage Stamina", "Damage Magicka"] },
  { available: true, name:"Canis Root", effects: ["Damage Stamina", "Fortify One-Handed", "Fortify Marksman", "Paralysis"] },
  { available: true, name:"Charred Skeever Hide", effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Restore Health"] },
  { available: true, name:"Chaurus Eggs", effects: ["Weakness to Poison", "Fortify Stamina", "Damage Magicka", "Invisibility"] },
  { available: true, name:"Chaurus Hunter Antennae", effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"], dlc: "Dawnguard" },
  { available: true, name:"Chicken's Egg", effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Stamina"] },
  { available: true, name:"Creep Cluster", effects: ["Restore Magicka", "Damage Stamina Regen", "Fortify Carry Weight", "Weakness to Magic"] },
  { available: true, name:"Crimson Nirnroot", effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"] },
  { available: true, name:"Cyrodilic Spadetail", effects: ["Damage Stamina", "Fortify Restoration", "Fear", "Ravage Health"] },
  { available: true, name:"Daedra Heart", effects: ["Restore Health", "Damage Stamina Regen", "Damage Magicka", "Fear"] },
  { available: true, name:"Deathbell", effects: ["Damage Health", "Ravage Stamina", "Slow", "Weakness to Poison"] },
  { available: true, name:"Dragon's Tongue", effects: ["Resist Fire", "Fortify Barter", "Fortify Illusion", "Fortify Two-Handed"] },
  { available: true, name:"Dwarven Oil", effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"] },
  { available: true, name:"Ectoplasm", effects: ["Restore Magicka", "Fortify Destruction", "Fortify Magicka", "Damage Health"] },
  { available: true, name:"Elves Ear", effects: ["Restore Magicka", "Fortify Marksman", "Weakness to Frost", "Resist Fire"] },
  { available: true, name:"Emperor Parasol Moss", effects: ["Damage Health", "Fortify Magicka", "Regenerate Health", "Fortify Two-Handed"], dlc: "Dragonborn" },
  { available: true, name:"Eye of Sabre Cat", effects: ["Restore Stamina", "Ravage Health", "Damage Magicka", "Restore Health"] },
  { available: true, name:"Falmer Ear", effects: ["Damage Health", "Frenzy", "Resist Poison", "Fortify Lockpicking"] },
  { available: true, name:"Felsaad Tern Feathers", effects: ["Restore Health", "Fortify Light Armor", "Cure Disease", "Resist Magic"], dlc: "Dragonborn" },
  { available: true, name:"Fine-Cut Void Salts", effects: ["Weakness to Shock", "Resist Magic", "Damage Health", "Fortify Magicka"] },
  { available: true, name:"Fire Salts", effects: ["Weakness to Frost", "Resist Fire", "Restore Magicka", "Regenerate Magicka"] },
  { available: true, name:"Fly Amanita", effects: ["Resist Fire", "Fortify Two-Handed", "Frenzy", "Regenerate Stamina"] },
  { available: true, name:"Frost Mirriam", effects: ["Resist Frost", "Fortify Sneak", "Ravage Magicka", "Damage Stamina Regen"] },
  { available: true, name:"Frost Salts", effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Fortify Conjuration"] },
  { available: true, name:"Garlic", effects: ["Resist Poison", "Fortify Stamina", "Regenerate Magicka", "Regenerate Health"] },
  { available: true, name:"Giant Lichen", effects: ["Weakness to Shock", "Ravage Health", "Weakness to Poison", "Restore Magicka"] },
  { available: true, name:"Giant's Toe", effects: ["Damage Stamina", "Fortify Health", "Fortify Carry Weight", "Damage Stamina Regen"] },
  { available: true, name:"Gleamblossom", effects: ["Resist Magic", "Fear", "Regenerate Health", "Paralysis"], dlc: "Dawnguard" },
  { available: true, name:"Glow Dust", effects: ["Damage Magicka", "Damage Magicka Regen", "Fortify Destruction", "Resist Shock"] },
  { available: true, name:"Glowing Mushroom", effects: ["Resist Shock", "Fortify Destruction", "Fortify Smithing", "Fortify Health"] },
  { available: true, name:"Grass Pod", effects: ["Resist Poison", "Ravage Magicka", "Fortify Alteration", "Restore Magicka"] },
  { available: true, name:"Hagraven Claw", effects: ["Resist Magic", "Lingering Damage Magicka", "Fortify Enchanting", "Fortify Barter"] },
  { available: true, name:"Hagraven Feathers", effects: ["Damage Magicka", "Fortify Conjuration", "Frenzy", "Weakness to Shock"] },
  { available: true, name:"Hanging Moss", effects: ["Damage Magicka", "Fortify Health", "Damage Magicka Regen", "Fortify One-Handed"] },
  { available: true, name:"Hawk Beak", effects: ["Restore Stamina", "Resist Frost", "Fortify Carry Weight", "Resist Shock"] },
  { available: true, name:"Hawk Feathers", effects: ["Cure Disease", "Fortify Light Armor", "Fortify One-Handed", "Fortify Sneak"] },
  { available: true, name:"Histcarp", effects: ["Restore Stamina", "Fortify Magicka", "Damage Stamina Regen", "Waterbreathing"] },
  { available: true, name:"Honeycomb", effects: ["Restore Stamina", "Fortify Block", "Fortify Light Armor", "Ravage Stamina"] },
  { available: true, name:"Human Flesh", effects: ["Damage Health", "Paralysis", "Restore Magicka", "Fortify Sneak"] },
  { available: true, name:"Human Heart", effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"] },
  { available: true, name:"Ice Wraith Teeth", effects: ["Weakness to Frost", "Fortify Heavy Armor", "Invisibility", "Weakness to Fire"] },
  { available: true, name:"Imp Stool", effects: ["Damage Health", "Lingering Damage Health", "Paralysis", "Restore Health"] },
  { available: true, name:"Jarrin Root", effects: ["Damage Health", "Damage Magicka", "Damage Stamina", "Damage Magicka Regen"] },
  { available: true, name:"Jazbay Grapes", effects: ["Weakness to Magic", "Fortify Magicka", "Regenerate Magicka", "Ravage Health"] },
  { available: true, name:"Juniper Berries", effects: ["Weakness to Fire", "Fortify Marksman", "Regenerate Health", "Damage Stamina Regen"] },
  { available: true, name:"Large Antlers", effects: ["Restore Stamina", "Fortify Stamina", "Slow", "Damage Stamina Regen"] },
  { available: true, name:"Lavender", effects: ["Resist Magic", "Fortify Stamina", "Ravage Magicka", "Fortify Conjuration"] },
  { available: true, name:"Luna Moth Wing", effects: ["Damage Magicka", "Fortify Light Armor", "Regenerate Health", "Invisibility"] },
  { available: true, name:"Moon Sugar", effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Regenerate Magicka"] },
  { available: true, name:"Mora Tapinella", effects: ["Restore Magicka", "Lingering Damage Health", "Regenerate Stamina", "Fortify Illusion"] },
  { available: true, name:"Mudcrab Chitin", effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Resist Fire"] },
  { available: true, name:"Namira's Rot", effects: ["Damage Magicka", "Fortify Lockpicking", "Fear", "Regenerate Health"] },
  { available: true, name:"Netch Jelly", effects: ["Paralysis", "Fortify Carry Weight", "Restore Stamina", "Fear"], dlc: "Dragonborn" },
  { available: true, name:"Nightshade", effects: ["Damage Health", "Damage Magicka Regen", "Lingering Damage Stamina", "Fortify Destruction"] },
  { available: true, name:"Nirnroot", effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"] },
  { available: true, name:"Nordic Barnacle", effects: ["Damage Magicka", "Waterbreathing", "Regenerate Health", "Fortify Pickpocket"] },
  { available: true, name:"Orange Dartwing", effects: ["Restore Stamina", "Ravage Magicka", "Fortify Pickpocket", "Lingering Damage Health"] },
  { available: true, name:"Pearl", effects: ["Restore Stamina", "Fortify Block", "Restore Magicka", "Resist Shock"] },
  { available: true, name:"Pine Thrush Egg", effects: ["Restore Stamina", "Fortify Lockpicking", "Weakness to Poison", "Resist Shock"] },
  { available: true, name:"Poison Bloom", effects: ["Damage Health", "Slow", "Fortify Carry Weight", "Fear"], dlc: "Dawnguard" },
  { available: true, name:"Powdered Mammoth Tusk", effects: ["Restore Stamina", "Fortify Sneak", "Weakness to Fire", "Fear"] },
  { available: true, name:"Purple Mountain Flower", effects: ["Restore Stamina", "Fortify Sneak", "Lingering Damage Magicka", "Resist Frost"] },
  { available: true, name:"Red Mountain Flower", effects: ["Restore Magicka", "Ravage Magicka", "Fortify Magicka", "Damage Health"] },
  { available: true, name:"River Betty", effects: ["Damage Health", "Fortify Alteration", "Slow", "Fortify Carry Weight"] },
  { available: true, name:"Rock Warbler Egg", effects: ["Restore Health", "Fortify One-Handed", "Damage Stamina", "Weakness to Magic"] },
  { available: true, name:"Sabre Cat Tooth", effects: ["Restore Stamina", "Fortify Heavy Armor", "Fortify Smithing", "Weakness to Poison"] },
  { available: true, name:"Salt Pile", effects: ["Weakness to Magic", "Fortify Restoration", "Slow", "Regenerate Magicka"] },
  { available: true, name:"Scaly Pholiota", effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Stamina", "Fortify Carry Weight"] },
  { available: true, name:"Scathecraw", effects: ["Ravage Health", "Ravage Stamina", "Ravage Magicka", "Lingering Damage Health"], dlc: "Dragonborn" },
  { available: true, name:"Silverside Perch", effects: ["Restore Stamina", "Damage Stamina Regen", "Ravage Health", "Resist Frost"] },
  { available: true, name:"Skeever Tail", effects: ["Damage Stamina Regen", "Ravage Health", "Damage Health", "Fortify Light Armor"] },
  { available: true, name:"Slaughterfish Egg", effects: ["Resist Poison", "Fortify Pickpocket", "Lingering Damage Health", "Fortify Stamina"] },
  { available: true, name:"Slaughterfish Scales", effects: ["Resist Frost", "Lingering Damage Health", "Fortify Heavy Armor", "Fortify Block"] },
  { available: true, name:"Small Antlers", effects: ["Weakness to Poison", "Fortify Restoration", "Lingering Damage Stamina", "Damage Health"] },
  { available: true, name:"Small Pearl", effects: ["Restore Stamina", "Fortify One-Handed", "Fortify Restoration", "Resist Frost"] },
  { available: true, name:"Snowberries", effects: ["Resist Fire", "Fortify Enchanting", "Resist Frost", "Resist Shock"] },
  { available: true, name:"Spawn Ash", effects: ["Ravage Stamina", "Resist Fire", "Fortify Enchanting", "Ravage Magicka"], dlc: "Dragonborn" },
  { available: true, name:"Spider Egg", effects: ["Damage Stamina", "Damage Magicka Regen", "Fortify Lockpicking", "Fortify Marksman"] },
  { available: true, name:"Spriggan Sap", effects: ["Damage Magicka Regen", "Fortify Enchanting", "Fortify Smithing", "Fortify Alteration"] },
  { available: true, name:"Swamp Fungal Pod", effects: ["Resist Shock", "Lingering Damage Magicka", "Paralysis", "Restore Health"] },
  { available: true, name:"Taproot", effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"] },
  { available: true, name:"Thistle Branch", effects: ["Resist Frost", "Ravage Stamina", "Resist Poison", "Fortify Heavy Armor"] },
  { available: true, name:"Torchbug Thorax", effects: ["Restore Stamina", "Lingering Damage Magicka", "Weakness to Magic", "Fortify Stamina"] },
  { available: true, name:"Trama Root", effects: ["Weakness to Shock", "Fortify Carry Weight", "Damage Magicka", "Slow"], dlc: "Dragonborn" },
  { available: true, name:"Troll Fat", effects: ["Resist Poison", "Fortify Two-Handed", "Frenzy", "Damage Health"] },
  { available: true, name:"Tundra Cotton", effects: ["Resist Magic", "Fortify Magicka", "Fortify Block", "Fortify Barter"] },
  { available: true, name:"Vampire Dust", effects: ["Invisibility", "Restore Magicka", "Regenerate Health", "Cure Disease"] },
  { available: true, name:"Void Salts", effects: ["Weakness to Shock", "Resist Magic", "Damage Health", "Fortify Magicka"] },
  { available: true, name:"Wheat", effects: ["Restore Health", "Fortify Health", "Damage Stamina Regen", "Lingering Damage Magicka"] },
  { available: true, name:"White Cap", effects: ["Weakness to Frost", "Fortify Heavy Armor", "Restore Magicka", "Ravage Magicka"] },
  { available: true, name:"Wisp Wrappings", effects: ["Restore Stamina", "Fortify Destruction", "Fortify Carry Weight", "Resist Magic"] },
  { available: true, name:"Yellow Mountain Flower", effects: ["Resist Poison", "Fortify Restoration", "Fortify Health", "Damage Stamina Regen"], dlc: "Dawnguard" }
];

function toggleAvailability(e) {
	console.log("Are we toggling?");
	let dex = ingredients.findIndex(i => i.name == this.innerHTML);
	ingredients[dex].available = !ingredients[dex].available;
	loadLists();
	return;
}

function populateIngredientsList(parentList, ingredientName) {
	let ingItem = document.createElement("li");
	ingItem.addEventListener("click", toggleAvailability);
	ingItem.innerHTML = ingredientName;
	parentList.appendChild(ingItem);
}

function toggleUnavailableList() {
	Array.from(document.getElementsByClassName("toggle-ingredients-list")).forEach(e => e.classList.toggle("d-none"));
}

function loadLists() {
	
	let allConcoctions = document.getElementsByClassName('all-concoctions')[0];
	let unavailableIngredients = document.getElementsByClassName("unavailable-ingredients")[0];
	
	allConcoctions.innerHTML = "";
	unavailableIngredients.innerHTML = "";

	_.orderBy(concoctions, ["basegold"], ["desc"]).forEach((c) => {
		let item = document.createElement("li");
		let potionName = document.createElement("h4");
		potionName.innerHTML = c.name;
		item.appendChild(potionName);
		
		let ingredientsList = document.createElement("ul");
		ingredientsList.classList.add("ingredients");
		
		let potionIngredients = _.filter(ingredients, function(i) { return i.effects.includes(c.effect) && i.available; });
		
		if (potionIngredients.length < 2 ) {
			item.classList.add("order-last");
		}
		
		potionIngredients.forEach((i) => populateIngredientsList(ingredientsList, i.name));
		
		item.appendChild(ingredientsList);
		
		allConcoctions.appendChild(item);
		
	});
	
	_.filter(ingredients, i => !i.available).forEach((ing) => populateIngredientsList(unavailableIngredients, ing.name));
		
}


loadLists();
document.querySelector(".toggle-ingredients-list-button").addEventListener("click", toggleUnavailableList);






