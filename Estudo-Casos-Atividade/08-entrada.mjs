// entradas.mjs
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

export async function lerTexto(pergunta) {
  while (true) {
    const resposta = (await rl.question(pergunta)).trim();
    if (resposta !== '') return resposta;
    console.log('Entrada inválida: o campo é obrigatório.');
  }
}

export async function lerNumero(pergunta, minimo, maximo, inteiro = false) {
  while (true) {
    const bruto = (await rl.question(pergunta)).trim().replace(',', '.');
    const numero = Number(bruto);

    if (bruto === '' || Number.isNaN(numero)) {
      console.log('Entrada inválida: digite um número.');
    } else if (inteiro && !Number.isInteger(numero)) {
      console.log('Entrada inválida: digite um número inteiro.');
    } else if (numero < minimo || numero > maximo) {
      console.log(`Entrada inválida: o valor deve estar entre ${minimo} e ${maximo}.`);
    } else {
      return numero;
    }
  }
}

export function fecharEntrada() {
  rl.close();
}
