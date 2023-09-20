
const urlConexaoApi = "http://localhost:3000/videos"

async function ListaDeVideos(){
    const resposta = await fetch(urlConexaoApi)
    const conexaoConvertida = await resposta.json()
    console.table(conexaoConvertida)
    return conexaoConvertida
}


 export const conexao = {
     ListaDeVideos
 }
