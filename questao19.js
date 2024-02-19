import{question} from 'readline-sync'
console.log(`.... Volume da Esfera ....`)

//Entrada
const PI = 3.14
const raio = Number(question('raio:   '))

//Processamento
const volume = (4 * PI * raio**3) / 3

//Saída
console.log(` O Volume da Esfera é: ${volume}`)