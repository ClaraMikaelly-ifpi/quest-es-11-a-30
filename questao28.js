import{question} from 'readline-sync'
console.log(`.... Quantas horas equivalem em semanas, dias e horas ....`)

//Entrada
const horas = Number(question('horas:  '))

//Processamento
const semanas = Math.floor(horas / 168)
const dias = Math.floor(horas / 24)
const horas_2 = horas % 60

//Saída
console.log(` As horas equivale a: ${semanas} semana(s), ${dias} dia(s) e ${horas_2} hora(s).`)