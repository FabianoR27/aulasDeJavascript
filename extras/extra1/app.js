// Métodos do localStorage

// setItem() [ok] - cria um item no localStorage
// getItem() [ok] - pega um item do localStorage
// removeItem() [ok] - remove um item do localStorage
// clear() [ok] - limpa o localStorage completamente

// EXTRA:
// JSON.stringify() - transforma um objeto em string
// JSON.parse() - transforma uma string em objeto

// utilize JSON.stringify e JSON.parse para poder armazenar dados complexos no localStorage!


function criaStorage() { // forma convencional de criar uma função
    let dadosPessoais = {
        nome: 'Fabiano Ramos',
        idade: 30,
        cidade: 'São Roque',
        relacionamento: 'Solteiro'
    }

    // window é o objeto global do navegador
    window.localStorage.setItem('pessoa', JSON.stringify(dadosPessoais)) // criando um item no localStorage
    getStorage()
};

//
const getStorage = () => { // esta é uma forma diferente de criar uma função
    const pessoa = window.localStorage.getItem('pessoa') //pegando o item do localStorage

    if (!pessoa) {
        document.getElementById('conteudo').innerHTML = ``
        return;
    }
    let dadosPessoais = JSON.parse(pessoa) // transformando a string em objeto

    //fomra convencional de fazer 
    document.getElementById('conteudo').innerHTML = `
        o meu nome é ${dadosPessoais.nome} <br>
        eu tenho ${dadosPessoais.idade} anos <br>
        moro em ${dadosPessoais.cidade}<br>
        Estou ${dadosPessoais.relacionamento} e me sentindo muito sozinho ultimamanete:( . `

    // Outra forma de fazer o que está acima é desestruturando o objeto (desestruturar é pegar os valores de um objeto e colocar em variáveis). Descomente abaixo para ver como fica

    //  let {nome, idade, cidade, relacionamento} = dadosPessoais // desestruturando o objeto e pegando os valores
    // document.getElementById('conteudo').innerHTML = `
    //     o meu nome é ${nome} <br>
    //     eu tenho ${idade} anos <br>
    //     moro em ${cidade}<br>
    //     Estou ${relacionamento}.`
};

const removeStorage = () => {
    window.localStorage.removeItem('pessoa') // removendo um item do localStorage
    getStorage()
};

const clearStorage = () => {
    window.localStorage.clear() // limpando o localStorage completamente
    getStorage()
}

document.getElementById('criaStorage').onclick = criaStorage;

getStorage();