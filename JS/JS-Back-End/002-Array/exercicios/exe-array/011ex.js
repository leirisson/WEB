// 7: Verifique se um array contém um elemento específico.

const nomes = ['Leirisson', 'Maria', 'Raimundo', 'Francisco', 'Zefinha']

function encontrol(nome){
    if (nomes.includes(nome)){
        console.log(`Nome encontrado: ${nome}`);
    }else{
        console.log(`Nome: ${nome} não encotrado !`)
    }
}

encontrol("zezinho") // informe o nome para ser procurado !