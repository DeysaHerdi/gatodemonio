let objeto = {}

let variavel1 = objeto
let variavel2 = objeto

objeto.nome = 'teste'
console.log(variavel1.nome)
console.log(variavel2.nome)

//diferente com numeros

let numero = 1

let variavelA = numero
let variavelB = numero

numero = 2

console.log(variavelA)
console.log(variavelB)