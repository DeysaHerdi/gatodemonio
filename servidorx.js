const app = require('express')()
const bodyParser = require('body-parser')
const bancoDeDadosx = require('./bancoDeDadosx')


app.use(bodyParser.json()) 

const getProdutos = (req, res) => {
    const produtos = bancoDeDadosx.pegarTodosProdutos()
    res.send(produtos)
}
const getProdutoPeloId = (req, res) => {
    const id = req.params.id;
    const produto = bancoDeDadosx.pegarProdutoComOId(id)
    res.send(produto)
}
const deletarProdutoPeloId = (req, res) => {
    const id = req.params.id;
    bancoDeDadosx.deletarProdutoPeloId(id)
    res.send('Produto deletado com sucesso')
}
const salvarProduto = (req, res) => {
    const produto = req.body
    const produtoSalvo = bancoDeDadosx.salvarProduto(produto)
    res.send(produtoSalvo)
}
app.get('/produtos', getProdutos)
app.get('/produtos/:id', getProdutoPeloId)
app.delete('/produtos/:id', deletarProdutoPeloId)
app.post('/produtos', salvarProduto)
app.listen(3004, () => console.log('rodando'))