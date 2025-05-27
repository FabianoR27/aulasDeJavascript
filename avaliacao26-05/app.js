console.log("Avaliação 26/05")

const inputProduto = document.getElementById('inputProduto');
const inputValor = document.getElementById('inputValor');
const inputEstoque = document.getElementById('inputEstoque');
const mensagemAlerta = document.getElementById('mensagem')
const headTabela = document.getElementById('headTabela')

carregarDados()


// botao de Gravar
document.getElementById('btnGravar').addEventListener('click', function () {
    let produto = inputProduto.value
    let valor = inputValor.value
    let estoque = inputEstoque.value


    if (!produto || !valor || !estoque) {
        mensagemAlerta.innerHTML = `
        <div class="alert alert-dismissible fade show alert-danger" role="alert">
            Preencha todos os campos, filho!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        return;
    }

    let arrayProdutos = JSON.parse(localStorage.getItem("produtos")) || []

    // verifica se é uma edição (inputId preenchido) ou um novo cadastro
    if (inputId.value) {
        // editar produto existente
        let idEdit = parseInt(inputId.value)
        let produtoExistente = arrayProdutos.find(p => p.id == idEdit)

        if (produtoExistente) {
            produtoExistente.produto = produto
            produtoExistente.valor = valor
            produtoExistente.estoque = estoque
        }
    } else {

        let produtos = {
            id: incrementaCodigo(),
            produto: produto,
            valor: valor,
            estoque: estoque,
        };
        arrayProdutos.push(produtos);
    }

    localStorage.setItem('produtos', JSON.stringify(arrayProdutos))

    // mensagem de sucesso
    mensagemAlerta.innerHTML = `
    <div class="alert alert-dismissible fade show alert-success" role="alert">
        Produto adicionado com sucesso!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    carregarDados();
    limparCampos();
})

// Botão de Limpar tudo (até no localStorage)
document.getElementById('btnLimpar').addEventListener('click', function () {
    let arrayProdutos = JSON.parse(localStorage.getItem("produtos")) || []

    // Verifica se o array está vazio quando clicar no botão de limpar e adiciona uma mensagem se estiver
    if (arrayProdutos.length == 0) {
        mensagemAlerta.innerHTML = `
        <div class="alert alert-dismissible fade show alert-warning" role="alert">
            Não ha nada para ser limpo.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        return;
    }

    localStorage.clear();
    limparCampos();
    carregarDados();

    // Mensagem de sucesso
    mensagemAlerta.innerHTML = `
    <div class="alert alert-dismissible fade show alert-success" role="alert">
        Todos os produtos foram excluidos com sucesso!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
})


// Função para carregar os dados do localStorage
function carregarDados() {
    let html = '';
    let arrayProdutos = JSON.parse(localStorage.getItem("produtos")) || []
    headTabela.classList.remove('d-none')

    // Verifica se o array está vazio e adiciona uma mensagem se estiver
    if (arrayProdutos.length == 0) {
        headTabela.classList.add('d-none')
        html = `
        <tr>
            <td colspan="5" class="text-center">Nenhum registro encontrado</td>
        </tr>`;
        document.getElementById('linhas').innerHTML = html;
        return;
    }

    arrayProdutos.forEach(function (produto) {
        // adiciona classe de cores com base no valor e estoque
        let corLinha = ''
        let corEstoque = ''

        if (produto.estoque > 0) {
            corLinha = "table-success"
            corEstoque = "bg-success"
    
        } else if (produto.estoque == 0) {
            corLinha = "table-warning"
            corEstoque = "bg-warning"

        } else if (produto.estoque < 0) {
            corLinha = "table-danger"
            corEstoque = "bg-danger"
        }

        // Adiciona uma linha na tabela para cada produto
        html += `
        <tr class="${corLinha}">
            <td>${produto.id}</td>
            <td>${produto.produto}</td>
            <td><span class="badge rounded-pill bg-dark">R$ ${produto.valor}</span></tds=>
            <td><span class="badge rounded-pill ${corEstoque}">${produto.estoque}</span></td>
            <td class="text-center">
            <button onclick="editarproduto(${produto.id})" class="btn btn-sm btn-primary">Editar</button>
                <button onclick="zerarEstoque(${produto.id})" class="btn btn-sm btn-secondary">Zerar Estoque</button>
                <button onclick="excluirProduto(${produto.id})" class="btn btn-sm btn-danger">Excluir Produto</button>
            </td>
        </tr>`;
    });

    // Atualiza o conteúdo da headTabela na página
    document.getElementById('linhas').innerHTML = html;
}

// Função para excluir uma produto
function excluirProduto(id) {
    let arrayProdutos = JSON.parse(localStorage.getItem("produtos")) || []

    arrayProdutos = arrayProdutos.filter(p => p.id != id) // filtra o array removendo o id que foi selecionado

    // Mensagem de sucesso
    mensagemAlerta.innerHTML = `
    <div class="alert alert-dismissible fade show alert-success" role="alert">
        Produto excluído com sucesso!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    localStorage.setItem('produtos', JSON.stringify(arrayProdutos)) // atualiza o localStorage
    carregarDados() //atualiza a headTabela
}

// Função para editar uma produto
function editarproduto(id) {
    let arrayProdutos = JSON.parse(localStorage.getItem("produtos")) || []
    let produto = arrayProdutos.find(p => p.id == id)

    if (produto) {
        inputId.value = produto.id
        inputProduto.value = produto.produto
        inputValor.value = produto.valor
        inputEstoque.value = produto.estoque
    }
}

// função para incrementar o id 
function incrementaCodigo() {
    let id = parseInt(localStorage.getItem('id')) || 0;
    let novoId = id + 1;
    localStorage.setItem('id', novoId);
    return novoId;
}

// Função para limpar os campos do form
function limparCampos() {
    inputId.value = '';
    inputProduto.value = '';
    inputValor.value = '';
    inputEstoque.value = '';
}

// Função para zerar o estoque de um produto
function zerarEstoque(id) {
    let arrayProdutos = JSON.parse(localStorage.getItem("produtos")) || [];
    let produto = arrayProdutos.find(p => p.id == id);

    if (produto) {
        produto.estoque = 0; // Zera o estoque
        localStorage.setItem('produtos', JSON.stringify(arrayProdutos));
        carregarDados();
        mensagemAlerta.innerHTML = `
        <div class="alert alert-dismissible fade show alert-success" role="alert">
            Estoque zerado com sucesso!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
}