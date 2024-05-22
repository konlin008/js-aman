// rest operator
function calprice(...num1) {
  return num1;
}
// console.log(calprice(100, 200, 300, 400, 500, 600));

let myArray = [100, 200, 300, 400, 500];
function returnSecondValue(getArray) {
  return getArray;
}
// console.log(returnSecondValue(myArray));

const user={
    name:"Aman",
    age:22,
}
function getname(getObject){
   return `username is ${getObject.name} age is ${getObject.age}`
}
console.log(getname(user));
