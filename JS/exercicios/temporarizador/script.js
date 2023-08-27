const bt = document.querySelector('.tempo')

const temCoprrido = 5
const intervalo = null


function contagem(){
    tempoDecorrido -= 1
    console.log(`Regredindo: ${temCoprrido}`)
}

bt.dispatchEvent('click', iniciar)

function iniciar(){
    setInterval(contagem, 1000)
}