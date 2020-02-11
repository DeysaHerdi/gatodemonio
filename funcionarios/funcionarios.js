const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const fMulheres = funcionarios.filter(funcionario => funcionario.genero == 'F')
    const fChineses = funcionarios.filter(funcionario => funcionario.pais == 'China')
    const salarios = funcionarios.map(funcionario => funcionario.salario)
    
    
    console.log(`São chineses o total de ${fChineses.length} e ${fMulheres.length} são mulheres!`)
})