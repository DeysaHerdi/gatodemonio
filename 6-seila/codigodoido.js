const arrayConstante = []

const objetoSuperConstante = {}
objetoSuperConstante.array = arrayConstante

objetoSuperConstante.array.push(1)

let outroArray = arrayConstante
outroArray.push(2)

console.log(arrayConstante)


const lolifan = {nome:'Aaron'}
const jogoRuim = {nome:'Grandblue'}
lolifan.jogando = jogoRuim

Object.freeze(lolifan)
lolifan.nome = 'Lanael'
lolifan.jogando.nome = 'LoL'
console.log(lolifan)