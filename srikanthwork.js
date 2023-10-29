// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Variable declarations
let sum = 0;
let product = 1;
let evenNumbers = [];
let oddNumbers = [];

// Loop through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  // Condition to check if the number is even or odd
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }

  // Accumulate the sum and product of numbers
  sum += num;
  product *= num;
}

// Output the results
console.log("Array of Numbers:", numbers);
console.log("Sum of Numbers:", sum);
console.log("Product of Numbers:", product);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// Using forEach loop to iterate and display each number
console.log("Numbers using forEach:");
numbers.forEach(function (num) {
  console.log(num);
});

// Using while loop to find the maximum number in the array
let max = numbers[0];
let index = 1;
while (index < numbers.length) {
  if (numbers[index] > max) {
    max = numbers[index];
  }
  index++;
}
console.log("Maximum Number:", max);

// Using a do...while loop to find the minimum number in the array
let min = numbers[0];
index = 1;
do {
  if (numbers[index] < min) {
    min = numbers[index];
  }
  index++;
} while (index < numbers.length);
console.log("Minimum Number:",min);