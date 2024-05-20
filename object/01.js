const user={
    name:"Aman",
    "full name":"Aman Mondal",
    age:22,
    location: "kolkata",
    eamil: "aman@gmail.com",
    loggedInStatus: false,
    lastLoggedIn: ["monday","wednesday"]
}
console.log(user.eamil);
console.log(user["full name"]);

const mysym= Symbol("key1")

const pc={
    ram:"16GB",
    processor: "AMD ry5",
    gpu: 3060,
    [mysym]:"mykey1",
}

console.log("GPU Installed:",pc["gpu"]);
console.log(typeof pc[mysym]);