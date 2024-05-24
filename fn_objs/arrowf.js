const user={
    name:"Aman",
    age:22,
    welcome: function(){
        console.log(`welcome ${this.name}`);
        console.log(this);
    }
}
user.welcome()
user.name="Naman"
user.welcome()

