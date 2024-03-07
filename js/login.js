const button = document.getElementById('login');

async function validarLogin(){
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if(nome === '' || senha === ''){
        alert('Preencha os Campos Corretamente...')
    } else {

        const users = await fetch('http://localhost:5080/usuario')
        const listUsers = await users.json()

        listUsers.forEach((user) => {
            console.log(nome)
            console.log(senha)
            console.log(user.nome)
            console.log(user.senha)

            

            if(nome === user.nome && senha === user.senha ){
                alert('Usuário Logado com Sucesso !!!')
                window.location.href = './tarefa.html'
            }
        })

    }

}

window.onload = () => {
    button.addEventListener('click', validarLogin)
}