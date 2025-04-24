console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

// Promise is a built-in object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a way to handle asynchronous operations in a more manageable way than using callbacks. A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is fulfilled, it means that the asynchronous operation completed successfully and the Promise has a resulting value. When a Promise is rejected, 
// it means that the asynchronous operation failed and the Promise has a reason for the failure.   
// Async= Await is a syntax in JavaScript that allows you to write asynchronous code in a more synchronous way.
//  It is built on top of Promises and makes it easier to work with them. 
// The async keyword is used to define an asynchronous function, and the await keyword
//  is used to wait for a Promise to be resolved or rejected before continuing
// otuput order hten micro task macro task
// promose channing
