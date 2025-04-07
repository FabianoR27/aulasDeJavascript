console.log("hello world");

const btnSelect = document.getElementById('btnSelect');
const msgInicio = document.getElementById('msgInicio');

let main = document.getElementById('main')
btnSelect.addEventListener('click', function () {
    let opcao = document.getElementById('opcoes');
    if  (opcao.value === '') {
        msgInicio.textContent = 'Escolha um dos campos obrigatórios.'
        msgInicio.style.color = 'tomato';
        opcao.style.border = 'solid 1px tomato';
        return;
    }

    if (opcao.value === 'cc') {
        let formContaCorrente = document.getElementById('formContaCorrente');
        msgInicio.textContent = 'Você escolheu Conta Corrente.'
        msgInicio.style.color = 'green';
        opcao.style.border = 'solid 1px green';
        formContaCorrente.classList.remove('esconder');
        formContaCorrente.classList.add('exibir');
        formContaPoupanca.classList.add('esconder');
        formContaPoupanca.classList.remove('exibir');
        formContaSalario.classList.add('esconder');
        formContaSalario.classList.remove('exibir');
        main.attributes.removeNamedItem('style'); // remove qualquer atributo que eu escolher. Nesse caso, foi o 'style'


    } else if (opcao.value === 'cp') {
        let formContaPoupanca = document.getElementById('formContaPoupanca');
        msgInicio.textContent = 'Você escolheu Conta Poupança.'
        msgInicio.style.color = 'green';
        opcao.style.border = 'solid 1px green';
        formContaPoupanca.classList.remove('esconder');
        formContaPoupanca.classList.add('exibir');
        formContaCorrente.classList.add('esconder');
        formContaCorrente.classList.remove('exibir');
        formContaSalario.classList.add('esconder');
        formContaSalario.classList.remove('exibir');
        main.attributes.removeNamedItem('style');

    } else if (opcao.value === 'cs') {
        let formContaSalario = document.getElementById('formContaSalario');
        msgInicio.textContent = 'Você escolheu Conta Salário.'
        msgInicio.style.color = 'green';
        opcao.style.border = 'solid 1px green';
        formContaSalario.classList.remove('esconder');
        formContaSalario.classList.add('exibir');
        formContaCorrente.classList.add('esconder');
        formContaCorrente.classList.remove('exibir');
        formContaPoupanca.classList.add('esconder');
        formContaPoupanca.classList.remove('exibir');
        main.attributes.removeNamedItem('style');

    }
})

const btnValidarContaCorrente = document.getElementById('btnValidarContaCorrente');
const btnValidarContaPoupanca = document.getElementById('btnValidarContaPoupanca');
const btnValidarContaSalario = document.getElementById('btnValidarContaSalario');
var inputNome = '';
var inputCpf = '';
var inputSalario = '';
var inputSaldoInicial = '';
var limiteCredito = '';
var mensagemAlerta = document.getElementById('mensagemAlerta');
var mensagemAlerta2 = document.getElementById('mensagemAlerta2');
var mensagemAlerta3 = document.getElementById('mensagemAlerta3');
var mensagemAlerta4 = document.getElementById('mensagemAlerta4');
var mensagemAlerta5 = document.getElementById('mensagemAlerta5');

btnValidarContaCorrente.addEventListener('click', function () {
    let nomeContaCorrente = document.getElementById('nomeContaCorrente');
    let cpfContaCorrente = document.getElementById('cpfContaCorrente');
    let saldoInicialContaCorrente = document.getElementById('saldoContaCorrente');
    let limiteCredito = document.getElementById('limiteContaCorrente');
    let mensagemAlerta4 = document.getElementById('mensagemAlerta4');
    inputNome = nomeContaCorrente;
    inputCpf = cpfContaCorrente;
    inputSaldoInicial = saldoInicialContaCorrente;

    validarNome();
    validarCpf()
    validarSaldoInicial();

    // o limite da conta nao pode ser maior que o saldo da conta, entao o sinal para a primeira condicao tinha que ser o >, e nao o <. Me ferrei por causa disso na prova. um vacilo bobo e óbvio que eu nao consigui ver na hora , pois estava nervoso e ansioso para sair rapido.....
    if (limiteCredito.value > saldoInicialContaCorrente.value) {
        limiteCredito.style.border = "solid 1px tomato";
        mensagemAlerta4.textContent = "Escreva o limite de crédito corretamente, Limite maximo = Saldo da conta."
        mensagemAlerta4.style.color = 'tomato';
    } else {
        limiteCredito.style.border = "solid 1px green";
        mensagemAlerta4.textContent = ""
        mensagemAlerta4.style.color = 'green';
    }

    mensagensFinais();
})


btnValidarContaPoupanca.addEventListener('click', function () {
    let nomeContaPoupanca = document.getElementById('nomeContaPoupanca');
    let cpfContaPoupanca = document.getElementById('cpfContaPoupanca');
    let saldoInicialContaPoupanca = document.getElementById('saldoContaPoupanca');
    inputNome = nomeContaPoupanca;
    inputCpf = cpfContaPoupanca;
    inputSaldoInicial = saldoInicialContaPoupanca;
    validarNome();
    validarCpf();
    validarSaldoInicial();
    mensagensFinais();


})


btnValidarContaSalario.addEventListener('click', function () {
    let nomeContaSalario = document.getElementById('nomeContaSalario');
    let nomeEmpresa = document.getElementById('nomeEmpresa');
    let cpfContaSalario = document.getElementById('cpfContaSalario');
    let saldoInicialContaSalario = document.getElementById('saldoContaSalario');
    let mensagemAlerta5 = document.getElementById('mensagemAlerta5');

    inputNome = nomeContaSalario;
    inputCpf = cpfContaSalario;
    inputSaldoInicial = saldoInicialContaSalario;
    validarNome();
    validarCpf();
    validarSaldoInicial();
    
    if (nomeEmpresa.value == "" || nomeEmpresa.value.length < 3 || !nomeEmpresa.value.includes(' ')) {
        nomeEmpresa.style.border = "solid 1px tomato";
        mensagemAlerta5.textContent = "Escreva o nome da Empresa corretamente."
        mensagemAlerta5.style.color = 'tomato';
    } else {
        nomeEmpresa.style.border = "solid 1px green";
        mensagemAlerta5.textContent = ""
        mensagemAlerta5.style.color = 'green';
    }

    mensagensFinais();

})

function validarNome() {
    let mensagemAlerta = document.getElementById('mensagemAlerta');
    if (inputNome.value == "" || inputNome.value.length < 3 || !inputNome.value.includes(' ')) {
        inputNome.style.border = "solid 1px tomato";
        mensagemAlerta.textContent = "Escreva o nome corretamente."
        mensagemAlerta.style.color = 'tomato';
    } else {
        inputNome.style.border = "solid 1px green";
        mensagemAlerta.textContent = ""
        mensagemAlerta.style.color = 'green';
    }
}

function validarCpf() {
    if (inputCpf.value == "" || inputCpf.value.length < 11) {
        inputCpf.style.border = "solid 1px tomato";
        mensagemAlerta2.textContent = "Escreva o CPF corretamente."
        mensagemAlerta2.style.color = 'tomato';
    } else {
        inputCpf.style.border = "solid 1px green";
        mensagemAlerta2.textContent = ""
        mensagemAlerta2.style.color = 'green';
    }
}

function validarSaldoInicial() {
    if (parseFloat(inputSaldoInicial.value) < 0 || inputSaldoInicial.value == "") {
        inputSaldoInicial.style.border = "solid 1px tomato";
        mensagemAlerta3.textContent = "Escreva o saldo inicial corretamente."
        mensagemAlerta3.style.color = 'tomato';
    } else {
        inputSaldoInicial.style.border = "solid 1px green";
        mensagemAlerta3.textContent = ""
        mensagemAlerta3.style.color = 'green';
    }
    
}

function mensagensFinais(){
    let mensagensAlerta = [mensagemAlerta.textContent, mensagemAlerta2.textContent, mensagemAlerta3.textContent, mensagemAlerta4.textContent, mensagemAlerta5.textContent];
    if (mensagensAlerta[0] == "" && mensagensAlerta[1] == "" && mensagensAlerta[2] == "" && mensagensAlerta[3] == "" && mensagensAlerta[4] == "") {
        let main = document.getElementById('main')
        main.style.backgroundColor = "green";
    }
}