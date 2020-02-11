const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const fMulheres = funcionarios.filter(funcionario => funcionario.genero == 'F')
const fChineses = funcionarios.filter(funcionario => funcionario.pais == 'China')
    
axios.get(url).then(response => {
    const funcionarios = response.data    

})