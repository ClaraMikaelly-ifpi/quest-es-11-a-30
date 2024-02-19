import{question} from 'readline-sync'
console.log(`.... Numero e o seu Inverso ....`)
//Entrada
var numero = Number(question('numero de tres digitos:  '))

//Processamento
var centenas = Math.floor(numero / 100)
var resto = numero % 100

var dezenas = Math.floor(resto / 10)
var unidades = resto % 10

var inverso = unidades*100 + dezenas*10 + centenas
//Saída
console.log(` o numero inteiro: ${numero}`)
console.log(` o numero inverso: ${inverso}`)