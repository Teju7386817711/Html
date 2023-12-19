function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    for (let i = 0; i< a; i++) {// inserting elements to array
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 2;
const y = 3;

const result = twoDimensionArray(x, y);
console.log(result);