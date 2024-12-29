const listaTarefas = document.getElementById("lista-de-compras");
const mensagemVazia = document.getElementById("mensagem-lista-vazia");

export function atualizarMensagemListaVazia(){

    if (listaTarefas.getElementsByTagName("li").lenght === 0) {
        mensagemVazia.style.display = "block";
    }
    else {
        mensagemVazia.style.display = "none";
    }
}

atualizarMensagemListaVazia();