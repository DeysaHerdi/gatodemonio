const objetoMae = {
    chaveMae1 : 1,
    chaveMae2 : 2,
    chaveMae3 : 3,
    chaveMae4 : 4,
}
const objetoFilho ={
    chaveFilha1: 1
}
Object.setPrototypeOf(objetoFilho, objetoMae)
for(let luz in objetoFilho){
    console.log(`Possuo a chave: ${luz}`)
}