
function func1(str) {
    if (typeof str !== 'string') {
        return console.log("It`s not a string");
    } else {
        let worldList = str.split(' ');
        let resList = worldList.map((item) => {
            return {
                word: item,
                length: 1, 
                isCapitalized: false
            }
        })
        return resList;
    }
}

let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
console.log(func1(str));
