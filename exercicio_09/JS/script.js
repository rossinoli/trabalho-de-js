    // Seleciona todos os elementos com a classe "item".
    const itens = document.getElementsByClassName("item");

    // Adiciona um evento de duplo clique ao documento.
    document.addEventListener("dblclick", function() {
      alert(`Há ${itens.length} elementos com a classe "item".`);
    });