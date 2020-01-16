function Pessoa(nome){D
    this.nome = nome
    this.idade = 0
    this.fazAniversario = () => this.idade++
    this.falarIdade = () => console.log(`${this.nome} diz: "Eu tenho ${this.idade} aninhos"`)
}

let ysa = new Pessoa('Ysa')
ysa.fazAniversario()
ysa.fazAniversario()
ysa.fazAniversario()
ysa.falarIdade()

let taillos = new Pessoa('Taillos')
taillos.fazAniversario()
taillos.falarIdade()