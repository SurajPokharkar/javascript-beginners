
const suraj = {
    firstName : "Suraj",
    lastName : "Pokharkar",
    role : "Admin",
    courseCount : 5,
    getInfo : function () {
        console.log(`
            Firstname is ${this.firstName} 
            Lastname is ${this.lastName} 
            Role is ${this.role} 
            Studying total ${this.courseCount} Courses
        `)
    }
}


const chris = {
    firstName : "Chris",
    lastName : "Pratt",
    role : "Sub Admin",
    courseCount : 5


suraj.getInfo()