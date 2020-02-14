let riotPoints = 0;

const comprarRP = (totalComprado) => riotPoints += totalComprado

const gastarRP = (gasto) => {
    if(gasto > riotPoints) console.log('Por favor adicione mais créditos')
    else riotPoints += gasto
}
 module.exports = {
     comprarRP,
     gastarRP
 }
 