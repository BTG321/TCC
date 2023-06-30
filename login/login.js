
 function validarFormulario() {
 event.preventDefault()
  var campo1 = document.getElementById("campo1").value;
   var campo2 = document.getElementById("campo2").value;
   if (campo1 == "" || campo2 == "") {
        alert("Por favor, preencha todos os campos.");
  } else
  window.location.href="../home/home-bibliotea.html";
}





