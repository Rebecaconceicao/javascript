//Propriedades de objetos o par 'nome:valor' objeto em JavaScript é chamado de propriedade

/* Propriedade (property) =------------------= Valor da Propriedade (property Value)
     nome                  :                      Jonh
     sobrenome             :                      Doe
     idade                 :                      50        
     corOlho               :                      azul
*/

const pessoa = {nome:'Jonh',sobrenome:'Doe',idade:'50',corOlho:'azul'}
//  propriedade: 'nome' , 'sobrenome' , 'idade' , 'corOlho'

//  valor da propriedade: 'John', 'Doe', '50', 'azul'

const pessoa1 = {nome:'Maria', sobrenome:'Carmo',idade:'98',corOlho:'preto'}
//  propriedade: 'nome' , 'sobrenome' , 'idade' , 'corOlho'

// valor da propriedade: 'Maria', 'Carmo', '98', 'preto'

//==============================================================================================================
//Acessando propriedade do objeto

/* Você pode acessar de duas maneiras

1- nomeDoObjeto.nomeDaPropriedade
2- nomeDoObjeto['nomeDaPropriedade']
*/

pessoa.sobrenome
pessoa['sobrenome']

console.log(pessoa.sobrenome)
console.log(pessoa['sobrenome'])