// Calcule: a) 12 + 4 * 2; b) (12 + 4) * 2; c) 17 % 5; d) 3 ** 2; e) 9 / 2.
let a = 12 + 4 * 2;
let b = (12 + 4) * 2;
let c = 17 % 5;
let d = 3 ** 2;
let e = 9 / 2;
console.log(a, b, c, d, e);

// Preveja as três saídas e explique a diferença.
// console.log(20 + 5);
//  console.log("20" + 5);
//  console.log(Number("20") + 5);

console.log(20 + 5); // Saída: 25, pois ambos são números e a operação é de soma.
console.log("20" + 5); // Saída: "205", pois o operador + concatena a string "20" com o número 5, resultando em uma string.
console.log(Number("20") + 5); // Saída: 25, pois o operador Number() converte a string "20" em um número, e a operação é de soma.

// Qual é o valor final de pontos? Mostre os valores intermediários.
// let pontos = 10;
//  pontos += 5;
//  pontos *= 2;
//  pontos--;
//  console.log(pontos)

// let pontos = 10;
//  pontos += 5; -- Valor intermediário: 15 (10 + 5)
//  pontos *= 2; -- Valor intermediário: 30 (15 * 2)
//  pontos--; -- Valor intermediário: 29 (30 - 1)
//  console.log(pontos)

// Indique true ou false: a) 7 >= 7; b) 8 < 3; c) 5 === "5"; d) 5 !== "5"; e) 10 <= 9
console.log(7 >= 7); // true
console.log(8 < 3); // false
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(10 <= 9); // false

// Considere idade = 17, temIngresso = true e bloqueado = false. Calcule: a) idade >= 18 && temIngresso; b) idade >= 18 || temIngresso; c) !bloqueado

let idade = 17;
let temIngresso = true;
let bloqueado = false;

console.log(idade >= 18 && temIngresso); // false
console.log(idade >= 18 || temIngresso); // true
console.log(!bloqueado); // true

// A segunda mensagem depende da idade? O que será mostrado? Reescreva com indentação para deixar os blocos claros.
// let idade = 16;
//  if (idade >= 18) {
//  console.log("Maior de idade");
//  }
//  console.log("Fim");

 let idade = 16;
 if (idade >= 18) {
 console.log("Maior de idade");
 } else {
    console.log("Menor de idade");
 }
 console.log("Fim");

//  Com nota = 8, uma sequência testa primeiro nota >= 5 e mostra “Recuperação”; depois, em else if, testa nota >= 7 e mostra “Aprovado”. Qual mensagem aparece? Como corrigir a ordem?
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
}   else {
    console.log("Reprovado");
}

// Declare um número inteiro e informe se ele é par ou ímpar. Teste com 8 e 15. Dica: use o resto da divisão por 2
let num1 = 15;

if (num1 % 2 === 0){
    console.log("num1 é par");
} else {
    console.log("num1 é ímpar");
}

// Declare um número e informe “Positivo”, “Negativo” ou “Zero”. Teste com 4, -3 e 0.
let num2 = -4;
if (num2 > 0) {
    console.log("Positivo");
} else if (num2 < 0) {
    console.log("Negativo");
} else if (num2 === 0) {
    console.log("Zero");
} else {
    console.log("Não é um número");
}

// Para uma nota numérica de 0 a 10, mostre “Aprovado” se nota >= 7, “Recuperação” se nota >= 5 e menor que 7, ou “Reprovado” nos demais casos. Teste 7, 5 e 4.
let nota2 = 7;
if (nota2 >= 7) {
    console.log("Aprovado");
} else if (nota2 >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// Uma pessoa pode entrar se tiver pelo menos 18 anos E tiver ingresso. Mostre “Entrada permitida” ou “Entrada negada”. Teste 20 com ingresso e 20 sem ingresso

idade = 20; 
ingresso = true;
if (idade >= 18 && ingresso) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// Uma compra de pelo menos R$ 300 recebe 15% de desconto. Calcule o valor final com if. Teste com 300 e 200.
let valorCompra = 300;
let desconto = valorCompra * 0.15;
let valorFinal = valorCompra - desconto;
console.log("Valor final com desconto: R$ " + valorFinal.toFixed(2));

// Use uma opção numérica: 1 mostra “Cadastrar”; 2 mostra “Consultar”; 3 mostra “Sair”. Qualquer outro valor mostra “Opção inválida”. Teste 2 e 9.
switch (opcao) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Consultar");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida");
}

// Preveja a saída deste código e depois corrija para mostrar somente “Um” quando opcao vale 1.
let opcao = 1;
 switch (opcao) {
   case 1:
 	console.log("Um");
        break;
   case 2:
 	console.log("Dois");
        break;
   default:
 	console.log("Outro");
 }

//  No exercício 13, troque a opção numérica por "2". Qual será a saída? Corrija convertendo a variável com Number antes do switch.
let opcao = "2";
switch (Number(opcao)) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Consultar");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida");
}

// Amplie o exercício 10: se a nota numérica for menor que 0 OU maior que 10, mostre “Nota inválida”. Só classifique notas dentro da faixa. Teste -1, 6 e 11.
let nota2 = -1;
if (nota2 < 0 || nota2 > 10) {
    console.log("Nota inválida");
} else if (nota2 >= 7) {
    console.log("Aprovado");
} else if (nota2 >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}