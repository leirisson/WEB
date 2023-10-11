const Pessoa = {
    nome:"Leirisson",
    idade: 24,
    descrever: function (){
        console.log(`meu nome é: ${this.nome} e minha idade é ${this.idade}`)
    }
}


Pessoa.descrever()