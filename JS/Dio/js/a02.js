//CLASSES 

class Pessoa {
    nome;
    idade;
    descrever(){
        console.log(`meu nome é: ${this.nome} e minha idade é ${this.idade}`)
    }
}


const leirisson = new Pessoa();
leirison.nome = 'Leirirson';
leirisson.idade = 24;

leirison.descrever()

