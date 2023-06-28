let numtxt = document.getElementById('num');
let buttontxt = document.getElementById('add');
let fin = document.getElementById('final');
let resu = document.getElementById('acao')
let vet = [] 
function test(){
  
    
    if(numtxt.value.length == 0){
        alert('Digite um numero!');
    }
    if(numtxt.value < 0 || numtxt.value > 100 || numtxt.value == vet) {
    alert('Valor invalido ou já adicionado na lista')
    }else{
        
        let num = Number(numtxt.value);
        let opcao = document.createElement('option');
        opcao.text = `Valor ${num} adicionado.`;
        fin.appendChild(opcao)
        vet.push(num)
    
    }   
    }

function resultado() {
        vet.sort((a,b) => a-b)
        for(c in vet){
            
        }
        resu.innerHTML = `Ao todo, temos ${vet.length} números cadastrados.<br>`
        resu.innerHTML += `O maior valor informado foi ${vet[vet.length -1]}<br>`
        resu.innerHTML += `O menor valor informado foi ${vet[0]}<br>`
        resu.innerHTML += `Somando todos os valores, temos ${}`
    }