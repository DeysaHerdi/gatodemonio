const galinha = {
    nome:'Ysa',
    falar(){
        let conversa =""
        for(let i = 0; i < 1000; i++){
        conversa += 'pó'
    }
    console.log(`oi sou uma ${this.nome}, vim dizer ${conversa}`)
    }
}

galinha.falar()
const falar = galinha.falar.bind(galinha)
falar()