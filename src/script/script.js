//using pure Javascript to replace Hammer JS use

// same variable as before
var square = document.querySelector('.square');

// defining the time to complete the action
var press = 500;

//using mouseup and mousedown native click handlers instead of instance and use Hammer.Press
square.addEventListener('mousedown', (ev) => {
    press = window.setTimeout(() => {
        if (ev.button == 0){
            ev.target.classList.toggle('expand');
        }
    },500);
})

square.addEventListener('mouseup', () => {
    clearTimeout(press);
    return false;
})