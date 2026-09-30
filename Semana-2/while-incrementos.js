// Incremento de uma variável usando o operador ++ (acrescenta 1 ao valor)
let qtde = 5
console.log(qtde);
qtde++;
console.log(qtde);
//Incremento de valor maior que 1 (por exemplo, acrescenta 5 ao valor)
qtde += 5;
console.log(qtde);


// Decremento de uma variável usando o operador -- (subtrai 1 do valor)
qtde--;
console.log(qtde);
// Decremento de valor maior que 1 (por exemplo, subtrai 5 do valor)
qtde -= 5;
console.log(qtde);


// Interagindo com o usuário usando o swait
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nome = await rl.question("Qual é o seu nome? ");
const idade = await rl.question("Qual é a sua idade? ");

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

rl.close();

// Laço while - Imagine que você deseja imprimir na tela separadamente os números de 1 a 5
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// entrando em um loop infinito
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    
}

//tabuada do 7 usando while
let tabuada = 7;
let numero = 0;
while (tabuada <= 10) {
    console.log(`Tabuada do ${tabuada}: ${numero * tabuada}`);
    tabuada++;
}



// Calcular a média dos valores de um array
const notas = [8, 6, 9, 7];


let indice = 0;
let soma = 0;


while (indice < notas.length) {
  soma += notas[indice];
  indice++;
}


if (notas.length > 0) {
  const media = soma / notas.length;


  console.log(`Soma das notas: ${soma}`);
  console.log(`Quantidade de notas: ${notas.length}`);
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Não há notas para calcular a média.");
}

/* Construa um programa que peça ao usuário uma quantidade de notas a inserir e apartir disso,
crie um loop while que receba as n notas informadas pelo usuário e aprtir disso, as armazene em um array e posteriormente
calcule e exiba para o usuário a média aritmética com 4 casas decimais */

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nota1 = await rl.question("Digite a primeira nota: ");
const nota2 = await rl.question("Digite a segunda nota: ");
const nota3 = await rl.question("Digite a terceira nota: ");
const nota4 = await rl.question("Digite a quarta nota: ");



let indice = 0;
let notas = [];
let soma = 0;
notas.push(nota1, nota2, nota3, nota4);

while (indice < notas.length) {
  soma += Number(notas[indice]);
  indice++;
}

if (notas.length > 0) {
  const media = soma / notas.length;


  console.log(`Soma das notas: ${soma}`);
  console.log(`Quantidade de notas: ${notas.length}`);
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Não há notas para calcular a média.");
}

rl.close();