const el = document.getElementById('item1');
const obj =  {
    title: 'Hello world',
    description: 'The first program',
}

function parseTemplate(el, obj){
    console.log(el.children);
    for(let i = 0; i < el.children.length; i++) {
        if(el.children[i].hasAttribute('data-field')){
            //console.log(el.children[i].getAttribute('data-field'));
            if(obj.hasOwnProperty(el.children[i].getAttribute('data-field'))) {
                el.children[i].innerHTML = obj[ el.children[i].getAttribute('data-field') ];
            } else {
                throw new Error("Error! No such property in the object!");
            }
        }
    }
};

console.log(el);
parseTemplate(el, obj);