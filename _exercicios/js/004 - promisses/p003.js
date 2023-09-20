
// fetch(url)
// .then((resposta) => {
//     console.log(resposta)
// })
// async function pegaDados(){
//     url = "https://api.github.com/"
//     const resultado = await fetch(url)
//     const resultadoConvertido = resultado.json()

//     console.log(resultadoConvertido)
// }

//  pegaDados()

// async function funcao(){
//    return 'teste simples !'
// }

// console.log(funcao())
// funcao()
// .then((resposta) =>{
//     console.log(resposta)
// })

function NovoBotatro(texto, callback){
    const $body = document.querySelector("body")
    const $button = document.createElement("button")
    $button.textContent = `${texto}`
    
    callback($button) // função de callback

    $body.insertAdjacentElement("beforeend", $button)
}

NovoBotatro("Login", (botao) =>{
    botao.style.cssText = `
    font-size: 30px;
    `
    botao.addEventListener("click", ()=>{
       Login()
    })
})
NovoBotatro("sair", (botao)=>{
    botao.style.cssText = `
    font-size: 30px;
    color: red;
    `
    botao.addEventListener("click", function(){
        saindo()
    })
})




function Login(){
    console.log("Logando no sistema")
}

function saindo(){
    console.log("saindo do sistema !!!")
}