    // Seleciona o primeiro elemento com a classe "primeiro-item".
    const primeiroItem = document.querySelector(".primeiro-item");

    // Adiciona um evento de clique ao elemento.
    primeiroItem.addEventListener("click", function() {
      // Altera o texto do elemento quando ele for clicado.
      this.textContent = "Este é o primeiro item selecionado";
    });