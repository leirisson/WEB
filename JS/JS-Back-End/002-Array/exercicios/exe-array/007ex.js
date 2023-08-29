const listaDenumeros = []
let somaValores = 0

// função para gerar numeros inteiros aleatorios em javascript
function numerosAleatorios(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}


for(let valor = 0; valor < 10; valor++){
    listaDenumeros.push(numerosAleatorios(1,20))
}

for(let indice = 0; indice < listaDenumeros.length; indice++){
    somaValores += listaDenumeros[indice]
    console.log(somaValores)
}
console.log(`Lista de numeros aleatorios: ${listaDenumeros}`)
console.log(`A soma da lista de numero aleatorios é: ${somaValores}`)
