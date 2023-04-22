
let githubUsers = {
    "00": "john@github.com",
    "01": "bella@github.com",
    "02": "robin@github.com"
}

// Challenge: Create a let variable called 'githubUsersEmails' and use one of Object methods to set it equal to an array with the values
let githubUsersEmails = Object.values(githubUsers)

// Challenge: Create a let variable called 'githubUsersIDs' and use one of Object methods to set it equal to an array with the keys
let githubUsersIDs = Object.keys(githubUsers)

// Challenge: Create a let variable called 'githubUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let githubUsersEntries = Object.entries(githubUsers)

console.log(githubUsersEmails)
console.log("----------------------------------------------------------------")
console.log(githubUsersIDs)
console.log("----------------------------------------------------------------")
console.log(githubUsersEntries)