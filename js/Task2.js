let Rect = function(a, b) {
    this.a = a;
    this.b = b;
    this.getPerimeter = function() {
        return console.log(2 * this.a + 2 * this.b);
    }
    this.getArea = function() {
        return console.log(this.a * this.b);
    }
}
let Square = function(a) {
    this.a = a;
    this.b = a;
}

Square.prototype = new Rect();

let rect = new Rect(3, 5);

rect.getArea();
rect.getPerimeter();

let sq = new Square(5);
console.log(sq);
sq.getArea();
sq.getPerimeter();

