    // Seleciona a lista pelo seu ID.
    const minhaLista = document.getElementById("minhaLista");

    // Percorre cada item da lista.
    for (let i = 0; i < minhaLista.children.length; i++) {
      const itemLista = minhaLista.children[i];

      // Adiciona um ouvinte de evento "mouseover" a cada item da lista.
      itemLista.addEventListener("mouseover", function() {
        // Muda a cor do texto para vermelho.
        this.style.color = "red"; 
      });

      // Adiciona um ouvinte de evento "mouseout" para reverter a cor quando o mouse sair do item.
      itemLista.addEventListener("mouseout", function() {
        // Reverte a cor do texto (para a cor padrão).
        this.style.color = ""; 
      });
    }