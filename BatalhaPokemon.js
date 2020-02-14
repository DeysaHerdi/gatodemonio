const luta = (pokemon1, pokemon2) => {
    pokemon1.atacar(pokemon2)
    pokemon2.atacar(pokemon1)
}
const luta2 = (Blaclist1,Blacklist2) => {
    Blaclist1.atacar(Blacklist2)
    Blacklist2.atacar(Blaclist1)
}
//aqui eu preferi voltar um objeto
module.exports = {
    luta
    luta2
}