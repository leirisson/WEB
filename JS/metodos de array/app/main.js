
let livros = []
const  endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const res = await fetch(endpointDaApi,)
    livros =  await res.json()
    console.log(livros)
    let livrosComDesconto = aplicarDesconto(livros)  
    exibirOsLivrosNaTela(livrosComDesconto) 
  
}