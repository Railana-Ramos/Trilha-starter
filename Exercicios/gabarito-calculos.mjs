export function calcularMedia(notas) {
    let soma = 0;


    for (const nota of notas) {
        soma += nota;
    }


    return soma / notas.length;
}


export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}