const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    
    for (let letter of str.toLowerCase()) { // using loop 
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = prompt('Enter a string: ');

const result = countVowel(string);
console.log("number of vowels in a string",result);