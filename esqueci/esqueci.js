let submit = document.getElementById('show-or-hide')
let aviso = document.querySelector('.container')

submit.addEventListener('click', function(){
    aviso.style.display = 'block'
})

let fechar = document.getElementById('fechar')

fechar.addEventListener('click', function(){
    aviso.style.display = 'none'
})