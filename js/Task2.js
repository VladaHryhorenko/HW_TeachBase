const nestedList = ["Item", ["Item2", ["Item3"]]];
let root = document.body;


function createTree(arr, pos) {
    let ul = document.createElement('ul'); 
    let li = document.createElement('li');
    pos.append(ul);
    arr.forEach(el => {
        if(typeof el === 'string') {
            li.innerHTML = el;
            ul.append(li);
        }
        else if (Array.isArray(el)) {
            return createTree(el, li);
        } else {
            throw new Error("Error! Type of the element is wrong")
        }
    });
}

createTree(nestedList, root); // передаем массив и куда добавлять список