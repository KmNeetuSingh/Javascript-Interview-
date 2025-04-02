function sayGoodbye() {
    console.log("Good bye! ", this);
  }
  
  function sayHello() {
    console.log("Helloo! ", this);
    sayGoodbye();
  }
  
  sayHello();
  
//   Settimeout and setinterval
// both are asunhrounous functions in javascript and they are managed by the eventloop and web api
// setTimeout is used to execute a function after a specified time interval
// setInterval is used to execute a function repeatedly after a specified time interval
console.log("Start")
 let a = setTimeout(()=> {
console.log("after 1 second")
},1000)
console.log("End")
clearTimeout(a) 
// clearTimeout is used to cancel a timeout that was previously established by calling setTimeout
setInterval(()=> {
    console.log("after 1 second")
},1000)
// clearInterval is used to cancel a timeout that was previously established by calling setInterval