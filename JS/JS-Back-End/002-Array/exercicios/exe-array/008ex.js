/* 
O objeto Set() apenas permite um array com valores únicos, então se
 passarmos um array com valores duplicados dentro dele eles serão removidos.
*/

// valores sem duplicidade [10,5,7,8,1,2,3,69,4]
const valores = [10,10,5,6,7,8,5,8,8,1,2,3,10,69,4]

const novoArray = [new Set(valores)]
console.log(`sem usar os ...  => ${novoArray}`)
const novoArray2 = [...new Set(valores)]
console.log(`usando os ...  => ${novoArray2}`)