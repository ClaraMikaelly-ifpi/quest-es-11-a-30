import { question } from 'readline-sync'
console.log(`.... A área do triâgulo....`)
//Entrada
var base = Number(question('base:   '))
var altura = Number(question('altura:   '))

//Processamento
var area_total = (base * altura) / 2

//Saída
console.log(` A área do triâgulo é: ${area_total}`)