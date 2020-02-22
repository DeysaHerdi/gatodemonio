const schedule = require('node-schedule')
const regra = new schedule.RecurrenceRule()

regra.diaDaSemana = [0]
regra.hora = 0
regra.minuto = 1
schedule.scheduleJob(regra, function(){
    console.log("Hora de comer Devar!!!")
})