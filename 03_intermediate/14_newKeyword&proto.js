// Everytime a user signsup into a website, there are some properties I want to assign to them
// firstname, lastname, email, state, country etc...
// I cannot manually define them, so I need to create a kind of a prototype there-
// that should follow - that every single user when logged in these properties should filled up 
// as well as it should be a unique user in itself...
// everytime a new instance should be created


// this is one of the other way of defining Objects
// this is functional apporach of defining Objects
// and this is the recommended way of doing it
// definig some more properties or functions as well

// this below code is prototype almost like a blueprint 
var User = function(firstName, courseCount){
    this.firstName = firstName
    this.courseCount = courseCount
    this.getcourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`); 
    }
}

// whenever there is a Constructor involved usually there is a "new" keyword involved 
// Now, defining users and this will create unique instances 

// also using __proto__ here 
User.prototype.getfirstName = function(){
    console.log(`Your first name is: ${this.firstName}`);
}

// we are explicitly mentioning __proto__ above, to inject properties of firstName (or anyother if you want to)
// you can give/access more properties or more functions, getters/setters 

var suraj = new User("suraj", 5)
suraj.getcourseCount()
suraj.getfirstName()
// console.log(suraj);


var omkar = new User("omkar", 3)
omkar.getcourseCount()
omkar.getfirstName()
// console.log(omkar);