//Ex. 02 Dados do pedido
const nomeCliente = 'Ana';
const precoCafe = 6.5;
const qtdCafe = 2;
const precoPao = 4;
const qtdPao = 3;
const numeroPessoas = 2;
const clienteFidelidade = true;
const TAXA_SERVICO = 0.1; // 10%
// Operadores aritméticos
const subtotal = precoCafe * qtdCafe + precoPao * qtdPao;
const taxa = subtotal * TAXA_SERVICO;
const total = subtotal + taxa;
const valorPorPessoa = total / numeroPessoas;
// Operadores de comparação e lógicos
const ganhaBrinde = total >= 25 && clienteFidelidade;
const qtdPaoEhPar = qtdPao % 2 === 0;
// Saída
console.log(`Cliente: ${nomeCliente}`);
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(`Taxa de serviço (10%): R$ ${taxa.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`);
console.log(`Ganha brinde? ${ganhaBrinde}`);
console.log(`Quantidade de pães é par? ${qtdPaoEhPar}`);
// Tipos primitivos
console.log(typeof nomeCliente, typeof precoCafe, typeof clienteFidelidade);
