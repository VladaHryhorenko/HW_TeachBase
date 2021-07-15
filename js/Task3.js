//Написать функцию для реверсии слова не используя встроенные методы

function reverseVal(val) {
    let res = '';
    for (let i = val.length-1; i >= 0; i--) {
        res += val[i];
    }
    return res;
}

let value = 'hello';
console.log(value);
console.log(reverseVal(value));

let value2 = "А роза упала на лапу Азора";
console.log(value2);
console.log(reverseVal(value2));