import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


// Importar a função do nosso módulo.
import { calcularMedia } from './calculos.mjs';


const rl = readline.createInterface({ input, output });


// Receber e validar a quantidade.
let quantidade;


while (true) {
    quantidade = Number(
        await rl.question('Quantas notas deseja inserir? ')
    );


    if (Number.isInteger(quantidade) && quantidade > 0) {
        break;
    }


    console.log('Digite uma quantidade inteira maior que zero.');
}


// Receber e armazenar as notas.
const notas = [];
let i = 0;


while (i < quantidade) {
    const resposta = await rl.question(`Digite a ${i + 1}ª nota: `);


    // Permitir números com vírgula ou ponto.
    const nota = Number(resposta.replace(',', '.'));


    if (resposta.trim() === '' || !Number.isFinite(nota)) {
        console.log('Valor inválido. Digite um número.');
        continue;
    }


    notas.push(nota);
    i++;
}


// Usar a função importada.
const media = calcularMedia(notas);


console.log(`A média das notas é ${media.toFixed(4)}`);


rl.close();
