function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - fano.value;
        let genero = ''
        var img = document.getElementById('foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade < 14){
                img.setAttribute('src','crianca-m.jpg')
            }else if(idade < 21){
                img.setAttribute('src','jovem-m.jpg')
            }else if(idade < 60){
                img.setAttribute('src','adulto-m.jpg')
            }else{
                img.setAttribute('src','idoso-m.jpg')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade < 14) {
                img.setAttribute('src','crianca-f.jpg')
            }else if(idade < 21) {
                img.setAttribute('src','jovem-f.jpg')
            }else if(idade <60) {
                img.setAttribute('src','adulto-f.jpg')
            }else {
                img.setAttribute('src','idoso-f.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}