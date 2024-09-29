function alterarCor() {
  const elementosDestaque = document.getElementsByClassName("destaque");

  for (let i = 0; i < elementosDestaque.length; i++) {
      const elemento = elementosDestaque[i];
      elemento.classList.toggle("destaque-vermelho");
  }
}