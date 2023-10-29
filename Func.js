arr=[12,54,34,23,65,77,0,9,79,45,65,76,45]

//Function
function findMax(arr) {
  return Math.max(...arr);
}


let num1 = [1, 5, 3, 8, 2];
let maxNumber = findMax(num1);

// Arrow function without curly braces (implicit return)
const multiply = (x, y) => x * y;

// Arrow function with curly braces (explicit return)
const divide = (x, y) => {
  if (y === 0) {
    throw new Error("Division by zero");
  }
  return x / y;
};

//functions that are assigned to a variable
const greet = function () {
  console.log("Greetings!");
};


//Constructor Functions:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 30);

//Callback Functions: Functions passed as arguments to other functions and called when a specific event occurs or task is completed.
function fetchData(callback) {
  // Asynchronous operation
  setTimeout(function () {
    callback("Data received!");
  }, 1000);
}
fetchData(function (data) {
  console.log(data);
});


//Recursive Functions: Functions that call themselves to solve problems that can be broken down into smaller, similar sub-problems.
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);}
