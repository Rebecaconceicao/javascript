//Na vida real, um carro é um OBJETO.
//um carro possui PROPRIEDADES, como peso e cor.
// um carro possui MÉTODOS, como andar e parar.

/*
OBJETO: carro   // const carro = {}

PROPRIEDADES: carro.tipo = 'Fiat', carro.model = '500', carro.peso = '850Kg', carro.cor = 'branco'  // {tipo:'Fiat',modelo:'500'}

MÉTODOS: carro.ligar(), carro.dirigir(), carro.freiar(), carro.parar()  // 

Objetos são variaveis, porém, elas podem guardas varios valores.
ex: */

const carro = {tipo:'Fiat',modelo:'500',cor:'branco'};

//todos os carros possuem as mesmas propriedades, porém possuem valores diferentes de carro para carro.
const carro1 = {tipo:'Volvo',modelo:'XC60',cor:'preto',ligar(seg=0){this.vel +=seg}};
const carro2 = {tipo:'Volkswagen',modelo:'Gol',cor:'vermelho'}

//todos os carros possuem os mesmos métodos porém eles são executados em tempos diferentes.
const carro3 = {tipo:'Honda',modelo:'Civic',cor:'prata',ligar(seg=9){this.vel +=seg}}
const carro4 = {tipo:'Toyota',modelo:'Corolla',cor:'branco',ligar(seg=5){this.vel +=seg}}

// Os valores são escritos em pares de nome : valor (nome e valor são separados por dois pontos :).

//Dica: é de boa pratica declarar object com a keyword: const
