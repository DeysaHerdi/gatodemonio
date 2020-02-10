let texto = "{}"
let objeto = JSON.parse(texto)
objeto.idade = 0
objeto.gritar = () => console.log("Eu sou um objeto de idade " + this.idade)
//objeto = JSON.stringify(objeto)
console.log(objeto.idade)
objeto.gritar()