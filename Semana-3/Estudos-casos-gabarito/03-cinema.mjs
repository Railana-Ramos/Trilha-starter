import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const leitor = createInterface({ input, output });
// 1. Exibe o menu
console.log('1 - Inteira   (R$ 40,00)');
console.log('2 - Meia      (R$ 20,00)');
console.log('3 - Idoso     (R$ 20,00)');
console.log('4 - Cortesia  (R$ 0,00)');
const opcao = (await leitor.question('Escolha o tipo de ingresso: ')).trim();






// Ex 03. O switch define o preço conforme a opção
let preco = -1; // -1 indica opção inválida
let tipo = '';
switch (opcao) {
  case '1':
    preco = 40;
    tipo = 'Inteira';
    break;
  case '2':
  case '3':
    preco = 20;
    tipo = opcao === '2' ? 'Meia' : 'Idoso';
    break;
  case '4':
    preco = 0;
    tipo = 'Cortesia';
    break;
  default:
    console.log('Opção inválida.');
}
// 3. Só continua se a opção for válida
if (preco >= 0) {
  const quantidade = Number(await leitor.question('Quantidade: '));
  const dia = await leitor.question('É quarta-feira? (s/n): ');
 
  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    console.log('Quantidade inválida.');
  } else {
    let total = preco * quantidade;
    if (dia.trim().toLowerCase() === 's') {
      total = total * 0.5; // promoção de quarta: 50% de desconto
    }
    console.log(`${quantidade} ingresso(s) ${tipo}: R$ ${total.toFixed(2)}`);
  }
}
leitor.close();
