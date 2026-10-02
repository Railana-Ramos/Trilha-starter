// Cálculo da média aritmética das notas inseridas pelo usuário
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });
const quantidade = Number(await rl.question('Informe quantas notas deseja inserir: '));
const notas = [];
let i = 0;
while (i < quantidade) {
  const nota = Number(await rl.question(`Digite a ${i + 1}ª nota: `));
  if (isNaN(nota)) {
    console.log('Valor inválido, digite um número.');
    continue; // faz o programa voltar ao começo do while
  }
  notas.push(nota);
  i++;
}
let soma = 0;
for (const nota of notas) {
  soma += nota;
}
const media = soma / notas.length;
console.log(`Média aritmética: ${media.toFixed(4)}`);
rl.close(); // serve para encerrar a interação com o usuário

