// verificarListaVazia.js

export function verificarListaVazia(lista, nomeLista) {
    const mensagemVazia = document.getElementById('ifinVazia');
    
    if (lista.childElementCount === 0) {
    mensagemVazia.textContent = `A ${nomeLista} está vazia. Adicione itens para começar!`;
    mensagemVazia.style.display = 'block';
    } else {
    mensagemVazia.style.display = 'none';
    }
   }