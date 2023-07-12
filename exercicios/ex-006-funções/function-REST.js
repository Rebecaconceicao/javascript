//... => Parametro rest//
function soma(...valores){
    let tam = valores.length
    let res = 0
    for(let i = 0; i< tam;i++){
        res += valores[i]
    } 
    return res
}

function soma1(...valores){
    let res = 0
    for(let v of valores){
        res+= v
    } 
    return res
}


console.log(soma(8,14,33,21,57))
console.log(soma1(8,14,33,21,57))