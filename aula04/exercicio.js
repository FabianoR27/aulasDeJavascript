var botaoValidarFisico = document.getElementById('botaoValidarFisico');
var botaoValidarCnpj = document.getElementById('botaoValidarJuridico');
var botaoSelect = document.getElementById('btnSelect');

var inputNome = document.getElementById('nome');
var inputIdade = document.getElementById('idade');
var inputCpf = document.getElementById('cpf');
let inputRg = document.getElementById('rg');
let inputCnpj = document.getElementById('cnpj');
let inputIe = document.getElementById('ie');
let inputRazaoSocial = document.getElementById('razaoSocial')
let digitosCpf = 11;
let digitosCnpj = 15;
let cpfOuCnpj = '';
let rgOuIe = '';


var mensagemAlerta = document.getElementById('mensagemAlerta');
var mensagemAlerta2 = document.getElementById('mensagemAlertaDois');
var mensagemAlerta3 = document.getElementById('mensagemAlertaTres');

let msgErroNome = 'Preencha o campo nome corretamente (com nome e sobrenome)';
let msgErroCpf = 'Preencha o campo cpf corretamente';
let msgErroRg = 'Preencha o campo RG corretamente';
let msgErroCnpj = 'Preencha o campo cnpj corretamente';
let msgErroIe = 'Preencha o campo Inscriççao Estadual corretamente';
let msgErroRazaoSocial = 'Preencha o campo razão social corretamente';

let msgNomeOuRazaoSocial = '';
let msgCpfOuCnpj = '';
let msgRgOuIe = '';

var inputOne = '';
var inputTwo = '';
var inputThree = '';
var digitos = 0;
var inputNomeFulano = '';


botaoSelect.addEventListener('click', function () {
    let opcao = document.getElementById('opcoes');
    let formPf = document.getElementById('formularioPf');
    let formPj = document.getElementById('formularioPj');
    msgNomeOuRazaoSocial = msgErroNome;
    inputNomeFulano = inputNome;
    inputNomeFulano.style.backgroundColor = "green";

    if (inputNomeFulano.value == "" || inputNomeFulano.value.length < 3 || !inputNomeFulano.value.includes(' ')) {
        inputNomeFulano.style.border = "solid 1px tomato";
        inputNomeFulano.style.backgroundColor = "tomato";
        mensagemAlerta.textContent = msgNomeOuRazaoSocial
        mensagemAlerta.classList.remove('sucesso');
        return;
    } 
     // o validarNome() não está está sendo chamado,ainda não sei porquê.
    //era pra passar para a proxima validação somente se o input associano ao validarNome() recebesse algum valor diferente de vazio 

    if (opcao.value === '') {
        mensagemAlerta.textContent = "Selecione \"Pessoa Física\" ou \"Pessoa Jurídica\" irmão. "
        return;
    }

    if (opcao.value === 'pf') {
        formPf.classList.remove('esconder');
        formPf.classList.add('exibir');
        formPj.classList.add('esconder');
        formPj.classList.remove('exibir');
        inputOne = inputIdade; 
        inputTwo = inputCpf;
        inputThree = inputRg;
        digitos = digitosCpf;
        msgCpfOuCnpj = msgErroCpf;
        msgRgOuIe = msgErroRg;
        mensagemAlerta.textContent = "";
        mensagemAlerta2.textContent = "";
        mensagemAlerta3.textContent = "";

    } else if (opcao.value === 'pj') {
        formPj.classList.remove('esconder');
        formPj.classList.add('exibir');
        formPf.classList.add('esconder');
        formPf.classList.remove('exibir');
        inputNomeFulano = inputRazaoSocial;
        inputTwo = inputCnpj;
        inputThree = inputIe;
        digitos = digitosCnpj;
        msgNomeOuRazaoSocial = msgErroRazaoSocial;
        msgCpfOuCnpj = msgErroCnpj;
        msgRgOuIe = msgErroIe;
        inputNomeFulano = inputRazaoSocial;
        mensagemAlerta.textContent = "";
        mensagemAlerta2.textContent = "";
        mensagemAlerta3.textContent = "";
    }
    mensagemAlerta.classList.remove('sucesso');
})

botaoValidarFisico.addEventListener('click', function () {
    // Validação do campo idade
    validarIdade();

    // Validação do campo cpf
    cpfOuCnpj = inputCpf.value
    removerCaracterEspeciaisCpfCnpj();
    validarCpfCnpj();

    // Validação do campo RG
    rgOuIe = inputRg.value
    removerCaracterEspeciaisRgIe();
    validarRgIe();

    // Mensagens finais
    mensagensFinais();
})

botaoValidarCnpj.addEventListener('click', function () {
    inputNomeFulano.style.backgroundColor = "green";
    mensagemAlerta.textContent = "";
        mensagemAlerta2.textContent = "";
        mensagemAlerta3.textContent = "";
    //Validação do campo nome
    validarNome();

    //validação do campo cnpj
    cpfOuCnpj = inputCnpj.value
    removerCaracterEspeciaisCpfCnpj();
    validarCpfCnpj();

    //validação do campo ie
    rgOuIe = inputIe.value
    removerCaracterEspeciaisRgIe();
    validarRgIe();

    //mensagens finais
    mensagensFinais();
})

function validarNome() {
    if (inputNomeFulano.value == "" || inputNomeFulano.value.length < 3 || !inputNomeFulano.value.includes(' ')) {
        inputNomeFulano.style.border = "solid 1px tomato";
        inputNomeFulano.style.backgroundColor = "tomato";
        mensagemAlerta.textContent = msgNomeOuRazaoSocial
        mensagemAlerta.classList.remove('sucesso');
        return;
    }
}

function validarIdade() {
    if (inputOne.value == "" || inputOne.value < 18 || inputOne.value > 60) {
        inputOne.style.border = "solid 1px tomato";
        inputOne.style.backgroundColor = "tomato";
        mensagemAlerta.innerHTML = 'Preencha o campo idade corretamente';
    } else {
        inputOne.style.backgroundColor = "green";
        inputOne.style.color = "white";
        inputOne.style.border = "solid 1px black";
        mensagemAlerta.innerHTML = "";
        mensagemAlerta3.innerHTML = "";
        
    }
}


// tomei a liberdade de encaixotar os codigos que repetiriam em funções
function removerCaracterEspeciaisCpfCnpj(){
    cpfOuCnpj = cpfOuCnpj.replaceAll('.', ''); // replaceAll substitui todas as ocorrências de um caractere por outro
    cpfOuCnpj = cpfOuCnpj.replaceAll('-', '');
    cpfOuCnpj = cpfOuCnpj.replaceAll('/', '');
}

function removerCaracterEspeciaisRgIe(){
    rgOuIe = rgOuIe.replaceAll('.', ''); // replaceAll substitui todas as ocorrências de um caractere por outro
    rgOuIe = rgOuIe.replaceAll('-', '');
}

function validarCpfCnpj(){
    if (cpfOuCnpj == "" || cpfOuCnpj.length != digitos) {
        inputTwo.style.border = "solid 1px tomato";
        inputTwo.style.backgroundColor = "tomato";
        // Adiciona uma mensagem de erro ao array
        mensagemAlerta2.innerHTML = msgCpfOuCnpj;
    } else {
        inputTwo.style.backgroundColor = "green";
        inputTwo.style.color = "white";
        inputTwo.style.border = "solid 1px black";
        mensagemAlerta2.innerHTML = "";
    }
}

function validarRgIe(){
    if (rgOuIe == "" || rgOuIe.length != 9) {
        inputThree.style.border = "solid 1px tomato";
        inputThree.style.backgroundColor = "tomato";
        // Adiciona uma mensagem de erro ao array
        mensagemAlerta3.innerHTML = msgRgOuIe;
    } else {
        inputThree.style.backgroundColor = "green";
        inputThree.style.color = "white";
        inputThree.style.border = "solid 1px black";
        mensagemAlerta3.innerHTML = "";
    }
}

function mensagensFinais(){
    let mensagensAlerta = [mensagemAlerta.innerHTML, mensagemAlerta2.innerHTML, mensagemAlerta3.innerHTML];
    // Exibição das mensagens de erro
    if (mensagensAlerta[0] == "" && mensagensAlerta[1] == "" && mensagensAlerta[2] == "") {
        // innerHTML permite inserir tags html
        mensagemAlerta.classList.add('sucesso');
    }
}