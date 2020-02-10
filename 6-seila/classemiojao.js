class fazerMiojo{
    constructor(miojo, saborDoMiojo){
    this.miojo = miojo
    this.saborDoMiojo = saborDoMiojo
}
comerMiojo(miojo){
    const macarraoInstantaneo = this.miojo
    if (macarraoInstantaneo >= 3){
        console.log(`Que miojo gostoso, neh Devar s2`)
    } else {
        console.log(`Preciso de mais miojo =/`)
    }
}
temGosto(saborDoMiojo){
    console.log(`Esse miojo é de ${saborDoMiojo}`)
}
}
const horaDaComida = new fazerMiojo
horaDaComida.comerMiojo(1)
const qualSabor = new fazerMiojo
qualSabor.temGosto('Galinha')