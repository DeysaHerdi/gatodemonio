let Emovar = {
    nome: 'Devar',
    corFavorita: 'Amarelo',
    adoraComer: 'Gelo',
    estilo: 'Emo',

    chamarVerdade(){
        console.log(`Eu ${this.nome} sou ${this.estilo}`)
    },
    comidas(){
        console.log('Emovar ama um gelinho s2')
    },
    melhorCor(){
        console.log(`${this.corFavorita} é a melhor cor de todas`)
    }
}

Emovar.chamarVerdade()
Emovar.comidas()
Emovar.melhorCor()