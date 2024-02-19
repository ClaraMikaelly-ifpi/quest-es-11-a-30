import{question} from 'readline-sync'
console.log(`.... Quantos Minutos equivalem a Dias, Horas e Minutos ....`)

//Entrada
const minutos = Number(question('Minutos:   '))

//Processamento
const dias = Math.floor(minutos / 1440)
const horas = Math.floor(minutos / 60)
const minutos_2 = minutos % 60

//Saída
console.log(` Os minutos equivalem a: ${dias} Dia(s), ${horas} Hora(s) e ${minutos_2} Minuto(s).`)