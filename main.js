'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista')
    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')


    const span = document.createElement('span')
    span.textContent = `Código: ${codigo.value} | Produto: ${produto.value} | Quantidade: ${quantidade.value}`
    span.className = 'flex flex col bg-yellow-100 px-8 py-2'

    if (codigo.value == "" || produto.value == "" || quantidade.value == "") {
        console.log('erro')
    } else if (isNaN(codigo.value) || isNaN(quantidade.value)) {
        console.log('erro')
    } else {
        const linha = document.createElement('tr')
        linha.innerHTML = `<td>${codigo.value}</td> <td>${produto.value}</td> <td>${quantidade.value}</td>`
        lista.appendChild(linha)

        codigo.value = ""
        produto.value = ""
        quantidade.value = ""
    }

}

function apagarProduto() {
    const lista = document.getElementById('lista')
    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
}