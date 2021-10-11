
const KEY = 'AaW92RjZq0nZMALH8E22d78F4HKJkino'

const input = document.getElementById('input');
const list = document.createElement("ul");
document.body.appendChild(list);

let cache = {}
function getGif(event) {
   console.log('4')
   let flag = true;
   if (flag) {
      list.innerHTML = '';
      if (event.target.value in cache) {
         console.log('from cache')
         console.log(cache)
         cache[`${event.target.value}`].forEach(element => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', element.url);
            a.innerHTML = element.url;
            li.appendChild(a);
            list.appendChild(li);
         });
      }
      else {
         fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${event.target.value}&limit=10`)
            .then(response => response.json())
            .then(data => {
               data.data.forEach(element => {
                  const li = document.createElement('li');
                  const a = document.createElement('a');
                  a.setAttribute('href', element.url);
                  a.innerHTML = element.url;
                  li.appendChild(a);
                  list.appendChild(li);
               });
               return cache = {
                  ...cache,
                  [event.target.value]: data.data
               }
            })
            .catch((e) => console.log(`Error: ${e}`))
      }
   } 
   setInterval(()=> {
      flag = false;
      console.log('5')
   }, 500)

}

input.addEventListener("input", getGif);