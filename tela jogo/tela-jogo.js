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

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}