function  reverserd1(num){
    let rev = 0
    while(num >0){
        let digit = num % 10
        rev = rev *10 + num %10
        num = Math.floor(num / 10)

    }
    return rev
}
console.log(reverserd1(12345)) //54321
console.log(reverserd1(100)) //1