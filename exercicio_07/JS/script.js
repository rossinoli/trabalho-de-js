// Seleciona o elemento div e define a cor inicial como azul.
const cor = document.getElementById("div");
let corAtual = "blue"; 

// Adiciona um ouvinte de evento para alternar a cor do elemento quando clicado.
cor.addEventListener("click", function() {
  if (corAtual === "blue") {
    cor.style.backgroundColor = "green";
    corAtual = "green";
  } else {
    cor.style.backgroundColor = "blue";
    corAtual = "blue";
  }
});
