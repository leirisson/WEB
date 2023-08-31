const formulario = document.querySelector("#form-cadastro-livro")
const cadastroLivros = []
formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault() 
    // console.log("funcionou")
    console.log(evento.target.elements)
    const nomeAutor = evento.target.elements.nomeAutor.value
    const tituloLivro = evento.target.elements.tituloLivro.value
    const generoLivro = evento.target.elements.generoLivro.value

    // console.log(nomeAutor)
    // console.log(tituloLivro)
    // console.log(generoLivro)

   const livros = {
    "Autor":nomeAutor,
    "Titulo":tituloLivro,
    "Genero":generoLivro
   } 

   cadastroLivros.push(livros)
   console.log(cadastroLivros)

   
   localStorage.setItem("Cadas de Livros", JSON.stringify(cadastroLivros))

})
