import{question} from 'readline-sync'
console.log(`.... Quantos segundos equivalem a hora, minutos e segundos  ....`)

//Entrada
const segundos = Number(question('Segundos:   '))

//Processamento
const hora = Math.floor(segundos / 3600)
const minutos = Math.floor(segundos / 60)
const segundos_2 = segundos % 60


//Saída
console.log(` O resultado equivale a: ${hora} hora(s), ${minutos} minuto(s) e ${segundos_2} segundo(s)`)