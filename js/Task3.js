function filterByLength(arr, start, end) {
    let newArr = [];
    if (!Array.isArray(arr) || start < 0 || end < 0) {
        return console.log('Error. Parameters are incorrect');
    } else {
        newArr = arr.filter((item) => {
            if(typeof(item) === 'string') {
                return (item.length >= start && item.length <= end);
            }
        })
        return newArr;
    }
}


const fruits = ['orange', 'apple', 'banana', ''];
console.log(filterByLength(fruits, 0, 5)); // [‘apple’, ‘’]