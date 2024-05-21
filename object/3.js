const user={
    name:"aman",
    email:"aman@gmail.com",
    age:21,
    fullName:{
        userFullName:{
            firstName:"Aman",
            lastName:"Mondal"
        }
    }
}

console.log(user.fullName);
console.log(user.fullName.userFullName);
console.log(user.fullName.userFullName.firstName);