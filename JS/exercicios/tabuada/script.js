const form = document.getElementById("form-tabuada")
const valor = document.getElementById("input-entrada")
const estyloPrincipal = document.querySelector(".subistituir")
const resultado = document.querySelector(".resultado")

estyloPrincipal.classList.remove('substituir')
estyloPrincipal.classList.add('principal')

form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    console.log(evento.target.value)
})

