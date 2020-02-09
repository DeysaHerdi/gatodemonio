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