// вспомогательные конструкции, которые помогают нам работать с типами

function strip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error result'
}

function handle(res: MyResponse | MyError) {
    if(res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    }
    return {
        info: res.header + res.message
    }
}

//======================================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //.....
}

setAlertType('success');
setAlertType('warning');
//setAlertType('dafault') // значение невалидно так как не определено в типе