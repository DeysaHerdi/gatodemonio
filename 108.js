
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.paraCada = function(funcao){
    for(let i = 0; i < this.length; i++){
        funcao(this[i], i)
    }
}
aprovados.paraCada( (valor, posicao) => console.log(`posicao:${posicao} - valor:${valor}`) )