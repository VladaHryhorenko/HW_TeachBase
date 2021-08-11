// ЧтоЗаОбьект <ИзЧегоСостоит>: Array <number> 

const arrayOfNumbers: Array <number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array <string> = ['hello', 'vlad']

function reverse <T> (array: T[]): T[] { // generic-тип, который будет подстраиваться под содержимое массива
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);