

const suraj = {
    firstName : "Suraj",
    lastName : "Pokharkar",
    role : "Admin",
    courseCount : 5,
    getInfo : function () {
        console.log(
            `
             Firstname is ${this.firstName}
             Lastname is ${this.lastName}
             Role is ${this.role}
             Studying total ${this.courseCount} Courses
            `
        );
    }
}


const chris = {
    firstName : "Chris",
    lastName : "Pratt",
    role : "Sub-Admin",
    courseCount : 4
}


// bind() => binds the object
// bind gives you a reference- you need to actually call the function 

// Eg:
// getInfo - reference to the method 
// getInfo() - calling the method

suraj.getInfo.bind(chris)()        // bind() - gives you a reference back 

suraj.getInfo.call(chris)           // call() - directly calls the method

