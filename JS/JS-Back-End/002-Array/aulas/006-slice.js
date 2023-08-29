const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0, alunos.length / 2)
const sala2 = alunos.slice(alunos.length / 2)

console.log(`Truma 1°: ${sala1}`)
console.log(`Turma 2°: ${sala2}`)