// Модифицировать прототип Array, добавив в него метод shuffle, чтобы получить возможность выполнять случайную сортировку для любого массива
Object.getPrototypeOf(new Array).shuffle = function() { // Object.getPrototypeOf([])
     this.sort(function() {return Math.random() - 0.5 });
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array1.shuffle();
console.log(array1);
let array2 = [1, 4, 'fruit', true, 90, 'scvb'];
array2.shuffle();
console.log(array2);
