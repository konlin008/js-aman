const user={
    name:"Aman",
    "full name":"Aman Mondal",
    age:22,
    location: "kolkata",
    eamil: "aman@gmail.com",
    loggedInStatus: false,
    lastLoggedIn: ["monday","wednesday"]
}
user.gretting= function(){
    console.log( "heloo user! Good Morning");
    return 0;
}
console.log(user.gretting);
console.log(user.gretting());
