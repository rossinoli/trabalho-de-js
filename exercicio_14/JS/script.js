// Seleciona o primeiro item da lista com a classe "item-lista".
const primeiroItemLista = document.querySelector("ul li.item-lista");

// Verifica se o elemento foi encontrado.
if (primeiroItemLista) {
  // Altera o texto do primeiro item da lista.
  primeiroItemLista.textContent = "Texto do primeiro item alterado!";
}