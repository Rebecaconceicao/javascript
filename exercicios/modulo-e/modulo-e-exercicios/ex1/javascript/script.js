 
function contador(){
    var inicio = document.getElementById("ini");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("pas");
    var resp = document.getElementById("acao");
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
      alert("Preecha todas as caixas!")
      resp.innerHTML = "IMPOSSIVEL contar."
    }else{
      resp.innerHTML = "Contando..."
      const i = Number(inicio.value)
      const f = Number(fim.value)
      const p = Number(passo.value)
      if(p == 0){
        alert("Impossivel de contar, considerando passo 1")
        p = 1}
      if(i <= f){
        for(let c = i; c <= f; c+=p){
          resp.innerHTML +=`${c} \u{1F62D}`
        }
      }else{
        for(let c = i; c>= f;c -=p){
          resp.innerHTML += `${c} \u{1F62D}`
        }
      
      }
      resp.innerHTML += "Terminei!"  
    }
    }
    