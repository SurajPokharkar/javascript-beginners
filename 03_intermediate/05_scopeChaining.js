/*
In JavaScript, scope chaining refers to the way in which a function can access variables defined in its outer or parent functions.

When a function is called, JavaScript looks for variables and functions within the function's own scope. If it can't find the variable or function there, it will look in the next outer scope, and so on until it reaches the global scope. This chain of nested functions and their scopes is known as the scope chain.

For example, consider the following code:
*/

function outer() {
    var x = 10;
  
    function inner() {
      var y = 20;
      console.log(x + y);
    }
  
    inner();
  }
  
  outer(); // outputs 30

//   In this code, the inner() function has access to the variable x defined in the outer outer() function, due to the scope chain. This is because inner() is defined inside outer(), so it has access to its parent's scope.

// Scope chaining can also occur with more nested functions, and it's important to keep track of which variables are in which scopes to avoid unexpected behavior.

/* In simpler terms=> 

In JavaScript, each function creates its own scope or environment where it can store and access variables. When a function is called, JavaScript first looks for the variables within the function's own scope. If it can't find the variable there, it looks for it in the scope of the function's parent, and so on up the chain until it reaches the global scope.

This means that a function can access variables defined in its outer or parent functions, but not vice versa. The chain of nested functions and their scopes is called the scope chain.

For example, if we have a function called outer that defines a variable x, and inside outer we have another function called inner that needs to use x, inner can access x because it's defined in the outer scope. But if we define y inside inner, outer won't be able to access y.

*/