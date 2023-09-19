function cacularValorTotalDosLivrosDisponiveis(livros){
    return livros.reduce((acumulador, livroAtual) => acumulador + livroAtual.preco, 0)

}