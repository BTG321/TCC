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

function clicar(){
    let botao = document.getElementById('btn1')
    let container = document.querySelector('.aviso')

    if(container.style.display == 'block'){
        container.style.display = 'none'
    } else {
        container.style.display = 'block'
    }
}

function redirecionar(){
    window.location.href = "../settings/settings.html"
}

function cancelar(){
    let container = document.querySelector('.aviso')

    container.style.display = 'none'
}