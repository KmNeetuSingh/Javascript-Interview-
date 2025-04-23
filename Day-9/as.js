input = " 1,2,3,4 "
let [one, two, three, four] = input.trim().split(",").map(Number)
 one = one*2
 two = two+2
 three = three-3
 four = four * 4
 let sum  = one+ two+ three +four
 console.log(sum)
