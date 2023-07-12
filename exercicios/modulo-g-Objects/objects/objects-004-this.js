/*

Em JavaScript a keyword 'this' refere a um objeto, que tipo de objeto depende como this foi chamado.
A keyword 'this' refere a tipos diferentes de objetos dependendo de como for usada.

*/

/*
- Em um método de objeto this refere ao objeto.
- Sozinho this se refere ao objeto global.
- Em uma função this refere ao objeto global.
- Em uma função em strict mode, this é indefinido.
- Em um evento this refere ao elemento que recebe o evento.
- Métodos como call(), apply() e bind() this pode se referir a qualquer objeto.
*/

const pessoa = {nome:'John',sobrenome:'Doe',idade:'50',corOlho:'azul',nomeCompleto(){return this.nome +' '+this.sobrenome}}


/*
Em uma definição de função, this refere ao 'dono' da função, no exemplo acima, this é a pessoa objeto que é 'dona' da função 'nomeCompleto' em outras palavras, 'this.nome' significa a propriedade do objeto: nome.
*/

// Acessando Métodos de Objetos
/*
você pode acessar um método de objeto seguindo a sintax:
- nomeDoObjeto.nomeDoMétodo()
ex:
*/
nome = pessoa.nomeCompleto();
console.log(nome)


//Dica: Se você se esqueçer do parenteses '()' vai retorna definição de função e não o resultado.
//ex abaixo:
console.log(pessoa.nomeCompleto) //diferença do parenteses all hail parenteses!