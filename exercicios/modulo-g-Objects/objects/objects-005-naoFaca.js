
// NÃO declare String, Numbers, e Booleans como objetos!!!!

/*
Quando uma variavel em JavaScript é declarada com a keyword "new" a variavel é criada como um objeto!
ex:
*/ 

x = new String(); // declara x como uma string objeto.
y = new Number(); // declara y como um number objeto.
z = new Boolean(); // declara z como um boolean objeto.

console.log(typeof x,y,z)

/*
EVITE string, number e boolean objetos, eles complicam o seu codigo alem de deixar o tempo de execução mais devagar.
*/