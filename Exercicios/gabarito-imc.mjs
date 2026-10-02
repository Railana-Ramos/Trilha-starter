// Exportar permite importar esta função em outros arquivos.



import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


// Importar a função do nosso módulo.
import { calcularIMC } from './calculos.mjs';


const rl = readline.createInterface({ input, output });


// Receber e validar o peso.
let peso;


while (true) {
    const resposta = await rl.question('Digite seu peso em kg: ');
    peso = Number(resposta.replace(',', '.'));


    if (Number.isFinite(peso) && peso > 0) {
        break;
    }


    console.log('Digite um peso válido, maior que zero.');
}


// Receber e validar a altura.
let altura;


while (true) {
    const resposta = await rl.question('Digite sua altura em metros: ');
    altura = Number(resposta.replace(',', '.'));


    if (Number.isFinite(altura) && altura > 0) {
        break;
    }


    console.log('Digite uma altura válida, maior que zero.');
}


// Usar a função importada.
const imc = calcularIMC(peso, altura);


console.log(`Seu IMC é ${imc.toFixed(2)}`);


rl.close();
