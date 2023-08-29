/* 
Multiplique todos os elementos de um array por um fator dado.
*/

const numeros = []
const resultado = []
const Multicador = 9

// função para gerar os valore aleatorio
function numerosAleatorios(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}

// preenchendo o array com numeros aleatorios
for(let contador = 0; contador < 5; contador++){
    numeros.push(numerosAleatorios(1,10))
}

for(let valores = 0; valores < numeros.length; valores++){
    resultado.push(numeros[valores] * Multicador)
}

console.log(`Array: ${numeros} multiplicado por: ${Multicador}`)
console.log(`Resultado: ${resultado}`)



