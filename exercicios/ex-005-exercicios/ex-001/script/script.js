function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem') 
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom,#A0DBF2,#F2CD5C,#F2AF5C,#F2845C,#F28177)'
    }else if (hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to top, #023E73, #F2BD1D,#F28705,#D95323,#BF5454)'
    } else {
        msg.innerHTML += ' Boa noite!'
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to top,#591EBF,#47765A,#203958,#162845,#010207)'
    }
}