
const nestedList = ["Item", "Item1", "Item2", ["Item3", "Item4", ["Item5"]]];
let root = document.body;
let mainUl = document.createElement('ul'); 
root.append(mainUl);

function createTree(arr, pos) {
    //let ul = document.createElement('ul'); 
    let lastLi = document.createElement('li');
    arr.forEach(el => {
        if(typeof el === 'string') {
            //pos.append(ul);

            let li = document.createElement('li');
            li.innerHTML = el;
            pos.append(li);
            lastLi = li;
        }
        else if (Array.isArray(el)) {
            let ul = document.createElement('ul'); 
            lastLi.append(ul);
            return createTree(el, ul);
        } else {
            throw new Error("Error! Type of the element is wrong")
        }
    });
}

createTree(nestedList, mainUl); // передаем массив и куда добавлять список