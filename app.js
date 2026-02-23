const cadastrar = document.getElementById('bt-cadastrar')
const limpar = document.getElementById('bt-limpar')

function cadastrarNome(){
    let nome = document.getElementById('tx-nome')
    let nomesContainer = document.getElementById('nomes-container')

    let listaNome = document.createElement('p')
    listaNome.textContent = nome.value
    nomesContainer.appendChild(listaNome)

    nome.value = ''
    nome.focus()
}

function limparLista(){
    let nomesContainer = document.getElementById('nomes-container')
    nomesContainer.innerText = ''
}

cadastrar.addEventListener('click', cadastrarNome)
limpar.addEventListener('click', limparLista)