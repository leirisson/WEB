/*
Uma famosa escola de tecnologia do Brasil recebia diversos 
estudantes com objetivos de estudos diferentes. Alguns se 
matricularam nos cursos de JavaScript, outros em Python e 
outros em C#, como ilustra a lista.
*/

let estudantes = [
    {id: 1, nome: "Andy", curso: "JavaScript"},
    {id: 2, nome: "Karine", curso: "Python"},
    {id: 3, nome: "João", curso: "JavaScript"},
    {id: 4, nome: "Moni", curso: "JavaScript"},
    {id: 5, nome: "Antônio", curso: "JavaScript"},
    {id: 6, nome: "Luan", curso: "C#"},
    {id: 7, nome: "Bia", curso: "Python"},
    {id: 8, nome: "Vinny", curso: "C#"}
]

let curso = cursos("Python")
console.log(curso)

function cursos(nome_curso){
    return  estudantes.filter(aluno => aluno.curso == nome_curso)
}

/* outro metodo 
    filter pode ser usado dentro do console log
*/
let curso2 = 'C#'
console.log(estudantes.filter(estudante => estudante.curso == curso2))