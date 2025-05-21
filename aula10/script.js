console.log("tá funcionando");

const inputId = document.getElementById('inputId')
const inputNome = document.getElementById('inputNome')
const selectSexo = document.getElementById('selectSexo')
const selectStatus = document.getElementById('selectStatus')
const mensagemAlerta = document.getElementById('mensagem')
const headTabela = document.getElementById('headTabela')

carregarDados()


// botao de Gravar
document.getElementById('btnGravar').addEventListener('click', function () {
    let nome = inputNome.value
    let sexo = selectSexo.value
    let status = selectStatus.value


    if (!nome || !sexo || !status) {
        mensagemAlerta.innerHTML = `
        <div class="alert alert-dismissible fade show alert-danger" role="alert">
            Preencha todos os campos, garotinho! 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        return;
    }

    let arrayPessoas = JSON.parse(localStorage.getItem("pessoas")) || []

    // verifica se é uma edição (inputId preenchido) ou um novo cadastro
    if (inputId.value) {
        // editar pessoa existente
        let idEdit = parseInt(inputId.value)
        let pessoaExistente = arrayPessoas.find(p => p.id == idEdit)

        if (pessoaExistente) {
            pessoaExistente.nome = nome
            pessoaExistente.sexo = sexo
            pessoaExistente.status = status
        }
    } else {

        let pessoas = {
            id: incrementaCodigo(),
            nome: nome,
            sexo: sexo,
            status: status,
        };
        arrayPessoas.push(pessoas);
    }

    localStorage.setItem('pessoas', JSON.stringify(arrayPessoas))

    // mensagem de sucesso
    mensagemAlerta.innerHTML = `
    <div class="alert alert-dismissible fade show alert-success" role="alert">
        Pessoa adicionada com sucesso, garotinho!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    carregarDados();
    limparCampos();
})

// Botão de Limpar tudo (até no localStorage)
document.getElementById('btnLimpar').addEventListener('click', function () {
    let arrayPessoas = JSON.parse(localStorage.getItem("pessoas")) || []

    // Verifica se o array está vazio quando clicar no botão de limpar e adiciona uma mensagem se estiver
    if (arrayPessoas.length == 0) {
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
        Tudo limpo, garotinho!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
})


// Função para carregar os dados do localStorage
function carregarDados() {
    let html = '';
    let arrayPessoas = JSON.parse(localStorage.getItem("pessoas")) || []
    headTabela.classList.remove('d-none')

    // Verifica se o array está vazio e adiciona uma mensagem se estiver
    if (arrayPessoas.length == 0) {
        headTabela.classList.add('d-none')
        html = `
        <tr>
            <td colspan="5" class="text-center">Nenhum registro encontrado</td>
        </tr>`;
        document.getElementById('linhas').innerHTML = html;
        return;
    }

    arrayPessoas.forEach(function (pessoa) {
        // adiciona classe de cores com base no sexo e status
        let corSexo = ''
        let corStatus = ''
        if (pessoa.sexo == "Masculino") {
            corSexo = "text-bg-primary"
        } else if (pessoa.sexo == "Feminino") {
            corSexo = "bg-danger"
        }

        if (pessoa.status == "Solteiro(a)") {
            corStatus = "bg-success"
        } else if (pessoa.status === "Casado(a)") {
            corStatus = "bg-warning"
        }

        // Adiciona uma linha na tabela para cada pessoa
        html += `
        <tr>
            <td>${pessoa.id}</td>
            <td>${pessoa.nome}</td>
            <td><span class="badge rounded-pill ${corSexo}"> ${pessoa.sexo}</span></tds=>
            <td><span class="badge rounded-pill ${corStatus}">${pessoa.status}</span></td>
            <td class="text-center">
                <button onclick="excluirPessoa(${pessoa.id})" class="btn btn-sm btn-danger">Excluir</button>
                <button onclick="editarPessoa(${pessoa.id})" class="btn btn-sm btn-secondary">Editar</button>
            </td>
        </tr>`;
    });

    // Atualiza o conteúdo da headTabela na página
    document.getElementById('linhas').innerHTML = html;
}

// Função para excluir uma pessoa
function excluirPessoa(id) {
    let arrayPessoas = JSON.parse(localStorage.getItem("pessoas")) || []

    arrayPessoas = arrayPessoas.filter(p => p.id != id) // filtra o array removendo o id que foi selecionado

    // Mensagem de sucesso
    mensagemAlerta.innerHTML = `
    <div class="alert alert-dismissible fade show alert-success" role="alert">
        Menos um fazendo peso na lista. Já foi tarde!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    localStorage.setItem('pessoas', JSON.stringify(arrayPessoas)) // atualiza o localStorage
    carregarDados() //atualiza a headTabela
}

// Função para editar uma pessoa
function editarPessoa(id) {
    let arrayPessoas = JSON.parse(localStorage.getItem("pessoas")) || []
    let pessoa = arrayPessoas.find(p => p.id == id)

    if (pessoa) {
        inputId.value = pessoa.id
        inputNome.value = pessoa.nome
        selectSexo.value = pessoa.sexo
        selectStatus.value = pessoa.status
    }


}

// função para incrementar o id 
function incrementaCodigo() {
    let ultimoId = parseInt(localStorage.getItem('ultimoId')) || 0;
    let novoId = ultimoId + 1;
    localStorage.setItem('ultimoId', novoId);
    return novoId;
}

// Função para limpar os campos do form
function limparCampos() {
    inputId.value = '';
    inputNome.value = '';
    selectSexo.value = '';
    selectStatus.value = '';
}