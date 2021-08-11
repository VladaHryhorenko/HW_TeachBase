const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "hello ts!";
const numberArr: number[] = [1, 1, 2, 3, 5, 8, 13] // массив чисел
const numberArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // generic-типы - указфывет в триугольных скобках из чего состоит данный класс или данный обьект

const words: string[] = ['f', 's', 'r'];
const words2: Array<string> = ['f', 's', 'r'];

//Typle - массив из разных типов данных

const contact: [string, number] =  ['Vlad', 12345];

//Если нужно переопределить тип данных - Any

// let variable = 42;
// variable = 'New String' // не позволит переопределить

let variable: any = 42;
variable = 'New String' // можно переопределять


//===================================================================


function sayMyName(name: string): void { // после функции указываем возвращаемый тип данных; void - ничего не возвращает
    console.log(name);
}

sayMyName('Vlad');

//Never - случаи использования: когда функция 
//1) либо возвращает ошибку и никогда не закнчивает свое выполнение
function throwError(message: string): never {
    throw new Error(message);
}

//2) либо когда функция постоянно что-либо делает
function infinite(): never {
    while(true) {

    }
}

//Type

type Login = string;
const login: Login = "admin";

type ID  = string | number;
const id1: ID = '12345';
const id2: ID =  12345;
//const id3: ID = true; // ошибка - может быть либо строкой, либо числом 

type SomeType = string | undefined | null;




