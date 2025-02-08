// // // // // // // Array Flatenning 
// // // // // // Write a function flattenArray(nestedArray, depth) that takes a nested array (e.g., [[1, 2], 3, [4, [5]]]) and returns a new array with all sub-arrays flattened up to the specified depth. If depth is not provided, the array should be completely flattened.

// // // // // // Example:

// // // // // // flattenArray([1, [2, [3, [4, 5]]]], 2);
// // // // // // // Expected output: [1, 2, 3, [4, 5]]

// // // // // // flattenArray([1, [2, [3, [4, 5]]]]);
// // // // // // // Expected output: [1, 2, 3, 4, 5]
// // // // // // Requirements:

// // // // // // Do not use built-in methods like Array.prototype.flat() or similar (if that’s a requirement you want to impose).
// // // // // // Handle edge cases (e.g., empty arrays, no depth, depth = 0, etc.).
// // // // // function flatten(Arr, depth = Infinity) {
// // // // //     let result = Arr.slice();

// // // // //     for (let i = 0; i < depth; i++) {
// // // // //         let hasNestedArray = false; 
// // // // //         const tempResult = [];

// // // // //         for (let item of result) {
// // // // //             if (Array.isArray(item)) {
// // // // //                 hasNestedArray = true; 
// // // // //                 tempResult.push(...item); // Flatten it one level
// // // // //             } else {
// // // // //                 tempResult.push(item); // Keep non-array elements as-is
// // // // //             }
// // // // //         }

// // // // //         result = tempResult;

// // // // //         // If no nested arrays were found, break early
// // // // //         if (!hasNestedArray) {
// // // // //             break;
// // // // //         }
// // // // //     }

// // // // //     return result;
// // // // // }

// // // // // // Test cases
// // // // // console.log(flatten([1, [2, [3, [4, 5]]]], 2)); // Expected output: [1, 2, 3, [4, 5]]
// // // // // console.log(flatten([1, [2, [3, [4, 5]]]]));    // Expected output: [1, 2, 3, 4, 5]



// // // // // // Object Flaterring
// // // // // function flattenObject(obj, depth = Infinity, currentDepth = 0, parentKey = "") {
// // // // //     if (depth === 0 || currentDepth >= depth) {
// // // // //         return { [parentKey]: obj }; // Stop flattening and return as-is
// // // // //     }

// // // // //     const result = {};

// // // // //     for (const key in obj) {
// // // // //         if (obj.hasOwnProperty(key)) {
// // // // //             const newKey = parentKey ? `${parentKey}.${key}` : key;

// // // // //             if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
// // // // //                 // Recursively flatten nested objects
// // // // //                 Object.assign(
// // // // //                     result,
// // // // //                     flattenObject(obj[key], depth, currentDepth + 1, newKey)
// // // // //                 );
// // // // //             } else {
// // // // //                 // Assign primitive values or arrays
// // // // //                 result[newKey] = obj[key];
// // // // //             }
// // // // //         }
// // // // //     }

// // // // //     return result;
// // // // // }

// // // // // // Test cases
// // // // // const nestedObject = {
// // // // //     a: {
// // // // //         b: {
// // // // //             c: {
// // // // //                 d: 1,
// // // // //                 e: 2,
// // // // //             },
// // // // //             f: 3,
// // // // //         },
// // // // //         g: 4,
// // // // //     },
// // // // //     h: 5,
// // // // // };

// // // // // console.log(flattenObject(nestedObject, 2));
// // // // // // Expected output: { "a.b.c": { d: 1, e: 2 }, "a.b.f": 3, "a.g": 4, h: 5 }
// // // // // 
// // // // function greet(name){
// // // //     console.log(`${name}`)


// // // // }
// // // // greet("neetu")
// // // function greet (name) {
// // //     return function (){
// // //         console.log(`${name}`)
// // //     }
// // // }

// // // function isPalindrome(str){
// // //     const rev = str.split('').reverse().join('')
// // //     const str === rev
// // // // }

// // function isPalindrome (str) {
// //     const reversed = str.split(' ').reverse().join('')
// //     return str === reversed
// // }
// // console.log(isPalindrome("add"))
// function isPalindrome(str){
//     const reversed=str.split('').reverse().join('')
//     return str === reversed
// }
// console.log(isPalindrome("hello"))

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('')
    return str === reversed
}
console.log(isPalindrome("asaaa"))
