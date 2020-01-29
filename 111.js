const trecos = [1, 2, 3]

Array.prototype.meuMap = function(funcao){
    let novoArray = []
    for(let i = 0; i < this.length; i++){
        const valorAtual = this[i]
        const valorConvertido = funcao(valorAtual)
        novoArray.push(valorConvertido)
    }
    return novoArray
}

const arrayNovo = 
trecos.meuMap(texto => texto.length)