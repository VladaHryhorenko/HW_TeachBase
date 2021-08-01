
function func1(str) {
    if (typeof str !== 'string') {
        return console.log("It`s not a string");
    } else {
        let worldList = str.split(' ');
        let resList = worldList.map((item) => {
            let obj = {};
            obj.word =  item;
            obj.length = item.length; 
            if (item[0] !== item[0].toUpperCase()) {
                obj.isCapitalized = false;
            } else {
                obj.isCapitalized = true;
            }
            return obj;
        })
        return resList;
    }
}

let str = 'Lorem ipsum dolor Sit amet consectetur adipisicing Elit';
console.log(func1(str));
