//sintax 
function BuscarUsuario(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(function(dados){
        return dados.json()
    })
    .catch(function(erro){
        return console.log(`Erro: ${erro}`)
    })
}

async function MostrarNomeDoUsuario(id){
    try{
        const usuario = await BuscarUsuario(id)
        console.log(`Nome do usuario: ${usuario.dados.first_name}`)
    }catch(erro) {
        console.log(`Erro => ${erro}`)
    }
}

MostrarNomeDoUsuario(3)