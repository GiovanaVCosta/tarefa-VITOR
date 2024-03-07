const idUsuarioArmazenado = localStorage.getItem('idUser');
const idUsuario = parseInt(idUsuarioArmazenado);

window.onload = async () => {
    try {
        const objetoUsuario = await fetch(`http://localhost:5080/usuarios/${idUsuario}`);
        const usuario = await objetoUsuario.json();
        const saudacaoUsuario = document.getElementById('user');
        const nome = document.createElement('p');

        nome.textContent = `Olá, ${usuario.nome}`;
        nome.className = 'hello';
        saudacaoUsuario.appendChild(nome);
    } catch (error) {
        console.error('Erro ao carregar usuário:', error);
    }
};

async function novaTarefa() {
    try {
        const descricao = document.getElementById('titulo').value;
        const dataConclusao = document.getElementById('data').value;
        const id = '';

        const novaTarefa = {
            id,
            descricao,
            dataConclusao,
            idUsuario
        };

        const url = 'http://localhost:5080/tarefas';

        const opcoes = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(novaTarefa)
        };

        await fetch(url, opcoes);

        showToast("Tarefa Cadastrada com Sucesso!");
        window.location.href = '../pages/tarefa.html';
    } catch (error) {
        console.error('Erro ao cadastrar tarefa:', error);
    }
}

function showToast(message) {
    Toastify({
        text: message,
        duration: 5000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            width: '200px',
            height: '50px',
            textAlign: 'center',
            borderRadius: '12px',
            fontFamily: "Italiana, sans-serif",
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bolder',
            position: 'fixed',
            top: '20px',
            right: '20px',
            boxShadow: '2px -5px #1f1c1c',
        }
    }).showToast();
}