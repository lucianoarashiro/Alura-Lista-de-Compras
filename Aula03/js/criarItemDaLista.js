const listaDeComprados = document.getElementById("lista-de-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

let numeroDeItens = 1;

export function criarItemDaLista(item){
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("container-item-lista");

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("item-lista-titulo");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkboxContainer");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + numeroDeItens++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener('click', function(evento) {

        const checkBoxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        
        if(checkBoxInput.checked ) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaDeComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoAlterar = document.createElement("button");
    botaoAlterar.classList.add("botao-acao");
    const imagemAlterar = document.createElement("img");
    imagemAlterar.src = "img/edit.svg";
    imagemAlterar.alt = "Alterar";
    botaoAlterar.appendChild(imagemAlterar);
    containerBotoes.appendChild(botaoAlterar);

    containerItemDaLista.appendChild(containerNomeDoItem);
    containerItemDaLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemDaLista);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" } )} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("texto-data");
    itemDaLista.append(itemData);
 
    return itemDaLista;
}