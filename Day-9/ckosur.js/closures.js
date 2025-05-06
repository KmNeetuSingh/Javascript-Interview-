let num = 1234
function reve (num){
    let s = 0
    while(num > 0){
        let digit = num %10
        s = s*10+ digit
        num = Math.floor(num/10)
    }
    return s
}
console.log(reve(num))
console.log(reve(a))