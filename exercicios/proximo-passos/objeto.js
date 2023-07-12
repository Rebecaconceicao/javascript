let amigo = {
    nome:'Maria',
    peso: 85.7,
    idade: 93,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(3)

console.log(`${amigo.nome} está pesando ${amigo.peso}`)