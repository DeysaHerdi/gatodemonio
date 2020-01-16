const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)


//Devar

const executaDuasFuncoes = function(funcaoA, funcaoB){
    funcaoB()
    funcaoA()
}

executaDuasFuncoes(function(){
    console.log('Invertida')
},function(){console.log('Ordem')})