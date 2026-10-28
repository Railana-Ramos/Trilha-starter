// O pet shop Patas & Cia atende cachorros e gatos do bairro. Hoje, o cadastro dos animais é feito em fichas
// de papel, e a recepcionista calcula o preço do banho de cabeça, consultando uma tabela colada no balcão.
// No fim do dia, ela soma tudo na calculadora.
// A dona do pet shop quer um pequeno programa que guarde os dados de cada pet, mostre uma
// apresentação de cada um, calcule o preço do banho e some o valor da agenda do dia. Você foi chamado
// para fazer a primeira versão.

// Nome     Espécie  Idade (anos) Peso (kg) Tutor(a)
// Thor     cachorro    3           12.5       Carla
// Mia      gato        2           4.2        Rafael
// Paçoca   cachorro    7           8          Juliana
// Bidu     cachorro    5           25         Marcos

// Tabela de preços do banho
// Peso do pet                  Preço do banho
// Até 10 kg                    R$ 50,00
// Acima de 10 kg até 20 kg     R$ 70,00
// Acima de 20 kg               R$ 90,00

class Pet {
    nome;
    especie;
    idade;
    peso;
    tutor;

    constructor (nome, especie, idade, peso, tutor){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.peso = peso;
        this.tutor = tutor;
    }
    apresentar() {
        console.log(`${this.nome} (${this.especie} ${this.idade} anos) - Tutor(a): ${this.tutor}`)
    }
    calcularPrecoBanho() {
        if (this.peso <= 10){
            console.log(`O banho de ${this.nome} é de R$50,00`)
            return 50.00;
        } else if (this.peso > 10 && this.peso <= 20){
            console.log(`O banho de ${this.nome} é de R$70,00`)
            return 70.00;
        } else {
            console.log(`O banho de ${this.nome} é de R$90,00`)
            return 90.00;
        }
    }
    fazerAniversario(){
        this.idade+=1
        console.log (this.apresentar())
    }
}

const thor = new Pet ('Thor', 'Cachorro', 3, 12.5, 'Carla')
const mia = new Pet ('Mia', 'Gato', 2, 4.2, 'Rafael')
const pacoca = new Pet ('Paçoca', 'Cachorro', 7, 8, 'Juliana')
const bidu = new Pet ('Bidu', 'Cachorro', 5, 25, 'Marcos')

// console.log(thor.nome, bidu.peso)

// thor.apresentar()

// mia.apresentar()
// bidu.calcularPrecoBanho()

const agenda = [thor,mia,pacoca,bidu]

let totalDia = 0;

for (const pet of agenda){
    pet.apresentar();
    pet.calcularPrecoBanho()
    totalDia+=pet.calcularPrecoBanho();
}
console.log (`O valor total do dia é de R$${totalDia}`)

pacoca.apresentar()
pacoca.fazerAniversario()

let totalCachorros = 0;
let totalGatos = 0;

for (const pet of agenda) {
    if (pet.especie.toLowerCase() === 'cachorro') {
        totalCachorros++;
    } else if (pet.especie.toLowerCase() === 'gato') {
        totalGatos++;
    }
}

console.log(`Cachorros: ${totalCachorros} | Gatos: ${totalGatos}`);