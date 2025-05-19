// Referências aos elementos do formulário HTML
var inputId = document.getElementById('inputId');
var inputPais = document.getElementById('inputPais');
var inputCapital = document.getElementById('inputCapital');
var inputPresidente = document.getElementById('inputPresidente');
var btnLimpar = document.getElementById('btnLimpar');
var mensagem = document.getElementById("mensagem");
var selectSituacao = document.getElementById('select');

// Carrega os países salvos no localStorage ao iniciar
carregarTabelaPaises();

// Evento ao clicar no botão "Gravar"
document.getElementById('btnGravar').addEventListener('click', function () {

    // Obtém os valores digitados nos campos
    let nomePais = inputPais.value;
    let capital = inputCapital.value;
    let presidente = inputPresidente.value;
    let situacao = selectSituacao.value;

    // Verifica se todos os campos estão preenchidos
    if (!nomePais || !capital || !presidente || !situacao) {
        mensagem.textContent = 'Preencha todos os campos';
        mensagem.classList.remove("alert-success");
        mensagem.classList.add("alert-warning");
        return; // Encerra a função se houver campos vazios
    }

    // Recupera os dados do localStorage (ou cria um array vazio se ainda não houver nada)
    let arrayPaises = JSON.parse(localStorage.getItem('paises')) || [];

    // Verifica se é uma edição (inputId preenchido) ou um novo cadastro
    if (inputId.value) {
        // Editar país existente
        let idEdit = parseInt(inputId.value);
        let paisExistente = arrayPaises.find(p => p.id === idEdit);

        if (paisExistente) {
            paisExistente.pais = nomePais;
            paisExistente.capital = capital;
            paisExistente.presidente = presidente;
            paisExistente.situacao = situacao;
        }

    } else {
        // Criar novo país com ID único
        let paises = {
            id: incrementaCodigo(),
            pais: nomePais,
            capital: capital,
            presidente: presidente,
            situacao: situacao
        };
        arrayPaises.push(paises);
    }

    // Salva os dados atualizados no localStorage
    localStorage.setItem('paises', JSON.stringify(arrayPaises));

    // Mensagem de sucesso
    mensagem.textContent = "País adicionado com sucesso";
    mensagem.classList.add("alert-success");
    mensagem.classList.remove("alert-warning");

    // Limpa os campos e atualiza a tabela
    limparCampos();
    carregarTabelaPaises();
});


// ---------------------------------------------------------------
// Função para carregar os países e montar a tabela HTML
function carregarTabelaPaises() {
    let html = '';
    let arrayPaises = JSON.parse(localStorage.getItem('paises')) || [];

    arrayPaises.forEach(function (paises) {
        html += `
        <tr>
            <td>${paises.id}</td>
            <td>${paises.pais}</td>
            <td>${paises.capital}</td>
            <td>${paises.presidente}</td>
            <td>${paises.situacao}</td>
            <td>
                <button onclick="excluirPais(${paises.id})" class="btn btn-sm btn-danger">Excluir</button>
                <button onclick="editarPais(${paises.id})" class="btn btn-sm btn-secondary">Editar</button>
            </td>
        </tr>`;
    });

    // Atualiza o conteúdo da tabela na página
    document.getElementById('linhas').innerHTML = html;
}


// ---------------------------------------------------------------
// Função para excluir um país da lista
function excluirPais(id) {
    let arrayPaises = JSON.parse(localStorage.getItem('paises')) || [];

    // Remove o país com o ID correspondente
    arrayPaises = arrayPaises.filter(p => p.id !== id);

    // Salva a nova lista sem o país excluído
    localStorage.setItem('paises', JSON.stringify(arrayPaises));

    // Atualiza a tabela
    carregarTabelaPaises();
}


// ---------------------------------------------------------------
// Função para editar os dados de um país
function editarPais(id) {
    let arrayPaises = JSON.parse(localStorage.getItem('paises')) || [];

    // Busca o país pelo ID
    let pais = arrayPaises.find(p => p.id === id);

    // Preenche os campos do formulário com os dados encontrados
    if (pais) {
        inputId.value = pais.id;
        inputPais.value = pais.pais;
        inputCapital.value = pais.capital;
        inputPresidente.value = pais.presidente;
        selectSituacao.value = pais.situacao;
    }
}


// ---------------------------------------------------------------
// Função para gerar um novo ID incremental e único
function incrementaCodigo() {
    let ultimoId = parseInt(localStorage.getItem('ultimoId')) || 0;
    let novoId = ultimoId + 1;
    localStorage.setItem('ultimoId', novoId);
    return novoId;
}


// ---------------------------------------------------------------
// Função para limpar todos os campos do formulário
function limparCampos() {
    inputId.value = '';
    inputPais.value = '';
    inputCapital.value = '';
    inputPresidente.value = '';
    selectSituacao.value = '';
}


// ---------------------------------------------------------------
// Evento para o botão "Limpar Tudo"
btnLimpar.addEventListener('click', function () {
    localStorage.clear(); // Limpa todos os dados do navegador
    document.getElementById('linhas').innerHTML = ''; // Limpa a tabela
    mensagem.textContent = "Tudo limpo!";
    mensagem.classList.remove("alert-success");
    mensagem.classList.add("alert-warning");
});
