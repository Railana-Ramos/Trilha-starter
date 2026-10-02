import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { calcularLitros, calcularCusto } from './calculosViagem.mjs';
const rl = readline.createInterface({ input, output });

// 1. Receba a distância total da viagem, em quilômetros.
// 2. Receba o consumo médio do veículo, em quilômetros por litro.
// 3. Receba o preço do combustível, em reais por litro.
// 4. Calcule a quantidade estimada de litros necessários.
// 5. Calcule o custo estimado da viagem.
// 6. Exiba os dois resultados com duas casas decimais.

let distancia, consumo, preco;

while (true) {
    const respostaDistancia = await rl.question('Digite a distância total da viagem (em km): ');
    distancia = Number(respostaDistancia.replace(',', '.'));
    if (isNaN(distancia) || distancia <= 0) {
        console.log('Distância inválida. Por favor, digite um valor positivo.');
        continue;
    }
    break;
}

while (true) {
    const respostaConsumo = await rl.question('Digite o consumo médio do veículo (km/l): ');
    consumo = Number(respostaConsumo.replace(',', '.'));
    if (isNaN(consumo) || consumo <= 0) {
        console.log('Consumo inválido. Por favor, digite um valor positivo.');
        continue;
    }
    break;
}

while (true) {
    const respostaPreco = await rl.question('Digite o preço do combustível (R$/l): ');
    preco = Number(respostaPreco.replace(',', '.'));
    if (isNaN(preco) || preco <= 0) {
        console.log('Preço inválido. Por favor, digite um valor positivo.');
        continue;
    }
    break;
}

const litrosNecessarios = distancia / consumo;
const custoEstimado = litrosNecessarios * preco;

console.log(`Quantidade estimada de litros necessários: ${litrosNecessarios.toFixed(2)}`);
console.log(`Custo estimado da viagem: R$ ${custoEstimado.toFixed(2)}`);

rl.close();