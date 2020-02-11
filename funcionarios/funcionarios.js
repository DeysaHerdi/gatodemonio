const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data

    const funcionariosChineses = funcionarios.filter(funcionarios.pais == 'China')
    console.log(`São chineses o total de ${funcionariosChineses.length}`)
})