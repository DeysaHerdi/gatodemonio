function desafiobizz(){
    if(arguments.length == 4) console.log(arguments[2])
}

desafiobizz(1)
desafiobizz({}, 2)
desafiobizz(1, 2, ['é realmente estranho'], desafiobizz)