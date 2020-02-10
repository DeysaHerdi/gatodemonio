const produtos = []
const produto1 = {
    nome:'Caixa de papelão',
    preco: 2000
}
const produto2 = {
    nome:'Caixa de ouro',
    preco:100
}
const produto3 = {
    nome:'Ovo de galinha',
    preco:5000
}
produtos.push(produto1, produto2, produto3)

const nomesDosProdutos = produtos.map(produto => produto.nome)
const precosDosProdutos = produtos.map(produto => produto.preco)
const descricoesDosProdutos = produtos.map(produto => {
    return `O produto ${produto.nome} vale ao todo ${produto.preco}R$`
})
console.log(nomesDosProdutos)
console.log(precosDosProdutos)
console.log(descricoesDosProdutos)