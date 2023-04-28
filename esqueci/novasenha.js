function aviso() {
    let campo1 = document.getElementById('code')
    let campo2 = document.getElementById('senha') 

    if (campo1.value == 0 || campo2.value == 0) {
        window.alert('Preencha todos os campos para prosseguir!')
    } else {
        window.location.replace("https://btg321.github.io/TCC/home/home-bibliotea.html");

    }
}