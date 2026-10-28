//Gabarito Ex 01 Aula 15


class Ingresso {
  filme;
  assento;
  tipo;


  constructor(filme, assento, tipo = "inteira") {
    const filmeLimpo = filme.trim();
    if (filmeLimpo.length === 0) {
      throw new Error("Filme obrigatório.");
    }
    if (!Number.isInteger(assento) || assento < 1 || assento > 120) {
      throw new Error("Assento inválido.");
    }
    if (tipo !== "inteira" && tipo !== "meia") {
      throw new Error("Tipo de ingresso inválido.");
    }
    this.filme = filmeLimpo;
    this.assento = assento;
    this.tipo = tipo;
  }


  calcularPreco() {
    if (this.tipo === "meia") {
      return 16;
    }
    return 32;
  }


  descrever() {
    const preco = this.calcularPreco().toFixed(2);
    return `${this.filme} | assento ${this.assento} | ` +
      `${this.tipo} | R$ ${preco}`;
  }
}


// Parte 1: dois ingressos de teste
const teste1 = new Ingresso("O Último Farol", 10);
const teste2 = new Ingresso("O Último Farol", 11, "meia");
console.log(teste1.descrever());
console.log(teste2.descrever());


try {
  const teste3 = new Ingresso("O Último Farol", 130);
  console.log(teste3.descrever());
} catch (erro) {
  if (erro instanceof Error) {
    console.log(`Erro: ${erro.message}`);
  }
}


// Parte 2: os pedidos do dia
const pedidos = [
  { filme: "O Último Farol", assento: 20 },
  { filme: "O Último Farol", assento: 21, tipo: "meia" },
  { filme: "   ", assento: 22 },
  { filme: "Viagem a Marte", assento: 0 },
  { filme: "Viagem a Marte", assento: 45, tipo: "estudante" },
  { filme: "Viagem a Marte", assento: 46, tipo: "meia" },
  { filme: "Viagem a Marte", assento: 7.5 }
];


const vendidos = [];
let numero = 1;


for (const pedido of pedidos) {
  try {
    const ingresso = new Ingresso(pedido.filme, pedido.assento, pedido.tipo);
    vendidos.push(ingresso);
    console.log(`Pedido ${numero} aprovado: ${ingresso.descrever()}`);
  } catch (erro) {
    if (erro instanceof Error) {
      console.log(`Pedido ${numero} recusado: ${erro.message}`);
    }
  }
  numero = numero + 1;
}


// Parte 3: fechamento do caixa
let total = 0;
for (const ingresso of vendidos) {
  total = total + ingresso.calcularPreco();
}
console.log(`Ingressos vendidos: ${vendidos.length}`);
console.log(`Total arrecadado: R$ ${total.toFixed(2)}`);


