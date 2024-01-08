//Using while loop to find the maximum number in the array
let max = numbers[0];
let index = 1;
while (index < numbers.length) {
  if (numbers[index] > max) {
    max = numbers[index];
  }
  index++;
}
console.log("Maximum Number:", max);
