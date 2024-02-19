import{question} from 'readline-sync'
console.log(`.... Temperatura em Celsius ....`)

//Entrada
const fahrenheit = Number(question('fahrenheit:    '))

//Processamento
const celsius = (5 * fahrenheit - 160) / 9

//Saída
console.log(` A Nova Temperatura em Celsius é: ${celsius} `)