    // Seleciona o elemento div pelo seu ID.
    const meuDiv = document.getElementById("meuDiv");

    // Adiciona um ouvinte de evento para o evento de duplo clique no div.
    meuDiv.addEventListener("dblclick", function() {
      // Esconde o div definindo seu estilo display como "none".
      meuDiv.style.display = "none"; 
    });