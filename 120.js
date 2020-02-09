const escola = [
    {nome: 'Turma M1',
    alunos : [
        {
            nome: 'Gustavo',
            nota : 8.1
        },
        {
            nome: 'Ana',
            nota: 9.3
        }
    ]},
    {nome: 'Turma M2',
    alunos:[
        {
            nome: 'Rebeca',
            nota: 8.9
        },
        {
            nome: 'Roberto',
            nota: 7.3
        }
    ]

}]

const eAgora = escola.reduce( (acumulador, turma) => acumulador.concat(turma.alunos), []).map(aluno => aluno.nota)
console.log(eAgora)


//Podemos primeiro juntar todos os alunos em um único array
//const resultado1 = escola.reduce( (acumulador, turma) => acumulador.concat(turma.alunos) , [])
//primeiro: acumulador = [], turma = {nome, alunos[alunos1 e aluno2]} [].concat(aluno1, aluno2)
//segunda acumulador = [aluno1, aluno2], turma = {nome, alunos[aluno3, aluno4]} 