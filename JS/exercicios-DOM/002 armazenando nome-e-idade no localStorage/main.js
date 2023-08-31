const formulario = document.getElementById("formulario")
const cadastros = []
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    console.log(evento)
    // precisamos adcionar id ao input lá no HTML para capturar valor pelo nome do campo
    // exemplo: <input type="text" id="nome" placeholder="Difige seu nome">
    // USAMOS: evento.target.elements.nome -> OBS: vaiser capturado o elemento e não o seu valor
    // PARA CAPTURAR O VALOR USAMOS O: evento.target.nome.value -> e assim serar capturado o valor
    // do input 
    // console.log(evento.target.elements.nome.value)
    const nome = evento.target.elements.nome.value
    const idade = evento.target.elements.idade.value
    console.log(`Nome: ${nome} idade: ${idade}`)
    const nomeIdade = {
        "nome" : nome,
        "idade" : idade
    }
    cadastros.push(nomeIdade)
    localStorage.setItem("usuarios",JSON.stringify(cadastros))
    console.log(cadastros)

})

