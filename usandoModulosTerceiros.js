const _ = require('lodash')
//setInterval(() => console.log(_.random(10, 60)), 2000)

const cep = require('cep-promise')
//cep(59064900).then(valor => console.log(valor))

const postalCodes = require('postal-codes-js');
const sigla = 'USA'
const codigoPostal = '91746-2302'
postalCodes.validate(sigla, codigoPostal)
console.log(vale => console.log(vale))