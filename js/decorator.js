document.body.style.padding = '50px';
document.body.style.margin = '0px';
document.body.style.backgroundColor = 'rgb(211, 211, 211)';

class BgColor {
    constructor(area) {
        this.area = area;
    }
    setBgColor(color) {
        this.area.getBgColor = color;
        //return console.log(this.area.getBgColor);
    }
    getDescr() {
        return console.log(`Background is ${this.area.getBgColor}`);
    }
}

class BorderColor {
    constructor(area) {
        this.area = area;
    }
    setBorderColor(color) {
        return this.area.setBorderColor(color);
    }
    getDescr() {
        return this.area.getBorderColor();
    }
}

class Canvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.canvas.style.border = '5px solid #000';
        this.canvas.style.width = '100px';
        this.canvas.style.height = '100px';
        this.canvas.style.backgroundColor = '#fff';
    }
    
    getBgColor() {
        return this.canvas.style.backgroundColor;
    }

    getBorderColor() {
        return this.canvas.style.borderColor;
    }
}

let drawArea = new Canvas('canvasID');

drawArea = new BgColor(drawArea);
drawArea.setBgColor('red');
drawArea.getDescr();




