function ola(){
    return "Ola"
}

let ysa = () => console.log('Ysa')

/*     function(variavel1, variavel2){
        console.log(variavel1())
        variavel2()
    } */

    function funcaoestranha(variavel1, variavel2){
        console.log(variavel1())
        variavel2()
    }
funcaoestranha(ola, ysa)


