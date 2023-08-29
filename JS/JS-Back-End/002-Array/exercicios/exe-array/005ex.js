const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
let media = 0

for(let linha = 0; linha < notasGerais.length ; linha +=1){
    for(let coluna =0; coluna < notasGerais[linha].length; coluna+=1)
        media += notasGerais[linha][coluna] / notasGerais.length
}

console.log(media)


