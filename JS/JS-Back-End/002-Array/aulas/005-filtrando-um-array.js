/*
filter()
-----------
Retorna uma lista contando todos os elementos que 
passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar 
esse resultado em um novo array.
*/

const palavras = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const resultado = palavras.filter((palavras) => palavras.length > 6);
console.log(resultado)