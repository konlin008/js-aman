let a=300
var b=400
if(true){
    let a=30
    var b=40
    console.log("INNER let: ",a);
    console.log("INNER var: ",b);

}
console.log("outer let: ",a);
console.log("outer var: ",b);