// arrays
const familia = ['Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester'];
console.log(familia); // Output: ['Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester']

// exibindo primeiro elemento da array
console.log(familia[0]); // Output: Douglas

// exibindo último elemento da array
console.log(familia[familia.length - 1]); // Output: Ester

// exibindo a quantidade de elementos da array
console.log(familia.length); // Output: 6

// adicionando elementos na array
familia.push('Lucas'); // adiciona no final
console.log(familia); // Output: ['Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester', 'Lucas']

// removendo elementos da array
familia.pop(); // remove do final
console.log(familia); // Output: ['Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester']

// insertando elementos no início da array
familia.unshift('Ana'); // adiciona no início
console.log(familia); // Output: ['Ana', 'Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester']

// removendo elementos do início da array
familia.shift(); // remove do início
console.log(familia); // Output: ['Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester']

// inserindo em uma posição específica
familia.splice(2, 0, 'João'); // inserindo 'João' na posição 3, sem remover nenhum elemento cm o 0, e adicionadno 'João' na posição 3
console.log(familia); // Output: ['Douglas', 'Daniela', 'João', 'Pedro', 'Maria', 'Eduardo', 'Ester']

// removendo em uma posição específica
familia.splice(2, 1); // removendo 'João' da posição 3
console.log(familia); // Output: ['Douglas', 'Daniela', 'Pedro', 'Maria', 'Eduardo', 'Ester']

// Objetos em JavaScript
const aluno = {
  nome: 'Douglas',
  idade: 30,
  curso: 'JavaScript',
};
console.log(aluno); // Output: { nome: 'Douglas', idade: 30, curso: 'JavaScript' }

// imagine que você queira acessar uma propriedade específica do objeto:
console.log(aluno.nome); // Output: Douglas
console.log(aluno.idade); // Output: 30
console.log(aluno.curso); // Output: JavaScript

// outra forma de acessar uma propriedade específica do objeto é utilizando a notação de colchetes:
console.log(aluno['nome']); // Output: Douglas
console.log(aluno['idade']); // Output: 30
console.log(aluno['curso']); // Output: JavaScript

// alterando uma propriedade do objeto
aluno.idade = 31;
console.log(aluno.idade); // Output: 31

// Instrução FOR
// Imagine que você tem um array com várias notas de alunos em uma disciplina
//const notas = [8, 7, 9, 6, 10]; // array com várias notas de alunos
console.log(notas); // exibe o array com as notas dos alunos
console.log(notas[0]); // exibe a primeira nota do array
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);
console.log(notas[4]);


// utilizando um loop FOR para exibir todas as notas do array
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}


// somando as notas do array
const notas = [8, 7, 9, 6, 10]
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}
console.log(soma); // exibe a soma das notas do array

