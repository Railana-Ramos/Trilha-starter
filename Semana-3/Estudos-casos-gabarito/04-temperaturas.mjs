// Parte A: laço for percorrendo um array
const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const temperaturas = [28, 31, 33, 29, 35, 30, 27];
let soma = 0;
let maior = temperaturas[0];
let menor = temperaturas[0];
let diaMaisQuente = dias[0];
let diasAcimaDe30 = 0;
for (let i = 0; i < temperaturas.length; i++) {
  const t = temperaturas[i];
  console.log(`${dias[i]}: ${t}°C`);
 
  soma = soma + t;
  if (t > maior) {
    maior = t;
    diaMaisQuente = dias[i];
  }
  if (t < menor) {
    menor = t;
  }
  if (t > 30) {
    diasAcimaDe30++;
  }
}
const media = soma / temperaturas.length;
console.log('');
console.log(`Média da semana: ${media.toFixed(1)}°C`);
console.log(`Maior: ${maior}°C (${diaMaisQuente})`);
console.log(`Menor: ${menor}°C`);
console.log(`Dias acima de 30°C: ${diasAcimaDe30}`);
