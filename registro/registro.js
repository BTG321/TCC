let submit = document.querySelector('.a');
let campo1 = document.getElementById('campo1');
let campo2 = document.getElementById('campo2');
let campo3 = document.getElementById('campo3');
let campo4 = document.getElementById('campo4');

submit.addEventListener('click', function(){
    event.preventDefault()
    if(campo1.value == '' || campo2.value == '' || campo3.value == '' || campo4.value == '') {
        window.alert('Preencha todos os campos!');
    } else {
        window.location.href="../emailencaminhado/emailencaminhado.html";
    }
})


   
   
   
   