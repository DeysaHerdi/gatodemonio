const fs = require('fs')

const caminhoDoArquivo = `${__dirname}/aquivo.x.txt`
fs.readFile(caminhoDoArquivo, 'utf-8', (erro,conteudo)=>{
    if(erro){
        console.log(`erro ao ler arquivo, erro:
        ${erro}`)
} else{
    console.log('Conteudo do arquivo é:')
    console.log(conteudo)
    }
})
const conteudo = require('./arquivo.x.json')
console.log(`${conteudo.destinatario} !!! ${conteudo.mensage}`)