import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let frequencia;
    frequencia = Number(await rl.question('Informe a frequência do aluno (0 a 100): '));
    if (frequencia < 75) {
    console.log('Reprovado por falta de frequência! A frequência deve ser maior que 75. ');
    rl.close();
    process.exit(1);
    }

const quantidadeNotas = Number(await rl.question('Informe quantas notas deseja inserir: '));
if (isNaN(quantidadeNotas) || quantidadeNotas <= 0) {
  console.log('Quantidade de notas inválida! Deve ser um número inteiro positivo.');
  rl.close();
  process.exit(1);
}

const notas = [];
let i = 0;
for (let i = 0; i < quantidadeNotas; i++) {
    let nota;
    while (true) {
        nota = Number(await rl.question(`Digite a ${i + 1}ª nota (de 0 a 10): `));
        if (nota >= 0 && nota <= 10) {
            break;
        }
        console.log('Nota inválida! Deve ser um valor entre 0 e 10.');
    }
    notas.push(nota);
}
let media = 0;
for (const nota of notas) {
  media += nota;
}
const mediaTotal = media /= quantidadeNotas;

if (mediaTotal < 5 || frequencia < 75) {
  console.log(`Situação: - Reprovado`);
} else if (mediaTotal >= 5 && mediaTotal < 7 && frequencia >= 75) {
  const notaFaltante = 7 - mediaTotal;
    console.log(`Situação: - Recuperação`);
    console.log(`Faltam ${notaFaltante.toFixed(2)} pontos na média para atingir a aprovação.`);
} else if (mediaTotal >= 7 && frequencia >= 75) {
  console.log(`Situação: - Aprovado`);
} else {
  console.log(`Dados invalidos. Por favor, insira apenas números válidos.`);
}

console.log(`Frequência: ${frequencia.toFixed(2)}%`);
console.log(`Média: ${media.toFixed(2)}`);
rl.close();

// Execute o programa com os dados abaixo e anote a situação que ele mostrou.
// Notas                      Frequência                     Situação exibida
// 8, 7, 9                    90%                            Aprovado


// 6, 5, 4                    80%                            Recuperação


// 3, 4, 2                    100%                           Reprovado 


// 10, 10, 10                 60%                            Reprovado por falta de frequência! a frequência deve ser maior que 75.


// 11, 5, 5                   90%                            Nota inválida! Deve ser um valor entre 0 e 10. (O programa deve pedir a nota novamente)       




