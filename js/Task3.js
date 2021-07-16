//Написать функцию для реверсии слова не используя встроенные методы

function reverseVal(val) {
    if (typeof val === 'string') {
        let res = '';
    for (let i = val.length-1; i >= 0; i--) {
        res += val[i];
    }
    return res;
    } else {
        console.log("This is not a string");
    }
    
}

let value = 'hello';
console.log(value);
console.log(reverseVal(value));

let value2 = "А роза упала на лапу Азора";
console.log(value2);
console.log(reverseVal(value2));

let value3 = 123;
console.log(value3);
console.log(reverseVal(value3));

let value5 = null;
console.log(value5);
console.log(reverseVal(value5));