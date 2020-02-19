const app = require('express')()

let contador = 0;

const getContador = (req, res) =>{
    res.send(`O contador vale ${contador}`)
}