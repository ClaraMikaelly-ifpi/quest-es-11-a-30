import{question} from 'readline-sync'
console.log(`.... Valor de M  ....`)

//Entrada
const km = Number(question('km:   '))

//Processamento
const m = km / 3.6

//Saída
console.log(` O Novo Valor de M é: ${m}`)