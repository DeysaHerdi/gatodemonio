function fabricaDeBebe(nome, mae, pai){
    let bebe = {}
    bebe.mae = mae
    bebe.pai = pai
    bebe.nome = nome
    bebe.idade = new Date() 
    bebe.chorar = () => console.log("inferno de beyonce")
    bebe.descricao = () => {
        console.log(`O bebe de nome ${bebe.nome}, 
        nasceu fruto do amor de ${bebe.pai.nome} e ${bebe.mae.nome} 
        na data ${bebe.idade}`)
    }
    return bebe
}

let lysk = {nome:"Lysk"}
let taillos = {nome:"Taillos"}
let lila = fabricaDeBebe("Lila", lysk, taillos)
lila.chorar()
lila.descricao()