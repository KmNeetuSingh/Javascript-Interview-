let obj = {
  a: {
    name: ["as", "sa"],
    b: {
      class: ["asa", 2],
    },
    c: {
      roll: [1, 2, 3],
    },
  },
};
// console.log(obj)
// let {a:{b :{class :z},c}} = obj;
let {a :{b :{class : z}, c : {roll}}} = obj
console.log(z)
  