const fs = require('fs')

const caminhoDoArquivo = `${__dirname}/aquivo.x.txt`)
fs.readFile(caminhoDoArquivo, 'utf-8', (erro,conteudo)=>{
    if(erro){
        console.log('')
}

}