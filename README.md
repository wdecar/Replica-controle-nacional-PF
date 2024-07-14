# Sistema de Verificação de País

Este é um projeto simples de verificação de país desenvolvido em HTML, CSS e JavaScript. Ele permite que o usuário insira o nome de um país e veja uma mensagem indicando se o país inserido é "Brasil" ou outro país.

## Estrutura do Projeto

projeto-verificacao-pais/
│
├── src/
│ ├── _css/
│ │ └── stylos.css
│ ├── _js/
│ │ └── controle.js
│ └── imagens/
│ ├── 01policia-federal.jpg
│ └── policia.ico
│
├── index.html
└── README.md

## Funcionalidades

- Verificação do país inserido pelo usuário.
- Exibição de mensagens diferentes para "Brasil" e outros países.
- Feedback ao usuário sobre a entrada vazia.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/projeto-verificacao-pais.git

Navegue até o diretório do projeto:
cd projeto-verificacao-pais
Abra o arquivo index.html no seu navegador:

Pode ser aberto diretamente clicando duas vezes no arquivo ou arrastando-o para o navegador.
Use a aplicação:

Digite o nome de um país no campo de entrada e clique no botão "Verificar".
Veja a mensagem exibida abaixo do botão.
Arquivos do Projeto
index.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="src/imagens/policia.ico" type="image/x-icon">
    <link rel="stylesheet" href="src/_css/stylos.css">
    <title>POLÍCIA FEDERAL</title>
    <script src="src/_js/controle.js" defer></script>
</head>
<body>
    <h1>Sistema DE CONTROLE NACIONAL</h1>
   
    País: <input type="text" name="txtpais" id="txtpais">
    <input type="button" value="Verificar" onclick="verificar()">
    
    <div id="pais"></div>
    
    <img src="src/imagens/01policia-federal.jpg" alt="01policia-federal">
</body>
</html>
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
            paisDiv.innerHTML += "<p>Seja <strong>bem-vindo!</strong></p>";
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
/* Adicione seu CSS aqui */
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

#Contato:
E-mail:  gomeede@hotmail.com
Linckdin: https://www.linkedin.com/in/edenilson-gomes-836a9a236/
