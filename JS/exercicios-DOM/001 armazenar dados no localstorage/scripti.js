const formulario = document.getElementById("formulario")
const btnCadastrar = document.getElementById("cadastrar")
const itens = JSON.parse(localStorage.getItem("nome")) || []
const listaNomes = []

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
//    console.log(evento)
// const nome = evento.target[0].value

    const nome = evento.target.elements.nome.value
    const local = {
        "nome":nome
    }
  
    listaNomes.push(local)
    localStorage.setItem("Nomes", JSON.stringify(listaNomes))
    
    

})