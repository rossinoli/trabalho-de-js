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


function obterConceito() {
  const nota = parseInt(prompt("Digite a nota (0-100):"));
  const conceito = converterNota(nota); 

  // Verificando se o elemento existe antes de atribuir
  const resultadoElemento = document.getElementById("resultado");
  if (resultadoElemento) {
    resultadoElemento.className = `nota nota${conceito}`;
    resultadoElemento.textContent = conceito;
  } else {
    console.error("Elemento com ID 'resultado' não encontrado.");
  }
}

obterConceito();