function add(a: number, b:number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

//функцию можно перегружать - и тогда при разных параметрах можно получать разные значения;

interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b:number): MyPosition

function position(a?: number, b?: number) {
    if(!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position());
console.log('1 param: ', position(12));
console.log('2 params: ', position(12, 11));