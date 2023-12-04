const n = 5

const arr = [];


if (n == 0) { // Null check
	console.log(null)
}

do {
	// Generating random number
	const randomNumber = Math
		.floor(Math.random() * 100) + 1

	// Pushing into the array only if the array does not contain it
	if (!arr.includes(randomNumber)) {
		arr.push(randomNumber);
	}
} 
while (arr.length < n);

console.log(arr)


