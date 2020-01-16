let objetoVazio = {}
let objetoComNome = {nome: 'Palavão'}
let objetoComSigno = {
    nome: 'Beyonce',
    signo: 'Cancer'
}
objetoComSigno.status = 'não é artista'
console.log(objetoComSigno.nome, objetoComSigno.status)

objetoComNome['Bad dragon'] = 'Arma..'
console.log(`${objetoComNome['nome']} é a ${objetoComNome['Bad dragon']}`)
