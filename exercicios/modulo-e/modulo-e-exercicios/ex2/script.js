function tabuada(){
    let numtxt = document.getElementById("tabu");
    let resutxt = document.getElementById("resu");
    
    if(numtxt.value.length == 0){
        alert('Digite um numero!')
    }else{
      let num = Number(numtxt.value);  
      resutxt.innerHTML = ""
      for(c = 1; c <= 10; c++){
        let tab = document.createElement('option');
        tab.text = `${num} X ${c} = ${num*c}`
        resutxt.appendChild(tab);
        tab.value = `tab${c}`
      }
    }
}