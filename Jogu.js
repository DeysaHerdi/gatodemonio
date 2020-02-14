const Pokemon = require('./Pokemon')
const BatalhaPokemon = require('./BatalhaPokemon')

let charizard = new Pokemon('charizard', 'fogo')
let squirtle = new Pokemon('squirtle', 'agua')
let Devar = new Blacklist('Devar', 'Trevas','')

BatalhaPokemon.luta(charizard, squirtle)