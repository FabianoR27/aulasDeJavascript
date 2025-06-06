const inputCep = document.getElementById('inputCep')
let endereco = document.getElementById('logradouro')
let bairro = document.getElementById('bairro')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')
let divCampos = document.getElementById('divCampos')

// botão consulta CEP
document.getElementById('botao').addEventListener('click', consultaEndereco)

// evento acionado ao apertar o Enter
inputCep.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        consultaEndereco();
    }
})

//botão de limpar
document.getElementById('limpar').onclick = function () {
    endereco.value = ''
    bairro.value = ''
    cidade.value = ''
    estado.value = ''
    divCampos.classList.add('esconder')
    document.getElementById("endereco").innerHTML = `Tudo limpo!`

}

//função assincrona para consultar o endereço
async function consultaEndereco() {
    if (inputCep.value.length > 8 || inputCep.value.length < 8) {
        document.getElementById("endereco").innerHTML = "O CEP precisa ter exatamente 8 numeros";
        inputCep.style.border = 'solid 2px gold'
        return;
    }

    let url = `https://viacep.com.br/ws/${inputCep.value}/json/`
    let response = await fetch(url);

    console.log(response)
    let cep = await response.json()
    console.log(cep)

    if (cep.erro) {
        inputCep.style.border = 'solid 2px tomato'
        document.getElementById("endereco").innerHTML = "CEP não encontrado"
        return;
    }
    divCampos.classList.remove('esconder')
    inputCep.style.border = 'solid 2px #75fa9f'
    inputCep.value = ''
    document.getElementById("endereco").innerHTML = `CEP encontrado com sucesso!`
    endereco.value = cep.logradouro
    bairro.value = cep.bairro
    cidade.value = cep.localidade
    estado.value = cep.estado
}