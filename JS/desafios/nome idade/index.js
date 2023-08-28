const  form = document.getElementById("form")
const lista = document.getElementById('lista')

form.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    const nome = evento.target.elements['nome'].value
    const idade = evento.target.elements['idade'].value

    novo_cadastro(nome, idade)

})

function novo_cadastro(nome, idade){
    const novo_item = document.createElement('li')
    novo_item.classList.add('item')
    const novoNome = document.createElement('strong')
    novoNome.innerHTML = `Nome: ${nome} `
    novo_item.appendChild(novoNome)
    novo_item.innerHTML += `Idade: ${idade}`
    lista.appendChild(novo_item)


}