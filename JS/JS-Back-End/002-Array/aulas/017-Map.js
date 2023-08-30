const notas = [10,9.5,8,7,6]

const novaNotas = notas.map((nota)=>{
    return nota + 1 > 10 ? nota = 10 : nota + 1 // usando operador ternario 
})

console.log(notas)
console.log(novaNotas)