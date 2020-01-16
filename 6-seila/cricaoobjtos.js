const nome = 'javascript'
const aulaAtual = 91
const moduloAtual = 'objetos'
const nomeDaAluna = 'Ysa'
const curso = {
    nome,
    aulaAtual,
    moduloAtual: moduloAtual,
    aluna: nomeDaAluna
}
console.log(curso)

//exercicio

const lol = 'league of legends'
const jogarCom = campeao => console.log(`O campeão ${campeao} foi escolhido.`)

const jogo = {
    nome: lol,
    jogarCom
}

jogo.jogarCom('Ivern')
console.log(jogo.lol)
console.log(jogo.nome)

//2

const texto = 'oiEuSouUmTextoDeMerda'
const valor = 'prazerTextoMerda'
const objeto = {}
objeto[texto] = valor

console.log(objeto.oiEuSouUmTextoDeMerda)
console.log(objeto.texto)