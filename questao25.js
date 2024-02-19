import{question} from 'readline-sync'
console.log(`.... quantos metros corresponde a km e m ....`)

//Entrada
const valor_metros = Number(question('Quantos metros para converter?:   '))

//Processamento
const km = Math.floor(valor_metros / 1000)
const novo_valor_metros = (valor_metros % 1000)

//Saída
console.log(` O valor em KM é: ${km} e metros é: ${novo_valor_metros}`)