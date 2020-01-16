const textos = ['Ysa', 'Noob', 'Galinha', 'Criança', 'Pequena' ]

function eAgora(a,b,c) {
    let frase = `${b}:${c[0]} é ${a}`
    console.log(frase)
}
 textos.forEach(eAgora)



 // Filter

 const numeros = []
 for(let i =1; i <= 10000; i++){
     numeros.push(i)
 }
 const novosNumeros = numeros.filter(numero => numero % 1000 == 0)
 novosNumeros.forEach(valor => console.log(valor))