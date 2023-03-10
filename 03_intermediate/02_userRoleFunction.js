// Define a function that can answer the role of a user

/* 
User could have following roles:
1]admin- with all access
2]subadmin- with access to create/delete courses
3]testprep- with access to create/delete tests
4]user- consume all the content
5]other- trial user

*/

// Input: getUserRole(name, role)


// Functional Programming way=> treating a function just like a variable

let getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`
        case "testprep":
            return `${name} is testprep with access to create/delete tests` 
        case "user":
            return `${name} is user with access to consume content`   
        default:
            return `${name} is trial user`
        
    }

}

// console.log(getUserRole("Suraj", "admin"));

let getUserAnotherRole = getUserRole("Suraj", "admin")
console.log(getUserAnotherRole);