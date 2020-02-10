const _ = require('lodash')
//setInterval(() => console.log(_.random(10, 60)), 2000)

const cep = require('cep-promise')
cep(59064900).then(valor => console.log(valor))