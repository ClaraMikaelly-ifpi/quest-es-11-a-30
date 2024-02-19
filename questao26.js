import{question} from 'readline-sync'
console.log(`.... Quantos dias equivalem a semanas e dias ....`)

//Entrada
const dias = Number(question('Dias:   '))

//Processamento
const semanas = Math.floor(dias / 7)
const dias_2 = dias % 7 

//Saída
console.log(` Os dias equivalem ${semanas} semana(s) e ${dias_2} dia(s)`)