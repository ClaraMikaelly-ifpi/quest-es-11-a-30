import{question} from 'readline-sync'
console.log(' .... salario com o aumento de 25%....')

//Entrada
var salario_atual = Number(question('salario atual:     '))

//Processamento
var novo_salario = salario_atual * 1.25

//Saída
console.log(` O novo salario sera de : ${novo_salario}`)