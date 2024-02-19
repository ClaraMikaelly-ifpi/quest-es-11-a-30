import { question } from 'readline-sync'
console.log(`.... 70% do valor em real ....`)

//Entrada
var valor = Number(question('valor:    '))

//Processamento
var novo_valor = valor * 70 / 100

//Saída
console.log(` 70 % do valor ${valor} sera de: ${novo_valor}`)