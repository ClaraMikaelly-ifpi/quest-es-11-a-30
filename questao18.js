import{question} from 'readline-sync'
console.log(`.... Comprimento de uma Circunferência....`)

//Entrada
const PI = 3.14
const raio = Number(question('raio:    '))

//Processamento
const comprimento = 2 * PI * raio

//Saída
console.log(` O Comprimento da Circunferência é: ${comprimento}`)