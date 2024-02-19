import { question } from 'readline-sync'
console.log(`.... A área do quadrado....`)

//Entrada
var lado1 = Number(question('lado1:   '))
var lado2 = Number(question('lado2:   '))

//Processamento
var area = lado1 * lado2

//Saída
console.log(` A area do quadrado é: ${area}`)