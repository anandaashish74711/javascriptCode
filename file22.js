const obj1={
    key1:"value1",
    key2:"value2"
}
//__proto__
//official ecmascript documentation
//[[prototype]]
//__proto__.[[prototype]]
const obj2 = Object.create(obj1);
//there is one more way to create empty object
obj2.key3="value3";
obj2.key2="unique";
console.log(obj2.key1);
