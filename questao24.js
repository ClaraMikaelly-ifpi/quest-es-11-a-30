import { question } from 'readline-sync'
console.log(`.... Converter M para CM .... `)

//Entrada
const metro = Number(question('metro:    '))

//Processamento
const centimetros = metro * 100

//Saída
console.log(` O novo valor para centimetros é: ${centimetros}`)