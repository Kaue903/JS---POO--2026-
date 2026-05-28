class pedido {
    #cliente;

    constructor(cliente) {
        this.#cliente = cliente
    }

    

// Método getter
getCliente() { 
    return this.#cliente
}

mostrarPedido() {
    return `Pedido enviado!`
}

}

class PedidoLanche extends pedido {
    mostrarPedido() {
        return `Pedido de lanche enviado!`
    }
}


class PedidoPizza extends pedido {
    mostrarPedido() {
        return `Pedido de pizza enviado!`
    }
}   

//Criando objetos 
const pedidoLanche = new PedidoLanche("João")
const pedidoPizza = new PedidoPizza("Maria")

//Exibindo
document.body.innerHTML = `
    <h1>Sistema de Pedidos</h1>
    <h2>Pedido 1</h2>
    <h3>Cliente: ${pedidoLanche.getCliente()}</h3>
    <p>${pedidoLanche.mostrarPedido()}</p>
    <p>_______________________________________</p>
    <h2>Pedido 2</h2>
    <h3>Cliente: ${pedidoPizza.getCliente()}</h3>
    <p>${pedidoPizza.mostrarPedido()}</p>
`