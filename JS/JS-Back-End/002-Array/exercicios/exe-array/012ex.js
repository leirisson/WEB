/*
Junte dois arrays em um.
*/
primeiroArrey = []
segundoArray = []


// função de numeros aleatorios
function numerosAleatorios(numero_min, numero_max){
    numero_min = Math.ceil(numero_min)
    numero_max = Math.floor(numero_max)
    return Math.floor(Math.random() * (numero_max - numero_min) + numero_min)
}


for(indice = 0; indice < 4; indice++){
    primeiroArrey.push(numerosAleatorios(1,11))
}
for(indice = 0; indice < 6; indice++){
    segundoArray.push(numerosAleatorios(2,154))
}

const Resultado = [...primeiroArrey, ...segundoArray]
console.log(`Array1: ${primeiroArrey}`)
console.log(`Array2: ${segundoArray}`)
console.log(`O resultado da junção dos arrays é: ${Resultado}`)