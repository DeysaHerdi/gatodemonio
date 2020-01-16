const ekko = {
    nome:'Ekko',
    falar(){
        let texto =`Meu nome é ${this.nome}`
        console.log(texto)
    }
}

const soraka = {
    //nome: 'Soraka'
}

const falarDaSoraka = ekko.falar.bind(soraka)
falarDaSoraka()