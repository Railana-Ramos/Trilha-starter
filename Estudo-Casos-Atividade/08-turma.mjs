// turma.mjs

import { lerTexto, lerNumero, fecharEntrada } from './entrada.mjs';
import { calcularMedia, definirSituacao, encontrarMelhorAluno } from './notas.mjs';

const QTD_NOTAS = 3;

async function main() {
  console.log('=== Boletim da Turma ===\n');

  const quantidade = await lerNumero('Quantos alunos há na turma (1 a 50)? ', 1, 50, true);

  const alunos = [];
  for (let i = 1; i <= quantidade; i++) {
    console.log(`\n--- Aluno ${i} de ${quantidade} ---`);
    const nome = await lerTexto('Nome: ');

    const notas = [];
    for (let n = 1; n <= QTD_NOTAS; n++) {
      notas.push(await lerNumero(`Nota ${n} (0 a 10): `, 0, 10));
    }

    const media = calcularMedia(notas);
    const situacao = definirSituacao(media);
    alunos.push({ nome, media, situacao });
  }

  fecharEntrada();

  console.log('\n=== Relatório da Turma ===');
  for (const aluno of alunos) {
    console.log(`${aluno.nome} - Média: ${aluno.media.toFixed(2)} - ${aluno.situacao}`);
  }

  const mediaTurma = calcularMedia(alunos.map((aluno) => aluno.media));
  console.log(`\nMédia da turma: ${mediaTurma.toFixed(2)}`);

  const melhor = encontrarMelhorAluno(alunos);
  console.log(`Melhor desempenho: ${melhor.nome} (média ${melhor.media.toFixed(2)})`);

  const aprovados = alunos.filter((aluno) => aluno.situacao === 'Aprovado').length;
  console.log(`Aprovados: ${aprovados} de ${alunos.length}`);
}

main();
