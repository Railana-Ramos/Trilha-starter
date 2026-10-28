// notas.mjs
export function calcularMedia(notas) {
  const soma = notas.reduce((acumulado, nota) => acumulado + nota, 0);
  return soma / notas.length;
}

export function definirSituacao(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperação';
  return 'Reprovado';
}

export function encontrarMelhorAluno(alunos) {
  return alunos.reduce((melhor, atual) =>
    atual.media > melhor.media ? atual : melhor
  );
}
