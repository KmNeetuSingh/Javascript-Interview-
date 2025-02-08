// // // // // // // // // // // // // const person = {
// // // // // // // // // // // // //     name :"neetu",
// // // // // // // // // // // // //     about :function(m){
// // // // // // // // // // // // //         console.log(`${this.name} ${m}`);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // // }
// // // // // // // // // // // // // person.about("Good")

// // // // // // // // // // // // // const person2 ={
// // // // // // // // // // // // //     name : "Aditi"
// // // // // // // // // // // // // }
// // // // // // // // // // // // // person.about.call(person2, "Goood")
// // // // // // // // // // // // // person.about.apply(person2, ["gooo"])

// // // // // // // // // // // // // const arr = person.about.bind(person2,"Gooo for ")
// // // // // // // // // // // // // arr()

// // // // // // // // // // // // // /Desturcturing 
// // // // // // // // // // // // const person3 ={
// // // // // // // // // // // //     name :"Rahul",
// // // // // // // // // // // //     age :12,
// // // // // // // // // // // //     about :{ data :
// // // // // // // // // // // //         "I am Software Engineer"
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // // // const {name , age} = person3; 
// // // // // // // // // // // // const shallow = Object.assign({}, person3)
// // // // // // // // // // // // shallow.about.data  = "Engineer"
// // // // // // // // // // // // console.log(shallow)
// // // // // // // // // // // // console.log(person3)
// // // // // // // // // // // // const deep= JSON.parse(JSON.stringify(person3))
// // // // // // // // // // // // deep.about.data = "Hello World"
// // // // // // // // // // // // console.log(deep)
// // // // // // // // // // // // console.log(person3)






// // // // // // // // // // // class Person {
// // // // // // // // // // //     constructor(name , age){
// // // // // // // // // // //         this.name = name ,
// // // // // // // // // // //         this.age = age;
// // // // // // // // // // //     }
// // // // // // // // // // //     greet(){
// // // // // // // // // // //         console.log(`Hello My name is ${this.name} ${this.age}`);
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // // const p1 = new Person("Neetu", 21)
// // // // // // // // // // // // p1.greet()
// // // // // // // // // // // // console.log(p1)

// // // // // // // // // // // class Son extends Person{
// // // // // // // // // // //     constructor(name, age, school){
// // // // // // // // // // //         super(name, age);
// // // // // // // // // // //         this.school = school;
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // const s1 =  new Son("Neetu", 21 , "dav")
// // // // // // // // // // // console.log(s1
// // // // // // // // // // // s1

// // // // // // // // // // // By Using ht eprotype we can also create the class we can also inherit something we cna do the thing with the hwelp of this let seehwow cna we cahieve the thing with the hthe help of thisoen
// // // // // // // // // // function Animal(name){
// // // // // // // // // //     this.legs = 4;
// // // // // // // // // //     this.name = name;

// // // // // // // // // // }

// // // // // // // // // // Animal.prototype.makeNoise = speak;
// // // // // // // // // //  function speak(){
// // // // // // // // // //     console.log(` ${this.name } have ${this.legs}legs and make a noise...`)
// // // // // // // // // //  }

// // // // // // // // // // const a1 = new Animal ("Dogs");
// // // // // // // // // // a1.makeNoise();

// // // // // // // // // // console.log(a1)

// // // // // // // // // // Polyfills like the creating our own map funciotn in short wehn we creating the operations with  the help of map function it have some constraints like we can t override this one okay..
// // // // // // // // // let num = [1,2,3,4]
// // // // // // // // // let d = num.map((el) => el*2)
// // // // // // // // // console.log(d)
// // // // // // // // // Array.prototype.MyMap = function(callback){
// // // // // // // // //     let result = [];
// // // // // // // // //     for (let i=0; i < this.length; i++ ){
// // // // // // // // //         let res = callback(this[i]);
// // // // // // // // //         result.push(res);

// // // // // // // // //     }
// // // // // // // // //     return result 
// // // // // // // // // }
// // // // // // // // // let de = num.MyMap((el) => el*2)
// // // // // // // // // console.log(de)

// // // // // // // // Array flateering
// // // // // // // let arr = [1,2,3,[4,5,6,[7,8]]] 
// // // // // // // function flat(arr){
// // // // // // //     return arr.reduce((acc,curr) => {
// // // // // // //         if(Array.isArray(curr)) {
// // // // // // //           let tempArr = flat(curr)
// // // // // // //           acc= [...acc,...tempArr] 
// // // // // // //         }
// // // // // // //         else{
// // // // // // //             acc.push(curr)
// // // // // // //         }
// // // // // // //         return acc;
// // // // // // //     }, [])
// // // // // // //  }
// // // // // // //  console.log(flat(arr))
// // // // // // let arr = [1,2,3,[4,5,],6,7]
// // // // // // function flat(arr){
// // // // // //     let ans = []
// // // // // //     for (let i = 0 ; i<arr.length;i++){
// // // // // //         if (Array.isArray(arr[i])){
// // // // // //             let tempArr = flat(arr[i])
// // // // // //             ans = [...ans, ...tempArr]
// // // // // //         }
// // // // // //         else{
// // // // // //          ans.push(arr[i])
// // // // // //         }
// // // // // //     }
// // // // // //     return ans;
// // // // // // }
// // // // // // console.log (flat(arr))
// // // // // let arr = [1, 2, 3, [4, 5,], 6, 7]
// // // // // function flat(arr) {
// // // // //     return arr.reduce((acc, curr) => {
// // // // //         if (Array.isArray(curr)) {
// // // // //             let temp = flat (curr);
// // // // //             acc = acc.concat(temp)
 
// // // // //         } else {
// // // // //             acc.push(curr)
// // // // //         }
    
// // // // //     return acc;
// // // // //     }
// // // // //         , [])
// // // // // }
// // // // // console.log(flat(arr))

// // // // // /pure funciton 
// // // // function a(a, b){
// // // //     return a+b;
// // // // }
// // // // console.log(a(3,4))
// // // // Non - pure function
// // // let  total = 0;
// // // function ad(value){
// // //     total+= value
// // //     return value
// // // }
// // // const ae = ad(3);
// // // console.log(ae)

// // let t = 0;
// // function a (v){
// //     t += v
// //     return t
 
// // }
// // const res = a(3)
// // console.log(res)
//  function greet (name){
//     console.log(`${name`})
//  }