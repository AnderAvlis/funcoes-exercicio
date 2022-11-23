// Parte A

// function soma(num, num2){
// const somando = num + num2

// return `A soma dos valores é ${somando}`
// }

// console.log(soma(2, 2))

//Parte B

// function comparacao(num01, num02 ){
// const compara = num01 >= num02

// return `O  numero ${num01} é maior ou igual ao  numero ${num02} ? ${compara}`
// }
// console.log(comparacao(2, 1))

// Parte C

// function par(num001){
// const ePar = num001 % 2 === 0

// return `O numero ${num001} é par? ${ePar}`
// }

// console.log(par(2))



// Parte D

function salarioliquido(num0001){
const desconto = num0001 * 0.10
const aplicandoDesconto = num0001 - desconto

return `Vamos aplicar no seu salario bruto de R$ ${num0001} reais
 um desconto de INSS no valor de R$ ${desconto} reais
correspondete a taxa de 10%, então seu salario liquido sera de R$ ${aplicandoDesconto}`
}

console.log(salarioliquido(1000))