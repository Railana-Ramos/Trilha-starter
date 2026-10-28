const cafe = 6.50;
const paoDeQueijo = 4.00;
const coxinha = 5.00;
const cliente = 'Ana';
const taxaServico = 0.10; // 10% de taxa de serviço
const quantidadeCafe = 2;
const quantidadeCoxinha = 1;
const quantidadePaoDeQueijo = 3;
let ganhaBrindesAcimaDe25; 
let fidelidade = false;

function calcularTotal(pedido1, pedido2, pedido3, quantidade1, quantidade2, quantidade3) {
    const totalCafe = pedido1 * quantidade1;
    const totalPaoDeQueijo = pedido2 * quantidade2;
    const totalCoxinha = pedido3 * quantidade3;
    return totalCafe + totalPaoDeQueijo + totalCoxinha;
}



const total = calcularTotal(cafe, paoDeQueijo, coxinha, quantidadeCafe, quantidadePaoDeQueijo, quantidadeCoxinha);

if (total >= 25 && fidelidade === true) {
    ganhaBrindesAcimaDe25 = true;
} else {
    ganhaBrindesAcimaDe25 = false;
}



console.log(`Cliente: ${cliente}`);
console.log(`Total da comanda: R$ ${total.toFixed(2)}`);
console.log(`Taxa de serviço (10%): R$ ${(10 * total / 100).toFixed(2)}`);
console.log(`Total: R$ ${(total + (total * taxaServico)).toFixed(2)}`);
console.log(`Total por pessoa (2 pessoas): R$ ${((total + (total * taxaServico)) / 2).toFixed(2)}`);
console.log(`Ganha brindes acima de R$ 25,00: ${ganhaBrindesAcimaDe25 ? 'True' : 'False'}`);
console.log(`A quantidades de paes é par? ${quantidadePaoDeQueijo % 2 === 0 ? 'True' : 'False'}`);
console.log (typeof cliente, typeof quantidadePaoDeQueijo, typeof ganhaBrindesAcimaDe25);


// PLABO B 
// Expressão                   Resultado              Tipo de dado
// '5' + 3                     '53'                   string
// '5' - 3                     2                      number
// 10 % 3                      1                      number
// 5 == '5'                    true                   boolean
// 5 === '5'                   false                  boolean
// true && false               false                  boolean
// !(4 > 2)                    false                  boolean

// ★  Desafio extra (opcional)
// Mude clienteFidelidade para false e descubra o que muda na saída. Depois, acrescente um terceiro item ao pedido.



