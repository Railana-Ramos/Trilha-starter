// Método
class Aluno {
    nome;
    idade;


    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


    apresentar() {
        return `Sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}


const aluno = new Aluno('Douglas', 50)


console.log(aluno.apresentar())

// Enunciado: uma papelaria precisa cadastrar um produto com nome e preço. Crie uma classe, cadastre um caderno de R$ 25,00 e apresente uma descrição usando um método.
// Identifique os dados
// Nome é texto; preço é número. Ambos pertencem a cada produto.
// Planeje a criação e a saída
// O construtor recebe os dados. O método descrever devolve a mensagem; console.log fica responsável por exibi-la.

class Produto {
    nome;
    preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    descrever() {
        return `O produto ${this.nome} custa R$ ${this.preco.toFixed(2)}.`;
    }
}

const caderno = new Produto('Caderno', 25.00);
console.log(caderno.descrever());