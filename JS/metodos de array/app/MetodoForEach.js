const elementoParaInserirLivros = document.querySelector("#livros")
const elementoComValorTotal = document.getElementById("valor_total_livros_disponiveis")



function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserirLivros.innerHTML = ''
    elementoComValorTotal.innerHTML = ''
    
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens':'livro_imagens indisponivel'
        elementoParaInserirLivros.insertAdjacentHTML("beforeend", /*html*/`
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">4${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        
        `)
            
      //  /*Codigo alternativo para mostrar os livros disponiveis na tela*/
      //  if(livros.quantidade > 0){
      //   return 'livro_imagens'
      //  } else {
      //   return 'livro_imagens indisponivel'
      //  }
    });

  }

 

