    // Seleciona todos os elementos com a classe "multiplo".
    const elementosMultiplos = document.querySelectorAll(".multiplo");

    // Itera sobre os elementos encontrados.
    for (let i = 0; i < elementosMultiplos.length; i++) {
      // Altera a cor de fundo de cada elemento.
      elementosMultiplos[i].style.backgroundColor = "yellow"; 
    }