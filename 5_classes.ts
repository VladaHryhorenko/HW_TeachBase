class TypeScript {
    version: string;
    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
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
    readonly numbersOfWheels: number = 4
    constructor(readonly model: string) {}
}

//Модификаторы

class Animal {
    protected voice: string =' '; // поле доступно в классе Animal и также для всех наследников, но работать с ним можно только через функцию
    public color: string = 'black'; // public - по умолчанию, когда не указываем модификатор
    private go() { // доступно только в том классе, в которм определены
        console.log("Go")
    }
}

class Cat extends Animal {
    public setVoice (voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();


//================================================

//Абстрактные классы - ни вот что не компилируются и нужны только на этапе разработки

abstract class Component {
    abstract render(): void;
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return "This is info"
    }
}

