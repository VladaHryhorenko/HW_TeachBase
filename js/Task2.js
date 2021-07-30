function cache() {
    let x = 0;
    let pow = 0;
    let res = x**pow;
    return function(a, b) {
    if(x === a && pow === b) {
        return {value: res, fromCache: true};
    } else {
        x = a;
        pow = b;
        res = x**pow;
        return {value: res, fromCache: false};
    }
    }
}

const calculate = cache();

console.log(calculate(3, 3));// { value: 27, fromCache: false}
console.log(calculate(2, 10));// { value: 1024, fromCache: false}
console.log(calculate(2, 10));// { value: 1024, fromCache: true}
console.log(calculate(3, 3));// { value: 1024, fromCache: false}
console.log(calculate(2, 10));// { value: 1024, fromCache: false}
console.log(calculate(2, 10));// { value: 1024, fromCache: true}
console.log(calculate(3, 3));// { value: 1024, fromCache: false}
console.log(calculate(3, 3));// { value: 1024, fromCache: true}
