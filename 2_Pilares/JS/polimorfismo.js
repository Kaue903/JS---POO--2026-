class Animal {
    //Método da classe pai
    fazerSom () {
        return "Som genérico"
    }
}

//Classes filhas
class Cachorro extends Animal {
    // Polimorfismo (Mesmo método, mas
    //com comportamentos diferentes
    //cada objeto)
    fazerSom () {
        return "AUUUUUUUUUUUUUUUUUUUUUUUU!"  //Polimorfismo ocorre aqui
    }
}


    class Gata extends Animal {
    fazerSom () {
        return "MIAU MIAU!"  //Polimorfismo ocorre aqui
    
    }
}

// Função Polimórfica (Pode receber objetos de diferentes classes)
// O  importante é possuir o método fazerSom
function comunicarAnimal (animal) {
    return animal.fazerSom()
}

// Criando objetos
const bolt = new Cachorro()
const pietra = new Gata()

// Exibindo os resultados no navegador
document.body.innerHTML = `
    <h1>Polimorfismo</h1>
    <h2>Som do bolt: </h2>
    <p>${comunicarAnimal(bolt)}</p>
    <p>_$_$_$_$_$_$_$_$_$_$_$_$_$_$_$_</p>

    <h2>Som da pietra: </h2>
    <p>${comunicarAnimal(pietra)}</p>
`


