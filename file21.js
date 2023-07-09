//function inside object
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);

}
const person1={
    firstName:"harsh",
    age:8,
    about:personInfo
}
const person2={
    firstName:"Aashish", 
    age:67,
    about:personInfo
}
const person3={
    firstName:"Anand",
    age:18,
    about:personInfo
}
person1.about();
