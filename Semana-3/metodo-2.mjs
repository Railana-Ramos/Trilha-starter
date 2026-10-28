// Metodo
class Produto {
    preco;


    constructor(preco) {
        this.preco = preco
}
    calcularTotal(quantidade) {
    return this.preco * quantidade;
    }
}


const produto = new Produto(30);
const total = produto.calcularTotal(3)
console.log(total)

//Exercicio lampada
class Lampada {
    comodo;
    ligada = false

    constructor(comodo, ligada){
        this.comodo = comodo;
        this.ligada = ligada;
    }
    consultarSituacao (){
        if (this.ligada == true){
       console.log(`A lampada do ${this.comodo} está acesa!`)
        }else {
            console.log(`A lampada do ${this.comodo} está apagada!`)
        }
    }
}

const lampada = new Lampada ('Quarto', false)
lampada.consultarSituacao()

//Gabarito exercicio 
class Lampada {
    comodo;
    ligada = false;


    constructor(comodo) {
        this.comodo = comodo;
    }


    ligar() {
        this.ligada = true;
    }


    desligar() {
        this.ligada = false;
    }


    consultarSituacao() {
        if (this.ligada) {
            return "Ligada";
        }
        return "Desligada";
    }  
}


const sala = new Lampada("Sala");
console.log(sala.consultarSituacao());
sala.ligar();
console.log(sala.consultarSituacao());
sala.desligar();
console.log(sala.consultarSituacao());


/*
Enunciado: um produto possui preço 100. Crie calcularComDesconto(percentual),
que devolve o preço simulado. O percentual deve ser finito e estar entre 0 e 100;
valores inválidos provocam um erro. O preço original permanece igual.
*/


class Produto {
    preco;


    constructor(preco) {
        this.preco = preco
    }


    calcularComDesconto(percentual) {
        if(!Number.isFinite(percentual) ||
            percentual < 0  || percentual > 100) {
                throw new Error("Percentual inválido."); // lança o erro e interrompe a execução (na prática desconsidera tudo que vem depois
            }
        const desconto = this.preco * percentual / 100;
        return this.preco - desconto;
    }
}


const produto = new Produto(100);
console.log(produto.calcularComDesconto(10));
console.log(produto.preco);




