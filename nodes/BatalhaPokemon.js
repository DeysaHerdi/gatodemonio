const luta = (pokemon1, pokemon2) => {
    pokemon1.atacar(pokemon2)
    pokemon2.atacar(pokemon1)
}
const luta2 = (blaclist1,blacklist2) => {
    blaclist1.atacar2(blacklist2)
    blacklist2.atacar2(blaclist1)
}
//aqui eu preferi voltar um objeto
module.exports = {
    luta,
    luta2
}