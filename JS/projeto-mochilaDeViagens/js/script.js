const lista = document.getElementById("lista") // capturando a lista de elemento
const form = document.getElementById("novoItem")


// capturando as informações do formulario
form.addEventListener('submit', (evento)=>{
    // interrompendo formulario
    evento.preventDefault()

    //capturando valores do campo nome e quantidade
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    // chamando a função criar elemento
    criar_elemento(nome, quantidade)
    
})

function criar_elemento(nome, quantidade){
    // criando um elemento li
    const novoItem = document.createElement('li')
    novoItem.classList.add('item') // adcionando a classe item ao elemento li
    const numeroItem = document.createElement('strong') // criando uma tag strong
    numeroItem.innerHTML = quantidade // adcionando a quantidade dentro da tag strong
    novoItem.appendChild(numeroItem) // criando um objeto com quantidade e nome
    novoItem.innerHTML += nome
    lista.appendChild(novoItem) // adcionando o objeto criado para a lista

}


