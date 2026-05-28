class Animal {
    constructor(nome) {
        this.nome = nome
    }

    // Método dormir (Classe pai)
    // Será herdado por todos os filhos) Objetos
    dormir() {
        return `${this.nome} está dormindo.`
    }
}

// Classe Cavalo 
class Cavalo extends Animal {
    //Método exclusivo  da Classe cavalo
    relinchar() {
        return `${this.nome} fez: Iiiiiirrrri`
    }
}

// Classe Passáro
class Passaro extends Animal {
    // Método exclusivo da Classe Passáro
    cantarolar () {
        return `${this.nome} fez: FIU FIU PIU POO!`
    }
}

// Criando instâncias ou objetos
const cavalo = new Cavalo ("Jason")
const passaro = new Passaro ("Sábia")

//Exibindo
document.body.innerHTML = `
    <h1>Herança </h1>
    <!-- Método Herdado -->
    <p>${cavalo.dormir()}</p>
    <!--Método próprio -->
    <p>${cavalo.relinchar()}</p>

    <h2>Pássaro</h2>
    <!-- Método Herdado -->
    <p>${passaro.dormir()}</p>
    <!--Método próprio -->
    <p>${passaro.cantarolar()}</p>
`