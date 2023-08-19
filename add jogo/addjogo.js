// Configurações da Navbar

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

// Configurações para mostrar a imagem que o input file pegar

const inputFile = document.getElementById('inputFile');
const imagePreview = document.querySelector('#img1');

inputFile.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      imagePreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

