import { question } from 'readline-sync'
console.log(`.... a área do retângulo....`)

//Entrada
var base = Number(question('base:    '))
var altura = Number(question('altura:    '))

//Processamento
var area = base * altura

//Saída
console.log(` a área do Retângulo é: ${area}`)