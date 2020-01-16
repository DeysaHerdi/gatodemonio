const pessoas = ['aaron', 'dehzitto', 
    'baboo', 'lanael', 'rodrigues', 
    'ysa', 'lysky', 'fireball',
    'devar']

const amigosSorteados = []

pessoas.forEach(sortearAmigoSecreto)

function sortearAmigoSecreto(pessoa){
    while(true){
        let pessoaSorteada = pessoas[Math.floor(Math.random()*pessoas.length)]
        let ehAMesmaPessoa = pessoaSorteada == pessoa
        let jaFoiSorteada = amigosSorteados.includes(pessoaSorteada)
        if(ehAMesmaPessoa || jaFoiSorteada) {
            //tentando outra vez
            continue
        } else {
            amigosSorteados.push(pessoaSorteada)
            let frase = ${pessoa} terá que dar presentes para ${pessoaSorteada}
            console.log(frase)
            break
        }
    }

}
