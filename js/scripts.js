const el = document.getElementById('item1');
const obj =  {
    title: 'Hello world',
    description: 'The first program',
    age: 23,
}

function parseTemplate(el, obj){
    console.log(el.children);
    for(let i = 0; i < el.children.length; i++) {
        if(el.children[i].hasAttribute('data-field')){
            for( let key in obj) {
                console.log(key);
                //console.log(el.children[i].getAttribute('data-field'));
                if(key === el.children[i].getAttribute('data-field')) {
                    console.log(obj[key]);
                    el.children[i].innerHTML = obj[key];
                    break;
                } else {
                    console.log("Error! No such property in the object!")
                }
            }
            //делать доп проверку на наличие свойства в обьекте / совпадения с html
        }
    }
};

console.log(el);
parseTemplate(el, obj);