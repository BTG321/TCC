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

const radios = document.querySelectorAll('input[name="radio"]');

radios.forEach((radio) => {
  radio.addEventListener("change", function() {
    const selected = document.querySelector('input[name="radio"]:checked + img');
    const unselected = document.querySelector('input[name="radio"]:not(:checked) + img');
    
    selected.style.borderColor = "#1E90FF";
    unselected.style.borderColor = "#ccc";
  });
});


function validarFormulario() {
    event.preventDefault()
     var campo1 = document.getElementById("campo1").value;
      var campo2 = document.getElementById("campo2").value;
      var campo2 = document.getElementById("campo3").value;
      if (campo1 == "" || campo2 == "" || campo3 == "") {
        console.log("Funfo")
           alert("Por favor, preencha todos os campos.");
     } else
     window.location.href="../home/home-add.html";
   }
