let campeoes = require('lol-champions')

const removerDoLol = campeaoParaRemover => {
    campeoes = campeoes.filter(campeao => campeao.name != campeaoParaRemover)
    console.log(`----- removi o ${campeaoParaRemover} do lol graças a deus -----`)
}

const quantosCampeoes = () => console.log(`Lol possi ${campeoes.length}`)

module.exports = {
    removerDoLol,
    quantosCampeoes
}