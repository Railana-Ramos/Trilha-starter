// Controle de estoque e caça aos bugs


// Contexto
// Uma loja de informática controla o estoque em uma planilha e quer um programa que responda às perguntas do gerente. Enquanto isso, um colega pediu ajuda com um programa de vendas que "roda, mas dá resultado errado".

const nomes = ['Teclado', 'Mouse', 'Monitor', 'Webcam'];
const precos = [150.00, 80.00, 900.00, 200.00];
const estoques = [10, 0, 4, 5];

function calcularValorEstoque(precos, estoques) {
  let total = 0;
  for (let i = 0; i < precos.length; i++) {
    total += precos[i] * estoques[i];
  }
  return total;
}

function listarSemEstoque(nomes, estoques) {
  const semEstoque = [];
  for (let i = 0; i < estoques.length; i++) {
    if (estoques[i] === 0) {
      semEstoque.push(nomes[i]);
    }
  }
  return semEstoque;
}

function encontrarMaisCaro(precos) {
  let maisCaro = precos[0];
  let posicao = 0;
  for (let i = 1; i < precos.length; i++) {
    if (precos[i] > maisCaro) {
      maisCaro = precos[i];
      posicao = i;
    }
  }
  return posicao;
}

function calcularReajuste(preco, percentual) {
  return preco + (preco * percentual);
} 

const valorTotalEstoque = calcularValorEstoque(precos, estoques);
const produtosSemEstoque = listarSemEstoque(nomes, estoques);
const posicaoMaisCaro = encontrarMaisCaro(precos);
const novoPrecoTeclado = calcularReajuste(precos[0], 0.10);

console.log(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
console.log(`Produtos sem estoque: ${produtosSemEstoque.join(', ')}`);
console.log(`Produto mais caro: ${nomes[posicaoMaisCaro]} (R$ ${precos[posicaoMaisCaro].toFixed(2)})`);
console.log(`Novo preço do Teclado após reajuste de 10%: R$ ${novoPrecoTeclado.toFixed(2)}`);

// Parte B: caça aos bugs
// O programa abaixo deveria mostrar a média de vendas (90), dizer se a meta de 100 foi atingida e somar um bônus de 50 à média. Ele roda sem travar, mas exibe resultados errados. Encontre os quatro erros e explique cada um.

// Calcula a média de vendas da semana e verifica a meta
const vendas = [120, 80, 70];
const meta = 100;
 
function calcularMedia(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
  }
  return soma / lista.length;
}
 
let media = calcularMedia(vendas);
console.log('Média: ' + media);
 
if (media === meta) {
  console.log('Meta atingida!');
} else {
  console.log('Meta não atingida.');
}
 
const bonus = '50';
console.log('Média com bônus: ' + (media + Number(bonus)));


//Numero do erro                 linha do erro                 Explicação do erro
// 1                              64                           O loop for está usando "<=" em vez de "<", o que faz com que ele tente acessar um índice fora do array, resultando em undefined e NaN na soma.
// 2                              67                           A função calcularMedia não retorna o valor da média, então a variável media recebe undefined. É necessário adicionar "return soma / lista.length;" no final da função.
// 3                              73                           O operador de comparação correto é "===" ou "==", mas o código está usando "=" que é um operador de atribuição, o que faz com que a condição sempre seja verdadeira.
// 4                              79                           A variável bonus é uma string, então ao somar com media (que é um número), ocorre concatenação de strings em vez de soma numérica. É necessário converter bonus para número usando Number(bonus) ou parseFloat(bonus).
// 5 (adicional)                  60                           A Variavel estava com letra maiuscula, e o correto é minuscula.               






