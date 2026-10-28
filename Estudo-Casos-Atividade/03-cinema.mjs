import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const opcao = Number(await rl.question(`Escolha o tipo de ingresso:
  [1] - Inteira: R$ 40,00
  [2] - Meia-entrada: R$ 20,00
  [3] - Idoso (60+): R$ 20,00
  [4] - Cortesia: R$ 0,00
  [5] - Estudante: R$ 25,00
  Opção: `));
if (opcao < 1 || opcao > 5) {
  console.log('Opção inválida. Deve ser um número entre 1 e 5.');
  rl.close();
  process.exit(1);
}

const quantidade = Number(await rl.question('Informe a quantidade de ingressos: '));
if (quantidade <= 0 || !Number.isInteger(quantidade)) {
  console.log('Quantidade inválida. Deve ser um inteiro maior que zero.');
  rl.close();
  process.exit(1);
}

let tipoIngresso;
let preco;

switch (opcao) {
  case 1:
    tipoIngresso = 'Inteira';
    preco = 40.00;
    break;
  case 2:
    tipoIngresso = 'Meia-entrada';
    preco = 20.00;
    break;
  case 3:
    tipoIngresso = 'Idoso (60+)';
    preco = 20.00;
    break;
  case 4:
    tipoIngresso = 'Cortesia';
    preco = 0.00;
    break;
  case 5:
    tipoIngresso = 'Estudante';
    preco = 25.00;
    break;
  default:
    console.log('Opção inválida.');
    break;
}

const quartaFeira = await rl.question('É quarta-feira? (s/n): ');
let total = preco * quantidade;
if (quartaFeira === 's') {
  total *= 0.5;
}

console.log(`Tipo de ingresso: ${tipoIngresso} Preço unitário: R$ ${preco.toFixed(2)}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Total: ${tipoIngresso} R$ ${total.toFixed(2)}`);
console.log(`Desconto aplicado: ${quartaFeira === 's' ? '50%' : '0%'}`);
rl.close();


//Opcao                Quantidade         Quarta-feira?        Resultado exibido

//1                     2                  n                   Total: R$ 80,00   
//2                     3                  s                   Total: R$ 30,00
//5                                                            Opção inválida. Deve ser um número entre 1 e 4.
//4                     0                  n                   Quantidade inválida. Deve ser um inteiro maior que zero.