const taskListContainer = document.querySelector(".app__section-task-list")

const formTask = document.querySelector(".app__form-add-task")
const toggleFormTaskBtn = document.querySelector(".app__button--add-task")
const labelForm = document.querySelector("app__form-label")

const btnCancelar = document.querySelector(".app__form-footer__button--cancel")

const textArea = document.querySelector(".app__form-textarea")

const localStorageTarefas = localStorage.getItem('tarefas', )


let tarefas = localStorageTarefas ? JSON.parse(localStorageTarefas) : []

const tarefaAtiva = document.querySelector(".app__section-active-task-description")


const taskIconSvg = `
<svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" 
    fill="#FFF" />
<path
    d "M9 16.1719119.5938 5.57812121 6.9843819 18.9844L3.42188 13.4062L4.82812 12L19 16.17192"
    fill="#01080E" 
/></svg>
`

let tarefaSelecionada = null
let iteTarefaSelecionada = null
const selecionaTarefa = (tarefa) =>{
   const texto = localStorage.getItem("tarefas")
    console.log(texto)
}

function createTask(tarefa){
    const li = document.createElement('li')
    li.classList.add("app__section-task-list-item")

    const svgIcon = document.createElement('svg')
    svgIcon.innerHTML = taskIconSvg

    const paragraph = document.createElement('p')
    paragraph.classList.add("app__section-task-list-item-description")

    paragraph.textContent = tarefa.descricao

    li.onclick = () =>{
        selecionaTarefa(tarefa)
    }

    li.appendChild(svgIcon)
    li.appendChild(paragraph)

    return li
}


tarefas.forEach(task => {
    const taskItem = createTask(task)
    taskListContainer.appendChild(taskItem)
})


toggleFormTaskBtn.addEventListener('click', () => {
    // labelForm.innerText = 'Adcionando tarefa'
    formTask.classList.toggle('hidden')
})

btnCancelar.addEventListener('click', () => {
    formTask.classList.toggle('hidden')
})


const atualizarLocalStorage = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}


formTask.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const task = {
        descricao: textArea.value,
        concluida: false
    }

    tarefas.push(task)
    const taskItem = createTask(task)
    taskListContainer.appendChild(taskItem)
    textArea.value = ""


    atualizarLocalStorage()
})


