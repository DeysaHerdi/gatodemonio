let resultado1 = ehUmNumeroPar(2)
console.log(resultado1)
function ehUmNumeroPar(numero){
    let numeroPar = numero % 2 == 0
    return numeroPar
}

let resultado2 = ehUmNumeroImpar(3)
console.log(resultado2)
    function ehUmNumeroImpar(numero){
    let numeroImpar = numero % 2 != 0
    return numeroImpar
}

const imprimirOsValoresDoArray = function imprimirOsValoresDoArray(arrey){
    arrey.forEach(valor => console.log(valor))
}
imprimirOsValoresDoArray([1,2,3,4,5,6,'ysa'])
