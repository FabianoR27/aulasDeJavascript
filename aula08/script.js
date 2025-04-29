const pessoas = [
    {id: 1, nome: 'João', idade: 25, sexo: 'M', salario: 2000},
    {id: 2, nome: 'Maria', idade: 30, sexo: 'F', salario: 2000},
    {id: 3, nome: 'Pedro', idade: 22, sexo: 'M', salario: 2000},
    {id: 4, nome: 'Ana', idade: 28, sexo: 'F', salario: 2000},
    {id: 5, nome: 'Lucas', idade: 35, sexo: 'M', salario: 2000},
    {id: 6, nome: 'Laura', idade: 27, sexo: 'F', salario: 2000}
]

// console.log(pessoas)

// JSON.stringify(); // transforma objeto em string
// JSON.parse(); //transforma string JSON em objeto

var jsonObj = JSON.stringify(pessoas) // transforma objeto em string
localStorage.setItem ('pessoas', jsonObj)

var pessoasObj = JSON.parse(localStorage.getItem('pessoas')) // transforma string JSON em objeto
console.log(pessoasObj)

var html = ''
pessoasObj.forEach(function(pessoa) {
    html += '<tr>'
    html += '<td>' + pessoa.id + '</td>'
    html += '<td>' + pessoa.nome + '</td>' // concatenando string
    html += `<td>${pessoa.idade}</td>` // template string
    html += '<td>' + pessoa.sexo + '</td>'
    html += '<td>' + pessoa.salario + '</td>'
    html += '</tr>'

})

document.getElementById('linhas').innerHTML = html

// var objetos = JSON.parse(jsonObj) // transforma string JSON em objeto
// console.log(objetos)

// localStorage.setItem('Matéria', 'Programação de Sitios para internet') //amazena o valor no localStorage

// var materia = localStorage.getItem('Matéria') // pega o valor armazenado no localStorage
// console.log(materia)

// localStorage.removeItem ('Matéria') // remove o valor armazenado no localStorage

// localStorage.setItem('Fatec', 'Seguna-feira')
// localStorage.setItem('Materia', 'programação de sitios para internet')

//localStorage.clear() // limpa todo o localStorage
