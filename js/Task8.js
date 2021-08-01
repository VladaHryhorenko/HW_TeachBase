//Реализовать функцию для фильтрации массива чисел по убыванию
function sortDesc(arr) {
    let term;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-1; j++) {
            if (arr[j] < arr[j+1]) {
                term = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = term;
            }
            else 
        }
        console.log(arr);
    }
    return arr;
}
   

const numbers = [-20, -10, 0, 10, 20, 30]
console.log(numbers);
console.log(sortDesc(numbers)); // [30, 20, 10, 0, -10, -20]