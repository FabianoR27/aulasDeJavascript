var inputNome = document.getElementById("inputNome");
var mensagem = document.getElementById("mensagem"); // Elemento para exibir mensagens
var inputGenero = document.getElementById("inputGenero");

let arrayGames = [];

// Selecionar os botões
var btnGravar = document.getElementById("btnGravar");
var btnLimpar = document.getElementById("btnLimpar");
var btnResetar = document.getElementById("btnResetar");

// Função para renderizar a tabela de jogos
function tabelaGames() {
    let html = '';
    arrayGames.forEach(function (game) {
        html += '<tr>';
        html += `<td>${game.id}</td>`;
        html += `<td>${game.nome}</td>`;
        html += `<td>${game.genero}</td>`;
        html += `<td>${game.status}</td>`;
        html += `<td><button onclick="excluir(${game.id})">Excluir</button></td>`;
        html += `<td><button onclick="editar(${game.id})">Editar</button></td>`;
        html += '</tr>';
    });
    document.getElementById('linhas').innerHTML = html;
}

// Carregar dados do localStorage ao iniciar
if (localStorage.getItem('games') != null) {
    arrayGames = JSON.parse(localStorage.getItem('games'));
    tabelaGames(); // Atualiza a tabela ao carregar a página
}

// Botão "Gravar"
btnGravar.addEventListener("click", () => {
    let id = arrayGames.length > 0 ? arrayGames[arrayGames.length - 1].id + 1 : 1;
    let nome = inputNome.value.trim().toUpperCase();;
    let genero = inputGenero.value.toUpperCase().trim();

    if (nome === '' || genero === '') {
        mensagem.textContent = "Por favor, preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    } else {
        mensagem.textContent = "Jogo adicionado com sucesso!";
        mensagem.style.color = "green";
    }

    let game = { id, nome, genero, status: "ativo" };
    arrayGames.push(game);

    localStorage.setItem('games', JSON.stringify(arrayGames));
    tabelaGames();

    inputNome.value = '';
    inputGenero.value = '';
});

// Botão "Limpar"
btnLimpar.addEventListener("click", () => {
    arrayGames = [];
    localStorage.setItem('games', JSON.stringify(arrayGames));
    tabelaGames();
    mensagem.textContent = "Todos os jogos foram removidos!";
    mensagem.style.color = "red";
});

// Botão "Resetar"
btnResetar.addEventListener("click", () => {
    localStorage.clear();
});

// Função para excluir um jogo
function excluir(id) {
    arrayGames = arrayGames.filter(game => game.id !== id);
    mensagem.textContent = "Jogo excluído com sucesso!";
    mensagem.style.color = "dark-orange";
    localStorage.setItem('games', JSON.stringify(arrayGames));
    tabelaGames();
}

// Função para editar um jogo
function editar(id) {
    let game = arrayGames.find(game => game.id === id);
    if (game) {
        inputId.value = game.id;
        inputNome.value = game.nome;
        inputGenero.value = game.genero;
        arrayGames = arrayGames.filter(game => game.id !== id);
        mensagem.textContent = "Dados prontos para alteração!";
        mensagem.style.color = "blue";
        localStorage.setItem('games', JSON.stringify(arrayGames));
        tabelaGames();
    }
}