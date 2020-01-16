const brasil = {
    presidente: 'Bolsonaro',
    situacaoFinanceira: 'inexistente',
    capital: {
        nome: 'Brasilia',
        clima: 'Seco pra caralho'
    },
    indiceDeTrevosidade: -6
}
//Exemplo parecido com o do professor, ele fez o entries, fiz com os keys
const chavesDoObjetoBrasil = Object.keys(brasil)
chavesDoObjetoBrasil.forEach(chave => {
    const valor = brasil[chave] //lembra que pode usar o texto para acessar?
    console.log(`Para a chave:${chave} temos o valor:${valor}`)
})
//Exemplo igual o do professor, agora com entries
const entriesDoObjetoBrasil = Object.entries(brasil)
entriesDoObjetoBrasil.forEach(chaveValor => {
    const chave = chaveValor[0]
    const valor = chaveValor[1]
    console.log(`Chave:${chave} e Valor:${valor}`)
})

/*ex de funçao em keys e values

const baboo = {
    vitima :'taillos',
    espumar(){
        console.log(`caralho, não avança sozinho ${this.vitima}`)
    }
}
Object.keys(baboo).forEach(key => console.log(key))
Object.values(baboo).forEach(value => console.log(value)) */

