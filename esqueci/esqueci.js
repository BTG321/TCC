function validarFormulario() {
    event.preventDefault()
     var campo1 = document.getElementById("campo1").value;
      if (campo1 == "") {
        console.log("Funfo")
           alert("Por favor, preencha todos os campos.");
     } else
     window.location.href="http://127.0.0.1:5500/emailencaminhado/emailencaminhado.html";
   }
   
   