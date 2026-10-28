// Exercício 02
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
 
const leitor = createInterface({ input, output });
// 1. Entrada de dados (texto convertido para número)
const nota1 = Number(await leitor.question('Nota 1: '));
const nota2 = Number(await leitor.question('Nota 2: '));
const nota3 = Number(await leitor.question('Nota 3: '));
const frequencia = Number(await leitor.question('Frequência (%): '));
leitor.close();
// 2. Verifica se as notas estão entre 0 e 10
const notasValidas =
  nota1 >= 0 && nota1 <= 10 &&
  nota2 >= 0 && nota2 <= 10 &&
  nota3 >= 0 && nota3 <= 10;
// 3. Decide a situação (a ordem dos testes importa)
if (!notasValidas || frequencia < 0 || frequencia > 100) {
  console.log('Dados inválidos. Verifique as notas e a frequência.');
} else {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`Média: ${media.toFixed(1)}`);
 
  if (frequencia < 75) {
    console.log('Situação: Reprovado por falta');
  } else if (media >= 7) {
    console.log('Situação: Aprovado');
  } else if (media >= 5) {
    console.log('Situação: Recuperação');
  } else {
    console.log('Situação: Reprovado por nota');
  }
}
