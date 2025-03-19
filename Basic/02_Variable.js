const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
let carName;//By default it stores undefined Inside
var carname="Volvo";
var carname;
//On redeclaring carname it will still perstain its previous value it holds that value
let car1="Kia";
//let car1; But we cant redeclare variables with var
//Let Have Block Scope
//Let must be declared before use
// console.log(name); //This will gives error
let name="Harsh";

// accountId = 2 not allowed

//By  default variable will be Let declared
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])//Index value

//Block Scope
//x cant be accessed here
{
    let x=2;
}
// x cant be accessed Here
{
    var y=2;
}
// y can be accesseble from here as variable declare with var have global scope
let x1 = "John Doe";


// let x1 = 0; //Let cant be accidenly redeclared but with var you can do this

//I can do this.....
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

//Const : JavaScript const variables must be assigned a value when they are declared: Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp

const x3=2;
// x3=4;
// console.log(x3); This will Gives Error

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//cars = ["Toyota", "Volvo", "Audi"];    // ERROR 

const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

//car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

//Explaination of Scope
// Global Scope
let globalVariable = "I am global";

function outerFunction() {
  // Functional Scope (also called closure scope)
  let outerVariable = "I am in outerFunction";

  function innerFunction() {
    // Functional Scope (nested)
    let innerVariable = "I am in innerFunction";
    console.log(innerVariable); // can access inner
    console.log(outerVariable); // can access outer
    console.log(globalVariable); // can access global
  }
  
  innerFunction();
  console.log(outerVariable); // can access outer
  console.log(globalVariable); // can access global
//   console.log(innerVariable); //Gives ERROR

  if (true) {
    // Block Scope
    let blockVariable = "I am in the if block";
    console.log(blockVariable); // can access block
  }

  // console.log(blockVariable); // would cause an error outside the block

  function anotherFunction() {
    // Local scope
    
    let localVariable = "I am local to another function";
    console.log(localVariable);

  }
  anotherFunction();
  //console.log(localVariable); //causes error. local to another function.
}

outerFunction();
console.log(globalVariable); // can access global
// console.log(outerVariable); // would cause an error outside outerFunction
// console.log(innerVariable); // would cause an error outside innerFunction

//Hoisting: Hoisting is JavaScript's default behavior of moving declarations to the top. Only var is Hoisted
x4 = 5; // Assign 5 to x
console.log(x4);

var x4; // Declare x