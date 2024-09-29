const cor = document.getElementById("div");
let corAtual = "blue"; 


cor.addEventListener("click", function() {
  // Alternar entre as cores
  if (corAtual === "blue") {
    cor.style.backgroundColor = "green";
    corAtual = "green";
  } else {
    cor.style.backgroundColor = "blue";
    corAtual = "blue";
  }
});