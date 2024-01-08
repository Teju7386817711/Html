
//Using a do...while loop to find the minimum number in the array
let min = numbers[0];
index = 1;
do {
  if (numbers[index] < min) {
    min = numbers[index];
  }
  index++;
} while (index < numbers.length);
console.log("Minimum Number:", min);