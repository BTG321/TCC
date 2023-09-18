let entrar = document.getElementById('bnt-submit')
let campo1 = document.getElementById("campo1")
let campo2 = document.getElementById("campo2")

entrar.addEventListener('click', function(){
  event.preventDefault()
  if (campo1.value == '' || campo2.value == '') {
    window.alert("Por favor, preencha todos os campos.");
  } else {
    window.location.href="../home/home-bibliotea.html";
  }
})





