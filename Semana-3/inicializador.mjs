/* Quando precisamos que cada novo objeto assuma valores diferentes para alguns atributos
Faz sentido usar um inicializador, nesse caso um "constructor" */


class Lampada {
    comodo;
    ligada = false;


    constructor(comodo) {
        this.comodo = comodo;
    }
}


const sala = new Lampada("Sala");
const quarto = new Lampada("Quarto");


console.log(`${sala.comodo} acesa: ${sala.ligada}`);
console.log(`${quarto.comodo} acesa: ${quarto.ligada}`);


