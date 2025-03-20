// let age = prompt("What is your age?");

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello! You are Not Allowed To access this WebPage");
//   };

// } else {

//   welcome = function() {
//     alert("Greetings! You are allowed to access this WebPage");
//   };

// }

// welcome(); // ok now

//Same with Arrow Function
let age = 18;

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();