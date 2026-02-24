'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'flex flex col bg-yellow-100 px-8 py-2'
    
    if(produto.value == ""){
        console.log('erro')
    }else{
    lista.appendChild(span)
    }

}

function apagarProduto(){
    const lista = document.getElementById('lista')
}