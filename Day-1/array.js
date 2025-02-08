// // // Function 1: Filter adults
// // function filterAdults(users) {
// //     return users.filter(user => user.age >= 18);
// // }

// // // Function 2: Map user names
// // function mapUserNames(users) {
// //     return users.map(user => user.name);
// // }

// // // Function 3: Group users by city
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