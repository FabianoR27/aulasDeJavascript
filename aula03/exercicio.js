var botaoValidar = document.getElementById('botaoValidar');
var inputNome = document.getElementById('nome');
var inputIdade = document.getElementById('idade');
var inputCpf = document.getElementById('cpf');
var mensagemAlerta = document.getElementById('mensagemAlerta');

botaoValidar.addEventListener('click', function () {
    // Array para armazenar as mensagens de erro
    let mensagens = [];
    let nome = inputNome.value.trim(); // trim() remove espaços em branco


    // Validação do campo nome
    if (inputNome.value == "" || nome.length < 3 || !nome.includes(' ')) {
        inputNome.style.border = "solid 1px red";
        inputNome.style.backgroundColor = "red";
        // Adiciona uma mensagem de erro ao array
        mensagens.push("Preencha o campo nome");
    } else {
        inputNome.style.backgroundColor = "green";
        inputNome.style.color = "white";
        inputNome.style.border = "solid 1px black";
    }

    // Validação do campo idade
    if (inputIdade.value == "" || inputIdade.value < 18 || inputIdade.value > 60) {
        inputIdade.style.border = "solid 1px red";
        inputIdade.style.backgroundColor = "red";
        // Adiciona uma mensagem de erro ao array
        mensagens.push("Preencha o campo idade corretamente"); //push adiciona um elemento ao array
    } else {
        inputIdade.style.backgroundColor = "green";
        inputIdade.style.color = "white";
        inputIdade.style.border = "solid 1px black";
    }

    let cpf = inputCpf.value;
    cpf = cpf.replaceAll('.', ''); // replaceAll substitui todas as ocorrências de um caractere por outro
    cpf = cpf.replaceAll('-', '');

    // Validação do campo cpf
    if (cpf == "" || cpf.length != 11) {
        inputCpf.style.border = "solid 1px red";
        inputCpf.style.backgroundColor = "red";
        // Adiciona uma mensagem de erro ao array
        mensagens.push("Preencha o campo cpf corretamente");
    } else {
        inputCpf.style.backgroundColor = "green";
        inputCpf.style.color = "white";
        inputCpf.style.border = "solid 1px black";
    }

    // Exibição das mensagens de erro
    if (mensagens.length > 0) {
        // innerHTML permite inserir tags html
        mensagemAlerta.innerHTML = mensagens.join("<br>"); //join transforma o array em string e separa os elementos por um separador, nesse caso, uma quebra de linha.
        mensagemAlerta.classList.remove('sucesso');

    } else {
        mensagemAlerta.classList.add('sucesso'); //classList.add adiciona uma classe ao elemento
        mensagemAlerta.textContent = ''
    }
});