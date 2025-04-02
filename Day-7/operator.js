// Turthy and Falsy values in JS
// 1. Falsy values null, undefined, 0, NaN, "", false
// 2. Truthy values: all other values are truthy values
let a = 'asa'
let b = 'aad'
let c = "rahul"
let z = a|| b || c
console.log(z) 
// why it is happened it is happend because of the logical OR operator its first looking for the first truthy value if get it will 
// return that value otherwise it will look for the second truthy value if get it will return that value otherwise
//  it will look for the third truthy value if get it will return that value otherwise it will return the last falsy value
// 1. Logical OR operator (||)
// 2. Logical AND operator (&&)
// 3. Logical NOT operator (!)
let x = "Neetu"
let y = "Nitesh"
let l= "Rahul"
let r = x && y && l
console.log(r)  
// why itis happened it is happend because of the logical AND operator its first looking for the first truthy value if get it will
// return that value otherwise it will look for the second truthy value if get it will return that value otherwise
// it will look for the third truthy value if get it will return that value otherwise it will return the last falsy value
// Nullish coelising operator (??)
// if first  value is null or undefined then it will return first value otherwise it will return the second value
let p = null
console.log(p ?? "Neetu") 
