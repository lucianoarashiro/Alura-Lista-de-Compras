import { criarItemDaLista } from "./criarItemDaLista.js";
//import { atualizarMensagemListaVazia } from "./atualizarMensagemListaVazia.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const inpt_item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = criarItemDaLista(inpt_item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras, "Lista de compras");

}