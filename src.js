const app = require('express')()

let contador = 0;

const getContador = (req, res) => {
    res.send(`O contador vale ${contador}`)
}

const atualizarContador = (req, res) => {
    contador++
    res.send(`O contador foi atualizado!`)
}

const resetaContador = (req, res) => {
    contador = 0

}