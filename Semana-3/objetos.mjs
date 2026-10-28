//Aula 12 - Objetos
const aluno = {
    nome: 'Ana',
    idade: 19,
    curso: 'Ciência da Computação'
};
console.log(aluno.nome);
console.log(aluno.idade);


/*
const aluno                     <>  Variável que se refere ao objeto
{ ... }                         <>  Conteúdo do Objeto
 nome: "Ana"                    <>  Propriedade nome com o valor Ana (do tipo string)
 idade: 19                      <>  Propriedade com o valor 19     (do tipo number)
 curso: 'Ciência da Computação' <>  Propriedade com o valor 'Ciência da Computação' (do tipo string)
*/


// Mudando o valor de uma propriedade


aluno.idade = 20;
console.log(aluno.idade);
console.log(aluno);


//Criando a classe Aluno


class Aluno {
    nome = "";
    idade = 0;
}


const aluno1 = new Aluno()
aluno1.nome = 'Ana';
aluno1.idade = 19;


console.log(aluno1)

const aluno2 = new Aluno()
aluno2.nome = 'Bruno';
aluno2.idade = 20;

console.log(aluno2)