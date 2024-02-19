import{question} from 'readline-sync'
console.log(`.... Nova Temperatura em Fahrenheit .... `)

//Entrada
const celsius = Number(question('celsius:   '))

//Processamento
const Fahrenheit = (9 * celsius + 160) / 5

//Saída
console.log(` a temperatura de celsius para fahrenheit é: ${Fahrenheit}`)