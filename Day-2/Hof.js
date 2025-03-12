const users = [
  { id: 1, name: "Alice", age: 17, city: "New York" },
  { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 30, city: "New York" },
  { id: 4, name: "Diana", age: 22, city: "Chicago" },
];
// function filters adults 
function filterAdults(users){
  return users.filter(user => user.age >= 18)
}
console.log(filterAdults(users))
// // // Function 2: Map user names
function mapUserNames(users){
    return users.map(user => user.name)
}
function a(users){return }
// Find all users who are above 18 years old.
// 2️⃣ Get an array of all user names.
// 3️⃣ Find the total number of users living in New York.
// 4️⃣ Check if there’s any user from Los Angeles.
// 5️⃣ Find the user with the highest age.
// 6️⃣ Find the user with the lowest age. 
function ab18(users){
    return users.filter(user => user.age >= 18)
}
console.log(ab18(users))

let AS = users.map(user => user.name)
console.log(AS) 
let totalY = users.filter (user => user.city === "Los Angeles")
console.log(totalY.length)
let anyL = users.some(user => user.city === "Los Angeles")
console.log(anyL)
let highA  = users.reduce((acc, user) => {
    if(acc.age < user.age){
        return user
    }
    return acc
}, users[0])
// Function 3:Group users by city
let groupUsersByCity = users.reduce((acc, curr) => {
    if (!acc[curr.city]){
        acc[curr.city] = [];
    }
    acc[curr.city].push(curr);
    return acc;
},{})
console.log(groupUsersByCity)


function alpha() {
    let a = 24;
    function beta() {
      console.log(a);
    }
    beta();
  }
  
  alpha();














  function a (){
    let b = 244;
    function b2(){
        console.log(b)
    }
    b2()

  }
  a();