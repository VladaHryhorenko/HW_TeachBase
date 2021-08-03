function Calc () {
    //console.log(this);
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
        }
        
    ];
    this.operation = function(str) {
        let result;
        this.a = +str.split(' ')[0];
        if(isNaN(this.a)) {
            return console.log('You entered not a number');
        }
        this.b = +str.split(' ')[2];
        if(isNaN(this.b)) {
            return console.log('You entered not a number');
        }
        this.oper = str.split(' ')[1];
        console.log(this.oper);
        let term = this.operations.find( ({operation}) => operation === this.oper );
        console.log(term);
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

console.log(calc.operation('2 + 3'));
console.log(calc.operation('2 - 3'));

console.log(calc.operation('2 / 3'));
calc.addOperation('/', (a, b) => a/b);
console.log(calc.operation('5 / 2'));

console.log(calc.operation('4 * 5'));
calc.addOperation('*', (a, b) => a*b);
console.log(calc.operation('4 * 5'));

console.log(calc.operations);

console.log(calc.operation('2 ** 5'));
calc.addOperation('**', (a, b) => a**b);
console.log(calc.operation('2 ** 5'));

calc.history();
calc.clearHistory();
calc.history();