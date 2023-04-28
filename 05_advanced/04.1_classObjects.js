// import User from "./04_classes";     // In this case this is not going to work but this syntax is used in many frameworks

const User = require("./04_classes.js")

const suraj = new User("suraj", "suraj@github.com")        // creating new object

console.log(suraj.getInfo);     // [Function: getInfo]

suraj.enrollCourse("REACT JS")
suraj.enrollCourse("MERN Course")

console.log(suraj.getCourseList());    // [ 'REACT JS', 'MERN Course' ]

// holding getCourseList() into a variable
let courses = suraj.getCourseList()

courses.forEach(c => console.log(c));  // looping through the array and dumping the values as a single line





