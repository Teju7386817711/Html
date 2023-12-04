//convert negative num to positive number
function convert_positive(a) {
	// Check the number is negative
	if (a < 0) {
		
		a = a * -1;// Multiply number with -1 to make it positive
	}
	
	return a;
}

let n = -10;
let m = 5;

n = convert_positive(n);

console.log(n);


m = convert_positive(m);// Call function

console.log(m);