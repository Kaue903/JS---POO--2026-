class Cachorro {
    #nome  //Atributo encapsulado

    constructor (nome) {
        this.#nome = nome
    }

    //Getter para acessar
    getNome () {
        return this.#nome
    }

 
setNome (novoNome) {
    this.#nome = novoNome
    }
}



//Criando um objeto
const objeto = new Cachorro("Rex")


// Alterando nome usando setter
objeto.setNome("Nina")

//Exibindo
document.body.innerHTML = `
    <h1>Encapsulamento</h1>
    <p>Nome: ${objeto.getNome()}</p>
`
