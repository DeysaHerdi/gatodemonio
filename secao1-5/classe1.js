class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

function Estoque(produto, quantidade) {
    this.produto = produto
    this.quantidade = quantidade
    this.valorNoEstoque = () => console.log(`Temos em estoque ${quantidade * produto.preco}R$`)
}

let racaoDeGalinha = new Produto('Ração de Galinha', 2.27)
let estoqueDeRacao = new Estoque(racaoDeGalinha, 301)

estoqueDeRacao.valorNoEstoque()

function criaSupermercado(){
    let supermercado = {}
    supermercado.estoques = []
    supermercado.oQueTenhoEmEstoque = function(){
        if(supermercado.estoques.length == 0) console.log('Tenho porra nenhuma em estoque')
        else supermercado.estoques.forEach(estoque => {
            console.log(`Possuo um estoque de ${estoque.produto.nome} com ${estoque.quantidade} unidades`)
        })
    }
    return supermercado
}

let supermercado = criaSupermercado()
supermercado.oQueTenhoEmEstoque()
supermercado.estoques.push(estoqueDeRacao)
supermercado.oQueTenhoEmEstoque()
