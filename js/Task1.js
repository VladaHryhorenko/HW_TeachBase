document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('You can`t use context menu')
})

document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert('You can`t copy info from this site!');
})
document.addEventListener('paste', function(event) {
    event.preventDefault();
    alert('You can`t paste info to this site!');
})