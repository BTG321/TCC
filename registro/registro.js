let submit = document.querySelector('.a')
let campo1 = document.getElementById('campo1').value
let campo2 = document.getElementById('campo2').value
let campo3 = document.getElementById('campo3').value
let campo4 = document.getElementById('campo4').value

submit.addEventListener('click', function(){
    event.preventDefault()
    if(campo1 == '' || campo2 == '' || campo3 == '' || campo4 == '') {
        window.alert('Preencha todos os campos!')
    } else {
        window.location.href="../emailencaminhado/emailencaminhado.html";
    }
})
   
   
   
   
   
