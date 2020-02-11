const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const funcionariasMulheres = funcionarios.filter(funcionario => funcionario.genero == 'F')
    const funcionariosChineses = funcionarios.filter(funcionario => funcionario.pais == 'China')
    
    const salario =
    
    console.log(`São chineses o total de ${funcionariosChineses.length} e ${funcionariasMulheres.length} são mulheres!`)
})