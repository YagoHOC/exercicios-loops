let soma = 0
let numero = Number(prompt('Digite um número'))

while (numero != 0){
    soma = soma + numero
    numero = Number(prompt('Digite um número'))
}
console.log('A soma dos números inseridos é '+soma)

const numeros = [14,2,3]

for(let i = 0; i<5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}

function meuArray(arrayA) {
    arrayA = [1,2,3,4,5,6]
    let maior = Math.max(...arrayA)
    console.log(maior)
}

meuArray()

const numeros = [14,67,89,15,23]
for (let numero of numeros){
    console.log(numero)
}

let meuArray2 = [1,2,3,4,5,6,7]
for (const elemento of meuArray2){
    console.log(elemento)
}
meuArray2.forEach(elemento => {
    console.log(elemento)
})

let arrayPalavras = ['oi','meu','nome','é','yago']

function impressao() {
    console.log(arrayPalavras.join(' '))
}

 impressao()

