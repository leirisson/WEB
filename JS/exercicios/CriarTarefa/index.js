const lista = document.querySelector(".lista")
const formulario = document.getElementById('formulario')


const listaDeTarefas = [
    {
        titulo: "comprar pao"
    },
    {
        titulo:"Lavar a louça"
    },
    {
        titulo:"tomar banho"
    },
    {
        titulo:"lavar o carro"
    }

]

function form(evento){
    evento.preventDefault()
    const Campotexto =  evento.target.elements['texto'].value
    //evento.target.elements['nome'].value
    // console.log(evento.target.elements['texto'].value)
    // console.log(`Valor digitado: ${valordigitado}`)
    const tarefa =   {
         titulo: Campotexto
        }
    listaDeTarefas.push (tarefa)
    const tarefacriada = criandoTarefa(tarefa)
    lista.appendChild(tarefacriada)
    
}

formulario.addEventListener('submit', form)


function criandoTarefa(tarefa){
    const li = document.createElement("li")
    li.classList.add('item')

    const tituDaTarefa = document.createElement('p')
    
    li.textContent = tarefa.titulo
    li.appendChild(tituDaTarefa)

    return li
}


listaDeTarefas.forEach(tarefa  => {
    const item = criandoTarefa(tarefa)
    lista.appendChild(item)
})

