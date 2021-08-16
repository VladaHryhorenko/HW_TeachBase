const display = document.querySelector('.display-text');
const buttons = document.querySelectorAll('.button');
const wrapper = document.querySelector('.calc-wrapper');
const buttonBlock = document.querySelector('.calc-block');
const inputOper = document.createElement('div');
const form = document.createElement('form');
const formDescr = document.createElement('span');
const inputText = document.createElement('input');
const funcDescr = document.createElement('span');
const inputFunc = document.createElement('input');
const inputSubmit = document.createElement('input');
let button = document.createElement('button');
button.classList.add('button');

let currentOperand = null;
let prevOperand = null;
let currentOperation = null;

function Calc () {
    this.arrHistory = [];
    this.operations = [
        {
            operation: '+',
            operFunction: function(a, b) {
                return a + b;
            }
        },
        {
            operation: '-',
            operFunction: function(a, b) {
                return a - b;
            }
        },
        {
            operation: '*',
            operFunction: function(a, b) {
                return a * b;
            }
        },
        {
            operation: '/',
            operFunction: function(a, b) {
                return a / b;
            }
        },
        {
            operation: '%',
            operFunction: function(a, b) {
                return a / 100;
            }
        }
        
    ];
    this.operation = function(str) {
        let result;
        this.a = str.split(' ')[0];
        if (this.a === 'null') {
            this.a = 0;
        }
        this.a = +this.a;
        //console.log(this.a);
        if(isNaN(this.a)) {
            return console.log('NaN');
        }
        //console.log(this.b);
        this.b = str.split(' ')[2];
        if (this.b === 'null') {
            this.b = 0;
        }
        this.b = +this.b;
        //console.log(this.b);
        if(isNaN(this.b)) {
            return console.log('NaN');
        }
        this.oper = str.split(' ')[1];
        //console.log(this.oper);
        let term = this.operations.find( ({operation}) => operation === this.oper );
        if(term) {
            result = term.operFunction(this.a, this.b);
            let obj = {
                    operation: term.operation,
                    operands: [this.a, this.b]
                }
                this.arrHistory.push(obj);
        } 
        else {
            return console.log('No such operation');
        }
        return result;
    }
    this.history = function() {
        console.log(this.arrHistory);
    }
    this.clearHistory = function() {
        this.arrHistory = [];
    }
    this.addOperation = function(o, func) {
        this.operations.push({
            operation: o,
            operFunction: func
        })
    }
}
let calc = new Calc();

const handleButtonInteraction = (event) => {
    let buttonValue = event.key || event.target.textContent;
    if(event.keyCode == 8) {
        buttonValue = 'cl';
    } else if(event.keyCode == 13 || event.keyCode == 32) {
        event.preventDefault();
        buttonValue = '=';
    }
    switch(buttonValue) {
        case '+': {
            prevOperand = currentOperand;
            currentOperand = null;
            currentOperation = buttonValue;
            display.innerHTML = '';
            break;
        }
        case '-': {
            prevOperand = currentOperand;
            currentOperand = null;
            currentOperation = buttonValue;
            display.innerHTML = '';
            break;
        }
        case '*': {
            prevOperand = currentOperand;
            currentOperand = null;
            currentOperation = buttonValue;
            display.innerHTML = '';
            break;
        }
        case '/': {
            prevOperand = currentOperand;
            currentOperand = null;
            currentOperation = buttonValue;
            display.innerHTML = '';
            break;
        }
        case '%' : {
            prevOperand = currentOperand;
            currentOperand = null;
            currentOperation = buttonValue;
            display.innerHTML = '';
            break;
        }
        case 'AC': {
            currentOperand = null;
            prevOperand = null;
            currentOperation = null;
            display.innerHTML = '';
            break;
        }
        case 'cl': {
            if(currentOperand !== null) {
                currentOperand = currentOperand.substring(0, currentOperand.length - 1);
            }
            display.innerHTML = currentOperand;
            break;
        }
        case 'Add': { // add only button - without function
            display.innerHTML = '';
            inputOper.innerHTML = '';
            formDescr.innerHTML = 'Write a symbol of the operation:';
            //funcDescr.innerHTML = 'Write a function of the operation ((a,b) => a+b):'
            inputText.setAttribute("type", 'text');
            //inputFunc.setAttribute("type", 'text');
            inputText.setAttribute('id', 'operation');
            inputSubmit.setAttribute("type", 'submit');
            inputSubmit.value= 'Add operation';
            wrapper.append(inputOper);
            inputOper.append(form);
            form.append(formDescr);
            form.append(inputText);
            //form.append(funcDescr);
            //form.append(inputFunc);
            form.append(inputSubmit);
            let text = '';
            //let func = '';
            inputText.addEventListener('input', function(e) { //'change'
                text = e.target.value;
            })
            // inputFunc.addEventListener('input', function(e) {
            //     console.log(e.target.value);
            //     func = JSON.parse(e.target.value);
            //     console.log(func);
            // })
            console.log(button.innerHTML);
            inputSubmit.addEventListener('click', function(e) {
                console.log(e);
                e.preventDefault();
                button.innerHTML = text;
                //console.log(button);
                buttonBlock.append(button);
                // let obj = {
                //     operation: text,
                // }
                // calc.operations.push(obj);
                inputOper.innerHTML = '';
            })
            break;
        }
        case '=': {
            display.innerHTML = ' ';
            if(prevOperand === null) {
                break;
            } else {
                display.innerHTML = ' ';
                let res = calc.operation(`${prevOperand} ${currentOperation} ${currentOperand}`);
                display.innerHTML = res;
                currentOperand = null;
                prevOperand = null;
                currentOperation = null;
                break;
            }
        }
        default: {
            if(isNaN(+buttonValue)) {
                return display.innerHTML = '';
            }
            currentOperand = currentOperand === null 
            ? buttonValue
            : currentOperand + buttonValue;
            display.textContent = currentOperand;
            break;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonInteraction);
})

document.addEventListener('keydown', handleButtonInteraction);







