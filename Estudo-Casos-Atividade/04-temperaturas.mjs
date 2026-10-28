// Parte A: Uma rádio local apresenta um resumo do clima da semana (Parte A). Em outro quadro do programa, os ouvintes querem saber em quanto tempo atingem uma meta de economia (Parte B).
const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const temperaturas = [28, 31, 33, 29, 35, 30, 27];

// Exibir a temperatura de cada dia da semana e calcular a soma, a maior e a menor temperatura, o dia mais quente e quantos dias passaram de 30°C.
let soma = 0;
let maiorTemperatura = temperaturas[0];
let menorTemperatura = temperaturas[0];
let diaMaisQuente = dias[0];
let diasAcimaDe30 = 0;

for (let i = 0; i < dias.length; i++) {
  console.log(`${dias[i]}: ${temperaturas[i]}°C`);
  soma += temperaturas[i];

  if (temperaturas[i] > maiorTemperatura) {
    maiorTemperatura = temperaturas[i];
    diaMaisQuente = dias[i];
  }

  if (temperaturas[i] < menorTemperatura) {
    menorTemperatura = temperaturas[i];
  }

  if (temperaturas[i] > 30) {
    diasAcimaDe30++;
  }
}

const media = soma / dias.length;
console.log(`Média das temperaturas: ${media.toFixed(1)}°C`);
console.log(`Maior temperatura: ${maiorTemperatura}°C (${diaMaisQuente})`);
console.log(`Menor temperatura: ${menorTemperatura}°C`);
console.log(`Dias com temperatura acima de 30°C: ${diasAcimaDe30}`);


// Parte B: cofrinho (while)


const meta = 1000;
const deposito = 150;
const rendimento = 0.01;
let saldo = 0;
let meses = 0;

while (saldo < meta) {
  saldo += saldo * rendimento;
  saldo += deposito;
  meses++;
  console.log(`Mês ${meses}: Saldo atual: R$ ${saldo.toFixed(2)}`);
}

console.log(`A meta de R$ ${meta.toFixed(2)} foi atingida em ${meses} meses.`);
