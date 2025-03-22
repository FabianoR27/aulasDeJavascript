// graus p/farenheit
document.getElementById('btnConverter').addEventListener('click', function () {
    document.getElementById('retorno').innerHTML = converterTemperatura() + '°F'
})


//maior numero
document.getElementById('btnMaior').addEventListener('click', function () {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = document.getElementById('n3').value
    document.getElementById('retorno2').innerHTML = maiorNumero(n1, n2, n3)
})


// calcular algo
document.getElementById('btnCalcular').addEventListener('click', function () {
    let valor = document.getElementById('valor').value
    document.getElementById('retorno3').innerHTML = calcularAlgo(valor)
})


//funçao para converter graus para farenheit
function converterTemperatura() {
    let celcius = document.getElementById('inputGrau').value
    return celcius * 1.8 + 32;
}


// função para retornar o maior número
function maiorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    }
    if (n2 > n1 && n2 > n3) {
        return n2;
    }
    if (n3 > n1 && n3 > n2) {
        return n3;
    } if (n1 == n2 && n2 == n3) {
        return 'Os números são iguais'
    }
    
    //outra forma de fazer:
    // return Math.max(n1, n2, n3) //Math.max() retorna o maior número
}

// função para calcular algo
function calcularAlgo(valor) {
    if (valor >= 500) {
        return ((valor * 13.5) / 100).toFixed(2).replace('.',','); //toFixed() limita as casas decimais e replace() troca o ponto por vírgula
    }
    if (valor < 500) {
        return ((valor * 9.98) / 100).toFixed(2).replace('.',','); //toFixed() limita as casas decimais e replace() troca o ponto por vírgula
    } else {
        return -1;
    }
}