const ysa = {
    _nome: 'Ysa',
    _sobrenome: 'Rot',
    get nome(){
        return this._nome + ' ' + this._sobrenome
    },
    set nome(novoNome){
        console.log('O nome da ysarot não pode ser alterado')
    }
}

ysa._nome ='Aaron'
ysa._sobrenome = 'Vaca'
console.log(ysa.nome)

