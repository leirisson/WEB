/*
Encontre os valores 
máximo e mínimo em um array.
*/
const numeros = []
function numerosAleatorios(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}

for(let i = 0; i <10; i++){
    numeros.push(numerosAleatorios(10,100))
}

const maiorNumero = Math.max(...numeros)
const menorNumero = Math.min(...numeros)


console.log(`Array: ${numeros}`)
console.log(`Maior valor encontrado: ${maiorNumero}`)
console.log(`Menor valor encontrado: ${menorNumero}`)
