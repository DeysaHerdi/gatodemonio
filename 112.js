const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4919, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}

]

console.log(produtos.filter(function(p){
    return 
}))

const caro = produto => produtos.preco >= 500
const fragil = produto => produtos.fragil

console.log(produtos.filter(caro))