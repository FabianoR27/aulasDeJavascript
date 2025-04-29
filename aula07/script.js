// 1- FOR
// 2- FOREACH
// 3- MAP
// 4- FILTER
// 5- FIND
// 6- REDUCE
// console.log('hello, word. i wish the world ends as soon as possible');

const pessoas = [
    {id: 1, nome: 'João', idade: 25, sexo: 'M', salario: 2000},
    {id: 2, nome: 'Maria', idade: 30, sexo: 'F', salario: 2000},
    {id: 3, nome: 'Pedro', idade: 22, sexo: 'M', salario: 2000},
    {id: 4, nome: 'Ana', idade: 28, sexo: 'F', salario: 2000},
    {id: 5, nome: 'Lucas', idade: 35, sexo: 'M', salario: 2000},
    {id: 6, nome: 'Laura', idade: 27, sexo: 'F', salario: 2000}
]

// usar o 'for' apenas para exibir os dados de uma array de oobjetos
for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    console.log(`ID: ${pessoa.id}, Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}`); //template string
}

// Exibir dados com ForEach
pessoas.forEach((mane) => console.log(mane.idade + mane.nome)) // mané = Variável criada apenas dentro do escopo do forEach
// aqui foi usado arrow function (=>), mas poderia ser usado uma função normal também 

// MAP para criar uma nova array
const pessoasAcimaDe30 = pessoas.map((p) => {
    if (p.idade >= 30) {
        return p
    }
})

console.log(pessoasAcimaDe30) // Exibe os dados de pessoas acima de 30 anos
const pessoasAbaixoDe30 = pessoas.map((p) => {
    if (p.idade < 30) {
        return p
    }
})
console.log(pessoasAbaixoDe30) // Exibe os dados de pessoas acima de 30 anos

const salarioReajustado = pessoas.map((p) => p.salario + 1000)
console.log(salarioReajustado) // Exibe os dados de pessoas acima de 30 anos

// FILTER para filtrar os dados de uma array 
const pessoasIdadeMaiorQue30 = pessoas.filter((sabado) => sabado.idade >= 30)
console.log(pessoasIdadeMaiorQue30) // Exibe os dados de pessoas acima de 30 anos
// usando arrow function, não precisa usar o return, mas se usar, tem que usar as chaves também

// FIND retorna o primeiro elemento que satisfaz a condição
const pessoaIdadeMaiorOuIgual30 = pessoas.find((maracuja) => maracuja.idade >= 30)
console.log(pessoaIdadeMaiorOuIgual30)

// REDUCE retorna um único valor, como uma soma ou média
const totalSalarios = pessoas.reduce((valorAcumulado, salarioAtual ) => valorAcumulado + salarioAtual.salario, 0)
console.log('Total: ' + totalSalarios)

