// let paragrafo1 = document.getElementById('p1') //captura o elemento pelo id
// // console.log(paragrafo1.textContent)

// let paragrafos = document.getElementsByTagName("p") //captura os elementos pela classe
// //console.log(paragrafos[0].textContent) //imprime no console o texto do array na posição 0

// let tagP = document.querySelector('p') // seleciona qualquer tag, id e classe. para  id usa '#' e para class usa '.'
// let elementoP1 = document.querySelector("#p1")
// let classTeste = document.querySelector(".class-teste") 

// console.log(tagP)
// console.log(elementoP1)
// console.log(classTeste)


let numero1 = document.querySelectorAll(".numero1") // pega todas as tags com a classe 'numero1' e coloca em uma array
let numero2 = document.querySelectorAll(".numero2") // pega todas as tags com a classe 'numero2' e coloca em uma array

let botaoSoma = document.getElementById("botaoSoma")
botaoSoma.addEventListener('click', function() { // o ouvinte de evento ativará a função do código ao 'clicar' no botão
    let resultado = document.getElementById('resultadoSoma')

    resultado.textContent = "O resultado da soma é = " + (parseInt(numero1[0].value) + parseInt(numero2[0].value)) //parseInt serve para mudar o valor digitado para numero inteiro
});

let botaoDiminui = document.getElementById("botaoDiminui")
botaoDiminui.addEventListener('click', function() {
    let resultado = document.getElementById('resultadoSubtracao')

    resultado.textContent = "O resultado da subtração é = " + (parseInt(numero1[1].value) - parseInt(numero2[1].value))
});

let botaoMultiplica = document.getElementById("botaoMultiplica")
botaoMultiplica.addEventListener('click', function() {
    let resultado = document.getElementById('resultadoMultiplicacao')

    resultado.textContent = "O resultado da multiplicação é = " + (parseInt(numero1[2].value) * parseInt(numero2[2].value)) //parseInt serve para mudar o valor digitado para numero inteiro
});

let botaoDivide = document.getElementById("botaoDivide")
botaoDivide.addEventListener('click', function() {
    let resultado = document.getElementById('resultadoDivisao')

    if (parseFloat(numero2[3].value) === 0) {
        resultado.textContent = "Erro: Divisão por Zero"
    } else {
        resultado.textContent = "O resultado da divisão é = " + (parseFloat(numero1[3].value) / parseFloat(numero2[3].value)) //parseInt serve para mudar o valor digitado para numero inteiro
    }
})
