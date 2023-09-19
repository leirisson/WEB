const ordenarPorPreco = document.getElementById("btnOrdenarPorPreco")

ordenarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

function ordernarLivrosPorPreco(){
    let livrosOrdenados = livros.sort( function(menorValor,maiorValor){
    return menorValor.preco - maiorValor.preco
})
    exibirOsLivrosNaTela(livrosOrdenados)
}