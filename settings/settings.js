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

const input = document.getElementById("nomedev");
const output = document.querySelector(".novousuario");

input.addEventListener("input", () => {
  if(input.value == '') {
    output.innerHTML = "null"
  } else {
    output.innerHTML = input.value;
  }
});

const inputFile = document.getElementById('inputFile');
const imagePreview = document.querySelector('.imagemdobanner');

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

const inputFile2 = document.getElementById('inputFile2');
const imagePreview2 = document.querySelector('.imagemdaempresa');

inputFile2.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      imagePreview2.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});



