const form = document.getElementById("novoItem") // valores do formulario nome e quantidade
const lista = document.getElementById("lista")
form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    //capturando valores nome e quantidade
    const nome = evento.target.elements['nome'].value
    const quantidade =evento.target.elements['quantidade'].value
    criar_elemento(nome, quantidade)

})

/*Criando um novo elemento aparti das informações do formulario*/
function criar_elemento(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)
}

//locaol storage