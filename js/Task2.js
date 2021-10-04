// const nestedList = ["Item", ["Item2", ["Item3"]]];
// let root = document.body;


// function createTree(arr, pos) {
    
//     const treeConstructor = (arr) => {
//         let ul = document.createElement('ul'); 
//         let li = document.createElement('li');
//         arr.forEach(el => {
//             if(typeof el === 'string') {
//                 li.innerHTML = el;
//                 ul.append(li);
//                 console.log(1)
//                 debugger;
//             }
//             else if (Array.isArray(el)) {
//                 console.log(2);
//                 return treeConstructor(el);
//                 //ul.append(treeConstructor(el));
//             } else {
//                 throw new Error("Error! Type of the element is wrong")
//             }
//         });
//     }
//     pos.append(treeConstructor(arr));

// }

// createTree(nestedList, root); // передаем массив и куда добавлять список


// arr.forEach(el => {
    //     if(typeof el === 'string') {
    //         li.innerHTML = el;
    //         ul.append(li);
    //     }
    //     else if (Array.isArray(el)) {
    //         return createTree(el, li);
    //     } else {
    //         throw new Error("Error! Type of the element is wrong")
    //     }
    // });


const nestedList = ["Item", "Item2", ["Item3", ["Item4"]]];
let root = document.body;
let mainUl = document.createElement('ul'); 
root.append(mainUl);

function createTree(arr, pos) {
    //let ul = document.createElement('ul'); 
    let li = document.createElement('li');
    arr.forEach(el => {
        if(typeof el === 'string') {
            //pos.append(ul);
            
            li.innerHTML = el;
            pos.append(li);
            
        }
        else if (Array.isArray(el)) {
            pos=li;
            console.log(li);
            //debugger;
            let ul = document.createElement('ul'); 
            pos.append(ul);
            return createTree(el, ul);
        } else {
            throw new Error("Error! Type of the element is wrong")
        }
    });
}

createTree(nestedList, mainUl); // передаем массив и куда добавлять список