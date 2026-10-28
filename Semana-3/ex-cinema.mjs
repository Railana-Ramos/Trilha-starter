// 1. Crie a classe Ingresso com os atributos filme, assento e tipo.
// 2. Escreva o constructor(filme, assento, tipo), com &quot;inteira&quot; como valor padrão de tipo.
// Valide os três dados com as regras da tabela, usando throw new Error(...), e só depois guarde os
// valores com this. Guarde o filme já sem os espaços das pontas.
// 3. Crie o método calcularPreco(), que retorna 32 ou 16 conforme o tipo.
// 4. Crie o método descrever(), que retorna um texto no formato da saída abaixo, com o preço em duas
// casas decimais (toFixed(2)).
// 5. Teste: crie um ingresso inteira para o filme “O Último Farol”, assento 10, e um meia para o assento
// 11. Mostre a descrição dos dois. Depois, dentro de try/catch, tente criar um ingresso para o assento
// 130 e mostre Erro: seguido da mensagem.

class Ingresso {
    filme;
    assento;
    tipo;

    constructor(filme, assento, tipo = "inteira"){
        this.filme = filme
        this.assento = assento
        this.tipo = tipo

        if (filme.trim() === ""){
            throw new Error("Filme inválido")
        } 
        if (assento <= 0 || assento > 120 || !Number.isInteger(assento)){
            throw new Error("Assento inválido");
        }
        if (tipo !== "inteira" && tipo !== "meia"){
            throw new Error("Tipo de ingresso inválido");
            
        }
    }
    calcularPreco(){
        if (this.tipo === "inteira"){
            return 32.00
        } else if (this.tipo === "meia"){
            return 16.00
        }
    }
    descrever(){
        return (`${this.filme} | ${this.assento} | R$ ${this.calcularPreco()}`)
    }
}

const pedido1 = new Ingresso ("O Último Farol", 10)
const pedido2 = new Ingresso ("O Último Farol", 11, "meia")

console.log(pedido1.descrever())
console.log(pedido2.descrever())

try {
    const pedido3 = new Ingresso ("O Último Farol", 121, "meia")
    console.log(pedido3.descrever())
} catch (erro) {
     if (erro instanceof Error) {
        console.log(erro.message);
    }
}

const pedidos = [
{ filme: "O Último Farol", assento: 20 },
{ filme: "O Último Farol", assento: 21, tipo: "meia" },
{ filme: " ", assento: 22 },
{ filme: "Viagem a Marte", assento: 0 },
{ filme: "Viagem a Marte", assento: 45, tipo: "estudante" },
{ filme: "Viagem a Marte", assento: 46, tipo: "meia" },
{ filme: "Viagem a Marte", assento: 7.5 }
];

const vendidos = [];
let contador = 1
let totalArrecadado = 0;

for (const pedido of pedidos){
    try {
        const ingresso = new Ingresso(
            pedido.filme,
            pedido.assento,
            pedido.tipo
        );
        vendidos.push(ingresso)
        totalArrecadado += ingresso.calcularPreco();
        console.log(`Pedido ${contador} Aprovado: ${ingresso.descrever()}`)
    } catch (erro) {
     if (erro instanceof Error) {
        console.log(`Pedido ${contador} Reprovado: ${erro.message}`);
    }
}       contador ++
}

console.log(`Quantidade vendida: ${vendidos.length}`);
console.log(`Total arrecadado: R$ ${totalArrecadado.toFixed(2)}`);