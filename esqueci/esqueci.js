var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container')

btn.addEventListener('click', function() {
    if(container.style.visibility === 'visible') {
        container.style.visibility = 'hidden';
        console.log("Olá Mundo");
    } else {
        container.style.visibility = 'visible';
    }
});



//const btn = document.querySelector('#show-or-hide');
//const container = document.querySelector('.container')

//btn.addEventListener('click', () => {
  //  container.style.display = 'block'/
//})