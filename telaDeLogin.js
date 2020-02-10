const Usuario = require('./Usuario')

console.log(`não consigo ver o ${Usuario.usuario} e ${Usuario.senha}`)
console.log(`Mas consigo logar`)

Usuario.logar('ysa', 'rot')
Usuario.logar('admin', 'admin')
Usuario.logar('usuario', 'senha')
Usuario.logar('root', 'root')