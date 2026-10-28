// Contexto
// Um mercadinho de bairro quer trocar o caderno do caixa por um programa simples. O operador registra os produtos um a um, encerra com "fim" e o programa emite um cupom e aplica o desconto da forma de pagamento.
// Requisitos

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Função auxiliar para formatar os valores em formato de moeda (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const itens = [];

console.log('=== REGISTO DE CAIXA - MERCADINHO ===\n');

while (true) {
    const nomeInput = await rl.question('Digite o nome do produto (ou "fim" para encerrar): ');
    const nomeTrim = nomeInput.trim();

    if (nomeTrim.toLowerCase() === 'fim') {
        break;
    }

    if (nomeTrim === '') {
        console.log('O nome do produto não pode ser vazio. Tente novamente.\n');
        continue;
    }

    let preco;
    while (true) {
        const precoInput = await rl.question('Digite o preço unitário do produto (maior que zero): ');
        preco = parseFloat(precoInput.replace(',', '.'));
        if (!isNaN(preco) && preco > 0) {
            break;
        }
        console.log('Preço inválido. Deve ser um número maior que zero.');
    }

    let quantidade;
    while (true) {
        const qtdInput = await rl.question('Digite a quantidade do produto (inteiro maior que zero): ');
        quantidade = parseInt(qtdInput, 10);
        if (!isNaN(quantidade) && quantidade > 0 && Number.isInteger(quantidade)) {
            break;
        }
        console.log('Quantidade inválida. Deve ser um número inteiro maior que zero.');
    }

    itens.push({
        nome: nomeTrim,
        preco: preco,
        quantidade: quantidade
    });

    console.log('Produto adicionado com sucesso!\n');
}


if (itens.length === 0) {
    console.log('\nNenhum item registrado.');
    rl.close();
    process.exit();
}

console.log('\n==============================');
console.log('        CUPOM FISCAL          ');
console.log('==============================');

let subtotal = 0;

for (const item of itens) {
    const totalItem = item.preco * item.quantidade;
    subtotal += totalItem;
    console.log(`${item.quantidade}x ${item.nome} (${formatarMoeda(item.preco)} un) — Total: ${formatarMoeda(totalItem)}`);
}

console.log('------------------------------');
console.log(`Subtotal: ${formatarMoeda(subtotal)}`);
console.log('------------------------------');


let descontoPercentual = 0;
let nomeFormaPagamento = '';

while (true) {
    console.log('\nFormas de Pagamento:');
    console.log('1 - Dinheiro (5% de desconto)');
    console.log('2 - Pix (3% de desconto)');
    console.log('3 - Cartão (Sem desconto)');

    const opcaoInput = await rl.question('Escolha a forma de pagamento (1-3): ');
    const opcao = Number(opcaoInput);

    switch (opcao) {
        case 1:
            nomeFormaPagamento = 'Dinheiro';
            descontoPercentual = 0.05;
            break;
        case 2:
            nomeFormaPagamento = 'Pix';
            descontoPercentual = 0.03;
            break;
        case 3:
            nomeFormaPagamento = 'Cartão';
            descontoPercentual = 0;
            break;
        default:
            console.log(' Opção inválida! Por favor, escolha uma opção entre 1 e 3.');
            continue;
    }
    break; 
}

const valorDesconto = subtotal * descontoPercentual;
const totalPagar = subtotal - valorDesconto;

console.log('\n==============================');
console.log('      RESUMO DO PAGAMENTO     ');
console.log('==============================');
console.log(`Forma de Pagamento: ${nomeFormaPagamento}`);
console.log(`Desconto Aplicado:  ${formatarMoeda(valorDesconto)}`);
console.log(`Total a Pagar:      ${formatarMoeda(totalPagar)}`);
console.log('==============================\n');

rl.close();



