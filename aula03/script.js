document.getElementById('texto').innerHTML = "TExtao loko<br> coisa boa" //innerHTML permite inserir tags html

var btnValidar = document.getElementById('btnValidar');
var inputNome = document.getElementById('nome');
var msgNome = document.getElementsByClassName('msg-nome')[0];
var msgGeral = document.getElementsByClassName('msg-geral')[0];

btnValidar.addEventListener('click', function () {
    if (inputNome.value === "") {
        inputNome.style.border = "solid 1px red"
        inputNome.style.backgroundColor = "red"
        msgGeral.textContent = "Preencha o campo nome";
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        msgNome.textContent = "";
    } else {
        inputNome.style.backgroundColor = "green"
        inputNome.style.color = "white"
        inputNome.style.border = "solid 1px black"
        msgGeral.textContent = "";
        msgGeral.classList.remove('exibir');
        msgGeral.classList.add('esconder');

        msgNome.textContent = "Nome válido: " + inputNome.value;
    }
})