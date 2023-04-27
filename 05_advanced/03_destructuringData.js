// Destructuring of the data
// It not ony happens in object but also in 

// Destructure the data in javascript=> Data on LHS = Data on RHS


// Destruturing data on array
// const user = ["suraj", 5, "admin"]
// // let role = user[2]
// // let name = user[0]

// // console.log(role);

// let [name, courseCount, role] = user    // destructuring data
// console.log(role)

// Destruturing data on object
const MyUser = {
    name : "Suraj",
    role : "Admin",
    courseCount : 5
}

const {name, role, courseCount} = MyUser

console.log(courseCount);

// Note LHS = RHS (names should match)