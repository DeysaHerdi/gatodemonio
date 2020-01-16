let objetoCriadoDeFormaLiteral = {}
/******************************************/
let objetoCriadoComObject1 = new Object
let objetoCriadoComObject2 = new Object()
/******************************************/
function FuncaoConstrutora(parametro1, parametro2){
    this.parametro1 = parametro1
    this.parametro2 = parametro2
}
let objetoCriadoComFuncaoConstrutora = new FuncaoConstrutora('A','B')
/******************************************/
class Classe{
    constructor(parametro1, parametro2){
        this.parametro1 = parametro1
        this.parametro2 = parametro2
    }
}
let objetoCriadoComClasse = new Classe('A','B')
/******************************************/
function funcaoFactory(){
    let objeto = {}
    return objeto
}
let objetoCriadoComFactory = funcaoFactory()

//Função construtora não funciona com arrow function

const FuncaoConstrutora = (parametro1, parametro2) => {
    this.parametro1 = parametro1
    this.parametro2 = parametro2
}
let objetoCriadoComFuncaoConstrutora = new FuncaoConstrutora('A', 'B')