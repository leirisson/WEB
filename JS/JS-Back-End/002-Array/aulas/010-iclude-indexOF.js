const alunos = ["João", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7.5, 9]
const lista2dimencoes = [alunos, medias]

function exibeNomeENota(NomeAluno){
    if(lista2dimencoes[0].includes(NomeAluno)){
        const indiceDoAluno =lista2dimencoes[0].indexOf(NomeAluno) // retorna o indice do aluno
        const mediaAluno = lista2dimencoes[1][indiceDoAluno]
        console.log(`O ${NomeAluno} tem a media de ${mediaAluno}`)

    } else {
        console.log(`Erro 404: Aluno não encontrado !`)
    }
}


exibeNomeENota("João")
exibeNomeENota("Juliana")