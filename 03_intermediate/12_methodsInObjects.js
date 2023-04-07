// Adding few more properties to understand how the object method(function) actually works

let user = {
    firstName : "Suraj",
    lastName : "Pokharkar",
    role : "Admin",
    loginCount : 32,
    googleSignedIn : true,

    // courseList -> "key"
    // which is an empty array by default 
    // let's just say user logs into a website-> as default he gets courseList:[] as empty
    // user has no course access as of now, but later on we will define some methods through which he can buy some courses 
    // buyCourse -> this not gonna be a num or variable, it's gonna be a variable
    
    courseList : [], 
    
    // Defining a method inside a object => its tricky here(a bit different)
    
    buyCourse : function(courseName) {
    
    // use `this` to access the courseList key, as there is also a variable defined below the object =>var courseList = true;
    // there might be confusion there can be many variables with same name, so take a note of it 
    // if you want to refer to a variable => which is inside the same object that you want to refer, use -> `this` 
    // in this context `this` refers to => variable `user`
    // use `.` dot notation to access further properties
    
    this.courseList.push(courseName);    // adding values
    },
    // above is a simple method which gives you course access  

    // method => getCourseCount
    // It doesn't need to access or pass on any parameters but we're gonna access a few things 
    
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }


 }


var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("DevOps Course");
console.log(user.getCourseCount());
console.table(user)