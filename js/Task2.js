//Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

function compareArr(arr1, arr2) {
    if (!Array.isArray(arr1)|| !Array.isArray(arr2)) {
        return console.log("It`s not an array");
    } else {
        if (arr1.length === arr2.length) {
            for (let i = 0; i < arr1.length; i++) {
                console.log('kl;')
                if(arr1[i] !== arr2[i]) {
                    return console.log("Arrays aren`t eaquel");
                }
            }
            return console.log("Arrays are eaquel");
        } else {
            return console.log("Arrays aren`t eaquel");
        }
    }
}

let array1 = ["hello", 4, 1, false, {name: "John"}];
let array2 = ["hello", 4, 1, false, {name: "John"}];
compareArr(array1, array2);