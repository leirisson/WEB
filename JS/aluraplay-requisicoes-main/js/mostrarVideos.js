import { conexao } from "./ConectarAPI";
const lista = document.querySelector("[data-lista]");

function constroiCard(titulo,descricao,url,imagem){
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `
        <iframe width="100%" height="72%" src="https://www.youtube.com/embed/y8FeZMv37WU"
        title="Conhecendo a linguagem Go | Hipsters.Talks" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>Conhecendo a linguagem Go | Hipsters.Talks</h3>
        <p>3 mil visualizações</p>
        </div>
    `
    return video
}


async function listaVideo(){
    const listaApi = await conectaApi.ListaDeVideos()
    console.log(listaApi)
}



