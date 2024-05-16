function addTwoNumbers(num1 ,num2){
// console.log(num1+num2)
return num1+num2;
}
let result =addTwoNumbers(65,5);
// console.log(result);

function usermsg(username){
    return `${username} just logged in`
}
// console.log(usermsg("Aman"));

function usermsg2(username){
    if(username===undefined){
        console.log("Please Enter Username");
        return;
    }
    return `${username} just logged in`
}

console.log(usermsg2("Aman"));