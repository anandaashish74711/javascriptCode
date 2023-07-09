//undefined
let firstName;
console.log(typeof firstName);
firstName="Harshit";
console.log(typeof firstName,firstName);
//NULL
let myVariable=null;
console.log(myVariable);
myVariable="Harshit";
console.log(myVariable,typeof myVariable);
// console.log(typeof null);--->object--->bug in javascript


//BigInt
let myNumber=BigInt(123);
let sameNumber=123n;
console.log(myNumber+sameNumber);
