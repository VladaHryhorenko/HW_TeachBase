class TypeScript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}: TypeScript version is ${this.version}]`;
    }
}
// class Car {
//     readonly model: string
//     readonly numbersOfWheels: number = 4
//     constructor(theModel: string) {
//         this.model = theModel // поле readonly можем перезв=аписать только внутри конструктора
//     }
// }
// Более лаконичная запись
class Car {
    constructor(model) {
        this.model = model;
        this.numbersOfWheels = 4;
    }
}
//Модификаторы
class Animal {
    constructor() {
        this.voice = ' '; // поле доступно в классе Animal и также для всех наследников, но работать с ним можно только через функцию
        this.color = 'black'; // public - по умолчанию, когда не указываем модификатор
    }
    go() {
        console.log("Go");
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
//================================================
//Абстрактные классы - ни вот что не компилируются и нужны только на этапе разработки
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return "This is info";
    }
}
