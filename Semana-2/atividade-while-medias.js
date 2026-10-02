/* Construa um programa que peça ao usuário uma quantidade de notas a inserir e apartir disso,
crie um loop while que receba as n notas informadas pelo usuário e aprtir disso, as armazene em um array e posteriormente
calcule e exiba para o usuário a média aritmética com 4 casas decimais */

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const nota = await rl.question("Digite a sua nota: ");

let indice = 0;
const notasArray = nota.split(" ");
let soma = 0;

while (indice < notasArray.length) {
  soma += Number(notasArray[indice]);
  indice++;
}

if (notasArray.length > 0) {
  const media = soma / notasArray.length;

  console.log(`Soma das notas: ${soma}`);
  console.log(`Quantidade de notas: ${notasArray.length}`);
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Não há notas para calcular a média.");
}

rl.close();