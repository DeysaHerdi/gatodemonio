let jogo = {}
jogo.nome = 'LOL'
jogo.melhorTeemo = 'Ysa'
jogo.piorMissFortune = 'Devar'
jogo.gasteiDinehiroDemais = true
function oQueEuMereco(){
    if(this.gasteiDinehiroDemais){
        console.log('Merece um soco na cara')
    }
}
oQueEuMereco.call(jogo)
oQueEuMereco.apply(jogo)

function imprimiNomeE(descricao){
    console.log(`${this.nome} ${descricao}`)
}
imprimiNomeE.call(jogo, 'Merda')
imprimiNomeE.apply(jogo, ['Merda'])