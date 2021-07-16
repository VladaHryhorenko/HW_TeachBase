//Написать функцию для подсчета количества букв в слове
function countLetters(word) {
    if (typeof word === 'string'){
        return word.length;
    } else {
        console.log("This is not a string");
    }
    
}

let word = 'hello';
let amountOfLetters = countLetters(word);
console.log(amountOfLetters);

let word2 = 123;
console.log(countLetters(word2));

let word3 = null;
console.log(countLetters(word3));

let word4;
console.log(countLetters(word4));

let word5 = false;
console.log(countLetters(word5));