 /*
    =Métodos do objeto=

    um método basicamente é uma função guardada como propriedade. 

 ex:
    nomeCompleto(){return this.nome +' '+this.sobrenome}
 */

    const pessoa = {nome:'John',sobrenome:'Doe',idade:'50',corOlho:'azul',nomeCompleto(){return this.nome +' '+this.sobrenome}}
    console.log(pessoa.nomeCompleto())