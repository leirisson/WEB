const lista = document.getElementById("lista") // capturando a lista de elemento
const form = document.getElementById("novoItem")
const itens = JSON.parse(localStorage.getItem("itens")) || [] // consulta para verificar se existe algum item no local storage

//iterano com os elementos do array
itens.forEach((elemento) =>{
    criar_elemento(elemento)
} )

// capturando as informações do formulario
form.addEventListener('submit', (evento)=>{
    // interrompendo formulario
    evento.preventDefault()

    //capturando valores do campo nome e quantidade
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value
    const itemAtual= {
        "nome":nome,
        "quantidade":quantidade
    }
    const existe = itens.find(elemento => elemento.nome == nome) // veirifcando se elemento ja existe no array
    if(existe){
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual // atualizando item no local storage

    } else{
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id +1 : 0
        criar_elemento(itemAtual)
        itens.push(itemAtual)
    }
 
    // criar_elemento(itemAtual)
    // itens.push(itemAtual)
 
    localStorage.setItem("itens", JSON.stringify(itens))
    
     evento.target.elements['nome'].value = ""
     evento.target.elements['quantidade'].value = ""
    
})

function criar_elemento(item){
    // criando um elemento li
    const novoItem = document.createElement('li')
    novoItem.classList.add('item') // adcionando a classe item ao elemento li
    const numeroItem = document.createElement('strong') // criando uma tag strong
    numeroItem.dataset.id = item.id
    numeroItem.innerHTML = item.quantidade // adcionando a quantidade dentro da tag strong
    novoItem.appendChild(numeroItem) // criando um objeto com quantidade e nome
    novoItem.innerHTML += item.nome


    
    lista.appendChild(novoItem) // adcionando o objeto criado para a lista

    novoItem.appendChild(botaoDeletar(item.id))

}

function atualizaElemento(item){
    console.log(document.querySelector("[data-id='" +item.id+"']").innerHTML = item.quantidade)
}



// função para deletar um elemento
function botaoDeletar(id){
    const elemento = document.createElement("button")
    elemento.innerText = "x"
    elemento.addEventListener("click", function(){
        deletaElemento(this.parentNode, id)
    })

    return elemento
}

function deletaElemento(tag, id){
    tag.remove()
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    localStorage.setItem("itens", JSON.stringify(itens))
}