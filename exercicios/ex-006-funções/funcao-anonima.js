

let fun = function(v1,v2){return v1+v2}
///////////////////////////////////////////////
const f = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }
    return res
}
//////////////////////////////////////////////
const fu = new Function("v1","v2","return v1+v2") //função contrutor anônima
/////////////////////////////////////////////

console.log(fun(15,87))
console.log(f(4,5,7))
console.log(fu(10,5))