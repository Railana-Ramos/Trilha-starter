let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

nota = 6; 
if (nota >= 7) {
    console.log("Aprovado");
}else if (nota >= 4) {
    console.log("Recuperação");
}else {
    console.log("Reprovado");
}

nota = 5; 
if (nota >= 7) {
    console.log("Aprovado");
}else if (nota >= 4) {
    console.log("Recuperação online");
}else if (nota >= 2) {
    console.log("Recuperação presencial");
} else {
    console.log("Reprovado");
}

let opcao = 1; 
if (opcao === 1) {
    console.log("Hamburger");
} else if (opcao === 2) {
    console.log("Pizza");
} else if (opcao === 3) {
    console.log("Salada");
} else {
    console.log("Opção inválida");
}

// switch case

opcao = 2;
switch (opcao) {
    case 1:
        console.log("Hamburger");
        break;
    case 2:
        console.log("Pizza");
        break;
    case 3:
        console.log("Salada");
        break;
    default:
        console.log("Opção inválida");
}