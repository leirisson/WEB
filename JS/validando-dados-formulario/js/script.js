const campoDoFormulario =  document.querySelectorAll("[required]")
import ehUmcpf from "./validar-cpf.js"

campoDoFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificaCampo(campo))
})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmcpf(campo)
        
    }
}

