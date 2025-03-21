console.log('ola mundo')

var inputNumero = document.getElementById('numero')
var botaoVerificar = document.getElementById('btnVerificar')
var mensagem = document.querySelector('.resultado')

var inputNumero2 = document.getElementById('numero2')
var botaoVerificar2 = document.getElementById('btnVerificar2')
var mensagem2 = document.querySelector('.resultado2')


botaoVerificar.addEventListener('click', function(){
    var numero = parseInt(inputNumero.value);
    mensagem.innerHTML = verificarParOuImpar(numero)
})
botaoVerificar2.addEventListener('click', function(){
    var numero = parseInt(inputNumero2.value);
    mensagem2.innerHTML = executarOperacao(numero)
})

function verificarParOuImpar (numero) {
    if (numero % 2 == 0) {
    return 'par'
    } else {
    return 'impar'
    }
}

function ehImpar (n) {
    return (n % 2 !== 0)
}

function somaDois(a, b) {
    return a + b
}

function executarOperacao (num) {
    if (ehImpar(num)) {
        return -1;
    }
    return somaDois(num, 2)
}