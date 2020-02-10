// exemplo do video
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

// exemplo do devarino

class GrupoDoLol{
    constructor(lider){
        this.lider = lider
        this.vagas = []
    }
    invitarPessoaParaOGrupo(pessoa){
        const numeroDePessoasInvitadas = this.vagas.length
        if(numeroDePessoasInvitadas == 4){
            console.log(`${this.lider} diz: Já está cheio, desculpa ${pessoa}!!!`) //perceba que usamos o this quando é um atributo do objeto
            //se for uma variável que você criou dentro do método como o numeroDePessoasInvitadas ou um parâmetro do método como pessoa
            //nós não utilizamos o this, pois ele não foi criado dentro do objeto. Mas sim no método.
        } else {
            this.vagas.push(pessoa)
        }
    }
    aceitarPartida(){ 
        this.vagas.forEach(pessoa => console.log(`${this.lider} diz: ${pessoa} aceita logo a partida, caralho!!!`))
    }
}

const grupoDaYsa = new GrupoDoLol('Ysa')
grupoDaYsa.invitarPessoaParaOGrupo('Taillos')
grupoDaYsa.invitarPessoaParaOGrupo('Aaron')
grupoDaYsa.invitarPessoaParaOGrupo('Desdehzito')
grupoDaYsa.invitarPessoaParaOGrupo('Baboo')
grupoDaYsa.invitarPessoaParaOGrupo('Lanael')
grupoDaYsa.invitarPessoaParaOGrupo('Devar')
grupoDaYsa.invitarPessoaParaOGrupo('Bibi')
console.log("------")
grupoDaYsa.aceitarPartida()

class Guilda{
    constructor(lider){
        this.lider = lider
        this.membros = []
        this.dataDeCriacao = new Date()
    }
    invitar(...membros){
        this.membros.push(...membros) //você pode usar o push dessa forma 
        //para adicionar várias pessoas ao mesmo tempo, facilitando um pouco o código
        //lembra do exemplo do professor que ele fez? lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
        //pois é, bastaria um this.lancamentos.push(lancamentos)
        //mas mesmo que um código seja mais difícil, tente entender o que ele faz, é bom para treinar!

        //lembre-se também que this.membros são os membros da classe, e apenas membros é o nome da variável, elas podem ter o mesmo nome
        //o javascript não se confunde devido ao this
    }
}

const guilda = new Guilda('Aphelios')
guilda.invitar('pessoa aleatória', 'pessoa infeliz', 'pessoa feliz', 'pessoa radiante', 'pessoa contagiante', 'pessoa contagiosa')
console.log(guilda.membros)