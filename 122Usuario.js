let usuario = 'admin'
let senha = 'admin'

this.logar = (login, passaword) =>{
    if(login == usuario && passaword == senha){
        console.log('Parabens voce conseguiu logar no sietama')
        }else{
            console.log('Usuario e senha invalidos')
        }
}