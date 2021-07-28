function shuffledArr(arr) {
    arr.sort(function(){
        return Math.random() - 0.6;
    });
    return arr;
}

let arr = [1, 4, true, 'hello', 34, null, '', 0];

console.log(shuffledArr(arr));
console.log(shuffledArr(arr));
console.log(shuffledArr(arr));
console.log(shuffledArr(arr));
