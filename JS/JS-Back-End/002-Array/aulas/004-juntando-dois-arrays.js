/*
concat()
----------
Junta dois arrays, colocando o array passado como argumento,
logo depois do primeiro. Em português essa operação é conhecida 
como concatenação.Não altera o array no qual foi chamado, 
então precisamos salvar esse resultado em um novo array.
 */
const array1 = [1,2,3,4]
const array2 = [5,6,7,8,9]
const array4 = [10,11,12]
const array3 = array1.concat(array2,array4)

console.log(array3)