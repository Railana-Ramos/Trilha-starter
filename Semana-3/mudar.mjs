// Mudando o valor de um atributo por atribuição direta
class Produto {
    nome;
    preco;


    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}


const produto = new Produto("Chá Mate", 10);
console.log(produto.preco)


produto.preco = 30
console.log(produto.preco)


