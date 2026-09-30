
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nota1 = await rl.question("Digite a primeira nota: ");
const nota2 = await rl.question("Digite a segunda nota: ");
const nota3 = await rl.question("Digite a terceira nota: ");
const nota4 = await rl.question("Digite a quarta nota: ");



let indice = 0;
let notas = [];
let soma = 0;
notas.push(nota1, nota2, nota3, nota4);

while (indice < notas.length) {
  soma += Number(notas[indice]);
  indice++;
}

if (notas.length > 0) {
  const media = soma / notas.length;


  console.log(`Soma das notas: ${soma}`);
  console.log(`Quantidade de notas: ${notas.length}`);
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Não há notas para calcular a média.");
}

rl.close();