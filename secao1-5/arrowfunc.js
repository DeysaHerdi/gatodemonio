let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return esta implicito
console.log(dobro(Math.PI))


let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
//ola = _ => 'Olá2' // tem parametro
console.log(ola())

//Devar

let outraFuncaoBizarra = _ => 2
console.log(outraFuncaoBizarra(300))
