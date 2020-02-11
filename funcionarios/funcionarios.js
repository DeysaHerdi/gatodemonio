const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const funcionariosChineses = funcionarios.filter(funcionario => funcionario.pais == 'China')
    
    const funcionariasMulheres = funcionarios.filter(funcionario => funcionario.genero == 'F')

    console.log(`São chineses o total de ${funcionariosChineses.length}`)
})