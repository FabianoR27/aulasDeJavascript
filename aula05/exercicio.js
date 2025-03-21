// graus p/farenheit
//botao
document.getElementById('btnConverter').addEventListener('click', function () {
    converterTemperatura()
})





document.getElementById('btnMaior').addEventListener('click', function () {
    maiorNumero()
})






document.getElementById('btnCalcular').addEventListener('click', function () {
    let valor = 
})











function converterTemperatura() {
    let celcius = document.getElementById('inputGrau').value
    let farenheit = celcius  * 1.8 + 32;
    let retorno = document.getElementById('retorno')
    retorno.textContent = farenheit + '°F'
}



function maiorNumero() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = document.getElementById('n3').value
    let retorno2 = document.getElementById('retorno2')

    if (n1 > n2 && n1 > n3) {
    retorno2.textContent = n1
    return;
} else if (n2 > n1 && n2 > n3) {
    retorno2.textContent = n2
    return;
} else {
    retorno2.textContent = n3
    return;
    }
}