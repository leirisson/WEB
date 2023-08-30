const alunos = ['Ana','Marcos','Maria','Mauro']
const medias = [7,4.5,8,7.5]

// usando o filter

const reprovados = alunos.filter((aluno, indice)=>{
    return medias[indice] < 7
})

const aprovados = alunos.filter((aluno, indice)=>{
    return medias[indice] >= 7
})

console.log(`Alunos aprovados: ${aprovados}`)
console.log(`Àlunos reprovados: ${reprovados}`)