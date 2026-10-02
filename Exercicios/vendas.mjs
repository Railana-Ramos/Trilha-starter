import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });
import {calcularTotal} from './calculosVendas.mjs';
import {calcularMedia} from './calculosVendas.mjs';


let quantidadeVendas = 0;
let vendas = [];
let i = 0;

console.log('Bem-vindo ao sistema de vendas!');

while (true) {
    quantidadeVendas = Number(
        await rl.question('Quantas vendas deseja inserir? ')
    );
    if (!Number.isInteger(quantidadeVendas) || quantidadeVendas <= 0) {
        console.log('Por favor, insira um número válido de vendas.');
        continue;
    }
    break;
}

while (i < quantidadeVendas) {
    const venda = Number(
        await rl.question(`Digite o valor da venda ${i + 1}: `)
    );
    if (Number.isNaN(venda) || venda <= 0) {
        console.log('Por favor, insira um valor válido para a venda.');
        continue;
    }
    vendas.push(venda);
    i++;
}


const total = calcularTotal(vendas);
const media = calcularMedia(vendas);
console.log(`O total das vendas é: R$ ${total.toFixed(2)}`);
console.log(`A média das vendas é: R$ ${media.toFixed(2)}`);

rl.close();