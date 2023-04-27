
function validarFormulario() {
    event.preventDefault()
     var campo1 = document.getElementById("campo1").value;
      var campo2 = document.getElementById("campo2").value;
      var campo3 = document.getElementById("campo3").value;
      var campo4 = document.getElementById("campo4").value;
      if (campo1 == "" || campo2 == "" || campo3 == "" || campo4 == "") {
        console.log("Funfo")
           alert("Por favor, preencha todos os campos.");
     } else
     window.location.href="../home/home-bibliotea.html";
   }
   
   
   
   
   