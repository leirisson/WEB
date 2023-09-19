const botoes = document.querySelectorAll(".btn")

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
  
    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() :  filtrarPorCategoria()

    exibirOsLivrosNaTela(livrosFiltrados)
    const valorTotal = cacularValorTotalDosLivrosDisponiveis(livrosFiltrados)
    console.log(valorTotal)
    if(categoria == 'disponivel'){
        exibirValortotalDosLivrosDisponiveisNaTela(valorTotal)
    }

    function filtrarPorCategoria() {
        return livros.filter(livro => livro.categoria == categoria)
    }

    function filtrarPorDisponibilidade() {
        return livros.filter(livro => livro.quantidade > 0)
    }
}

function exibirValortotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    
    `
}