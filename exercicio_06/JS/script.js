// Função que converte uma nota numérica (0-100) em conceito (A-F).
function converterNota(nota) {
  let conceito = "";
  switch (true) {
    case nota >= 90:
      conceito = "A";
      return 'A';
    case nota >= 80:
      conceito = "B";
      return 'B';
    case nota >= 70:
      conceito = "C";
      return 'C';
    case nota >= 60:
      conceito = "D";
      return 'D';
    case nota >= 50:
      conceito = "E";
      return 'E';
    default:
      conceito = "F";
      return 'F';
  }
  return conceito;
}

// Função que obtém a nota do usuário, converte em conceito e exibe no elemento "resultado".
function obterConceito() {
  const nota = parseInt(prompt("Digite a nota (0-100):"));
  const conceito = converterNota(nota);

  const resultadoElemento = document.getElementById("resultado");
  if (resultadoElemento) {
    resultadoElemento.className = `nota nota${conceito}`;
    resultadoElemento.textContent = conceito;
  } else {
    console.error("Elemento com ID 'resultado' não encontrado.");
  }
}

obterConceito();
