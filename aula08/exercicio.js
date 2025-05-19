var arrayCarros = []
var inputPlaca = document.getElementById("inputPlaca")
var inputModelo = document.getElementById("inputModelo")
var btnResetar = document.getElementById("btnResetar")
var inputId = document.getElementById('inputId')
// localStorage.clear();


carregarCarros ();


// botão gravar
document.getElementById('btnGravar').addEventListener("click", function () {

    let errosEncontrados = validarCadastro(inputId.id.value);

    

    var objJSON = JSON.stringify(carros) // transforma objeto em string
    localStorage.setItem('carros', objJSON)
    localStorage.setItem('identity', idCarro)

    var html = ''
    arrayCarros.forEach(function (carro) {
        html += '<tr>'
        html += `<td>${carro.idCArro}</td>` // template string
        html += `<td>${carro.modelo}</td>` // template string
        html += `<td>${carro.placa}</td>` // template string
        html += `<td><button onclick="excluirId(id)">Excluir</button></td>` // template string
        html += '</tr>'
    })

    document.getElementById('linhas').innerHTML = html
    limparCampos()
})


// botão limpar
document.getElementById('btnLimpar').addEventListener("click", function () {
    arrayCarros = []
    document.getElementById('linhas').innerHTML = ''

})

// botão resetar
btnResetar.addEventListener('click', function(){
    localStorage.clear()
    carregarCarros()
})

// função para limpar os inputs
function limparCampos() {
    inputPlaca.value = null
    inputModelo.value = null
}

//funçao para verificar se o numero da placa ja existe
function placaJaExiste(placa) {
    let placas = JSON.parse(localStorage.getItem('carros'));
    if (placas == null) return false

    let placaEncontrada = placas.find((carros) => carros.placa == placa)
    return placaEncontrada ? true : false

}

//carregar campos
function carregarCampos(id) {
    let placas = JSON.parse(localStorage.getItem('carros'));
    let placa = placas.find((carros) => carros.id == id)

    if (placa) {
        inputPlaca.id = placa.id
        inputPlaca.value = placa.id
        inputm.id = placa.id
        inputModelo.id = placa.id
        inputPlaca.id = placa.id
    }


}

//validar cadastro
function validarCAdastro() {
    if (placaJaExiste(inputPlaca.value.toUpperCase())) {
        console.log('placa já existe')
    }

    if (estaInserindo()) {

        let idCarro = incrementeCodigo()
        let modelo = inputModelo.value.toUpperCase()
        let placa = inputPlaca.value.toUpperCase()
        
        let carros = { id: idCarro, modelo: modelo, placa: placa }
        
        arrayCarros.push(carros)
        // console.log(arrayCarros)
    }

}

function carregarCarros() {
    var jsonObj = localStorage.getItem('carros')
    if (jsonObj) {
        carros = JSON.parse(jsonObj)
    } else {
        carros = []
    }

    var html = ''
    arrayCarros.forEach(function (carro) {
        let tagStatus = ''

        if (carro.status == 'ATIVO') {
            tagStatus = `<span class="badge rounded-pill bg-success">${carro.status}<span>`
        }

        html += '<tr>'
        html += `<td>${carro.idCArro}</td>` // template string
        html += `<td>${carro.modelo}</td>` // template string
        html += `<td>${carro.placa}</td>` // template string
        html += `<td>${carro.status}</td>` // template string
        html += `<td><button id="botaoExcluir" onclick="excluirId(${carro.id})">Excluir</button></td>` // template string
        html += '</tr>'
    })

    document.getElementById('linhas').innerHTML = html
}

// função para incrementear o id do carro
function incrementeCodigo() {
    let identity = parseInt(localStorage.getItem('identity'))
    if (identity == null) {
        identity = parseInt(identity)
    }
    return (identity += 1)
}


function excluirId(id) {
    let carros = JSON.parse(localStorage.getItem('carros'))
    let novoArray = carros.filter((carro) => carro.id != id)

    localStorage.setItem('carros', JSON.stringify(novoArray))
    carregarCarros()
}

