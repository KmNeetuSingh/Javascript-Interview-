// declare 
let neetu ;
// initialize
neetu = "Neetu";
console.log(neetu); // Neetu
// declare and initialize
let Name = "Neetu";
console.log(Name); // Neetu
// reassign
neetu = "Neetu Singh"
console.log(neetu); // Neetu Singh
// Data Types 
// // Primitive data types(values type)
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// // Non-Primitive Data type(Reference type)

// 1.object
// 2.Array
// 3.Function

// objectFactory('Raj', 26) is expected to return {Raj: 26}
// objectFactory('Vijay', 24) is expected to return {Vijay: 24}
function objectFactory(fname, age) {
    let obj = {};
    obj[fname] = age 
  
    // your code ends
    return obj;
  }
  console.log(objectFactory('Raj' , 21))
  let feeling = {
    addData : function(name, feel) {
      this[name] = feel;
    }
  }
  feeling.addData('happy', 'bad');
  feeling.addData('happy', 'good');
  feeling.addData('happy', 'good');
  feeling.addData('happy', 'great');
  console.log(feeling);
  let feel = {
    asd : function (same , feel) {
      this[Symbol(same)] = feel;
    }
  }
    feel.asd('happy', 'bad');
    feel.asd('asd', 'good'); 
    feel.asd('happy', 'bad');
    feel.asd('happy', 'good');   
console.log(feel)
    