
// Almost like a constructor type of approach 
// where we create a object from the prototype 
let myMap = new Map()

// Map() has many properties. They kind of work like objects but 
// Maps are not objects they are completly different
// Values in Map are stored in key,value pair
myMap.set(1, "Uno")
myMap.set(2, "Des")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")

console.log(myMap);     // Map(4) { 1 => 'Uno', 2 => 'Des', 3 => 'Tres', 4 => 'Cuatro' }

// Now, grabbing all values from these maps=>
// using for of loop=>
// Always going to give you key first and then value=> (key, value)
for (let key of myMap.keys()) {
    console.log(`Key is ${key}`)
}
// Output=>
// Key is 1
// Key is 2
// Key is 3
// Key is 4

for (let value of myMap.keys()) {
    console.log(`Value is ${value}`)
}
// Output=>
// Value is 1
// Value is 2
// Value is 3
// Value is 4

for (let [key, value] of myMap) {
    console.log(`key is ${key} and value is ${value}`)
}
// Output=>
// key is 1 and value is Uno
// key is 2 and value is Des
// key is 3 and value is Tres
// key is 4 and value is Cuatro

// using for each loop=>
// always going to give you value first and then key => (value, key)
myMap.forEach( (v, k) => console.log(`${v} and Key is ${k}`));
// Output=>
// Uno and Key is 1
// Des and Key is 2
// Tres and Key is 3
// Cuatro and Key is 4

myMap.delete(2)
console.log(myMap); // Map(3) { 1 => 'Uno', 3 => 'Tres', 4 => 'Cuatro' }

// Learn more about Map() Properties through digging up the documentation


