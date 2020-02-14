const Pokemon = require('./Pokemon')
const BatalhaPokemon = require('./BatalhaPokemon')
const Blacklist = require('./Pokemon')

let charizard = new Pokemon('charizard', 'fogo')
let squirtle = new Pokemon('squirtle', 'agua')
let Devar = new Blacklist('Devar', 'Trevas','Para de mastigar Aaron')
let Aaron = new Blacklist('Aaron', 'Loucuras','Amigãoooo!')

BatalhaPokemon.luta2(Devar, Aaron)
BatalhaPokemon.luta(charizard, squirtle)