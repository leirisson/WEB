const lista = document.getElementById("lista") // capturando a lista de elemento
const form = document.getElementById("novoItem")
const itens = JSON.parse(localStorage.getItem("itens")) || [] // consulta para verificar se existe algum item no local storage

//iterano com os elementos do array


// capturando as informações do formulario
form.addEventListener('submit', (evento)=>{
    // interrompendo formulario
    evento.preventDefault()

    //capturando valores do campo nome e quantidade
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    // chamando a função criar elemento
    criar_elemento(nome, quantidade)
    evento.target.elements['nome'].value = ""
    evento.target.elements['quantidade'].value = ""
    
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


    //usano o local storage
    // objeto item atual
    const itemAtual= {
        "nome":nome,
        "quantidade":quantidade
    }
    itens.push(itemAtual)
    localStorage.setItem("itens", JSON.stringify(itens))

}


