export function calcularTotal(vendas) {
    let total = 0;
    for (const venda of vendas) {
        total += venda;
    }
    return total;
}


export function calcularMedia(vendas) {
    let soma = 0;


    for (const venda of vendas) {
        soma += venda;
    }


    return soma / vendas.length;
}