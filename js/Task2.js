function cache() {
    let x = 0;
    let pow = 0;
    let res;
    const arrHistory = [];
    console.log(arrHistory);
    return function(a, b) {
        let index = arrHistory.findIndex((el)=>(el.a === a && el.b === b));
        switch(index) {
            case -1:
                x = a;
                pow = b;
                res = x**pow;
                arrHistory.push({
                    a: x,
                    b: pow,
                    res: res
                })
                return {value: res, fromCache: false};
            default:
                return {value: arrHistory[index].res, fromCache: true};
        }
    }
}

const calculate = cache();

console.log(calculate(3, 3));// { value: 27, fromCache: false}
console.log(calculate(2, 10));// { value: 1024, fromCache: false}
// console.log(calculate(2, 10));// { value: 1024, fromCache: true}
// console.log(calculate(3, 3));// { value: 1024, fromCache: false}
// console.log(calculate(2, 10));// { value: 1024, fromCache: false}
// console.log(calculate(2, 10));// { value: 1024, fromCache: true}
// console.log(calculate(3, 3));// { value: 1024, fromCache: false}
// console.log(calculate(3, 3));// { value: 1024, fromCache: true}
console.log(calculate(5,5));
console.log(calculate(3,3));
console.log(calculate(3,4));
console.log(calculate(3,4));

