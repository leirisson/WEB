let url =`  viacep.com.br/ws/01001000/json/`

let consultaCep = fetch(url)
.then(resposta => resposta.json())
.then(r => console.log(r))


console.log(consultaCep)