let arrayCarros = []
var inputModelo = document.getElementById("inputModelo")
var inputPlaca = document.getElementById("inputPlaca")

document.getElementById('btnGravar').addEventListener("click", function(){
    let modelo = inputModelo.value
    let placa = inputPlaca.value
    let carros = { modelo: modelo, placa: placa}

    arrayCarros.push(carros)
    console.log(arrayCarros)

//     var objJSON = JSON.stringify(carros) // transforma objeto em string
//     localStorage.setItem ('carros', objJSON)

// var jsonCarros = JSON.parse(localStorage.getItem('carros')) // transforma string JSON em objeto


var html = ''
arrayCarros.forEach(function(carros) {
    html += '<tr>'
    html += `<td>${carros.modelo}</td>` // template string
    html += `<td>${carros.placa}</td>` // template string
    html += '</tr>'

})

document.getElementById('linhas').innerHTML = html
})

document.getElementById('btnLimpar').addEventListener("click", function(){
    arrayCarros = []
    document.getElementById('linhas').innerHTML = ''

})

//localStorage.clear()