import{question} from 'readline-sync'
console.log(`.... Equivalente a Grama ....`)

//Entrada
const quilograma = Number(question('quilograma:    '))

//Processamento
const grama = quilograma * 1000

//Saída
console.log(` O Novo Valor de Grama é: ${grama}`)