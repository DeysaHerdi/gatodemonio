// funcao construtora
function Pessoa() {
    this.nome = 'Devar'
    this.sobrenome = 'Emo'
}
 let pessoa = new Pessoa()
 console.log(pessoa)
 //fim da construtora


 


 const pessoas = []
const criarPessoa = (nome, sobrenome) => {
    let pessoa ={
        nome,
        sobrenome,
        falar: () => console.log(`Meu nome é ${nome} ${sobrenome}`)
    }
    return pessoa
}
let ysarot = criarPessoa("Ysa", "Rot")
ysarot.falar()
