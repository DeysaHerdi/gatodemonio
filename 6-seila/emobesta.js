const animal = {respira: true}
const ave = {voa: true,numeroDeAsas: 2}
const galinha = {voa: false,botaOvo: true}
const ysa = {nome: 'Ysa', oi(){
    console.log(`Oi, eu sou a ${this.nome}, tenho ${this.numeroDeAsas} asas
    Consigo respirar? ${this.respira}
    Consigo botar ovo?${this.botaOvo}
    Consigo voar? ${this.voa} =( Poxa vida, se eu fosse apenas uma ave e não uma galinha
    eu conseguiria voar`)
}}
ave.__proto__ = animal
galinha.__proto__ = ave
ysa.__proto__ = galinha

ysa.oi()