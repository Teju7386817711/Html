// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Variable declarations
let sum = 0;
let product = 1;
let evenNumbers = [];
let oddNumbers = [];

// Loop through the array using a for loop
for (let i = 0; i < numbers.length; i++)
 {
  const num = numbers[i];

 
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

