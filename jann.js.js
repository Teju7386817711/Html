function countVowel(str) { 

    
    const count = str.match(/[aeiou]/gi).length;//finding the count of vowels

    return count;
}


const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);