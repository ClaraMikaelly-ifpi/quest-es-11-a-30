import{question} from 'readline-sync'
console.log(`.... Quantos Meses Equivalem em Anos e Meses ....`)

//Entrada
const meses = Number(question('Meses:  '))

//Processamento
const anos = Math.floor(meses / 12)
const meses_2 = meses % 12

//Saída
console.log(` Os meses equivalem a: ${anos} Ano(s), ${meses_2} Mes(s).`)