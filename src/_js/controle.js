function verificar() {
    var txtpais = document.querySelector('input#txtpais');
    var paisDiv = document.querySelector('div#pais');
    var pais = txtpais.value.trim().toLowerCase();
    
    if (pais === "") {
        paisDiv.innerHTML = "<p>Por favor, digite um país.</p>";
    } else {
        if (pais === "brasil") {
            paisDiv.innerHTML = "<p>Você é <strong>Brasileiro</strong>.</p>";
        } else {
            paisDiv.innerHTML = "<p>Você é <strong>Estrangeiro</strong>.</p>";
            paisDiv.innerHTML += "<p>Seja <strong>Bem-vindo!</strong></p>";
        }
    }
}

// Código de teste para console
var país = 'frança';
console.log(`Vivendo em ${país}`);
if (país == 'brasil') {
    console.log('Você é Brasileiro!');
} else {
    console.log('Você é estrangeiro!');
}
