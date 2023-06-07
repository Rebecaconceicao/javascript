function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem') 
    let data = new Date()
    let hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'imagens/manha.jpg'
    }else if (hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'imagens/tarde.jpg'
    } else {
        msg.innerHTML += 'Boa noite!'
        img.src = 'imagens/noite.jpg'
    }
}