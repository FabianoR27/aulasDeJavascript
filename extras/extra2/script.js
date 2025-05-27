console.log("Lista de animes");

const inputAnimes = document.getElementById('inputAnime')
const inputCriador = document.getElementById('inputCriador')
const inputAno = document.getElementById('inputAno')
const inputEps = document.getElementById('inputEps')
const selectStatus = document.getElementById('selectStatus')
const linhasTabela = document.getElementById('linhas')

carregarDados()

// botão de adicionar
document.getElementById('btnGravar').onclick = function(){

    let nomeAnime = inputAnimes.value;
    let criadorAnime = inputCriador.value;
    let anoAnime = inputAno.value;
    let qtdEpsAnime = inputEps.value;
    let statusAnime = selectStatus.value;
    if (!nomeAnime || !criadorAnime || !anoAnime || !qtdEpsAnime || !statusAnime) {
        document.getElementById('mensagem').innerHTML = 'preencha todos os Campos'
        return;
        
    }

    let arrayAnimes = JSON.parse(localStorage.getItem('anime')) || []
    
    let animes = {
        id: incrementaId(),
        nome: nomeAnime,
        criador: criadorAnime,
        ano: anoAnime,
        episodios: qtdEpsAnime,
        status: statusAnime 
    }
    
    arrayAnimes.push(animes)
    
    localStorage.setItem('anime', JSON.stringify(arrayAnimes))
    document.getElementById('mensagem').innerHTML = 'Funcionou'

    carregarDados();
    limparCampos();
}

function carregarDados() {
    let html = ''
    let arrayAnimes = JSON.parse(localStorage.getItem('anime')) || []

    arrayAnimes.forEach(anime => {
        html += `
        <tr>
            <td>${anime.id}</td>
            <td>${anime.nome}</td>
            <td>${anime.criador}</td>
            <td>${anime.ano}</td>
            <td>${anime.episodios}</td>
            <td>${anime.status}</td>
        </tr>
    `
    }); 
    linhasTabela.innerHTML = html;
}


// botao de limpar localStorage
document.getElementById('btnLimpar').onclick = function() {
    linhasTabela.innerHTML = '';
    localStorage.removeItem('anime');
    limparCampos();
    carregarDados();

}

function limparCampos() {
    inputAnimes.value = '';
    inputCriador.value = '';
    inputAno.value = '';
    inputEps.value = '';
    selectStatus.value = '';
}

// função para incrementar o ID
function incrementaId() {
    let ultimoId = parseInt(localStorage.getItem('id')) || 0;
    let novoId = ultimoId + 1;
    localStorage.setItem('id', novoId);
    return novoId;
}
