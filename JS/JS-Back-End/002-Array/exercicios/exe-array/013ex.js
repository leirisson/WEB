// 9: Crie uma matriz (array de arrays) e encontre a soma de todos os elementos.
const matriz = [[],[],[]]
let somaDosValores = 0
function numerosAleatorios(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}
for(i=0; i<numerosAleatorios(2,7);i++){
     matriz[0].push(numerosAleatorios(1,10)) 
    }
for(i=0; i<numerosAleatorios(2,7);i++){ 
    matriz[1].push(numerosAleatorios(154,300)) 
}
for(i=0; i<numerosAleatorios(2,7);i++){
     matriz[2].push(numerosAleatorios(1000,2500))
     }
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      somaDosValores += matriz[linha][coluna];
    }
}
console.log(`Matriz com os valores: ${matriz}`)
console.log(`Resultado da soma de todos os valores da matriz: ${somaDosValores}`)

