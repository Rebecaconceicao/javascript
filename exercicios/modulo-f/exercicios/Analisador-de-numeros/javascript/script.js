let numtxt = document.getElementById('num');
let buttontxt = document.getElementById('add');
let fin = document.getElementById('final');
let resu = document.getElementById('acao')
let vet = [] 
function test(){
    if(numtxt.value.length == 0){
        alert('Digite um numero!')
    }
    if(numtxt.value < 0 || numtxt.value > 100 || numtxt.value == vet.value) {
    alert('Valor invalido ou já adicionado na lista')
    }else{
        
        let num = Number(numtxt.value);
        let opcao = document.createElement('option')
        opcao.text = `Valor ${num} adicionado.`
        fin.appendChild(opcao)
        vet.push(num)
        resu.innerHTML = ""
        numtxt.value = ''
        numtxt.focus()

    }   
    }

function resultado() {
        if(vet == 0){
            alert('Adicione valores antes de finalizar!');
        }else{
            vet.sort((a,b) => a-b);
            let soma = 0
            let media = 0
        for(const c in vet){
           soma += vet[c] 
        }
        
        media = soma / vet.length;
        resu.innerHTML = `Ao todo, temos ${vet.length} números cadastrados.<br>`;
        resu.innerHTML += `O maior valor informado foi ${vet[vet.length -1]}<br>`;
        resu.innerHTML += `O menor valor informado foi ${vet[0]}<br>`;
        resu.innerHTML += `Somando todos os valores, temos ${soma}. <br>`;
        resu.innerHTML += `A media dos valores digitados é ${media}.`;
    }
        
    }