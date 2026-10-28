// Crie duas variáveis: uma chamada nome que armazene um texto e outra chamada idade que armazene
// um número. Utilize Type Annotation explícita em ambas.
const nome:string = "Railana";
const idade:number = 27;

// Declare uma variável chamada isLogado e atribua o valor true a ela, sem usar anotação explícita. Deixe
// que o TypeScript faça a inferência. Qual é o tipo inferido?
const isLogado = true;
console.log(typeof isLogado)

// Crie uma variável chamada nota que aceite tanto um number (ex: 9.5) quanto uma string (ex: conceitos
// como "A", "B"). Use Union Types e atribua dois valores válidos sequencialmente.

type tipos = number | string; 
let nota: tipos = 9.5; // Primeiro valor válido (number)
console.log(nota);

nota = "A3C5"; // Segundo valor válido (string) atribuído sequencialmente
console.log(nota);

// Crie um array de frutas via inferência com os elementos ["maçã", "banana", "laranja"]. O que
// ocorre se você tentar executar frutas.push(10)?

const frutas = ["maçã", "banana", "laranja"];
// frutas.push(10)
// console.log(frutas)
//Dá um erro pois não é um tipo string

// Escreva uma função chamada somar que receba dois parâmetros (a e b), ambos do tipo number, e
// retorne a soma deles também como number. Anote explicitamente os parâmetros e o retorno.

function somar (a:number,b:number){
    return a + b
};
console.log(somar(10,10));

// Crie uma função chamada exibirID que receba um parâmetro id do tipo Union Type (string |
// number) e imprima a mensagem "O ID é: " + id no console.

type TipoID = number | string;

function exibirID(id: TipoID) {
    if (typeof id === "string") {
        console.log("O ID é: " + id.toUpperCase());
    } else {
        console.log("O ID multiplicado por 2 é: " + (id * 2));
    }
}

// Testando a função com ambos os tipos:
exibirID(64);      
exibirID("a3c5");  

// Na função exibirID da questão anterior, adicione uma verificação com typeof. Se o id for string,
// exiba em letras maiúsculas (toUpperCase()). Se for number, exiba o valor multiplicado por 2.

// Declare um array chamado dados usando anotação explicita que possa guardar uma mistura de
// elementos dos tipos string ou number (ex: nomes e códigos de identificação).

const dados: TipoID[] = ["girafa", "panda", 5, 5];
console.log(dados);

// Crie um objeto produto contendo nome ("Notebook") e preco (3500) por inferência. Explique o que
// acontece ao tentar atribuir a string "R$ 3500" ao campo preco.
const produto = {
    nome: "Notebook",
    preco: 3500
};

// produto.preco = "R$ 3500"; // Type 'string' is not assignable to type 'number'.

// Crie uma variável chamada statusPedido utilizando Literal Union Types que aceite exatamente e
// apenas três valores: "pendente", "aprovado" ou "cancelado"

type StatusPedido = "pendente" | "aprovado" | "cancelado";

let statusPedido: StatusPedido = "pendente";
console.log(statusPedido)

// Atribuição válida subsequente:
statusPedido = "aprovado";
console.log(statusPedido)

// Se tentar atribuir qualquer outro valor, o TypeScript gerará um erro:
// statusPedido = "enviado"; 
// Erro: Type '"enviado"' is not assignable to type 'StatusPedido'.