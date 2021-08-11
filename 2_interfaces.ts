 // ни во что не компилируются - нужны только на этапе разработки



 interface Rect {
     readonly id: string // readonly - только для чтения - характерен только для typescript
     color?: string // ? - необязательны параметр
     size: {
        width: number,
        height: number
     }
 }

 const rect1: Rect = {
     id: '1234',
     size: {
         width: 20,
         height: 30
     },
     color: '#ccc'
 }

 const rect2: Rect = {
     id: '12345',
     size : {
        width: 20,
        height: 30
     }
 }
 rect2.color = 'black'; // так как по итогу всё таки работем с js - даже если работаем с константой, но если это массив или обьект, то мы можем изменять его внутреннее состояние, но в то же время мы не можем его переасайнивать те переопределять

 const rect3 = {} as Rect; // строго приводим пустой обьект к типу Rect
 const rect4 = <Rect>{}; // альтернативаня запись

 //======================================

 //Наследование интерфейсов

 interface RectWithArea extends Rect {
     getArea: () => number
 }

 const rect5: RectWithArea = {
     id: '123',
     size: {
         width: 30,
         height: 20
     },
     getArea(): number {
         return this.size.width * this.size.height;
     }

 }

 //========================

 interface IClock {
     time: Date,
     setTime(date: Date): void
 }

 class Clock implements IClock{
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
 }

interface Styles {
    [key: string]: string
}

 const css = {
     border: '1px solid black',
     marginTop: '2px',
     borderRadius: '5px'
 }



