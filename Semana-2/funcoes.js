// Criando uma função simples
function saudar() {
    console.log("Hello, World!")
}


saudar()


// Imagine que você deseja acrescentar um texto ao resultado de uma variável e exibí-los
function saudar2(nome) {
    console.log(`Olá ${nome}`)
}
saudar2("Douglas")


// Imagine que você deseja criar uma função que exiba nome e idade justos
function apresenta(nome, idade) {
    console.log(`${nome} tem ${idade} anos`)
}
apresenta("Douglas", 50)


// Será que a ordem dos parâmetros importa?
function apresenta2(nome, idade) {
    console.log(`${nome} tem ${idade} anos`)
}
apresenta2(50, "Douglas")


// Construido a função para receber parêmetros como ojetos (a ordem dos parâmetros poderá ser trocada na execução)
function apresenta3({nome, idade}) {
    console.log(`${nome} tem ${idade} anos`)
}
apresenta3({idade: 50, nome: "Douglas"})


// Imagine que você deseja armazenar em uma variável que resultado que acontece na execução (return)
function dobro(numero) {
    return numero * 2
}
const resultado = dobro(5)
console.log(resultado)


// 01 - Transforme o exercíco de ontem em uma função
/* 02 - crie uma função calcularIMC que recebe do usuário peso (kg) e altura (m) eretorna o IMC.
 Fórmula: IMC = peso / (altura × altura). Mostre o resultado
de 70 kg e 1,75 m com 2 casas decimais.
*/




