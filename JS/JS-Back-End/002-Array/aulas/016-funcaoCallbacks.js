const nomes = ['lerisson', 'maria','leily']

//formas de chamr uma funçaõ de callbacks
nomes.forEach(function(nome){
    console.log(nome)
})

console.log("==========")
nomes.forEach((nome)=>{
    console.log(nome)
})


console.log("==========")
function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome)

