sayHello()


function sayHello(){
    console.log("Hello! This is Context");
}

// How come Javascript came to know that the above function is first called and then declared
// Still the above code gets executed. How?

// This all happpens due to "Global Context of Javascript"

// Javascript has a bigger Context in which everything resides
// if you are in the console of a browser=> Context can be window
// Window will give you ERROR! in the node


// this code will execute in node 
let myName = "Context"
if(myName === myName)
{
    console.log("This is TRUE!");
}

// but this code will give you ERROR! as window is "Global Context"
// You can run this in browser's console without any ERROR! as it browser support Global Context
let myContextName = "Global"
if(myContextName === window.myContextName)     
{
    console.log("This is TRUE!");
}
// Global Object "window" => runs in browser not in the Node. It's not neccessary that you always call this as window.

// Note: we call Context different in Different Engines.

// So to summarize=> 
// Context is present in NODE as well as Browser but it is different for both and many other engines.
// There is something known as Context, which is usually a Global Context 
// Available to us in the browser as well as in the world of Node- It can have a different name
// but it is present.