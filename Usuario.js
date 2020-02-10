let usuario = 'admin'
let senha = 'admin'
let numeroDeTentaivas = 0

this.logar = (login, passaword) =>{
    if(numeroDeTentaivas == 3){
        console.log('Você não pode logar mais no sistema')
        return;
    }
    if(login == usuario && passaword == senha){
        console.log('Parabens voce conseguiu logar no sietama')
        }else{
            console.log('Usuario e senha invalidos')
        }
}