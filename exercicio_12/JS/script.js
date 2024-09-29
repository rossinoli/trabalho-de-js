    // Seleciona todos os elementos <p> da página.
    const paragrafos = document.getElementsByTagName("p");

    // Verifica se há parágrafos na página.
    if (paragrafos.length > 0) {
      // Seleciona o último parágrafo.
      const ultimoParagrafo = paragrafos[paragrafos.length - 1];

      // Adiciona um ouvinte de evento de clique ao último parágrafo.
      ultimoParagrafo.addEventListener("click", function() {
        // Altera o conteúdo de texto do último parágrafo.
        ultimoParagrafo.textContent = "Texto alterado com sucesso!";
      });
    }