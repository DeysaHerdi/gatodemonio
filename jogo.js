const Loja = require('./Loja')
const Campeao = require('./Campeao')

const Teste = require('./Campeao')

Campeao.quantosCampeoes();
Campeao.removerDoLol('Braum')
Campeao.removerDoLol('Taric')
Campeao.quantosCampeoes();
Teste.quantosCampeoes();

Loja.comprarRP(10000)
Loja.gastarRP(2000000)