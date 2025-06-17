document.addEventListener("DOMContentLoaded", carregarDados);

let url = `http://appwll.com.br/api/funcionarios`;

const inputNome = document.getElementById('inputNome')
const inputPrivilegio = document.getElementById('inputValor')


document.getElementById('btnGravar').addEventListener('click', async function () {
    let nome = inputNome.value
    let privilegio = inputPrivilegio.value
    let formData = new FormData()

    formData.append("nome", nome)
    formData.append("privilegio", privilegio)


    if (inputId.value) {
        await fetch(`http://appwll.com.br/api/funcionarios`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                "id": inputId.value, "nome": nome, 'privilegio': privilegio

            })
    });
} else {


    await fetch(`http://appwll.com.br/api/funcionarios`, {
        method: 'POST',
        body: formData
    })
}
    carregarDados();
})



async function editarFuncionario(id) {
    let response = await fetch(url)
    let funcionarios = await response.json();
    let funcionario = funcionarios.find(p => p.id == id)

    if (funcionario) {
        inputId.value = funcionario.id
        inputNome.value = funcionario.nome
        inputPrivilegio.value = funcionario.privilegio
    }
}



async function carregarDados() {
    let html = '';
    let url = `http://appwll.com.br/api/funcionarios`;

    try {
        let response = await fetch(url);

        let funcionarios = await response.json();

        // Transforma em array se não for
        let pessoas = Array.isArray(funcionarios) ? funcionarios : [funcionarios];

        if (pessoas.length === 0) {
            headTabela.classList.add('d-none');
            html = `<tr><td colspan="5" class="text-center">Nenhum registro encontrado</td></tr>`;
        } else {
            headTabela.classList.remove('d-none');
            pessoas.forEach(pessoa => {
                html += `
                <tr class="">
                    <td>${pessoa.id}</td>
                    <td>${pessoa.nome}</td>
                    <td>${pessoa.privilegio_id}</td>
                    <td><span class="badge rounded-pill bg-info">${pessoa.privilegio}</span></td>
                    <td class="text-center">
                        <button onclick="editarFuncionario(${pessoa.id})" class="btn btn-sm btn-primary">Editar</button>
                        <button onclick="excluirFuncionario(${pessoa.id})" class="btn btn-sm btn-danger">Excluir</button>
                    </td>
                </tr>`;
            });
        }

        document.getElementById('linhas').innerHTML = html;

    } catch (error) {
        console.error("Erro ao carregar API:", error);
        mensagemAlerta.innerHTML = `
        <div class="alert alert-dismissible fade show alert-danger" role="alert">
            Erro ao carregar dados da API. Verifique sua conexão.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
}


async function excluirFuncionario(id) {
    await fetch(`http://appwll.com.br/api/funcionarios/${id}`, {
        method: "DELETE"
    });

    mensagemAlerta.innerHTML = `
    <div class="alert alert-dismissible fade show alert-success" role="alert">
        Funcionário excluído com sucesso!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    carregarDados(); // atualiza a lista na tela
}




