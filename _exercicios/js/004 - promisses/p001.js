function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min) 
}

function EsperarAi(mensagem, tempo){
    return new Promise((resolve, reject)=>{
        if (typeof mensagem !== "string") reject("Valor Invalido")
        setTimeout(()=>{
            resolve(mensagem)
        }, tempo)
    })
   
}

 EsperarAi("espera o tempo 1", rand(1,3))
 .then(resposta => {
    console.log(resposta)
    return EsperarAi(123, rand(1,2))
 })
 .then(resposta =>{
    console.log(resposta)
    return EsperarAi('Frase 3', rand(1,2))
 })
 .then(resposta => {
    console.log(resposta)
 })
 .catch(error => {
    console.log('Erro: ', error)
 })
