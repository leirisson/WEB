const html = document.querySelector('html')
const botao_foco = document.querySelector('.app__card-button--foco')
const botao_curto = document.querySelector('.app__card-button--curto')
const botao_longo = document.querySelector('.app__card-button--longo')
const banner_principal = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')



botao_foco.addEventListener('click', ()=>{
    alterarContexto('foco')
})

botao_curto.addEventListener('click', ()=>{
   alterarContexto('descanso-curto')

})

botao_longo.addEventListener('click', ()=>{
   alterarContexto('descanso-longo')

})


function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner_principal.setAttribute('src', `./imagens/${contexto}.png`)

    switch(contexto){
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break
        case 'descanso-curto':
                titulo.innerHTML = ` Qutal dar uma respirada ?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>`
             break

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superficie.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break
        default:
            break
    }

}