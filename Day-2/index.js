// function is a block of code that perform a specific 0r task
var a1 = () => {
    console.log('Hello World');
}
// Hello World
//  A funciton that is passed as an argument to another funciton so that  it can be used later bec alled it callback function.
// A callback function is a function that is passed as an argument to another function.
let a = function(){
    return ("Hello World");
}
function b(x){
    console.log(x());
    // console.log(a);
}
// b(a);

// A function that takes another function as an argument or returns a function as a result is called a higher-order function.
// So at here function b is a higher order function because it takes another function as an argument. 
let call = function(){
    console.log("Hello World");
}
let b1 = function(x){
    x();
}
b1(call);

// lets come to earn about the hof .map , .filter, .reduce,.foreach
let arr =[1,2,3,4,5,6,7,8,9,10];
// map is a higher order function that takes a function as an argument and returns a new array.
let aar = arr.map((x) => x*2);
console.log(Object.fromEntries(arr.map((x) => [x, x*2])));
console.log(arr.filter((x) => x%2 === 0));
console.log(arr.reduce((acc, x) => acc+x, 1));
arr.forEach((x) => console.log(x*2));
// // calculate the total price of product that are inStock and have a price greater than 10

let products = 
[
  {name : "Apple",price : 13, inStock : true},
  {name : "Banana",price : 9, inStock : true},
  {name : "Chery",price : 12, inStock : true},
  {name : "Grape",price : 15, inStock : false}
];
let Ans = products.filter((x) => x.instock === true && x.price >10).map((x) => x.price).reduce((acc,x) =>acc+x , 0);
console.log(Ans);

// let ans = products.filter(ele => ele.inStock == true && ele.price > 10).map(ele => ele.price).reduce((acc,curr)=> acc + curr,0)
// console.log(ans);


// Given an array of numbers, find the sum of the squares of the even numbers.

const numbers = [1, 2, 3, 4, 5, 6];
// Output: 56
let ans = numbers.filter(el => el%2 == 0).map(el => el*el).reduce((acc,curr) => acc+curr, 0)
 console.log(ans)
// Given an array of numbers, find the product of all the odd numbers.

const numbers2 = [1, 2, 3, 4, 5];

let ans2 = numbers2.filter(ele => ele % 2 == 1).reduce((acc,curr)=> acc*curr,1);
// console.log(ans2)

// Given an array of numbers, find the average of the squares of all the numbers that are greater than 10.

let numbers3 = [5, 12, 8, 15, 20,11];

let ans3 = numbers3.filter(ele => ele  >  10).map(ele => ele * ele)
// console.log(ans3)


let avg = ans3.reduce((acc,curr) => acc + curr, 0)
// console.log(avg)
// console.log(avg/ans3.length)



// // // Function 1: Filter adults
// // function filterAdults(users) {
// //     return users.filter(user => user.age >= 18);
// // }

// // // Function 2: Map user names
// // function mapUserNames(users) {
// //     return users.map(user => user.name);
// // }

// // // Function 3:G roup users by city
// // function groupUsersByCity(users) {
// //     return users.reduce((acc, user) => {

// //         if (!acc[user.city]) {
// //             acc[user.city] = [];
// //         }
// //         acc[user.city].push(user);
// //         return acc;
// //     }, {});
// // }

// // // Example usage
// // const users = [
// //     { id: 1, name: "Alice", age: 17, city: "New York" },
// //     { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
// //     { id: 3, name: "Charlie", age: 30, city: "New York" },
// //     { id: 4, name: "Diana", age: 22, city: "Chicago" },
// // ];

// // console.log(filterAdults(users));
// // // Expected output: [{ id: 2, name: "Bob", age: 25, city: "Los Angeles" }, { id: 3, name: "Charlie", age: 30, city: "New York" }, { id: 4, name: "Diana", age: 22, city: "Chicago" }]

// // console.log(mapUserNames(users));
// // // Expected output: ["Alice", "Bob", "Charlie", "Diana"]

// // console.log(groupUsersByCity(users));
// // // Expected output:
// // // {
// // //   "New York": [
// // //       { id: 1, name: "Alice", age: 17, city: "New York" },
// // //       { id: 3, name: "Charlie", age: 30, city: "New York" }
// // //   ],
// // //   "Los Angeles": [{ id: 2, name: "Bob", age: 25, city: "Los Angeles" }],
// // //   "Chicago": [{ id: 4, name: "Diana", age: 22, city: "Chicago" }]
// // // }

// // let num = [1,2,3,4,5]
// // const a = num.map( el => el * el);
// // console.log(a)
// // const as = num.filter(el => el > 2)
// // console.log(as)
// // // // Function 3: Group users by city
// // // function groupUsersByCity(users) {
// //     return users.reduce((acc, user) => {

// //         if (!acc[user.city]) {
// //             acc[user.city] = [];
// //         }
// //         acc[user.city].push(user);
// //         return acc;
// //     }, {});
// // }

//  const users = [
//      { id: 1, name: "Alice", age: 17, city: "New York" },
//      { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
//      { id: 3, name: "Charlie", age: 30, city: "New York" },
//     { id: 4, name: "Diana", age: 22, city: "Chicago" },
//  ];






// function byUsers(users){
//     return users.reduce((acc,user)=> {
//         if(!acc[user.city]){
//             acc[user.city] = []
//         }
//         acc[user.city].push(user)
//         return acc
//     }, {}) 
// }
// console.log (byUsers(users))
function buUser(users){
    return users.reduce((acc,user)=>{
        if (!acc[user.city]){
            acc[user.city] = [];

        }
        acc[user.city].push(user)
        return acc
    },{})
}
console.log(buUser(users))













