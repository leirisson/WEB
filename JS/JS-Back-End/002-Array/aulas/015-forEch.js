const notas =[10, 6.5, 8, 7.5]
let somaDasnotas = 0

/*
é possivel acessar o valor do array 
porem é possivel acessar o indice desses valores 
passando como para metro da função anonima (indiceDoValor, valor) =>{
    console.log(indice e valor)
}
*/
notas.forEach((nota)=>{
    somaDasnotas += nota
})

//console.log(somaDasnotas)