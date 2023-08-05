var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var showSidebar = false;


function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigation_header.style.marginLeft = '-10vw';
        navigation_header.style.animationName = 'showSidebar'
        content.style.filter = blur(2);
    } else {
        navigation_header.style.marginLeft = '-100vw'
        navigation_header.style.animationName = ''
        content.style.filter = '';
    }
}

function closeSidebar() {
    if(showSidebar) {
        toogleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar){
        toogleSidebar();
    }
});


let afirmacao = document.getElementById('btn1')
let caixa = document.querySelector('.box')
let aviso = document.querySelector('.aviso')

afirmacao.addEventListener('click', function() {
    aviso.style.display = 'block'
    caixa.style.display = 'none'
})

let cancel = document.getElementById('btn4')

cancel.addEventListener('click', function(){
    if(aviso.style.display == 'block') {
        aviso.style.display = 'none'
        caixa.style.display = 'block'
    }
})

let voltar = document.getElementById('btn2')

voltar.addEventListener('click', function(){
    window.location.href = "../settings/settings.html"
})




